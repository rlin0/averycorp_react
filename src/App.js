import './App.css'
import Header from './components/Header'
import React from "react"
import Login from './components/Login'
import CityIntroScene from './components/CityIntroScene'
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      progress: null,
      username: localStorage.getItem("username"),
      userId: localStorage.getItem("userId")
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.next = this.next.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/profile/${this.state.userId}/`)
      .then(res => {
        this.setState({ progress: res.data.progress })
      })
      .catch(err => {
        console.log(err)
      })
  }

  login = (username, userId) => {
    this.setState({
      username: username,
      userId: userId
    })
    // store the user in localStorage
    localStorage.setItem('username', this.state.username)
    localStorage.setItem('userId', this.state.userId)
  }

  logout = () => {
    this.setState({
      username: null,
      userId: null
    })
    localStorage.clear()
  }

  next = () => {
    this.setState({
      progress: this.state.progress + 1
    }, () => {
      axios.patch(`/api/profile/${this.state.userId}/`, { progress: this.state.progress })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err.response)
        })
    })
  }



  app = () => {
    switch (this.state.progress) {
      case null:
        return <p>Loading</p>
      case 0:
        return <CityIntroScene next={this.next} />
      default:
        return <p>next act/puzzle</p>
    }
  }

  render() {
    if (this.userId === null) {
      return (
        <Login login={this.login} />
      )
    }
    return (
      <div>
        <Header username={this.state.username} logout={this.logout} />
        {this.app()}
      </div>
    )
  }

}

export default App

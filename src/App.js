import './App.css'
import Header from './components/Header'
import React, { useState } from "react"
import Login from './components/Login'

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("username"))

  const login = (username) => {
    setLoggedInUser(username)
    // store the user in localStorage
    localStorage.setItem('username', username)
  }

  const logout = () => {
    setLoggedInUser(null)
    localStorage.clear()
  }

  if (loggedInUser === null) {
    return (
      <Login login={login}/>
    )
  }

  return (
    <div>
      <Header loggedInUser={loggedInUser} logout={logout} />
    </div>
  )
}

export default App

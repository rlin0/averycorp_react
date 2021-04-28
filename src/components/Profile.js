import React, { Component } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Typography } from "@material-ui/core"
import axios from "axios"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: undefined,
    }
  }

  componentDidMount() {
    this.getBio()
  }

  getBio = () => {
    axios
      .get("/api/madlib/get", {
        params: {
          userId: this.props.userId,
        },
      })
      .then((res) => {
        if (res.data.success) {
          console.log("success prompt")
          const fields = res.data.fields.split(",")
          const text = res.data.text.split("*")
          let bio = ""
          for (let i = 0; i < text.length; i++) {
            bio = bio.concat(text[i])
            if (i !== text.length - 1) bio = bio.concat(fields[i])
          }
          this.setState({
            bio: bio,
          })
        } else {
          console.log("error getting prompt")
        }
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    if (this.state.bio === undefined) {
      return (
        <>
          <CssBaseline />
          <Typography>No bio yet :(</Typography>
        </>
      )
    }
    return (
      <>
        <CssBaseline />
        <Typography variant="h3"> Bio </Typography>
        <Typography>{this.state.bio}</Typography>
      </>
    )
  }
}
export default Profile

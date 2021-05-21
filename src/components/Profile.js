import React, { Component } from "react"
import { Typography } from "@material-ui/core"
import axios from "axios"

const txt =
  "You are a *-year old *. Your home was destroyed by *, but you narrowly escaped. According to our intel, you sometime go by the nickname *. \nYou spend your free time * * in *. \nYou seem to be obsessed with *'s *. \nYou are secretly scared of *, especially * ones. \nYou think it is funny to tell people to “*”. \nYou are good at *, but not much else. \nYou spent * trying to learn how to *, and then gave up. \nYou constantly complain about your *, which you hurt while trying to *."

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
          const text = txt.split("*")
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
          <Typography>No bio yet :(</Typography>
        </>
      )
    }
    return (
      <>
        <Typography variant="h3"> Bio </Typography>
        <Typography>{this.state.bio}</Typography>
      </>
    )
  }
}
export default Profile

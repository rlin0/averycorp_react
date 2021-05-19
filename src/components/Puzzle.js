import React, { Component } from "react"
import { Button, Typography, TextField } from "@material-ui/core"
import axios from "axios"
import { ButtonLink } from "./UI/Links"
import Act from "./Act"
import { S3Url } from "../helpers"

export default class Puzzle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: null,
      link: null,
      name: null,
      solved: false,
      act: null,
    }
  }

  componentDidMount() {
    this.getLink()
    this.getSolved()
  }

  getLink = () => {
    axios
      .get(`/api/puzzle/${this.props.puzzleId}/`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          link: res.data.link,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  getSolved = () => {
    axios
      .get("/api/puzzle/get_solved", {
        params: {
          teamId: this.props.teamId,
          puzzleId: this.props.puzzleId,
        },
      })
      .then((res) => {
        this.setState({
          solved: res.data.solved,
        })
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    axios
      .post("/api/puzzle/submit_answer", {
        teamId: this.props.teamId,
        puzzleId: this.props.puzzleId,
        answer: this.state.answer,
      })
      .then((res) => {
        if (res.data.success) {
          if (res.data.msg === "correct") this.setState({ solved: true })
          else if (res.data.msg === "incorrect")
            alert("incorrect! Try again in 1 minute")
          else if (res.data.msg === "later")
            alert("You are allowed 1 guess per minute! Try again later")
        }
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  render() {
    if (this.state.name === null) {
      return (
        <>
          <p>Loading...</p>
        </>
      )
    }
    var role
    if (this.props.role === undefined) {
      role = ""
    } else role = this.props.role
    return (
      <>
        <Act
          id={2}
          act={this.props.act}
          updateAct={this.props.updateAct}
          passcode="2"
        >
          <ButtonLink buttonText="Back to Map" to="/act2" />
          <Typography variant="h3"> {this.state.name} </Typography>
          <iframe
            src={`${S3Url}/act2/${this.props.link}${role}.pdf`}
            width="70%"
            height="80%"
          />

          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            {this.state.solved ? (
              <Typography>Solved!</Typography>
            ) : (
              <>
                <TextField
                  label="Answer"
                  onChange={({ target }) =>
                    this.setState({ answer: target.value })
                  }
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </>
            )}
          </form>
        </Act>
      </>
    )
  }
}

import React, { Component } from "react"
import {
  Button,
  Typography,
  TextField,
  LinearProgress,
} from "@material-ui/core"
import axios from "axios"
import { ButtonLink } from "./UI/Links"
import Act from "./Act"
import { S3Url } from "../helpers"
import DialogueBox from "./UI/DialogueBox"
import text from "../text/act2Scripts"

const cutscenes = {
  1: ["act2BotwBefore", "act2BotwAfter"],
  2: ["act2CodeBefore", "act2CodeAfter"],
  4: ["act2IDBefore", "act2IDAfter"],
  5: ["act2SpotBefore", "act2SpotAfter"],
  6: ["act2MetaBefore", "act2MetaAfter"],
}

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
      return <LinearProgress color="primary" /> // Loading bar
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
          {this.state.solved ? (
            <DialogueBox data={text[cutscenes[this.props.puzzleId][1]]} />
          ) : null}
          {!this.state.solved ? (
            <DialogueBox data={text[cutscenes[this.props.puzzleId][0]]} />
          ) : null}

          <ButtonLink buttonText="Back to Map" to="/act2" />
          <Typography variant="h3" style={{ textAlign: "center" }}>
            {" "}
            {this.state.name} {this.state.solved ? "- Solved!" : ""}{" "}
          </Typography>
          <iframe
            src={`${S3Url}/act2/${this.props.link}${role}.pdf`}
            width="70%"
            height="80%"
            style={{ display: "block", margin: "auto" }}
          />

          <form
            onSubmit={this.handleSubmit}
            noValidate
            autoComplete="off"
            style={{
              width: "20%",
              display: "block",
              margin: "auto",
              textAlign: "center",
            }}
          >
            {this.state.solved ? null : (
              <div>
                <TextField
                  label="Answer"
                  onChange={({ target }) =>
                    this.setState({ answer: target.value })
                  }
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            )}
          </form>
        </Act>
      </>
    )
  }
}

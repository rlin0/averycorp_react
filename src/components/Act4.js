import React, { Component } from "react"
import { Typography, TextField, Button, Card } from "@material-ui/core"
import { Link, Redirect } from "react-router-dom"
import { ButtonLink } from "./UI/Links"
import DialogueBox from "./UI/DialogueBox"
import text from "../text/act4Scripts"
import { S3Url } from "../helpers"

export default class Act4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      played: 0,
      code: null,
      incorrect: false,
    }
  }

  setPlayed = (num) => () => {
    this.setState({ played: num })
  }

  handleSubmit = () => {
    if (this.state.code.toUpperCase() === "SHUTDOWN") {
      this.setPlayed(2)()
    } else {
      this.setState({ incorrect: true })
    }
  }

  render() {
    return (
      <>
        {this.state.played === 0 && (
          <DialogueBox data={text.act4Intro} onEnd={this.setPlayed(1)} />
        )}
        {this.state.played === 1 && (
          <>
            <DialogueBox
              data={text.act4Intro2}
              onEnd={() => this.setPlayed(2)}
            />
            <Card
              square
              raised
              style={{
                position: "relative",
                display: "block",
                width: "30%",
                margin: "auto",
                height: "20%",
                top: "10%",
                padding: "1%",
                zIndex: "100",
              }}
            >
              <Typography>Input Level-5 Security Password</Typography>
              <TextField
                autoFocus
                error={this.state.incorrect}
                helperText={this.state.incorrect ? "Incorrect entry." : null}
                margin="dense"
                label="code"
                type="text"
                onChange={({ target }) => this.setState({ code: target.value })}
                fullWidth
              />
              <Button
                autoFocus
                onClick={this.handleSubmit}
                color="primary"
                style={{
                  position: "absolute",
                  width: "20%",
                  left: "40%",
                  bottom: "5%",
                }}
              >
                Submit
              </Button>
            </Card>
          </>
        )}
        {this.state.played === 2 && (
          <DialogueBox data={text.act4Finale} onEnd={this.setPlayed(3)} />
        )}
        {this.state.played === 3 && (
          <div
            style={{
              display: "block",
              position: "fixed",
              width: "80%",
              left: "10%",
            }}
          >
            <img
              src={S3Url + "/story_art/final_button.png"}
              alt="shutdown_button"
              style={{ width: "100%" }}
            />
            <div
              style={{
                position: "absolute",
                cursor: "pointer",
                display: "block",
                left: "40%",
                width: "22%",
                height: "22%",
                top: "30%",
              }}
              onClick={this.setPlayed(4)}
            />
          </div>
        )}
        {this.state.played === 4 && (
          <div>
            <Typography variant="h5">
              Thank you for participating in Ditch Day 2021. We hope you enjoyed
              your time in Averycorp.
            </Typography>
            <ButtonLink
              size="large"
              buttonText="Continue to credits"
              to="/credits"
              style={{
                position: "relative",
                width: "20%",
                left: "40%",
                marginTop: "1%",
              }}
            />
          </div>
        )}
      </>
    )
  }
}

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import DialogueBox from "../UI/DialogueBox"
import text from "../../text/act3Scripts"

export default class ERIntro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      played: null,
    }
  }

  setPlayed = () => {
    this.setState({ played: true })
  }

  render() {
    return (
      <>
        {!this.state.played && (
          <DialogueBox data={text.act3Intro} onEnd={() => this.setPlayed()} />
        )}
        {this.state.played && <Redirect to="/er/main" />}
      </>
    )
  }
}

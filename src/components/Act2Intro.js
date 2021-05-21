import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import DialogueBox from "./UI/DialogueBox"
import text from "../text/act2Scripts"

export default class Act2Intro extends Component {
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
          <DialogueBox data={text.act2Intro} onEnd={() => this.setPlayed()} />
        )}
        {this.state.played && <Redirect to="/act2/map" />}
      </>
    )
  }
}

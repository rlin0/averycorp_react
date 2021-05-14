import React, { Component } from "react"
import DialogueBox from "./UI/DialogueBox"
import FeedbackBar from "./UI/FeedbackBar"
import ModalBox from "./UI/ModalBox"
import ExpositionBox from "./UI/ExpositionBox"
import InputModal from "./UI/InputModal"
import text from "../text/sampleText"
import GridList from "@material-ui/core/GridList"
import Flow from "./Flow"

export default class Act0 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tileData = new Map()

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let s = "t" + i.toString() + j.toString()
        tileData.set(s, null)
      }
    }
    // TODO: Set colors of starting points
    tileData.set("t11", "yellow")
    tileData.set("t12", "brown")
    tileData.set("t13", "orange")

    // TODO: fill in the rest
    const answer = [
      ["blue", "blue", "blue", "blue", "blue", "pink", "pink", "pink", "pink"],
      ["blue"],
    ]

    return (
      <div style={{ cursor: "default" }}>
        <Flow tileInitial={tileData} answer={answer} dim={9} />
      </div>
    )
  }
}

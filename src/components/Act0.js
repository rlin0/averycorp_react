import React, { Component } from "react"
import { Typography } from "@material-ui/core"
import { S3Url } from "../helpers"
import DialogueBox from "./UI/DialogueBox"
import text from "../text/act1Scripts"
import "./Act0.css"

const mapStyle = {
  position: "relative",
  display: "block",
  width: "60%",
  margin: "auto",
}

const puzzleStyle = {
  position: "relative",
  display: "block",
  height: "50%",
  margin: "auto",
}

const textStyle = {
  color: "blue",
}

class Act0 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      fields: [null, null, null],
      prompts: undefined,
    }
  }

  handleMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  }

  render() {
    const { x, y } = this.state
    return (
      <>
        <DialogueBox data={text.act1Intro} />
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            top: "20%",
          }}
        >
          <div>
            <img
              onMouseMove={this.handleMouseMove.bind(this)}
              id="puzzle-map"
              src={S3Url + "/map.svg"}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography id="x-coord" align="center">
                {x}
              </Typography>
              <Typography id="y-coord" align="center">
                {y}
              </Typography>
            </div>
          </div>
          <div>
            <img id="puzzle0" src={S3Url + "/intro_puzzle.png"} />
          </div>
        </div>
      </>
    )
  }
}
export default Act0

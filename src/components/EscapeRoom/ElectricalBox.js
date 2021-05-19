import React, { Component } from "react"
import { Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import {
  Puzzle0_1,
  Puzzle0_2,
  Puzzle0_3,
  Puzzle0_4,
  Puzzle0_5,
} from "./FlowPuzzles"
import Forbidden from "../Forbidden.js"

const maintenance = {
  left: "72.75%",
  top: "0%",
  width: "27.25%",
  height: "99.88%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class ElectricalBox extends Component {
  constructor(props) {
    super(props)
    this.state = { solved: 0 }
  }

  updateSolved = () => {
    this.setState({ solved: this.state.solved + 1 })
  }

  render() {
    if (!this.props.electricalBoxUnlocked) return <Forbidden />
    if (this.state.solved === 0) return <Puzzle0_2 solved={this.updateSolved} />
    if (this.state.solved === 1) return <Puzzle0_3 solved={this.updateSolved} />

    this.props.putMCSpy(3)
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${S3Url + "/er/electrical.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <Link style={maintenance} to="/er/maintenance" />

        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "15%",
            width: "50%",
            height: "50%",
          }}
        >
          <p>What are you still waiting around for?</p>
        </div>
      </div>
    )
  }
}

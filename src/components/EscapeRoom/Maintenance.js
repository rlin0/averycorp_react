import React, { Component } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import styles from "./styles.module.css"
import { withRouter, Link } from "react-router-dom"

const hallway2 = {
  width: "5.6%",
  height: "8.6%",
  left: "4.1%",
  top: "86.3%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Maintenance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candleLit: false,
    }
  }

  candle = () => {
    return (
      <img
        src="/media/candle.png"
        alt="candle"
        className={styles.candle}
        onClick={this.lightCandle}
      />
    )
  }

  litCandle = () => {
    return (
      <img
        src="/media/litcandle.png"
        alt="lit candle"
        className={styles.candle}
      />
    )
  }

  lightCandle = () => {
    if (this.props.equipped === "matches") this.setState({ candleLit: true })
  }

  render() {
    return (
      <>
        <img src="/media/Maintenance.png" width="100%" />
        <Link style={hallway2} to="/er/hallway2" />

        {this.state.candleLit ? this.litCandle() : this.candle()}
      </>
    )
  }
}

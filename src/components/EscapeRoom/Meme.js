import React, { Component } from "react"
import { Link } from "react-router-dom"
import { S3Url, masterPW } from "../../helpers.js"
import LockModal from "../UI/LockModal"
import Window from "../UI/Window"
import FeedbackBar from "../UI/FeedbackBar"
import txt from "../../text/er.json"
import Forbidden from "../Forbidden"

const hallway2 = {
  left: "42.42%",
  top: "88.13%",
  width: "15%",
  height: "11.88%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Meme extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (!this.props.memeUnlocked) return <Forbidden />

    return (
      <>
        <img src={S3Url + "/er/meme_room.png"} width="100%" />
        <Link style={hallway2} to="/er/hallway2" />
      </>
    )
  }
}

import React, { Component } from "react"
import { S3Url, getBit } from "../../helpers.js"
import { Link } from "react-router-dom"
import Forbidden from "../Forbidden"
import DialogueBox from "../UI/DialogueBox"
import text from "../../text/er.json"
import FeedbackBar from "../UI/FeedbackBar"

const box1 = {
  left: "27.1%",
  top: "55.88%",
  width: "17.5%",
  height: "38.75%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
  cursor: "default",
}

const box2 = {
  left: "54.3%",
  top: "56.13%",
  width: "17.5%",
  height: "38.75%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
  cursor: "default",
}

const back1 = {
  left: "0%",
  top: "0%",
  width: "16.4%",
  height: "100%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const back2 = {
  left: "83%",
  top: "0%",
  width: "16.8%",
  height: "100%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const bolt1 = {
  position: "absolute",
  left: "28.5%",
  top: "58.88%",
  width: "2.9%",
  height: "3.5%",
  zIndex: "5",
  display: "block",
  overflow: "hidden",
}

const bolt2 = {
  position: "absolute",
  left: "40.5%",
  top: "59.13%",
  width: "2.9%",
  height: "3.5%",
  zIndex: "5",
  display: "block",
  overflow: "hidden",
}

const bolt3 = {
  position: "absolute",
  left: "28.6%",
  top: "90.25%",
  width: "2.9%",
  height: "3.5%",
  zIndex: "5",
  display: "block",
  overflow: "hidden",
}

const bolt4 = {
  position: "absolute",
  left: "40.4%",
  top: "90.13%",
  width: "2.9%",
  height: "3.5%",
  zIndex: "5",
  display: "block",
  overflow: "hidden",
}

const bolt5 = {
  left: "55.6%",
  top: "58.88%",
  width: "2.9%",
  height: "3.5%",
  position: "absolute",
  zIndex: "5",
  display: "block",
  overflow: "hidden",
}

const bolt6 = {
  left: "67.3%",
  top: "59%",
  width: "2.9%",
  height: "3.5%",
  position: "absolute",
  zIndex: "5",
  display: "block",
  overflow: "hidden",
}

const bolt7 = {
  left: "55.7%",
  top: "90.25%",
  width: "2.9%",
  height: "3.5%",
  position: "absolute",
  zIndex: "5",
  display: "block",
  overflow: "hidden",
}

const bolt8 = {
  left: "67.3%",
  top: "90.38%",
  width: "2.9%",
  height: "3.5%",
  position: "absolute",
  zIndex: "5",
  display: "block",
  overflow: "hidden",
}

export default class MechanicsCloset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      box1Open: getBit(this.props.mcMechanic, 1),
      box2Open: false,
      bolt1: false,
      bolt2: false,
      bolt3: false,
      bolt4: false,
      bolt5: false,
      bolt6: false,
      bolt7: false,
      bolt8: false,
      unscrewed: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mcMechanic !== this.props.mcMechanic) {
      this.setState({ box1Open: getBit(this.props.mcMechanic, 1) })
    }
  }

  unscrewBolt = (e) => {
    console.log("click ")

    if (this.props.equipped !== "wrench") return
    this.setState({ [e.target.id]: true }, () => {
      console.log("unscrewed ", e.target.id)
      this.setState({ unscrewed: true })
      if (
        !this.state.box1Open &&
        this.state.bolt1 &&
        this.state.bolt2 &&
        this.state.bolt3 &&
        this.state.bolt4
      ) {
        this.props.putMCMechanic(1)
        this.setState({ box1Open: true })
      }
      if (
        this.state.bolt5 &&
        this.state.bolt6 &&
        this.state.bolt7 &&
        this.state.bolt8
      ) {
        this.setState({ box2Open: true })
      }
    })
  }

  closed = () => {
    this.setState({ unscrewed: false })
  }

  render() {
    if (this.props.closetUnlocked === null) return null
    if (!this.props.closetUnlocked || !this.props.mechanicsUnlocked)
      return <Forbidden />
    return (
      <>
        <img src={`${S3Url}/er/closet_zoom.png`} width="100%" />
        <Link to="/er/mechanics" style={back1} />
        <Link to="/er/mechanics" style={back2} />
        {this.state.box1Open && (
          <>
            <img
              src={`${S3Url}/er/box_open.png`}
              alt="box1 open"
              style={box1}
            />
            {!getBit(this.props.mcMechanic, 2) && (
              <DialogueBox data={text.boxhint} repeat={false} />
            )}
          </>
        )}
        {this.state.box2Open && (
          <img src={`${S3Url}/er/box_open.png`} alt="box2 open" style={box2} />
        )}
        <DialogueBox data={text.box1} style={box1} repeat={false} clickToggle />
        <DialogueBox data={text.box1} style={box2} repeat={false} clickToggle />
        <div style={bolt1} id="bolt1" onClick={this.unscrewBolt} />
        <div style={bolt2} id="bolt2" onClick={this.unscrewBolt} />
        <div style={bolt3} id="bolt3" onClick={this.unscrewBolt} />
        <div style={bolt4} id="bolt4" onClick={this.unscrewBolt} />
        <div style={bolt5} id="bolt5" onClick={this.unscrewBolt} />
        <div style={bolt6} id="bolt6" onClick={this.unscrewBolt} />
        <div style={bolt7} id="bolt7" onClick={this.unscrewBolt} />
        <div style={bolt8} id="bolt8" onClick={this.unscrewBolt} />
        {this.state.unscrewed && (
          <FeedbackBar text="A screw has come loose" closed={this.closed} />
        )}
      </>
    )
  }
}

import React, { Component } from "react"
import { Link } from "react-router-dom"
import { S3Url, getBit } from "../../helpers"
import ZoomModal from "../UI/ZoomModal"
import FeedbackBar from "../UI/FeedbackBar"
import txt from "../../text/er.json"
import FeedbackBarToggle from "../UI/FeedbackBarToggle"

const hallway1 = {
  left: "42.33%",
  top: "91.13%",
  width: "15%",
  height: "8.75%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const bookOrange = {
  left: "12.67%",
  top: "45.38%",
  width: "1.67%",
  height: "4.38%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const bookRed = {
  left: "20.33%",
  top: "63.25%",
  width: "1.67%",
  height: "4.25%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const bookYellow = {
  position: "absolute",
  left: "14.25%",
  top: "54.63%",
  width: "1.67%",
  height: "4.25%",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const bookBlue = {
  position: "absolute",
  left: "15.83%",
  top: "71.63%",
  width: "1.67%",
  height: "4.38%",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const magazine1 = {
  left: "31.17%",
  top: "81.13%",
  width: "5.42%",
  height: "7.25%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const computer = {
  left: "83.75%",
  top: "60.12%",
  width: "8.08%",
  height: "10.63%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const monitor = {
  position: "absolute",
  left: "84.33%",
  top: "50.63%",
  width: "7.17%",
  height: "8%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const statue = {
  left: "58.5%",
  top: "41.88%",
  width: "7.75%",
  height: "33.5%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}
const note = {
  left: "70.17%",
  top: "87%",
  width: "5.67%",
  height: "3.63%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Library extends Component {
  constructor(props) {
    super(props)
    this.state = { computerTxt: false, computerUnlocked: false }
  }

  handleBookClick = () => {
    if (getBit(this.props.mcMerchant, 2)) return
    this.props.putMCMerchant(2)
  }

  handleComputerClick = () => {
    if (this.props.equipped === "usb") this.setState({ computerUnlocked: true })
    else this.setState({ computerTxt: true })
  }

  render() {
    return (
      <>
        <img src={S3Url + "/er/Library.png"} width="100%" />
        <Link to="/er/hallway1" style={hallway1} />

        <ZoomModal style={bookOrange}>
          <img
            src={S3Url + "/er/book_canals.png"}
            alt="book canals"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>
        <ZoomModal style={bookRed}>
          <img
            src={S3Url + "/er/boba_book.png"}
            alt="book boba"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>
        <ZoomModal style={bookYellow}>
          <img
            src={S3Url + "/er/book_egypt.png"}
            alt="book egypt"
            style={{ width: "500px", height: "600px" }}
            onClick={this.handleBookClick}
          />
        </ZoomModal>
        <ZoomModal style={bookBlue}>
          <img
            src={S3Url + "/er/book_japan.png"}
            alt="book japan"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>

        <ZoomModal style={magazine1}>
          <img
            src={S3Url + "/er/magazine.png"}
            alt="Magazine cover"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>

        <div style={computer} onClick={this.handleComputerClick} />
        {this.state.computerUnlocked && (
          <ZoomModal style={monitor}>
            <img
              src={S3Url + "/er/monitor_library_closeup.png"}
              alt="map"
              style={{ width: "800px", height: "500px" }}
            />
          </ZoomModal>
        )}
        {this.state.computerTxt && (
          <FeedbackBar
            text={txt.computerLibrary}
            closed={() => this.setState({ computerTxt: false })}
          />
        )}
        <FeedbackBarToggle text={txt.statueBlue} style={statue} />
        <FeedbackBarToggle text={txt.libraryNote} style={note} />
      </>
    )
  }
}

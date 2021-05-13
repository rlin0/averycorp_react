import React, { Component } from "react"
import {
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core"
import styles from "./styles.module.css"
import axios from "axios"
import Clock from "react-clock"
import "react-clock/dist/Clock.css"
import CloseIcon from "@material-ui/icons/Close"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import LockModal from "./LockModal"
import FeedbackBar from "../UI/FeedbackBar"
import txt from "../../text/er.json"
import ZoomModal from "./ZoomModal"

const hallway1 = {
  left: "82.33%",
  top: "47.88%",
  width: "9%",
  height: "31.37%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const hallway2 = {
  left: "7%",
  top: "48.25%",
  width: "9%",
  height: "31.37%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const portal = {
  left: "40%",
  top: "49.38%",
  width: "19.58%",
  height: "21.38%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const portalLock = {
  left: "36.67%",
  top: "58.13%",
  width: "2.42%",
  height: "4.75%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const start = Date.parse("01 Jan 2020 00:00:00 PDT")

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      interval: null,
      seconds: 0,
      clickSewer: false,
      portalDenied: false,
      mcSet: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.mcSpy !== this.props.mcSpy ||
      prevProps.mcMerchant !== this.props.mcMerchant ||
      prevProps.mcMechanic !== this.props.mcMechanic
    ) {
      this.setState({
        mcSet:
          this.props.mcSpy === 7 ||
          this.props.mcMerchant === 7 ||
          this.props.mcMechanic === 7,
      })
    }
  }

  componentDidMount() {
    this.setState({
      mcSet:
        this.props.mcSpy === 7 ||
        this.props.mcMerchant === 7 ||
        this.props.mcMechanic === 7,
      interval: setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 })
        if (this.state.seconds < 10) {
          this.setState({ date: new Date(start + this.state.seconds * 1000) })
        }
      }, 1000),
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  handleSubmitLockers = (code) => {
    if (code === "0") {
      this.props.putLockersUnlocked()
      return true
    } else {
      return false
    }
  }

  lockedLockers = () => {
    return (
      <LockModal
        className={styles.lockers}
        handleSubmit={this.handleSubmitLockers}
      />
    )
  }

  handlePortalSubmit = (code) => {
    if (code === "0") {
      this.props.putDone()
      return true
    } else return false
  }

  render() {
    if (this.props.lockersUnlocked === null) return null
    return (
      <>
        {/* Image Map Generated by https://12oss.github.io/linkresponsively/ */}

        <img src={S3Url + "/er/MainRoom.png"} width="100%" />
        <Link style={hallway1} to="/er/hallway1" />
        <Link style={hallway2} to="/er/hallway2" />

        {/* <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <input type="text" className={styles.text1} />
          <input type="text" className={styles.text2} />
          <input type="text" className={styles.text3} />
        </form> */}
        <div className={styles.clock}>
          <Clock
            value={this.state.date}
            // styleName={styles.clock}
            size={100}
          />
        </div>
        {this.props.lockersUnlocked ? (
          <Link to="/er/lockers" className={styles.lockers} />
        ) : (
          this.lockedLockers()
        )}

        <div
          className={styles.sewer}
          onClick={() => {
            if (this.props.equipped !== "paperclip") {
              this.setState({ clickSewer: true })
            }
          }}
        />
        {this.state.clickSewer && (
          <FeedbackBar
            text={txt.sewerDenied}
            closed={() => this.setState({ clickSewer: false })}
          />
        )}
        {this.props.equipped === "paperclip" && (
          <Link
            to="/er/spy"
            className={styles.sewer}
            style={{ cursor: `url(${S3Url}/er/paperclip_cursor.png), auto` }}
            onClick={this.props.putSpyroomUnlocked}
          />
        )}
        {this.state.mcSet ? (
          <ZoomModal style={portal}>
            {this.props.mcSpy === 7 && (
              <img
                src={S3Url + "/er/final_spy.png"}
                alt="picture for spy"
                style={{ width: "600px", height: "300px" }}
              />
            )}
            {this.props.mcMechanic === 7 && (
              <img
                src={S3Url + "/er/final_mechanic.png"}
                alt="picture for mechanic"
                style={{ width: "600px", height: "300px" }}
              />
            )}
            {this.props.mcMerchant === 7 && (
              <img
                src={S3Url + "/er/final_merchant.png"}
                alt="picture for merchant"
                style={{ width: "600px", height: "300px" }}
              />
            )}
          </ZoomModal>
        ) : (
          <div
            style={portal}
            onClick={() => this.setState({ portalDenied: true })}
          />
        )}

        {this.state.portalDenied && (
          <FeedbackBar
            text={txt.portalDenied}
            closed={() => this.setState({ portalDenied: false })}
          />
        )}
        <LockModal style={portalLock} handleSubmit={this.handlePortalSubmit} />
      </>
    )
  }
}
export default withRouter(Main)

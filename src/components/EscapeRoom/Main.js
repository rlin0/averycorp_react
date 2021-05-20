import React, { Component } from "react"
import styles from "./styles.module.css"
import Clock from "react-clock"
import "react-clock/dist/Clock.css"
import { withRouter, Link } from "react-router-dom"
import { S3Url, masterPW } from "../../helpers.js"
import LockModal from "../UI/LockModal"
import FeedbackBar from "../UI/FeedbackBar"
import txt from "../../text/er.json"
import ZoomModal from "../UI/ZoomModal"
import TabBox from "../UI/TabBox"
import TabBoxServer from "../UI/TabBoxServer"

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
  left: "36.08%",
  top: "58.13%",
  width: "2.42%",
  height: "4.63%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const monitor = {
  left: "23.83%",
  top: "68%",
  width: "10.58%",
  height: "9%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const start = Date.parse("01 Jan 2020 00:01:43 PDT")

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
      leave: false,
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
        if (this.state.seconds < 11) {
          this.setState({ date: new Date(start + this.state.seconds * 1000) })
        }
      }, 1000),
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  handleSubmitLockers = (code) => {
    if (code === masterPW || code === "53110") {
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
    if (code === masterPW || code.toLowerCase() === "ice") {
      this.props.putDone()
      return true
    } else {
      return false
    }
  }

  render() {
    if (this.props.lockersUnlocked === null) return null
    return (
      <>
        {/* Image Map Generated by https://12oss.github.io/linkresponsively/ */}

        <img src={S3Url + "/er/MainRoom.png"} width="100%" />
        {this.props.lockersUnlocked ? (
          <Link style={hallway1} to="/er/hallway1" />
        ) : (
          <div
            style={hallway1}
            onClick={() => this.setState({ leave: true })}
          />
        )}
        {this.props.lockersUnlocked ? (
          <Link style={hallway2} to="/er/hallway2" />
        ) : (
          <div
            style={hallway2}
            onClick={() => this.setState({ leave: true })}
          />
        )}
        {this.state.leave && (
          <FeedbackBar
            text={txt.leaveMain}
            closed={() => this.setState({ leave: false })}
          />
        )}
        <div className={styles.clock}>
          <Clock value={this.state.date} size={100} hourHandLength={0} />
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

        {this.props.spyroomUnlocked ? (
          <Link to="/er/spy" className={styles.sewer} />
        ) : (
          this.props.equipped === "paperclip" && (
            <div
              onClick={this.props.putSpyroomUnlocked}
              className={styles.sewer}
              style={{ cursor: `url(${S3Url}/er/paperclip_cursor.png), auto` }}
            />
          )
        )}
        <ZoomModal style={monitor}>
          <p>
            The server room door can only be opened with the help of memory
            chips scattered around the area. These memory chips belong to 3
            AveryCorp employees that are tired of the corporation’s rule over
            everything. There are 9 chips total, 3 each of a color: you’ll need
            to find all of them in order to unlock the server room door. <br />
            Click on a door to move from room to room. Some rooms are locked and
            you’ll need to either enter a code on the number pad next to the
            door, or find another way inside. Certain items can be picked up and
            will be added to your inventory (bottom right button). To equip an
            item, go into the inventory, click on an item, then press ‘equip’.
            To unequip it, simply press ‘unequip.’
          </p>
        </ZoomModal>
        <ZoomModal className={styles.tablet}>
          <div
            style={{
              backgroundImage: `url(${S3Url + "/er/tablet_screen.png"})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: "700px",
              width: "600px",
            }}
          >
            <TabBox
              left={
                <img
                  src={S3Url + "/er/spy_dossier.png"}
                  alt="spy dossier"
                  style={{ width: "500px", height: "500px" }}
                />
              }
              center={
                <img
                  src={S3Url + "/er/merchant_dossier.png"}
                  alt="merchant dossier"
                  style={{ width: "500px", height: "500px" }}
                />
              }
              right={
                <img
                  src={S3Url + "/er/mechanic_dossier.png"}
                  alt="mechanic dossier"
                  style={{ width: "500px", height: "500px" }}
                />
              }
            />
          </div>
        </ZoomModal>

        <LockModal style={portal} handleSubmit={this.handlePortalSubmit}>
          <TabBoxServer
            mcSpy={this.props.mcSpy}
            mcMechanic={this.props.mcMechanic}
            mcMerchant={this.props.mcMerchant}
          />
        </LockModal>
      </>
    )
  }
}
export default withRouter(Main)

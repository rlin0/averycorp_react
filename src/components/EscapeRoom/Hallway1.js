import React, { Component } from "react"
import { Link } from "react-router-dom"
import { S3Url, masterPW } from "../../helpers.js"
import { withStyles } from "@material-ui/styles"
import LockModal from "../UI/LockModal"
import Window from "../UI/Window"
import FeedbackBar from "../UI/FeedbackBar"
import txt from "../../text/er.json"

const mainRoom = {
  left: "0%",
  top: "43.88%",
  width: "4.92%",
  height: "36.38%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const spyRoom = {
  left: "45.58%",
  top: "57.25%",
  width: "2.67%",
  height: "5%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const merchantRoom = {
  left: "83.25%",
  top: "57.38%",
  width: "2.67%",
  height: "5%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const library = {
  left: "97.92%",
  top: "42.88%",
  width: "1.92%",
  height: "35%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const window = {
  left: "52.08%",
  top: "50.25%",
  width: "17.75%",
  height: "14%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const windowSpy = {
  left: "14.5%",
  top: "50.25%",
  width: "17.75%",
  height: "14.12%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const useStyles = (theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
})

class Hallway1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      window: false,
      spyRoomDenied: false,
    }
  }

  handleSubmitMerchant = (code) => {
    if (code === masterPW || code === "0624") {
      this.props.putMerchantUnlocked()
      return true
    } else return false
  }

  lockedMerchant = () => {
    return (
      <LockModal
        style={merchantRoom}
        handleSubmit={this.handleSubmitMerchant}
      />
    )
  }

  render() {
    if (this.props.spyroomUnlocked === null) return null

    return (
      <>
        <img src={S3Url + "/er/Hallway1.png"} width="100%" />
        <Link style={mainRoom} to="/er/main" />
        <Window style={window} link={S3Url + "/er/window_merchant.png"} />
        <Link style={library} to="/er/library" />
        <Window style={windowSpy} link={S3Url + "/er/spy_window.png"} />

        {this.props.spyroomUnlocked ? (
          <Link style={spyRoom} to="/er/spy" />
        ) : (
          <>
            <div
              style={spyRoom}
              onClick={() => this.setState({ spyRoomDenied: true })}
            />
            {this.state.spyRoomDenied && (
              <FeedbackBar
                text={txt.spyroom}
                closed={() => this.setState({ spyRoomDenied: false })}
              />
            )}
          </>
        )}
        {this.props.merchantUnlocked ? (
          <Link style={merchantRoom} to="/er/merchant" />
        ) : (
          this.lockedMerchant()
        )}
      </>
    )
  }
}
export default withStyles(useStyles)(Hallway1)

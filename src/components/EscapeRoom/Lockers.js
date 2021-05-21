import React, { Component } from "react"
import styles from "./styles.module.css"
import Forbidden from "../Forbidden"
import { Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import ZoomModal from "../UI/ZoomModal"
import txt from "../../text/er.json"
import FeedbackBar from "../UI/FeedbackBar"

const items = ["matches", "wrench", "usb", "soup", "knife", "paperclip"]

const mainStyle = {
  left: "0%",
  top: "0%",
  width: "20.67%",
  height: "100%",
  position: "absolute",
  zIndex: "5",
}

const mainStyle2 = {
  left: "79.5%",
  top: "0%",
  width: "20.67%",
  height: "100%",
  position: "absolute",
  zIndex: "5",
}

export default class Lockers extends Component {
  constructor(props) {
    super(props)
    this.state = { item: null }
  }

  onClick = (e) => {
    this.setState({ item: e.currentTarget.alt })
    return this.props.pickUp(e.currentTarget.alt)
  }

  closed = () => {
    this.setState({ item: null })
  }

  render() {
    if (this.props.lockersUnlocked === null) return null
    return (
      <>
        {this.props.lockersUnlocked ? (
          <>
            <img src={`${S3Url}/er/Lockers.png`} width="100%" />
            <Link to="/er/main" style={mainStyle} />
            <Link to="/er/main" style={mainStyle2} />

            {items.map((it) => {
              return (
                !this.props[it] && (
                  <>
                    <img
                      src={`${S3Url}/er/${it}.png`}
                      className={styles[it]}
                      alt={it}
                      onClick={this.onClick}
                    />
                  </>
                )
              )
            })}
            <div
              className={styles["pearl"]}
              alt="pearl"
              onClick={() => this.setState({ item: "pearl" })}
            />
            <div
              className={styles["car"]}
              alt="car"
              onClick={() => this.setState({ item: "car" })}
            />
            <ZoomModal className={styles.photo}>
              <img
                src={S3Url + "/er/photograph.png"}
                alt="photo zoomed in"
                style={{ width: "500px", height: "600px" }}
              />
            </ZoomModal>
            {this.state.item && (
              <FeedbackBar text={txt[this.state.item]} closed={this.closed} />
            )}
          </>
        ) : (
          <Forbidden />
        )}
      </>
    )
  }
}

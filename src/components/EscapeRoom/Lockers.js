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
} from "@material-ui/core"
import styles from "./styles.module.css"
import Forbidden from "../Forbidden"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import ZoomModal from "./ZoomModal"

const items = ["matches", "wrench", "usb", "soup", "knife", "paperclip"]

const mainStyle = {
  left: "0%",
  top: "0%",
  width: "20.67%",
  height: "100%",
  position: "absolute",
  cursor: "default",
  zIndex: "5",
}
const mainStyle2 = {
  left: "79.5%",
  top: "0%",
  width: "20.67%",
  height: "100",
  position: "absolute",
  cursor: "default",
  zIndex: "5",
}

export default class Lockers extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onClick = (e) => {
    return this.props.pickUp(e.currentTarget.alt)
  }

  render() {
    if (this.props.lockersUnlocked === null) return null
    return (
      <>
        {this.props.lockersUnlocked ? (
          <>
            <img src={`${S3Url}/er/Lockers.png`} width="100%" />
            <Link to="/er" style={mainStyle} />
            <Link to="/er" style={mainStyle2} />
            {items.map((it) => {
              return (
                !this.props[it] && (
                  <img
                    src={`${S3Url}/er/${it}.png`}
                    className={styles[it]}
                    alt={it}
                    onClick={this.onClick}
                  />
                )
              )
            })}
            <ZoomModal className={styles.car}>
              <img
                src={S3Url + "/er/car_zoomed.png"}
                alt="car zoomed in"
                style={{ width: "500px", height: "600px" }}
              />
            </ZoomModal>
          </>
        ) : (
          <Forbidden />
        )}
      </>
    )
  }
}

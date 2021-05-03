import React, { Component } from "react"
import {
  CssBaseline,
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

const items = ["matches", "wrench", "usb", "soup", "knife", "paperclip"]

export default class Lockers extends Component {
  constructor(props) {
    super(props)
    this.state = { carModalOpen: false }
  }

  onClick = (e) => {
    return this.props.pickUp(e.currentTarget.alt)
  }

  render() {
    return (
      <>
        {this.props.lockersUnlocked ? (
          <>
            <img src={`${S3Url}/er/Lockers.png`} width="100%" />
            <Link
              to="/er"
              style={{
                width: "5.4%",
                height: "7.2%",
                left: "5.1%",
                top: "89.5%",
                position: "absolute",
                cursor: "pointer",
                display: "block",
                zIndex: "5",
                overflow: "hidden",
              }}
            />
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
            <div
              className={styles.car}
              onClick={() => this.setState({ carModalOpen: true })}
            />
            <Dialog
              open={this.state.carModalOpen}
              onClose={() => this.setState({ carModalOpen: false })}
              aria-labelledby="form-dialog-title"
            >
              <DialogContent>
                <img
                  src={S3Url + "/er/car_zoomed.png"}
                  alt="car zoomed in"
                  style={{ width: "500px", height: "600px" }}
                />
              </DialogContent>
            </Dialog>
          </>
        ) : (
          <Forbidden />
        )}
      </>
    )
  }
}

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

const hallway1 = {
  width: "5.3%",
  height: "6.7%",
  left: "92.4%",
  top: "40.8%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const hallway2 = {
  width: "6.0%",
  height: "6.9%",
  left: "2.6%",
  top: "64.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      interval: null,
      lockersModalOpen: false,
      lockerCode: "",
      submitMsg: null,
    }
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => this.setState({ date: new Date() }), 1000),
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  handleLockersModalClose = () => {
    this.setState({ lockersModalOpen: false })
  }

  handleLockersModalOpen = () => {
    this.setState({ lockersModalOpen: true })
  }

  handleSubmitLockers = (e) => {
    e.preventDefault()
    if (this.state.lockerCode === "0") {
      this.props.putLockersUnlocked()
      this.props.history.push("/er/lockers")
    } else {
      this.setState({ submitMsg: "incorrect" })
    }
  }

  lockedLockers = () => {
    return (
      <>
        <div className={styles.lockers} onClick={this.handleLockersModalOpen} />

        <Dialog
          open={this.state.lockersModalOpen}
          onClose={this.handleLockersModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <IconButton
              aria-label="close"
              onClick={this.handleLockersModalClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <form onSubmit={this.handleSubmitLockers}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="code"
                onChange={({ target }) =>
                  this.setState({ lockerCode: target.value })
                }
              />
              {this.state.submitMsg !== null && (
                <DialogContentText>{this.state.submitMsg}</DialogContentText>
              )}
            </DialogContent>
            <DialogActions>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    )
  }

  render() {
    return (
      <>
        {/* Image Map Generated by https://12oss.github.io/linkresponsively/ */}

        <img src={S3Url + "/er/MainRoom.png"} width="100%" />
        <Link style={hallway1} to="/er/hallway1" />
        <Link style={hallway2} to="/er/hallway2" />

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <input type="text" className={styles.text1} />
          <input type="text" className={styles.text2} />
          <input type="text" className={styles.text3} />
        </form>
        <div className={styles.clock}>
          <Clock
            value={new Date()}
            // styleName={styles.clock}
            size={100}
          />
        </div>
        {this.props.lockersUnlocked ? (
          <Link to="/er/lockers" className={styles.lockers} />
        ) : (
          this.lockedLockers()
        )}

        {this.props.equipped === "paperclip" && (
          <Link
            to="/er/spy"
            className={styles.sewer}
            style={{ cursor: `url(${S3Url}/er/paperclip_cursor.png) auto` }}
            onClick={this.props.putSewerUnlocked}
          />
        )}
      </>
    )
  }
}
export default withRouter(Main)

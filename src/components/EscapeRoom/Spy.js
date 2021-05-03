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
  IconButton,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import Forbidden from "../Forbidden"
import { S3Url } from "../../helpers.js"
import styles from "./styles.module.css"

export default class Spy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      computerModalOpen: false,
      computerCode: null,
      hangerModalOpen: false,
      hologramModalOpen: false,
      hologramCode: null,
      submitMsg: null,
    }
    this.vidRef = React.createRef()
  }

  handleHologramModalClose = () => {
    this.setState({ hologramModalOpen: false, submitMsg: null })
  }

  handleComputerModalClose = () => {
    this.setState({ computerModalOpen: false, submitMsg: null })
  }

  handleHangerModalClose = () => {
    this.setState({ hangerModalOpen: false })
  }

  handleComputerClick = () => {
    if (this.props.equipped === "usb")
      this.setState({ computerModalOpen: true })
  }

  handleHangerClick = () => {
    if (this.props.equipped === "usb")
      this.setState({ computerModalOpen: true })
  }

  handleHologramSubmit = (e) => {
    e.preventDefault()
    if (this.state.hologramCode) {
      this.props.putHologramUnlocked()
      this.handleHologramModalClose()
    } else {
      this.setState({ submitMsg: "incorrect" })
    }
  }

  render() {
    return (
      <>
        {this.props.sewerUnlocked ? (
          <>
            <img src={`${S3Url}/er/Spy.png`} width="100%" />
            <div
              className={styles.hanger}
              onClick={() => this.setState({ hangerModalOpen: true })}
            />
            <div
              className={styles.computerSpy}
              onClick={this.handleComputerClick}
            />

            <Dialog
              open={this.state.hangerModalOpen}
              onClose={this.handleHangerModalClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                Tool Case
                <IconButton
                  aria-label="close"
                  onClick={this.handleHangerModalClose}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <img src={`${S3Url}/er/SpyTool.png`} />
                {!this.props.inkwell && (
                  <img
                    src={`${S3Url}/er/inkwell.png`}
                    className={styles.inkwell}
                    alt="inkwell"
                    onClick={() => {
                      return this.props.pickUp("inkwell")
                    }}
                  />
                )}
              </DialogContent>
            </Dialog>
            <div
              className={styles.hologramBottom}
              onClick={() => this.setState({ hologramModalOpen: true })}
            />

            <Dialog
              open={this.state.hologramModalOpen}
              onClose={this.handleHologramModalClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                <IconButton
                  aria-label="close"
                  onClick={this.handleHologramModalClose}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <form onSubmit={this.handleHologramSubmit}>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="code"
                    onChange={({ target }) =>
                      this.setState({ hologramCode: target.value })
                    }
                  />
                  {this.state.submitMsg !== null && (
                    <DialogContentText>
                      {this.state.submitMsg}
                    </DialogContentText>
                  )}
                </DialogContent>
                <DialogActions>
                  <Button type="submit">Submit</Button>
                </DialogActions>
              </form>
            </Dialog>
            {this.props.hologramUnlocked && (
              <video
                width="100px"
                height="300px"
                className={styles.hologram}
                autoPlay
                type="video/mp4"
                src="/lemon.mp4"
                onClick={(e) => {
                  e.target.play()
                }}
              />
            )}
            <Dialog
              open={this.state.computerModalOpen}
              onClose={this.handleComputerModalClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                <IconButton
                  aria-label="close"
                  onClick={this.handleComputerModalClose}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <form onSubmit={this.handleSubmitMechanics}>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="code"
                    onChange={({ target }) =>
                      this.setState({ computerCode: target.value })
                    }
                  />
                  {this.state.submitMsg !== null && (
                    <DialogContentText>
                      {this.state.submitMsg}
                    </DialogContentText>
                  )}
                </DialogContent>
                <DialogActions>
                  <Button type="submit">Submit</Button>
                </DialogActions>
              </form>
            </Dialog>
          </>
        ) : (
          <Forbidden />
        )}
      </>
    )
  }
}

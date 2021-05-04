import React, { Component } from "react"
import {
  Grid,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  IconButton,
} from "@material-ui/core"
import axios from "axios"
import CloseIcon from "@material-ui/icons/Close"
import { styles } from "../UI/InputModal"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"

const mainRoom = {
  width: "5.9%",
  height: "7.6%",
  left: "89.9%",
  top: "87.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const maintenanceRoom = {
  width: "6.8%",
  height: "9.3%",
  left: "4.7%",
  top: "85.8%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const mechanicsRoom = {
  width: "15.3%",
  height: "51.5%",
  left: "2.0%",
  top: "21.2%",
  position: "absolute",
  cursor: "default",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

class Hallway2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mechanicsModalOpen: false,
      mechanicsCode: null,
      submitMsg: null,
    }
  }

  handleMechanicsModalOpen = () => {
    this.setState({ mechanicsModalOpen: true })
  }

  handleMechanicsModalClose = () => {
    this.setState({ mechanicsModalOpen: false })
  }

  handleSubmitMechanics = (e) => {
    e.preventDefault()
    if (this.state.mechanicsCode === "0") {
      this.props.putMechanicsUnlocked()
      this.props.history.push("/er/mechanics")
    } else this.setState({ submitMsg: "incorrect" })
  }

  lockedMechanics = () => {
    return (
      <>
        <div style={mechanicsRoom} onClick={this.handleMechanicsModalOpen} />

        <Dialog
          open={this.state.mechanicsModalOpen}
          onClose={this.handleMechanicsModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <IconButton
              aria-label="close"
              onClick={this.handleMechanicsModalClose}
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
                  this.setState({ mechanicsCode: target.value })
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
    if (this.props.mechanicsUnlocked === null) return null
    return (
      <>
        <img src={S3Url + "/er/Hallway2.png"} width="100%" />
        <Link style={mainRoom} to="/er" />
        <Link style={maintenanceRoom} to="/er/maintenance" />

        {this.props.mechanicsUnlocked ? (
          <Link style={mechanicsRoom} to="/er/mechanics" />
        ) : (
          this.lockedMechanics()
        )}
      </>
    )
  }
}
export default withRouter(Hallway2)

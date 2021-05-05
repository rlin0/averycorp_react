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
import { Redirect } from "react-router-dom"

class LockModal extends Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false, code: null, correct: null }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const res = this.props.handleSubmit(this.state.code)
    if (res === false) {
      this.setState({ correct: false })
    } else {
      this.setState({ correct: true })
    }
  }

  handleModalOpen = () => {
    if (this.props.required) {
      if (this.props.equipped === this.props.required) {
        this.setState({ modalOpen: true })
      }
    } else {
      this.setState({ modalOpen: true })
    }
  }

  handleModalClose = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <>
        {this.props.style ? (
          <div style={this.props.style} onClick={this.handleModalOpen} />
        ) : (
          <div
            className={this.props.className}
            onClick={this.handleModalOpen}
          />
        )}
        <Dialog
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <IconButton aria-label="close" onClick={this.handleModalClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          {this.state.correct !== true && (
            <form onSubmit={this.handleSubmit}>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="code"
                  onChange={({ target }) =>
                    this.setState({ code: target.value })
                  }
                />
                {this.state.correct === false && (
                  <DialogContentText>incorrect</DialogContentText>
                )}
              </DialogContent>
              <DialogActions>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </form>
          )}
          {this.state.correct === true && <p>Access Granted</p>}
        </Dialog>
      </>
    )
  }
}
export default withRouter(LockModal)

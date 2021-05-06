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
    this.state = { modalOpen: false }
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
          <DialogContent>{this.props.children}</DialogContent>
        </Dialog>
      </>
    )
  }
}
export default withRouter(LockModal)

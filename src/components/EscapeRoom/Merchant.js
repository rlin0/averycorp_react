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
import axios from "axios"
import styles from "./styles.module.css"
import { S3Url } from "../../helpers.js"

export default class Merchant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoModalOpen: false,
      scanningModalOpen: false,
      scanningCode: null,
    }
  }

  handleScanningModalClose = () => {
    this.setState({ scanningModalOpen: false })
  }

  render() {
    return (
      <>
        <img src={`${S3Url}/er/Merchant.png`} width="100%" />
        <div className={styles.merchantPhoto} />
        <div
          className={styles.scanningDevice}
          onClick={() => this.setState({ scanningModalOpen: true })}
        />
        <Dialog
          open={this.state.scanningModalOpen}
          onClose={this.handleScanningModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <IconButton
              aria-label="close"
              onClick={this.handleScanningModalClose}
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
                  this.setState({ scanningCode: target.value })
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
}

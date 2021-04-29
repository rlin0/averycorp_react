import React, { Component } from "react"
import {
  CssBaseline,
  Grid,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core"
import axios from "axios"
import CloseIcon from "@material-ui/icons/Close"
import { styles } from "../UI/InputModal"

const Style = {
  position: "fixed",
  right: "10px",
  bottom: "10px",
}

const items = [
  "matches",
  "wrench",
  "usb",
  "soup",
  "knife",
  "paperclip",
  "inkwell",
]

export default class ER extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      selected: null,
      equipped: null,

      // items
      matches: false,
      wrench: false,
      usb: false,
      soup: false,
      knife: false,
      paperclip: false,
      inkwell: false,
    }
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = () => {
    axios
      .get(`/api/inventory/${this.props.userId}/`)
      .then((res) => {
        console.log(res.data)
        items.forEach((e) =>
          this.setState({
            [e]: res.data[e],
          })
        )
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  select = (e) => {
    this.setState({ selected: e.currentTarget.getAttribute("id") })
  }

  onItemChanged = (e) => {
    console.log(e.currentTarget.value)
    this.setState({
      selected: e.currentTarget.value,
    })
  }

  pickUp = (it) => {
    axios
      .patch(`/api/inventory/${this.props.userId}/`, {
        [it]: true,
      })
      .then((res) => {
        console.log("success")
        this.setState({
          [it]: true,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  validSelected = () => {
    if (this.state.selected === null) {
      alert("Please select an item!")
      return false
    }
    return true
  }

  remove = () => {
    if (!this.validSelected()) {
      return
    }
    axios
      .patch(`/api/inventory/${this.props.userId}/`, {
        [this.state.selected]: false,
      })
      .then((res) => {
        console.log("success")
        this.setState({
          [this.state.selected]: false,
          open: false,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  equip = () => {
    if (!this.validSelected()) {
      return
    }
    this.setState({ equipped: this.state.selected, open: false })
  }

  unequip = () => {
    if (!this.validSelected()) {
      return
    }
    this.setState({ equipped: null, open: false })
  }

  renderItems = () => {
    return (
      <>
        {items.map((it) => {
          return (
            this.state[it] && (
              <>
                <label>
                  <input
                    style={{ opacity: "0" }}
                    type="radio"
                    name="inventory"
                    value={it}
                    onChange={this.onItemChanged}
                  />
                  <Grid item xs={3}>
                    <img
                      src="#"
                      style={{
                        cursor: "pointer",
                        borderColor: "red",
                        border:
                          this.state.selected === it ? "1px solid red" : "0px",
                      }}
                      alt={it}
                    />
                  </Grid>
                </label>
              </>
            )
          )
        })}
      </>
    )
  }

  render() {
    const Comp = this.props.comp
    const cursorStyle = {
      cursor: `url(/media/${this.state.equipped}_cursor.png), auto`,
    }

    return (
      <div style={cursorStyle}>
        <CssBaseline />
        <div
          style={{
            float: "left",
            position: "relative",
            width: "100%",
          }}
        >
          <Comp
            {...this.props}
            selected={this.state.selected}
            {...this.state}
            pickUp={this.pickUp}
          />
        </div>
        <Button style={Style} onClick={this.handleClickOpen}>
          Inventory
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
            Inventory
            <IconButton
              aria-label="close"
              style={styles.closeButton}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Grid container style={{ flexGrow: "1" }}>
              {this.renderItems()}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.remove}>Remove</Button>
            <Button onClick={this.equip}>Equip</Button>
            <Button onClick={this.unequip}>Unequip</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

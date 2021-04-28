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
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"
import axios from "axios"

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
        // this.setState({
        //     matches: res.data.matches,
        //     wrench: res.data.wrenches,
        //     usb: res.data.usb,
        //     soup: res.data.soup,
        //     knife: res.data.knife,
        //     paperclip: res.data.paperclip,
        //     inkwell: res.data.inkwell
        // });
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
    console.log("sfds", it)
    this.getItems()
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
    return (
      <>
        <CssBaseline />
        <Comp
          {...this.props}
          selected={this.state.selected}
          {...this.state}
          pickUp={this.pickUp}
        />
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
          </DialogTitle>
          <DialogContent>
            <Grid container style={{ flexGrow: "1" }}>
              {this.renderItems()}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Close</Button>
            <Button>Select</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

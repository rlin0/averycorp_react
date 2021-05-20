import React, { Component } from "react"
import {
  CssBaseline,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core"
import axios from "axios"
import CloseIcon from "@material-ui/icons/Close"
import styles from "./styles.module.css"
import { withRouter } from "react-router-dom"
import { S3Url, masterPW, setBit, countSetBits } from "../../helpers"
import MC from "./MC"

const inventoryStyle = {
  position: "fixed",
  right: "10px",
  bottom: "10px",
  zIndex: 10,
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

class ER extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      selected: null,
      equipped: null,
      spyroomUnlocked: null,
      lockersUnlocked: null,
      mechanicsUnlocked: null,
      closetUnlocked: null,
      hologramUnlocked: null,
      scanningUnlocked: null,
      electricalBoxUnlocked: null,
      merchantUnlocked: null,
      memeUnlocked: null,

      mcMechanic: 0,
      mcSpy: 0,
      mcMerchant: 0,
      mc: null,

      newItem: false,
      // items
      matches: false,
      wrench: false,
      usb: false,
      soup: false,
      knife: false,
      paperclip: false,
      inkwell: false,

      done: false,
    }
  }

  componentDidMount() {
    this.getItems()
    this.getERState()
  }

  getItems = () => {
    axios
      .get(`/api/inventory/${this.props.userId}/`)
      .then((res) => {
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

  getERState = () => {
    axios
      .get(`/api/erstate/${this.props.userId}/`)
      .then((res) => {
        this.setState({
          spyroomUnlocked: res.data.spyroom_unlocked,
          lockersUnlocked: res.data.lockers_unlocked,
          mechanicsUnlocked: res.data.mechanics_unlocked,
          electricalBoxUnlocked: res.data.electrical_box_unlocked,
          hologramUnlocked: res.data.hologram_unlocked,
          closetUnlocked: res.data.closet_unlocked,
          scanningUnlocked: res.data.scanning_unlocked,
          merchantUnlocked: res.data.merchant_unlocked,
          memeUnlocked: res.data.meme_unlocked,
          mcMechanic: res.data.mechanic_mc,
          mcSpy: res.data.spy_mc,
          mcMerchant: res.data.merchant_mc,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  showedMC = () => {
    this.setState({ mc: null })
  }

  putDone = () => {
    this.setState({ done: true })
  }

  putMCMerchant = (id) => {
    const updated = setBit(this.state.mcMerchant, id)
    axios
      .patch(`/api/erstate/${this.props.userId}/`, { merchant_mc: updated })
      .then((res) => {
        this.setState({
          mcMerchant: updated,
          mc: "merchant",
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putMCMechanic = (id) => {
    const updated = setBit(this.state.mcMechanic, id)
    axios
      .patch(`/api/erstate/${this.props.userId}/`, { mechanic_mc: updated })
      .then((res) => {
        console.log("put mechanic")
        this.setState({
          mcMechanic: updated,
          mc: "mechanic",
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putMCSpy = (id) => {
    const updated = setBit(this.state.mcSpy, id)
    axios
      .patch(`/api/erstate/${this.props.userId}/`, { spy_mc: updated })
      .then((res) => {
        this.setState({
          mcSpy: updated,
          mc: "spy",
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putSpyroomUnlocked = () => {
    if (!this.state.spyroomUnlocked) {
      axios
        .patch(`/api/erstate/${this.props.userId}/`, { spyroom_unlocked: true })
        .then((res) => {
          this.setState({ spyroomUnlocked: true })
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  putLockersUnlocked = () => {
    axios
      .patch(`/api/erstate/${this.props.userId}/`, { lockers_unlocked: true })
      .then((res) => {
        this.setState({ lockersUnlocked: true })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putScanningUnlocked = () => {
    axios
      .patch(`/api/erstate/${this.props.userId}/`, { scanning_unlocked: true })
      .then((res) => {
        this.setState({ scanningUnlocked: true })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putClosetUnlocked = () => {
    axios
      .patch(`/api/erstate/${this.props.userId}/`, { closet_unlocked: true })
      .then((res) => {
        this.setState({ closetUnlocked: true })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putMechanicsUnlocked = () => {
    axios
      .patch(`/api/erstate/${this.props.userId}/`, {
        mechanics_unlocked: true,
      })
      .then((res) => {
        this.setState({ mechanicsUnlocked: true })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putMerchantUnlocked = () => {
    axios
      .patch(`/api/erstate/${this.props.userId}/`, {
        merchant_unlocked: true,
      })
      .then((res) => {
        this.setState({ merchantUnlocked: true })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putHologramUnlocked = () => {
    axios
      .patch(`/api/erstate/${this.props.userId}/`, {
        hologram_unlocked: true,
      })
      .then((res) => {
        this.setState({ hologramUnlocked: true })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putMemeUnlocked = () => {
    axios
      .patch(`/api/erstate/${this.props.userId}/`, {
        meme_unlocked: true,
      })
      .then((res) => {
        this.setState({ memeUnlocked: true })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  putElectricalBoxUnlocked = () => {
    axios
      .patch(`/api/erstate/${this.props.userId}/`, {
        electrical_box_unlocked: true,
      })
      .then((res) => {
        this.setState({ electricalBoxUnlocked: true })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleClickOpen = () => {
    this.setState({ open: true, newItem: false })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  select = (e) => {
    this.setState({ selected: e.currentTarget.getAttribute("id") })
  }

  onItemChanged = (e) => {
    this.setState({
      selected: e.currentTarget.value,
    })
  }

  pickUp = (it) => {
    this.setState({ newItem: true })
    axios
      .patch(`/api/inventory/${this.props.userId}/`, {
        [it]: true,
      })
      .then((res) => {
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

  reset = () => {
    axios
      .post("/api/er/reset", {
        userId: this.props.userId,
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      })
    window.location.reload()
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
                      src={`${S3Url}/er/${it}.png`}
                      style={{
                        cursor: "pointer",
                        borderColor: "red",
                        border:
                          this.state.selected === it ? "1px solid red" : "0px",
                        width: "50px",
                        height: "50px",
                      }}
                      alt={it}
                    />
                  </Grid>
                </label>
              </>
            )
          )
        })}
        <Grid item xs={3}>
          <img
            src={`${S3Url}/er/mc_merchant.png`}
            style={{
              cursor: "pointer",
              width: "50px",
              height: "50px",
            }}
            alt="mcMerchant"
          />
          <p>x {countSetBits(this.state.mcMerchant)}</p>
        </Grid>

        <Grid item xs={3}>
          <img
            src={`${S3Url}/er/mc_mechanic.png`}
            style={{
              cursor: "pointer",
              width: "50px",
              height: "50px",
            }}
            alt="mcMechanic"
          />
          <p>x {countSetBits(this.state.mcMechanic)}</p>
        </Grid>

        <Grid item xs={3}>
          <img
            src={`${S3Url}/er/mc_spy.png`}
            style={{
              cursor: "pointer",
              width: "50px",
              height: "50px",
            }}
            alt="mcSpy"
          />
          <p>x {countSetBits(this.state.mcSpy)}</p>
        </Grid>
      </>
    )
  }

  render() {
    const Comp = this.props.comp
    const cursorStyle = this.state.equipped
      ? { cursor: `url(${S3Url}/er/${this.state.equipped}_cursor.png), auto` }
      : { cursor: "default" }

    if (this.state.done) {
      return <p>Congrats you have escaped!</p>
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
            {...this.state}
            pickUp={this.pickUp}
            putSpyroomUnlocked={this.putSpyroomUnlocked}
            putLockersUnlocked={this.putLockersUnlocked}
            putMechanicsUnlocked={this.putMechanicsUnlocked}
            putMerchantUnlocked={this.putMerchantUnlocked}
            putClosetUnlocked={this.putClosetUnlocked}
            putElectricalBoxUnlocked={this.putElectricalBoxUnlocked}
            putHologramUnlocked={this.putHologramUnlocked}
            putScanningUnlocked={this.putScanningUnlocked}
            putMemeUnlocked={this.putMemeUnlocked}
            putMCSpy={this.putMCSpy}
            putMCMechanic={this.putMCMechanic}
            putMCMerchant={this.putMCMerchant}
            putDone={this.putDone}
          />
        </div>
        {this.state.mc !== null && (
          <MC color={this.state.mc} done={this.showedMC} />
        )}
        <Button
          style={inventoryStyle}
          onClick={this.handleClickOpen}
          className={this.state.newItem && styles.blob}
        >
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
            <Button onClick={this.reset}>Reset</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withRouter(ER)

import React, { Component } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"

const items = ["matches", "wrench", "usb", "soup", "knife", "paperclip"]

export default class Lockers extends Component {
  constructor(props) {
    super(props)
  }

  onClick = (e) => {
    console.log(e.currentTarget.alt)
    return this.props.pickUp(e.currentTarget.alt)
  }

  render() {
    return (
      <>
        <Typography variant="h1"> Lockers</Typography>
        {items.map((it) => {
          return (
            !this.props[it] && (
              <img src={`/media/${it}.png`} alt={it} onClick={this.onClick} />
            )
          )
        })}
      </>
    )
  }
}

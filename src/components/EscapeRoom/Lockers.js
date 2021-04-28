import React, { Component } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"

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
        <CssBaseline />
        <Typography variant="h1"> Escape Room Here! </Typography>
        {!this.props.matches && (
          <img src="#" alt="matches" onClick={this.onClick} />
        )}
        {!this.props.wrench && (
          <img src="#" alt="wrench" onClick={this.onClick} />
        )}
        {!this.props.usb && <img src="#" alt="usb" onClick={this.onClick} />}
        {!this.props.soup && <img src="#" alt="soup" onClick={this.onClick} />}
        {!this.props.knife && (
          <img src="#" alt="knife" onClick={this.onClick} />
        )}
        {!this.props.paperclip && (
          <img src="#" alt="paperclip" onClick={this.onClick} />
        )}
      </>
    )
  }
}

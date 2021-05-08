import ModalBox from "../UI/ModalBox"
import React, { Component } from "react"

export class BlueMC extends Component {
  render() {
    return (
      <ModalBox buttonText="OK">
        <p>You've acquired a memory chip</p>
        <img src="" alt="merchant (blue) chip" />
      </ModalBox>
    )
  }
}

export class RedMC extends Component {
  render() {
    return (
      <ModalBox buttonText="OK">
        <p>You've acquired a memory chip</p>
        <img src="" alt="mechanic (red) chip" />
      </ModalBox>
    )
  }
}

export class GreenMC extends Component {
  render() {
    return (
      <ModalBox buttonText="OK">
        <p>You've acquired a memory chip</p>
        <img src="" alt="spy (green) chip" />
      </ModalBox>
    )
  }
}

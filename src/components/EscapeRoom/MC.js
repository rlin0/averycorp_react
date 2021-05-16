import ModalBox from "../UI/ModalBox"
import React, { Component } from "react"
import { S3Url } from "../../helpers"

export default class MC extends Component {
  componentWillUnmount() {
    this.props.done()
  }

  render() {
    return (
      <ModalBox buttonText="OK">
        <p>You've acquired a memory chip</p>
        <img
          src={`${S3Url}/er/mc_${this.props.color}.png`}
          alt={`${this.props.color} chip`}
        />
      </ModalBox>
    )
  }
}

import React, { Component } from 'react'
import myVideo from "./lemon.mp4"

export default class CityIntroScene extends Component {
  render() {
    return (
      <video autoPlay onEnded={this.props.next}>
        <source src={myVideo} type="video/mp4" />
      </video>
    )
  }
}

import React from "react"
import myVideo from "./lemon.mp4"

class CityIntroScene extends React.Component {
  render() {
    return (
      <video autoPlay onEnded={this.props.next}>
        <source src={myVideo} type="video/mp4" />
      </video>
    )
  }
}
export default CityIntroScene

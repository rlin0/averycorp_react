import React, { Component } from "react"
import ReactDOM from "react-dom"
import Draggable, { DraggableCore } from "react-draggable" // Both at the same time

export default class Jigsaw extends Component {
  constructor() {
    super()
  }

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5)
  }

  renderPieces = () => {
    var arr = []
    const width = 3
    const size = 50
    const padding = 5
    // array of [0, 8]
    var pieces = [...Array(9).keys()]
    this.shuffle(pieces)
    for (let i = 0; i < 9; i++) {
      arr.push(
        <Draggable>
          <img
            style={{
              height: `${size}px`,
              width: `${size}px`,
              left: `${(i % width) * (size + padding)}px`,
              top: `${Math.floor(i / width) * (size + padding)}px`,
              position: "absolute",
            }}
            src={`/media/jigsaw/${pieces[i] + 1}.png`}
          />
        </Draggable>
      )
    }
    return arr
  }

  render() {
    return <div style={{ position: "relative" }}>{this.renderPieces()}</div>
  }
}
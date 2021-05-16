import React, { Component } from "react"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import { CssBaseline, Button } from "@material-ui/core"
import { S3Url } from "../../helpers.js"

const background = {
  backgroundImage: S3Url + "/er/electrical.png",
}

export default class Flow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: null,
    }
    for (let i = 0; i < this.props.dim; i++) {
      for (let j = 0; j < this.props.dim; j++) {
        let s = "t" + i.toString() + "-" + j.toString()
        this.state[s] = null
      }
    }
  }

  checkAnswer = () => {
    for (let i = 0; i < this.props.dim; i++) {
      for (let j = 0; j < this.props.dim; j++) {
        let s = "t" + i.toString() + "-" + j.toString()
        if (this.props.tileInitial.get(s) !== null) continue
        if (this.state[s] !== this.props.answer[i][j]) {
          return false
        }
      }
    }
    return true
  }

  render() {
    if (this.checkAnswer()) {
      return (
        <>
          <h3>Solved!</h3>
          <Button onClick={this.props.solved}>Next</Button>
        </>
      )
    }
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${S3Url + "/er/electrical.png"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div style={{ width: "50%", margin: "auto" }}>
            <GridList cellHeight={40} cols={this.props.dim}>
              {Array.from(this.props.tileInitial.keys()).map((key) => {
                let value = this.props.tileInitial.get(key)
                if (value !== null) {
                  return (
                    <GridListTile
                      key={key}
                      cols={1}
                      onMouseDown={() => {
                        this.setState({ color: value })
                      }}
                    >
                      <Tile color={value} char="o" />
                    </GridListTile>
                  )
                } else {
                  return (
                    <GridListTile
                      key={key}
                      cols={1}
                      onClick={() => {
                        this.setState({ [key]: this.state.color })
                      }}
                      onMouseOver={(e) => {
                        if (e.buttons === 1) {
                          this.setState({ [key]: this.state.color })
                        }
                      }}
                    >
                      <Tile color={this.state[key]} char="" />
                    </GridListTile>
                  )
                }
              })}
            </GridList>
            <Button onClick={() => this.setState({ color: null })}>
              Erase
            </Button>
          </div>
        </div>
      </>
    )
  }
}

class Tile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Button
          variant="outlined"
          style={{
            backgroundColor: this.props.color,
            width: "30px",
            height: "30px",
          }}
        >
          {this.props.char}
        </Button>
      </>
    )
  }
}
import React, { Component } from "react"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import { CssBaseline, Button } from "@material-ui/core"
import { S3Url } from "../../helpers.js"
import { withRouter, Link } from "react-router-dom"
import ZoomModal from "../UI/ZoomModal.js"

const maintenance = {
  left: "72.75%",
  top: "0%",
  width: "27.25%",
  height: "99.88%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
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

  reset = () => {
    this.props.tileInitial.forEach((value, key) => {
      if (value === null) {
        this.setState({ [key]: null })
      }
    })
  }
  render() {
    return (
      <>
        <div
          style={{
            height: "100vh",
            backgroundImage: `url(${S3Url + "/er/electrical.png"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <Link style={maintenance} to="/er/maintenance" />

          <div
            style={{
              position: "absolute",
              top: "25%",
              left: "15%",
            }}
          >
            {this.checkAnswer() && (
              <>
                <h3>Solved!</h3>
                <Button onClick={this.props.solved}>Next</Button>
              </>
            )}
            <GridList
              cellHeight={40}
              spacing={0}
              cols={this.props.dim}
              style={{ width: "40%" }}
            >
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
                      <Tile color={value} char="O" />
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

            <Button onClick={this.reset}>Reset</Button>
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
            width: "10px",
            height: "40px",
          }}
        >
          {this.props.char}
        </Button>
      </>
    )
  }
}

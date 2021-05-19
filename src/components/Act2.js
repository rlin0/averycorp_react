import React, { Component } from "react"
import axios from "axios"
import { Typography, Popover } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { Link } from "react-router-dom"
import { S3Url } from "../helpers.js"

const pin1 = {
  width: "5%",
  height: "15%",
  left: "37%",
  top: "15%",
  position: "absolute",
  cursor: "pointer",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const pin2 = {
  width: "5%",
  height: "15%",
  left: "5%",
  top: "64%",
  position: "absolute",
  cursor: "pointer",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const pin3 = {
  width: "5%",
  height: "15%",
  left: "31%",
  top: "58%",
  position: "absolute",
  cursor: "pointer",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const pin4 = {
  width: "5%",
  height: "15%",
  left: "65%",
  top: "13%",
  position: "absolute",
  cursor: "pointer",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const pin5 = {
  width: "5%",
  height: "15%",
  left: "60%",
  top: "70%",
  position: "absolute",
  cursor: "pointer",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const pin6 = {
  width: "5%",
  height: "15%",
  left: "45%",
  top: "32%",
  position: "absolute",
  cursor: "pointer",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const useStyles = (theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
})

class Act2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      solved_puzzles: 0,
      solved: 0,
      anchorEl: null,
    }
  }

  componentDidMount() {
    this.getSolvedPuzzles()
  }

  getSolvedPuzzles = () => {
    axios
      .get(`/api/team/${this.props.teamId}/`)
      .then((res) => {
        this.setState({
          solved_puzzles: parseInt(res.data.puzzles_done),
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handlePopoverOpen = (event) => {
    const id = parseInt(event.currentTarget.getAttribute("alt"))

    this.setState({
      name: event.currentTarget.getAttribute("title"),
      solved: this.state.solved_puzzles & (1 << (id - 1)),
      anchorEl: event.currentTarget,
    })
  }

  handlePopoverClose = () => {
    this.setState({
      anchorEl: null,
    })
  }

  render() {
    const open = Boolean(this.state.anchorEl)

    return (
      <>
        {/* Image Map Generated by https://12oss.github.io/linkresponsively/ */}
        <div style={{ float: "left", position: "relative", width: "100%" }}>
          <img src={`${S3Url}/map.svg`} width="100%" />
          <Link
            title="BotW"
            to="/act2/puzzle1"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={this.handlePopoverOpen}
            onMouseLeave={this.handlePopoverClose}
            style={pin1}
          >
            <img src={`${S3Url}/purple_pin.svg`} height="100%" />
          </Link>
          <Link
            title="Code Transcription"
            to="/act2/puzzle2"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={this.handlePopoverOpen}
            onMouseLeave={this.handlePopoverClose}
            style={pin2}
          >
            <img src={`${S3Url}/purple_pin.svg`} height="100%" />
          </Link>
          <Link
            title="Crossword"
            to="/act2/puzzle3"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={this.handlePopoverOpen}
            onMouseLeave={this.handlePopoverClose}
            style={pin3}
          >
            <img src={`${S3Url}/purple_pin.svg`} height="100%" />
          </Link>
          <Link
            title="ID Card"
            to="/act2/puzzle4"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={this.handlePopoverOpen}
            onMouseLeave={this.handlePopoverClose}
            style={pin4}
          >
            <img src={`${S3Url}/purple_pin.svg`} height="100%" />
          </Link>
          <Link
            title="Spot the Difference"
            to="/act2/puzzle5"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={this.handlePopoverOpen}
            onMouseLeave={this.handlePopoverClose}
            style={pin5}
          >
            <img src={`${S3Url}/purple_pin.svg`} height="100%" />
          </Link>
          <Link
            title="Headquarters"
            to="/act2/puzzle6"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={this.handlePopoverOpen}
            onMouseLeave={this.handlePopoverClose}
            style={pin6}
          >
            <img src={`${S3Url}/pink_pin.svg`} height="100%" />
          </Link>
          <Popover
            id="mouse-over-popover"
            className={this.props.classes.popover}
            classes={{
              paper: this.props.classes.paper,
            }}
            open={open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={this.handlePopoverClose}
            disableRestoreFocus
          >
            <Typography>
              <h3>{this.state.name}</h3>
              {this.state.solved === 1 ? <p>Solved!</p> : <p>Not solved</p>}
            </Typography>
          </Popover>
        </div>
      </>
    )
  }
}
export default withStyles(useStyles)(Act2)

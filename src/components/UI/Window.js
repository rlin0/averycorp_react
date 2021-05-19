import React, { Component } from "react"
import { withStyles } from "@material-ui/styles"
import { Popover } from "@material-ui/core"

const useStyles = (theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
})

class Window extends Component {
  constructor(props) {
    super(props)
    this.state = {
      window: false,
      anchorEl: null,
    }
  }

  render() {
    return (
      <>
        <div
          style={this.props.style}
          aria-owns={this.state.window ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={(e) =>
            this.setState({ window: true, anchorEl: e.currentTarget })
          }
          onMouseLeave={(e) => this.setState({ window: false, anchorEl: null })}
        />
        <Popover
          id="mouse-over-popover"
          className={this.props.classes.popover}
          classes={{
            paper: this.props.classes.paper,
          }}
          open={this.state.window}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
          <img src={this.props.link} />
        </Popover>
      </>
    )
  }
}
export default withStyles(useStyles)(Window)

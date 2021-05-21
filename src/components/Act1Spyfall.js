import React, { Component } from "react"
import { Button, Typography, TextField } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import axios from "axios"

const styles = {
  root: {
    margin: 1,
    width: "25ch",
  },
}

class Act1Spyfall extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div style={{ float: "left", width: "50%" }}>
          <Typography variant="h1"> Spyfall! </Typography>
          Airplane <br /> Bank <br /> Beach <br /> Broadway <br /> Theater{" "}
          <br /> Casino <br /> Cathedral <br /> Circus Tent <br /> Corporate
          Party <br /> Crusader Army <br /> Day Spa <br /> Embassy <br /> Gaming
          Convention <br /> Hospital <br /> Hotel <br /> Military Base <br />{" "}
          Movie Studio <br /> Ocean Liner <br />
          Passenger Train <br /> Pirate Ship <br /> Polar Station <br /> Police
          Station <br />
          Restaurant <br /> School <br /> Service Station <br /> Space Station{" "}
          <br /> Submarine <br />
          Supermarket <br /> University
        </div>
        <div style={{ float: "left", width: "50%", padding: "10px" }}>
          <h2>Rules: </h2>
          One of you will play the role of a spy, trying to figure out where the
          entrance to the largest resistance hideout lies. Only the resistance
          members know the location. Everyone must ask questions to figure out
          who the spy is. But remember, every word also gives the spy more
          information... <br />
          <br />
          The person whose first name comes first alphabetically will go first.
          Choose someone and ask them about the location. For example, you might
          ask, "is this a place where children are welcome?" After they answer,
          it’s their turn, and so on. <br />
          <br /> At any point, anyone can call for a vote to indict someone. If
          everyone but the indicted agrees, the game ends. If the spy was
          caught, the resistance wins, and if not, they lose. However, the spy
          can also end the game at any point by guessing the location! Good
          luck…
        </div>
      </>
    )
  }
}
export default withStyles(styles)(Act1Spyfall)

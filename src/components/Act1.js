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

class Act1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: new Array(17).fill(null),
      prompts: [
        "number",
        "profession",
        "plural noun",
        "adjective noun",
        "adverb",
        "verb ending in -ing",
        "place",
        "person's name",
        "noun",
        "plural noun",
        "adjective",
        "imperative statement",
        "verb ending in -ing",
        "length of time",
        "verb",
        "body part",
        "verb",
      ],
    }
  }

  valid = (element) => {
    return /^([a-zA-Z0-9 !.,]{1,})$/.test(element)
  }

  handleSubmit = (e) => {
    const lst = this.state.fields.reduce((accumulator, cur) => {
      return [...accumulator, cur]
    }, [])
    if (lst.every(this.valid)) {
      console.log("valid text: " + lst.join())
      axios
        .post("/api/madlib/post", {
          userId: this.props.userId,
          fields: lst.join(),
        })
        .then((res) => {
          if (res.data.success) {
            console.log("success")
          } else {
            alert("error posting")
          }
          console.log(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
    } else alert("invalid text: " + lst.join())
  }

  handleInput = (evt) => {
    const name = evt.target.id
    const newValue = evt.target.value
    const fields = [...this.state.fields]
    fields[parseInt(name)] = newValue
    this.setState({ fields })
  }

  render() {
    return (
      <>
        <div style={{ float: "left", width: "50%" }}>
          <Typography variant="h1"> Madlibs! </Typography>
          <form
            onSubmit={this.handleSubmit}
            className={this.props.classes.root}
            noValidate
            autoComplete="off"
          >
            {this.state.prompts.map((currentValue, index) => {
              return (
                <TextField
                  id={index.toString()}
                  key={index.toString()}
                  label={currentValue}
                  onChange={this.handleInput}
                />
              )
            })}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
        <div style={{ float: "left", width: "50%" }}>
          <Typography variant="h1"> Spyfall! </Typography>
          Airplane <br> Bank <br> Beach <br> Broadway <br> Theater <br> Casino <br> Cathedral <br> Circus
          Tent <br> Corporate Party <br> Crusader Army <br> Day Spa <br> Embassy <br> Gaming
          Convention <br> Hospital <br> Hotel <br> Military Base <br> Movie Studio <br> Ocean Liner <br>
          Passenger Train <br> Pirate Ship <br> Polar Station <br> Police Station <br>
          Restaurant <br> School <br> Service Station <br> Space Station <br> Submarine <br>
          Supermarket <br> University
        </div>
      </>
    )
  }
}
export default withStyles(styles)(Act1)

import React, { Component } from "react"
import { Button, Typography, TextField } from "@material-ui/core"
import axios from "axios"
import { Link } from "react-router-dom"
import Puzzle from "./Puzzle"
import { S3Url } from "../helpers"
import Grid from "@material-ui/core/Grid"

export default class Credits extends Component {
  render() {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img src={`${S3Url}/shirt.png`} style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={6}>
            <h2> act 01 </h2>
            <p>Albie, </p>
            <h2> act 02 </h2>
            <p>LC, Albert, Albie, Steve, Zimo</p>
            <h2> act 03 </h2>
            <p>David, James, Sherry</p>
            <h2> artwork </h2>
            <p>Lucy, James</p>
            <h2> organizing us fools </h2>
            <p>James, Yuhan, Lucy </p>
            <h2> idea/story cred </h2>
            <p>James, Yuhan</p>
          </Grid>
        </Grid>
      </>
    )
  }
}

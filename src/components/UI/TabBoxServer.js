import React, { Component } from "react"
import { Typography, AppBar, Tabs, Tab, Box } from "@material-ui/core"
import { S3Url } from "../../helpers"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
const labels = ["spy", "merchant", "mechanic"]

export default class TabBoxServer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabletVal: 0,
    }
  }

  tabletHandleChange = (event, newVal) => {
    this.setState({ tabletVal: newVal })
  }

  renderText = (allowed) => {
    if (allowed)
      return (
        <>
          <h3>
            You activate the memory units .... What? An image is being projected
            into your mind! So this is a moment in the{" "}
            {labels[this.state.tabletVal]}’s life … What does it mean? It seems
            as though all the images are hinting at the final code to access the
            server room. Maybe there’s an underlying string that ties all these
            memories together?
          </h3>
          <img
            src={`${S3Url}/er/final_${labels[this.state.tabletVal]}.png`}
            alt={`memory of ${labels[this.state.tabletVal]}`}
            style={{ width: "600px", height: "300px" }}
          />
        </>
      )
    else
      return (
        <h3>
          You do not seem to have the required pieces to get access to the{" "}
          {labels[this.state.tabletVal]}’s memories at the Memory Storage Unit
        </h3>
      )
  }

  render() {
    return (
      <>
        <AppBar position="static">
          <Tabs
            value={this.state.tabletVal}
            onChange={this.tabletHandleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Spy" {...a11yProps(0)} />
            <Tab label="Merchant" {...a11yProps(1)} />
            <Tab label="Mechanic" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.tabletVal} index={0}>
          {this.renderText(this.props.mcSpy === 7)}
        </TabPanel>
        <TabPanel value={this.state.tabletVal} index={1}>
          {this.renderText(this.props.mcMerchant === 7)}
        </TabPanel>
        <TabPanel value={this.state.tabletVal} index={2}>
          {this.renderText(this.props.mcMechanic === 7)}
        </TabPanel>
      </>
    )
  }
}

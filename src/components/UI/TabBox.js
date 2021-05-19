import React, { Component } from "react"
import { Typography, AppBar, Tabs, Tab, Box } from "@material-ui/core"
import "react-clock/dist/Clock.css"

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

export default class TabBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabletVal: 0,
    }
  }

  tabletHandleChange = (event, newVal) => {
    this.setState({ tabletVal: newVal })
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
            <Tab style={{ color: "red" }} label="Spy" {...a11yProps(0)} />
            <Tab style={{ color: "blue" }} label="Merchant" {...a11yProps(1)} />
            <Tab
              style={{ color: "yellow" }}
              label="Mechanic"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.tabletVal} index={0}>
          {this.props.left}
        </TabPanel>
        <TabPanel value={this.state.tabletVal} index={1}>
          {this.props.center}
        </TabPanel>
        <TabPanel value={this.state.tabletVal} index={2}>
          {this.props.right}
        </TabPanel>
      </>
    )
  }
}

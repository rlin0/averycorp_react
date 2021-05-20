import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import SvgIcon from "@material-ui/core/SvgIcon"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import { ListItemLink } from "./Links"
import { ReactComponent as AverycorpLogo } from "../../images/logo_A_fill_w.svg"

const menuLinks = [
  {
    label: "act 00: inception",
    link: "/act0",
  },
  {
    label: "act 01: coalition",
    link: "/act1",
  },
  {
    label: "act 02: expedition",
    link: "/act2",
  },
  {
    label: "act 03: injection",
    link: "/er",
  },
  {
    label: "act 04: termination",
    link: "/act4",
  },
  {
    label: "credits",
    link: "/credits",
  },
]

export default class Header extends Component {
  render() {
    return (
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <SideBar />
          <Typography variant="h6">
            WELCOME, {this.props.username.toUpperCase()}. TEAM{" "}
            {this.props.team.toUpperCase()}.
          </Typography>
          <SvgIcon
            component={AverycorpLogo}
            fontSize="large"
            viewBox="0 -50 240 240"
          />
          <Button color="inherit" onClick={this.props.logout} size="large">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

// source: https://material-ui.com/components/drawers/#temporary-drawer
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

function SideBar() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    isOpen: false,
  })

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, isOpen: open })
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemLink key="home" primary="home" to="/" />
        <ListItemLink key="profile" primary="profile" to="/profile" />
      </List>
      <Divider />
      <List>
        {menuLinks.map((menuItem) => (
          <ListItemLink
            key={menuItem.label}
            primary={menuItem.label}
            to={menuItem.link}
          />
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <>
        <IconButton
          onClick={toggleDrawer(true)}
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="sidebar"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={state.isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </>
    </div>
  )
}

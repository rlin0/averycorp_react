import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { ListItemLink } from './Links';

const menuLinks = [
  {
    label: 'act 0',
    link: '/act0',
  },
  {
    label: 'act 1',
    link: '/act1',
  },
  {
    label: 'map',
    link: '/map',
  },
  {
    label: 'escape room',
    link: '/escaperoom',
  },
  {
    label: 'act 4',
    link: '/act4',
  },
];

export default class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <SideBar />
          <Typography variant="h6">Welcome, {this.props.username}</Typography>
          <Button color="inherit" onClick={this.props.logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
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
}));

function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    isOpen: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, isOpen: open });
  };

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
  );

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
  );
}

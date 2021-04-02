import React from "react"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Welcome {this.props.username}
          </Typography>
          <Button color="inherit" onClick={this.props.logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header

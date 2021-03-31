import React, { useState } from "react"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const Header = ({ loggedInUser, logout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Welcome {loggedInUser}
        </Typography>
        <Button color="inherit" onClick={logout}>Logout</Button>
      </Toolbar>
    </AppBar>
  )

}

export default Header

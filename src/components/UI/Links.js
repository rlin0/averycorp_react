// source: https://material-ui.com/guides/composition/#routing-libraries
import React from "react"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { NavLink as RouterLink } from "react-router-dom"

// usage: <ButtonLink buttonText={text} to={path} />
export function ButtonLink(props) {
  const { buttonText, to, ...other } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <Button color="primary" component={renderLink} {...other}>
      {buttonText}
    </Button>
  )
}

// usage: <IconLink icon={myIcon} to={path} />
export function IconLink(props) {
  const { icon, to, ...other } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <IconButton component={renderLink} {...other}>
      {icon}
    </IconButton>
  )
}

// usage: <LinkRouter linkText={text} to={path} />
export function LinkRouter(props) {
  const { linkText, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return <Link component={renderLink}>{linkText}</Link>
}

// usage: <ListItemLink primary={text} to={path} />
export function ListItemLink(props) {
  const { icon, primary, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  )
}

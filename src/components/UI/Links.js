// source: https://material-ui.com/guides/composition/#routing-libraries
import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink as RouterLink } from 'react-router-dom';

// usage: <ButtonLink buttonText={text} to={path} /ButtonLink>
export function ButtonLink(props) {
  const { buttonText, to, ...other } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <Button color="primary" component={renderLink} {...other}>
      {buttonText}
    </Button>
  );
}

// usage: <LinkRouter linkText={text} to={path} /LinkRouter>
export function LinkRouter(props) {
  const { linkText, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return <Link component={renderLink}>{linkText}</Link>;
}

// usage: <ListItemLink primary={text} to={path} /ListItemLink>
export function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
}

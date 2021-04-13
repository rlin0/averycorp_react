import { createMuiTheme } from '@material-ui/core/styles';
import {
  red,
  pink,
  purple,
  deepPurple,
  blue,
  green,
  yellow,
  grey,
} from '@material-ui/core/colors';

// This is still tentative!!!
const AVERYCORP_THEME = createMuiTheme({
  // color palette
  palette: {
    type: 'dark',
    primary: {
      main: purple.A700,
    },
    secondary: {
      main: pink[600],
    },
    text: {
      primary: '#f5f',
    },
  },
  // style of Material-UI components
  overrides: {
    MuiTypography: {
      root: {
        flexGrow: 1,
      },
    },
  },
  // default props of Material-UI components
  props: {},
});

export default AVERYCORP_THEME;

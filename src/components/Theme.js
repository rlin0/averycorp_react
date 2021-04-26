import { createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';
import OCRA from '../fonts/OcrA.ttf';
import BabaPro from '../fonts/BabaPro-Bold.ttf';

const ocra = {
  fontFamily: 'OCRA',
  src: `
    local('OCRA'),
    url(${OCRA}) format('truetype')
  `,
};

const babapro = {
  fontFamily: 'BabaPro',
  src: `
    local('BabaPro-Bold'),
    url(${BabaPro}) format('truetype')
  `,
};

// This is still tentative!!!
const AVERYCORP_THEME = createMuiTheme({
  // color palette
  palette: {
    type: 'dark',
    primary: {
      main: purple.A700,
    },
    secondary: {
      main: '#ed1f8f',
    },
    error: {
      main: '#ed2924',
    },
    warning: {
      main: '#fccd09',
    },
    info: {
      main: '#6fccdc',
    },
    success: {
      main: green.A400,
    },
    text: {
      primary: purple.A100,
      secondary: purple.A200,
    },
    background: {
      default: '#252525',
      paper: '#353535',
    },
  },
  typography: {
    fontFamily: [
      'OCRA',
      'Consolas',
      'Menlo',
      'Monaco',
      'monospace',
      'Roboto',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  // style of Material-UI components
  overrides: {
    MuiTypography: {
      root: {
        flexGrow: 1,
        whiteSpace: 'pre-wrap',
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [ocra],
      },
    },
  },
  // default props of Material-UI components
  props: {},
});

export default AVERYCORP_THEME;

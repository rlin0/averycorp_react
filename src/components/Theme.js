import { createMuiTheme } from "@material-ui/core/styles"
import { purple, green, grey } from "@material-ui/core/colors"
import OCRA from "../fonts/OcrA.ttf"
import BabaPro from "../fonts/BabaPro-Bold.ttf"
import BergenMono from "../fonts/BergenMono-Bold.woff"

// normal text font
const ocra = {
  fontFamily: "OCRA",
  src: `
    local('OCRA'),
    url(${OCRA}) format('truetype')
  `,
}

// fancy display font
const babapro = {
  fontFamily: "BabaPro",
  src: `
    local('BabaPro-Bold'),
    url(${BabaPro}) format('truetype')
  `,
}

// emph/header font
const bergenmono = {
  fontFamily: "Bergen Mono",
  src: `
    local('BergenMono-Bold'),
    url(${BergenMono}) format('woff')
  `,
}

// This is still tentative!!!
const AVERYCORP_THEME = createMuiTheme({
  // color palette
  palette: {
    type: "dark",
    primary: {
      main: purple.A700,
    },
    secondary: {
      main: "#0a1015",
    },
    error: {
      main: "#ed2924",
    },
    warning: {
      main: "#fccd09",
    },
    info: {
      main: "#6fccdc",
    },
    success: {
      main: green.A400,
    },
    text: {
      primary: grey[100],
      secondary: grey[400],
    },
    background: {
      default: "#181818",
      paper: "#252525",
    },
  },
  typography: {
    fontFamily: [
      "OCRA",
      "Consolas",
      "Menlo",
      "Bergen Mono",
      "Monaco",
      "monospace",
      "Roboto",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h6: {
      fontFamily: "Bergen Mono, Consolas, Menlo, monospace, Roboto, sans serif",
    },
    button: {
      fontFamily: "Bergen Mono, Consolas, Menlo, monospace, Roboto, sans serif",
    },
  },
  // style of Material-UI components
  overrides: {
    MuiTypography: {
      root: {
        flexGrow: 1,
        whiteSpace: "pre-wrap",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [ocra],
      },
    },
  },
  // default props of Material-UI components
  props: {},
})

export default AVERYCORP_THEME

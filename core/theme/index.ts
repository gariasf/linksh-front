import { createMuiTheme } from "@material-ui/core";

export default (prefersDarkMode) => createMuiTheme({
  typography: {
    fontFamily: [
      '"Nunito Sans"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    type:  prefersDarkMode ? 'dark' : 'light',
    primary: { main: "#E91E63" },
    secondary: { main: "#00E5FF" },
  },
});

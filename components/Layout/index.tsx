import React from "react";
import { DocumentHead } from "./document-head";
import { DocumentContent } from "./document-content";
import { DocumentFooter } from "./document-footer";

import "./styles.scss";
import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  useMediaQuery,
} from "@material-ui/core";

export const Layout = (props: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
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
          type: prefersDarkMode ? "dark" : "light",
          primary: { main: "#E91E63" },
          secondary: { main: "#00E5FF" },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <div className="layout">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DocumentHead />
        <DocumentContent>{props.children}</DocumentContent>
        <DocumentFooter />
      </ThemeProvider>
    </div>
  );
};

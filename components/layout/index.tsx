import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { DocumentHead } from "./document-head";
import { DocumentContent } from "./document-content";
import { DocumentFooter } from "./document-footer";

import "@shared/styles/index.scss";
import "./styles.scss";

import generateCoreTheme from "@core/theme";
import Head from "next/head";

const Layout = (props: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const coreTheme = generateCoreTheme(prefersDarkMode);
  const theme = React.useMemo(() => coreTheme, [prefersDarkMode]);

  return (
    <div className="layout">
      <Head>
        <title>Linksh | URL Shortener, Custom links & Link Managment</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DocumentHead />
        <DocumentContent>{props.children}</DocumentContent>
        <DocumentFooter />
      </ThemeProvider>
    </div>
  );
};

export default Layout;

import { APP_VERSION } from "@core/version";
import { Link } from "@material-ui/core";
import React from "react";
import "./styles.scss";

export const DocumentFooter = () => {
  return (
    <footer>
      <Link href="https://nethruster.com" target="_blank">
        <span>Nethruster</span>
      </Link>
      &nbsp;-&nbsp;
      <Link href="https://github.com/nethruster/linksh-front" target="_blank">
        <span>Linksh v{APP_VERSION}</span>
      </Link>
    </footer>
  );
};

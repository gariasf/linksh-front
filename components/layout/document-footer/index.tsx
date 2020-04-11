import { Link } from "@material-ui/core";
import React from "react";
import "./styles.scss";

export const DocumentFooter = () => {
  return (
    <footer>
      <Link href="https://nethruster.com" target="_blank" rel="noopener">
        <span>Nethruster</span>
      </Link>
      &nbsp;-&nbsp;
      <Link
        href="https://github.com/nethruster/linksh-front"
        target="_blank"
        rel="noopener"
      >
        <span>Linksh</span>
      </Link>
    </footer>
  );
};

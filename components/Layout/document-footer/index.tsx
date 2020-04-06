import React from "react";
import { APP_VERSION } from "@core/version";

import "./styles.scss";

export const DocumentFooter = () => (
  <footer>
    <small>Nethruster</small> - <small>linksh v{APP_VERSION}</small>
  </footer>
);

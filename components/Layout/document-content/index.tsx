import React from "react";

import "./styles.scss";

export const DocumentContent = (props: { children: React.ReactNode }) => (
  <main>{props.children}</main>
);

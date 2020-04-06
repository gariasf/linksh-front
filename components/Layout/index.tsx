import React from "react";
import { DocumentHead } from "./document-head";
import { DocumentContent } from "./document-content";
import { DocumentFooter } from "./document-footer";

import "./styles.scss";

export const Layout = (props: { children: React.ReactNode }) => (
  <div className="layout">
    <DocumentHead />
    <DocumentContent>{props.children}</DocumentContent>
    <DocumentFooter />
  </div>
);

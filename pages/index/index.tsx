import React, { useEffect } from "react";

import "./styles.scss";
import Router from "next/router";
import { CircularProgress } from "@material-ui/core";
import Layout from "@components/layout";

const Index = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/auth");
    }
  });
  return (
    <Layout>
      <CircularProgress color="secondary" />
    </Layout>
  );
};

export default Index;

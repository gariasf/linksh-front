import { Layout } from "@components/layout";
import { CircularProgress, Backdrop } from "@material-ui/core";
import Router from "next/router";
import React, { useEffect } from "react";
import "./styles.scss";

const Index = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/auth");
    }
  });

  return (
    <Layout>
      <Backdrop className="loading-backdrop" open={true}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </Layout>
  );
};

export default Index;

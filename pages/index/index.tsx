import React from "react";

import "@shared/styles/index.scss";
import { Layout } from "@components/Layout";

import "./styles.scss";

const Index = () => (
  <Layout>
    <section className="home">
      <img className="home__hero-img" src="./img/home-banner.svg" />
      <div className="home__hero">
        <div className="home__hero__card"></div>
      </div>
    </section>
  </Layout>
);

export default Index;

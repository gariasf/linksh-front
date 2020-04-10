import React from "react";

import BrandBanner from "@components/brand-banner";
import ShortenLink from "@components/shorten-link";

import "./styles.scss";
import Layout from "@components/layout";
import { Button, Link } from "@material-ui/core";

const Home = () => {
  return (
    <Layout>
      <section className="home">
        <BrandBanner />
        <div className="home_hero">
          <ShortenLink />
        </div>
      </section>
    </Layout>
  );
};

export default Home;

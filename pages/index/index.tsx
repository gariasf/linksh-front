import React from "react";

import BrandBanner from "@components/brand-banner";
import ShortenLink from "@components/shorten-link";
import Layout from "@components/layout";

import "./styles.scss";

const Index = () => {
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

export default Index;

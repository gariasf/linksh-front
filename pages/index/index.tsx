import BrandBanner from "@components/brand-banner";
import { Layout } from "@components/Layout";
import ShortenLink from "@components/shorten-link";
import "@shared/styles/index.scss";
import React from "react";
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

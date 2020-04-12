import { BrandBanner } from "@components/brand-banner";
import { Layout } from "@components/layout";
import { ShortenLink } from "@components/shorten-link";
import React from "react";
import "./styles.scss";

const Home = () => {
  return (
    <Layout>
      <section className="home">
        <div className="home_hero">
          <ShortenLink />
        </div>
      </section>
    </Layout>
  );
};

export default Home;

import { Layout } from "@components/layout";
import { LinkSummaryItem } from "@components/layout/link-summary-item";
import { ShortenLink } from "@components/shorten-link";
import { Paper } from "@material-ui/core";
import React from "react";
import "./styles.scss";

const Home = () => {
  return (
    <Layout>
      <section className="create-link">
        <div className="create-link_hero">
          <ShortenLink />
        </div>
      </section>
      <section className="link-history">
        <Paper variant="outlined" style={{ padding: "16px" }}>
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
          <LinkSummaryItem />
        </Paper>
      </section>
    </Layout>
  );
};

export default Home;

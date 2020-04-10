import React from "react";
import Layout from "@components/layout";
import { Button } from "@material-ui/core";
import Link from 'next/link'

const Auth = () => {
  return (
    <Layout>
      <section className="auth">
        <p>Auth</p>
        <Link href="/home"><Button color="primary" variant="outlined">Go to home</Button></Link>
      </section>
    </Layout>
  );
};

export default Auth;

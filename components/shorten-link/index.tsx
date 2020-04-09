import { Card, CardContent, Link, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "@shared/styles/index.scss";
import React from "react";
import "./styles.scss";

const ShortenLink = () => {
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <Card className="link-form_card" variant="outlined">
      <CardContent>
        <form autoComplete="off" noValidate className="link-form">
          <TextField
            name="url"
            label="Shorten your link"
            variant="outlined"
            className="link-form_input"
            color="secondary"
          />
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
            disableElevation
          >
            Shorten
          </Button>
        </form>
        <Typography
          className="link-form_terms"
          variant="caption"
          display="block"
          color="textSecondary"
        >
          By clicking SHORTEN, you are agreeing to Linksh'&nbsp;
          <Link href="#" onClick={preventDefault} color="secondary">
            Terms of Service
          </Link>
          &nbsp; and&nbsp;
          <Link href="#" onClick={preventDefault} color="secondary">
            Privacy Policy
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShortenLink;

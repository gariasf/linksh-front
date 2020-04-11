import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import React from "react";
import "./styles.scss";

export const ShortenLink = () => {
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
      </CardContent>
    </Card>
  );
};

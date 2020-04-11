import { Layout } from "@components/layout";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Switch,
  TextField,
} from "@material-ui/core";
import AccountCircleOutline from "@material-ui/icons/AccountCircleOutlined";
import VisibilityOffOutlined from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlined from "@material-ui/icons/VisibilityOutlined";
import VpnKeyOutlined from "@material-ui/icons/VpnKeyOutlined";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import "./styles.scss";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
  rememberSession: boolean;
}

const Auth = () => {
  const router: NextRouter = useRouter();
  const [values, setValues] = React.useState<State>({
    username: "",
    password: "",
    showPassword: false,
    rememberSession: true,
  });

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/home");
  };

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  return (
    <Layout>
      <section className="auth">
        <Card variant="outlined">
          <CardHeader
            title="Welcome back!"
            subheader="If you don't have an account please contact an administrator."
          />
          <CardContent>
            <form className="login-form" onSubmit={login}>
              <div>
                <TextField
                  required
                  id="login-username"
                  label="Username"
                  variant="outlined"
                  autoComplete="current-username"
                  fullWidth
                  className="login-form_input"
                  InputProps={{
                    autoFocus: true,
                    value: values.username,
                    onChange: handleChange("username"),
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleOutline />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  required
                  id="login-password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  fullWidth
                  className="login-form_input"
                  InputProps={{
                    type: values.showPassword ? "text" : "password",
                    value: values.password,
                    onChange: handleChange("password"),
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyOutlined />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityOutlined />
                          ) : (
                            <VisibilityOffOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="login-form_actions">
                <FormControlLabel
                  value="rememberSession"
                  control={
                    <Switch
                      name="rememberSession"
                      color="primary"
                      checked={values.rememberSession}
                      onChange={handleSwitchChange}
                    />
                  }
                  label="Remember me"
                  labelPlacement="end"
                />
                <Button
                  type="submit"
                  size="large"
                  variant="outlined"
                  color="primary"
                  disableElevation
                >
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Auth;

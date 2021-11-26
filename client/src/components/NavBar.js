import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import ClearAllIcon from "@mui/icons-material/ClearAll";

const useStyles = makeStyles((theme) => ({
  appbar: {
    "background-color": "grey !important",
  },
}));

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.setItem("token", "");
  };

  const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.appbar}>
          <Container maxWidth="lg">
            <Toolbar
              sx={{
                "padding-left": "0px !important",
                "padding-right": "0px !important",
              }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink
                  style={{ "text-decoration": "none", color: "white" }}
                  to={SHOP_ROUTE}
                >
                  <ClearAllIcon sx={{ verticalAlign: "text-top" }} />{" "}
                  Fast-accs.com
                </NavLink>
              </Typography>

              {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Partner panel
              </Button>
              <Button
                variant={"outline-light"}
                onClick={() => logOut()}
                className="ml-2"
              >
                Logout
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(LOGIN_ROUTE)}
              >
                Login
              </Button>
            </Nav>
          )}


            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
});

export default NavBar;

import "../css/style.css";
import React, {useContext, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router";
//----------------------------------------

import Button from "@mui/material/Button";
import {
  Paper,
  Typography,
  Grid,
  Container,
  Box,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import RedditIcon from "@mui/icons-material/Reddit";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
//------------------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import inst from "../images/inst.svg";
import gmail from "../images/gmail.svg";
import GoogleIcon from "@mui/icons-material/Google";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 15).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <>
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>


        <Box>
        <Paper className="home__paper">
          <Container maxWidth="lg">
            <Grid className="main__grid"
              container
              sx={{ mt: "0px", justifyContent: "center" }}
              spacing={1}
            >
              <Grid item lg={3} md={4}>
                <Link to='/reddit'>
                  <Button
                    variant="contained"
                    className="main_button"
                    sx={{ height: "270px", width: "270px" }}
                  >
                    <RedditIcon
                      sx={{
                        fontSize: "70px",
                        width: "100%",
                        color: "rgb(255, 69, 0)",
                      }}
                    />
                    Reddit
                  </Button>
                </Link>
              </Grid>
              <Grid item lg={3} md={4}>
              <Link to='/facebook'>
                <Button
                  variant="contained"
                  className="main_button"
                  sx={{ height: "270px", width: "270px" }}
                >
                  <FacebookIcon
                    sx={{ fontSize: "70px", width: "100%", color: "#337ab7" }}
                  />
                  Facebook
                </Button>
                </Link>
              </Grid>
              <Grid item lg={3} md={4}>
              <Link to='/instagram'>
                <Button
                  variant="contained"
                  className="main_button"
                  sx={{ height: "270px", width: "270px" }}
                >
                  <img
                    src={inst}
                    style={{
                      height: "110px",
                      width: "100%",
                      "margin-bottom": "-5px",
                      "margin-top": "-35px",
                    }}
                  />
                  Instagram
                </Button>
                </Link>
              </Grid>
              <Grid item lg={3} md={4}>
              <Link to='/twitter'>
                <Button
                  variant="contained"
                  className="main_button"
                  sx={{ height: "270px", width: "270px" }}
                >
                  <TwitterIcon
                    sx={{
                      fontSize: "70px",
                      width: "100%",
                      color: "rgb(29, 155, 240)",
                    }}
                  />
                  Twitter
                </Button>
                </Link>
              </Grid>
              <Grid item lg={3} md={4}>
              <Link to='/vk'>
                <Button
                  variant="contained"
                  className="main_button"
                  sx={{ height: "270px", width: "270px" }}
                >
                  <FontAwesomeIcon
                    icon={faVk}
                    className="main_menu_icon"
                    style={{ color: "#5181b8" }}
                  />
                  Vkontakte
                </Button>
                </Link>
              </Grid>
              <Grid item lg={3} md={4}>
              <Link to='/gmail'>
                <Button
                  variant="contained"
                  className="main_button"
                  sx={{ height: "270px", width: "270px" }}
                >
                  <img
                    src={gmail}
                    style={{
                      height: "56px",
                      width: "100%",
                      "margin-bottom": "5px",
                      "margin-top": "10px",
                    }}
                  />
                  GMail
                </Button>
                </Link>
              </Grid>
              <Grid item lg={3} md={4}>
              <Link to='/other-email'>
                <Button
                  variant="contained"
                  className="main_button"
                  sx={{ height: "270px", width: "270px" }}
                >
                  <AlternateEmailIcon
                    sx={{ fontSize: 70, width: "100%", color: "orange" }}
                  />
                  Other e-mail services
                </Button>
                </Link>
              </Grid>
              <Grid item lg={3} md={4}>
              <Link to='/other'>
                <Button
                  variant="contained"
                  className="main_button"
                  sx={{ height: "270px", width: "270px" }}
                >
                  <MoreHorizIcon sx={{ fontSize: 70, width: "100%" }} />
                  Other
                </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Box>
      </>
    );
});

export default Shop;

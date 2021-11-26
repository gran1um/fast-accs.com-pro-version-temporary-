import React from "react";
import { useLocation, useParams } from "react-router";
import { Link, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Breadcrumbs from "../components/Breadcrumbs";
import Offer from "./Offer";
function Goods(props) {
  let { goods_name } = useParams();
 

  return (
    <div>
      <Link to="/">Назад</Link>
      <h1>Character: {goods_name}</h1>

      <hr />
      <Container>
        <Breadcrumbs />
        <Link
          to={{
            pathname: "offer",
            state: { from: props.location }, // or '/A' or '/B'
          }}
        >
          Купить
        </Link>

        <h1>title</h1>
      </Container>
    </div>
  );
}

export default Goods;

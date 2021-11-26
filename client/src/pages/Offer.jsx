import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";


function Offer(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const hasPreviousState = location.key !== "default";
    const handleClick = () => {
        if (hasPreviousState) {
        navigate(-1);
        } else {
        navigate("/");
        }
    };

  return (
    <>
      <Container>
        <button type="button" onClick={handleClick}>
          {hasPreviousState ? "Go Back" : "Go Home"}
        </button>

        <Breadcrumbs/>
        <div>offer of goods</div>
      </Container>
    </>
  );
}

export default Offer;

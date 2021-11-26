import React from 'react';
import '../css/style.css'
import {
    Paper,
    Typography,
    Grid,
    Container,
    Box,
    Toolbar,
  } from "@mui/material";


function Footer(props) {

    return (
        <>
        <div className="footer">
            <Container maxWidth="lg">
                <div className="right">© 2021</div>
                <div>All rights reserved. Copying is prohibited!</div>
                
            </Container>
        </div>
        </>
    );
}

export default Footer;
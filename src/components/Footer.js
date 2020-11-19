import React from 'react';
import { HashLink } from "react-router-hash-link";
import { 
    AppBar,
    Container,
    makeStyles,
    Typography,
    Grid
 } from "@material-ui/core";


 // CSS Styles
const useStyles = makeStyles(theme=>({
    mainFooter: {
        background: "black",
        display: "flex",
        flexDirection: "column",
        padding: "2% 0 1.5%",
    "& .topContainer": {
        maxWidth: "500px",
        padding: "1% 0 1%",
        [theme.breakpoints.up("lg")]:{
            maxWidth: "700px",
        },
        [theme.breakpoints.down("sm")]:{
            maxWidth: "400px",
        },
        [theme.breakpoints.down("xs")]:{
            maxWidth: "300px",
        },
        "& .textMenu": {
            textDecoration: "none",
            color: "white",
            fontSize: "17px",
            [theme.breakpoints.up("lg")]:{
                fontSize: "19px"
            },
            [theme.breakpoints.down("sm")]:{
                fontSize: "14px"
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: "11px"
            }
        }
    },
    "& .bottomContainer": {
        padding: "0.5% 0 0.5%",
        "& .textCopyrights": {
            color: "white",
            textAlign: "center",
            fontSize: "12px",
            padding: "1% 0",
            [theme.breakpoints.up("lg")]:{
                fontSize: "14px"
            },
            [theme.breakpoints.down("sm")]:{
                fontSize: "12px"
            },
            [theme.breakpoints.down("xs")]:{
                fontSize: "10px"
            },
        }
    }
}}))

const Footer = () => {

    const classes = useStyles()

    return (
        <div >
            <AppBar position= "static" className= {classes.mainFooter} >
                <Container className="topContainer">
                    <Grid container align="center" >
                        <Grid item xs={3} >
                            <HashLink className= "textMenu" to="/" >Home</HashLink>
                        </Grid>
                        <Grid item xs={3} >
                            <HashLink className= "textMenu" to="/overall#top" >Filmography</HashLink>
                        </Grid>
                        <Grid item xs={3} >
                            <HashLink className= "textMenu" to="/overall#photography" >Photography</HashLink>
                        </Grid>
                        <Grid item xs={3} >
                            <HashLink className= "textMenu" to="/overall#about" >About Me</HashLink>
                        </Grid>

                    </Grid>
                </Container>

                <hr color="white" width="20%" height= "100px"/>

                <Container className= "bottomContainer">
                    <Typography className= "textCopyrights">
                        &copy;{new Date().getFullYear()} | Camille Sanchez's Portfolio | All rights reserved | Privacy <br/> Website built with ReactJS
                    </Typography>
                </Container> 
            </AppBar>


        </div>
    )
}

export default Footer;

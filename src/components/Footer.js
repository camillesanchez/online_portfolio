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
        padding: "1rem",
        display: "flex",
        minHeight: "10vh",
        flexDirection: "column"
    },
    container: {
        maxWidth: "500px",
        paddingBottom: "0.5rem"
    },
    textMenu: {
        color: "white",
        fontSize: "16px",
        padding: "0.2rem"
    },
    textCopyrights: {
        color: "white",
        textAlign: "center",
        fontSize: "12px",
        padding: "0.5rem"
    }
}))

const Footer = () => {

    const classes = useStyles()

    return (
        <div >
            <AppBar position= "static" className= {classes.mainFooter} >
                <Container className={classes.container}>
                    <Grid container align="center" >
                        <Grid item xs={3} >
                            <HashLink className= {classes.textMenu} to="/" >Home</HashLink>
                        </Grid>
                        <Grid item xs={3} >
                            <HashLink className= {classes.textMenu} to="/overall#top" >Filmography</HashLink>
                        </Grid>
                        <Grid item xs={3} >
                            <HashLink className= {classes.textMenu} to="/overall#photography" >Photography</HashLink>
                        </Grid>
                        <Grid item xs={3} >
                            <HashLink className= {classes.textMenu} to="/overall#about" >About Me</HashLink>
                        </Grid>

                    </Grid>
                </Container>

                <hr color="white" width="20%" height= "100px"/>

                <div className= "row">
                    <Typography className= {classes.textCopyrights}>
                        &copy;{new Date().getFullYear()} | Camille Sanchez's Portfolio | All rights reserved | Privacy <br/> Website built with ReactJS
                    </Typography>
                </div> 
            </AppBar>


        </div>
    )
}

export default Footer;

import React from "react";
import { HashLink } from "react-router-hash-link";
import { 
    makeStyles,
    Typography,
    Box,
    Grid
} from "@material-ui/core";
import SocialMediaIcons from "../components/SocialMediaIcons";

// Media Import
import { After_the_Storms_short } from "../utils/constants";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    video_background: {
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
        zindex: "-1"
    },
    // nameContainer: {
    //     position: "absolute",
    //     display: "flex",
    //     alignItems: 'center',
    //     justifyContent: "center",
    //     height: "80%",
    //     width: "90%",
    //     right: "5%",
    //     top: "10%",
    //     bottom: "5%",
    //     // background: "red",
    // },
    // nameOverlay: {
    //     position: "absolute",
    //     fontFamily: "Perpetua",
    //     fontWeight: "bold",
    //     fontSize: "5vw",
    //     letterSpacing: 16,
    //     color: "white",
    //     textAlign: "center",
    //     marginRight: "5%",
    //     marginLeft: "5%",
    // },
    // cornerTextOverlay: {
    //     fontFamily: "Perpetua",
    //     fontWeight: "bold",
    //     fontSize: "3vw",
    //     letterSpacing: 6,
    //     [theme.breakpoints.up("md")]: {
    //         fontSize: "2vw"
    //     },
    //     [theme.breakpoints.down("xs")]: {
    //         fontSize: "4vw"
    //     }
    // },
    // cornerTL:{
    //     position: "absolute",
    //     left: "10%",
    //     top: "0%",
    //     margin: "2%",
    //     color: "white",
    //     textDecoration: "none",
    //     background: "green",
    //     [theme.breakpoints.up("lg")]: {
    //         left: "10rem"
    //     },
    //     [theme.breakpoints.down("xs")]: {
    //         left: "3%",
    //         top: "2%"
    //     }
    // },
    // cornerBR: {
    //     position: "absolute",
    //     right: "10%",
    //     bottom: "5%",
    //     margin: "2%",
    //     color: "white",
    //     textDecoration: "none",
    //     [theme.breakpoints.up("lg")]: {
    //         right: "10rem"
    //     },
    //     [theme.breakpoints.down("xs")]: {
    //         right: "3%"
    //     }
    // },
    // cornerBL: {
    //     position: "absolute",
    //     left: "10%",
    //     bottom: "5%",
    //     margin: "2%",
    //     color: "white",
    //     textDecoration: "none",
    //     [theme.breakpoints.up("lg")]: {
    //         left: "10rem"
    //     },
    //     [theme.breakpoints.down("xs")]: {
    //         left: "3%"
    //     }
    // },
    centerContainers: {
        "& .textContainer": {
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            "& .textFormatting": {
                fontFamily: "Perpetua",
                fontWeight: "bold",
                fontSize: "70px",
                color: "white",
                letterSpacing: 10,
                zIndex: "1",
                [theme.breakpoints.down("md")]: {
                    fontSize: "50px"
                },
                [theme.breakpoints.down("sm")]: {
                    fontSize: "40px"
                }
            }
        },
    },
    topBottomContainers: {
        alignItems: "center",
        "& .textContainer": {
            zIndex: "1",
        },
        "& .textFormatting": {
            fontFamily: "Perpetua",
            fontWeight: "bold",
            fontSize: "30px",
            letterSpacing: 6,
            color: "white",
            textDecoration: "none",
            [theme.breakpoints.down("md")]: {
                fontSize: "25px",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
            }
        }
    }
 }))

 const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

 const getPixelHeight = (percentage) => {
    // percentage should be a number between 0 and 1
    const pixelHeight = height * percentage;
    console.log(height);
    console.log(pixelHeight);
    return pixelHeight;
 }

// Home Function
const Home = () => {

    const classes = useStyles()

    return (
            
        <>
            
            <div > 
                <video autoPlay loop muted className={classes.video_background} >
                    <source src={After_the_Storms_short} type="video/mp4" />
                </video>
            </div>
            <div style={{height: "100%"}}>
                <Grid container className={classes.topBottomContainers} style={{height: "calc(10%)"}}>
                    <Grid item xs />
                    <Grid item xs={5} align="left" className="textContainer" >
                        <HashLink className="textFormatting" style={{zIndex: "1", background: "yellow" }} to="/overall#about" >About Me</HashLink>
                    </Grid>
                    <Grid item xs />
                    <Grid item xs={5} style={{zIndex: "1" }}>
                        <SocialMediaIcons />
                    </Grid>
                    <Grid item xs/>
                </Grid>
                <Grid container align="center" className={classes.centerContainers} style={{height: "calc(80%)"}}>
                        <Grid item xs>
                        </Grid>
                        <Grid item xs={10} className="textContainer">
                                <Typography variant="h3" className="textFormatting" >
                                    CAMILLE SANCHEZ
                                </Typography>
                        </Grid>
                        <Grid item xs >
                        </Grid>
                </Grid>
                <Grid container className={classes.topBottomContainers} style={{height: "calc(10%)"}} >
                    <Grid item xs />
                    <Grid item xs={5} align="left" className="textContainer" >
                        <HashLink className="textFormatting" to="/overall#photography" >Photography</HashLink>
                    </Grid>
                    <Grid item xs />
                    <Grid item xs={5} align="right" className="textContainer" >
                        <HashLink className="textFormatting" to="/overall#top" >Filmography</HashLink>
                    </Grid>
                    <Grid item xs />
                </Grid>
            </div>
        </>
    )
};

export default Home;
import React from "react";
import { HashLink } from "react-router-hash-link";
import { 
    makeStyles,
    Typography,
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
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: "25px"
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
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: "12px",
                letterSpacing: 4
            }
        }
    }
 }))

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
            <div style={{height: "100vh"}}>
                <Grid container className={classes.topBottomContainers} style={{height: "10%"}}>
                    <Grid item xs />
                    <Grid item xs={5} align="left" className="textContainer" >
                        <HashLink className="textFormatting" style={{zIndex: "1" }} to="/overall#about" >About Me</HashLink>
                    </Grid>
                    <Grid item xs />
                    <Grid item xs={5} style={{zIndex: "1" }}>
                        <SocialMediaIcons />
                    </Grid>
                    <Grid item xs/>
                </Grid>
                <Grid container align="center" className={classes.centerContainers} style={{height: "80%"}}>
                        <Grid item xs/>
                        <Grid item xs={10} className="textContainer">
                                <Typography variant="h3" className="textFormatting" >
                                    CAMILLE SANCHEZ
                                </Typography>
                        </Grid>
                        <Grid item xs />
                </Grid>
                <Grid container className={classes.topBottomContainers} style={{height: "10%"}} >
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
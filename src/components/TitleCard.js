import React from "react";
import { 
    makeStyles,
    Typography,
    Box,
    Grid
} from "@material-ui/core";
import Navbar from "../components/Navbar";

// Media Import
import { After_the_Storms_short } from "../utils/constants";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    video_background: {
        position: "absolute",
        width: "100%",
        maxHeight: "20%",
        objectFit: "cover",
        zIndex: "-1",
        // [theme.breakpoints.up("md")]: {
        //     maxHeight: "30%"
        // }
    },
    textContainer: {
        height: "20vh", 
        width: "100%", 
        zIndex: "1",
        // [theme.breakpoints.up("md")]: {
        //     height: "30vh"
        // },
        "& .topBottomContainers": {
            alignItems: "center",
            height: "15%",
        },
        "& .centerContainer": {
            height: "70%",
            "& .textContainer": {
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                "& .textFormatting" : {
                    fontFamily: "Perpetua",
                    fontWeight: "bold",
                    fontSize: "90px",
                    letterSpacing: 16,
                    color: "white",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "60px",
                        letterSpacing: 12
                    },
                    [theme.breakpoints.down("xs")]: {
                        fontSize: "40px",
                        letterSpacing: 12,
                    }  
                }
            }
        }
    }
 }))

 const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const getPixelWidth = (percentage) => {
    // percentage should be a number between 0 and 1
    const pixelWidth = width * percentage;
    console.log(width);
    console.log(pixelWidth);
    return pixelWidth;
}

const TitleCard = () => {

    const classes = useStyles()

    return (
        < >
            <Navbar/>
            <div >
                <video autoPlay loop muted className={classes.video_background} >
                    <source src={After_the_Storms_short} type="video/mp4" />
                </video>
            </div>
            <div className={classes.textContainer}>
                <Grid container className="topBottomContainers" >
                    <Grid item xs={12} />
                </Grid>
                <Grid container align="center" className="centerContainer">
                        <Grid item xs style={{ background: "red"}}/>
                        <Grid item xs={10} className="textContainer">
                            <Typography variant="h3" className="textFormatting" >
                                Portfolio
                            </Typography>
                        </Grid>
                        <Grid item xs style={{ background: "red"}} />
                </Grid>
                <Grid container className="topBottomContainers" >
                    <Grid item xs={12} />
                </Grid>
            </div>
        </>

    )
};

export default TitleCard;
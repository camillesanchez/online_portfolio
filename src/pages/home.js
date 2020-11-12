import React from "react";
import { HashLink } from "react-router-hash-link";
import { 
    makeStyles,
    Typography,
    Box
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
    nameContainer: {
        position: "absolute",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        height: "84%",
        width: "100%"
    },
    nameOverlay: {
        fontFamily: "Perpetua",
        fontWeight: "bold",
        fontSize: "90px",
        textAlign: "center",
        letterSpacing: 16,
        color: "white",
        [theme.breakpoints.down("xs")]: {
            fontSize: "60px",
            marginLeft: "2rem",
            marginRight: "2rem"
        }
    },
    cornerTextOverlay: {
        fontFamily: "Perpetua",
        fontWeight: "bold",
        fontSize: "20px",
        letterSpacing: 6,
        [theme.breakpoints.down("xs")]: {
            fontSize: "18px"
        }
    },
    cornerTL:{
        position: "absolute",
        left: "4rem",
        top: "1.1rem",
        color: "white",
        textDecoration: "none",
        [theme.breakpoints.up("lg")]: {
            left: "10rem"
        },
        [theme.breakpoints.down("xs")]: {
            left: "2rem"
        }
    },
    cornerBR: {
        position: "absolute",
        right: "4rem",
        bottom: "5rem",
        color: "white",
        textDecoration: "none",
        [theme.breakpoints.up("lg")]: {
            right: "10rem"
        },
        [theme.breakpoints.down("xs")]: {
            right: "2rem"
        }
    },
    cornerBL: {
        position: "absolute",
        left: "4rem",
        bottom: "5rem",
        color: "white",
        textDecoration: "none",
        [theme.breakpoints.up("lg")]: {
            left: "10rem"
        },
        [theme.breakpoints.down("xs")]: {
            left: "2rem"
        }
    }
 }))

// Home Function
const Home = () => {

    const classes = useStyles()

    return (
        <>
            
            <>
                
                <div > 
                    <video autoPlay loop muted className={classes.video_background} >
                        <source src={After_the_Storms_short} type="video/mp4" />
                    </video>
                </div>
                <SocialMediaIcons />
                <Box className={classes.nameContainer} >
                    <Typography variant="h3" className={classes.nameOverlay} >
                        CAMILLE SANCHEZ
                    </Typography>
                </Box>
                <div className={classes.cornerTextOverlay} >
                    <HashLink className={classes.cornerTL} to="/overall#about" >About Me</HashLink>
                    <HashLink  className={classes.cornerBL} to="/overall#photography" >Photography</HashLink>
                    <HashLink  className={classes.cornerBR} to="/overall#top" >Filmography</HashLink>
                </div>

            </>
        </>

    )
};

export default Home;
import React from "react";
import After_the_Storms_short from "../files/After_the_Storms_short.mp4";
import { 
    makeStyles,
    Typography,
    Box
} from "@material-ui/core";


 // CSS Styles
 const useStyles = makeStyles(theme=>({
    video_background: {
        position: "absolute",
        width: "100%",
        maxHeight: "30%",
        objectFit: "cover",
    },
    nameContainer: {
        position: "absolute",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        height: "30%",
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
    }
 }))

const TitleCard = () => {

    const classes = useStyles()

    return (
        <>
            <div>
                <video autoPlay loop muted className={classes.video_background} >
                    <source src={After_the_Storms_short} type="video/mp4" />
                </video>
            </div>
            <Box className={classes.nameContainer} >
                <Typography variant="h3" className={classes.nameOverlay} >
                    Portolio
                </Typography>
            </Box>
            
        </>

    )
};

export default TitleCard;
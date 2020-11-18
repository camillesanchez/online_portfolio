import React from "react";
import { 
    CardMedia, 
    makeStyles,
    Typography,
    Grid
} from "@material-ui/core";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    imageStyling: {
        position: "absolute",
        height: "30vh",
        zIndex: "-1",
        [theme.breakpoints.up("md")]: {
            height: "35vh"
        }
    },
    imageTextContainer: {
        height: "30vh", 
        width: "100vw", 
        zIndex: "1",
        [theme.breakpoints.up("md")]: {
            height: "35vh"
        },
        "& .topBottomContainers": {
            alignItems: "center",
            height: "15%",
            // background: "yellow"
        },
        "& .centerContainer": {
            height: "70%",
            // background: "blue",
            "& .textBox": {
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                "& .textFormatting" : {
                    fontFamily: "Bambi",
                    fontWeight: "bold",
                    fontSize: "90px",
                    color: "white",
                    [theme.breakpoints.down("md")]: {
                        fontSize: "80px",
                    },
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "50px"
                    },
                    [theme.breakpoints.down("xs")]: {
                        fontSize: "30px"
                    }  
                }
            }
        }
    }
}))

// Photo Title Card for each page
const PhotoTitle = (props) => {

    const classes = useStyles()

    return (
        <>
            {/* image */}
            <CardMedia
                component="img"
                image= {props.lsItem.image}
                className={classes.imageStyling}
                alt= {props.lsItem.headerAlt} >
            </CardMedia>

            {/* Text over image */}
            <div className={classes.imageTextContainer}>
                <Grid container className="topBottomContainers" >
                    <Grid item xs={12} />
                </Grid>
                <Grid container align="center" className="centerContainer">
                        <Grid item xs />
                        <Grid item xs={10} className="textBox">
                            <Typography variant="h3" className="textFormatting" >
                                {props.lsItem.headerName}
                            </Typography>
                        </Grid>
                        <Grid item xs />
                </Grid>
                <Grid container className="topBottomContainers" >
                    <Grid item xs={12} />
                </Grid>
            </div>
        </>
    )
};

export default PhotoTitle;
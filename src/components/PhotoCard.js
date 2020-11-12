import React from "react";

import { 
    makeStyles,
    Paper,
    CardMedia,
    Typography,
} from "@material-ui/core";

// CSS Styles
const useStyles = makeStyles((theme) => ({
    paper: {
        height: "525px",
        width: "700px",
        background: "black",
        [theme.breakpoints.up("lg")]: {
            height: "675px",
            width: "900px"
        },
        [theme.breakpoints.down("sm")]: {
            height: "412.50px",
            width: "550px"
        },
        [theme.breakpoints.down("xs")]: {
            height: "262.50px",
            width: "350px"
        },
        "& .overlay": {
            visibility: "hidden",
            position: "flex", 
            top: "9%",
            bottom: "10%",
            right: "6%",
            left: "6%",
            textAlign: "left"
        },
        "&:hover": {
            "& .imageCover" : {
                maxWidth: "100%",
                maxHeight: "100%",
                alignItems: "center",
                justifyContent: "center",
                opacity: "0.3",
            },
            "& .overlay": {
                visibility: "visible",
            },
            "& .overlayTitle": {
                fontFamily: "Bambi",
                fontWeight: "bold",
                fontSize: "22px",
                textDecoration: "underline",
                paddingBottom: "4%",
                color: "white",
                [theme.breakpoints.down("sm")]: {
                    fontSize: "19px"
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: "15px"
                },
                [theme.breakpoints.up("lg")]: {
                    fontSize: "34px"
                }
            },
            "& .overlayDesc": {
                fontSize: "14px",
                color: "white",
                [theme.breakpoints.down("sm")]: {
                    fontSize: "12px"
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: "9px",
                },
                [theme.breakpoints.up("lg")]: {
                    fontSize: "20px"
                }
            }
        }
    }
}))

const PhotoCard = (props) => {
    
    const classes = useStyles()

    return (
        <>
            <Paper className={classes.paper}>
                <CardMedia
                    component="img"
                    image= {props.lsItems.photoCover}
                    className="imageCover"
                    alt= {props.lsItems.photoAlt}
                    >
                </CardMedia>
                <div className="overlay">
                        <Typography className="overlayTitle">
                            {props.lsItems.photoTitle}
                        </Typography>
                        <Typography className="overlayDesc">
                            {props.lsItems.photoDesc}
                        </Typography>
                </div>
            </Paper>
        </>
    )
}

export default PhotoCard;
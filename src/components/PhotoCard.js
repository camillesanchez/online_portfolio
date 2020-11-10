import React from "react";

import { 
    makeStyles,
    Paper,
    CardMedia,
    ButtonBase,
    Typography,
    IconButton
} from "@material-ui/core";
import { FaYoutube, FaVimeo, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";

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
            visibility: "hidden"
        },
        "&:hover": {
            "& .imageCover" : {
                maxWidth: "900px",
                maxHeight: "675px",
                alignItems: "center",
                justifyContent: "center",
                opacity: "0.3"
            },
            "& .overlay": {
                visibility: "visible",
                position:"absolute",
                top: "9%",
                bottom: "10%",
                right: "6%",
                left: "6%",
                textAlign: "left"
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
                    className={classes.imageCover}
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
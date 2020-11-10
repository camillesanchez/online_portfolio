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
    companyName: {
        color: "white",
        fontWeight: "bold",
        fontSize: "15px",
        paddingTop: "6%",
        [theme.breakpoints.up("lg")] : {
            paddingTop: "7%",
            fontSize: "19px"
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop: "4%",
            fontSize: "10px"
        }

    },
    paper: {
        height: "394px",
        width: "700px",
        background: "black",
        [theme.breakpoints.up("lg")]: {
            height: "506px",
            width: "900px"
        },
        [theme.breakpoints.down("sm")]: {
            height: "309px",
            width: "550px"
        },
        [theme.breakpoints.down("xs")]: {
            height: "197px",
            width: "350px"
        },
        "& .overlay": {
            visibility: "hidden"
        },
        "& .topRectangle":{
            height: "3%",
            width: "100%",
            position: "absolute",
            bottom: "2%",
            left: "0px",
            zIndex: "5"
        },
        "& .rectangle":{
            height: "9%",
            width: "20%",
            position: "absolute",
            bottom: "0px",
            left: "2%",
            zIndex: "5"
        },
        "&:hover": {
            "& .imageCover" : {
                maxWidth: "900px",
                maxHeight: "506px",
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
            },
            "& .overlayTasks": {
                fontSize: "12px",
                paddingTop: "4%",
                color: "white",
                [theme.breakpoints.down("xs")]: {
                    fontSize: "9px",
                },
                [theme.breakpoints.up("lg")]: {
                    fontSize: "18px"
                }
            },
            "& .icons": {
                paddingTop:"5%",
                [theme.breakpoints.down("xs")]: {
                    paddingTop: "2%"
                },
                [theme.breakpoints.up("lg")]: {
                    paddingTop: "7%"
                }
            },
            "& .preIconText": {
                color: "white", 
                fontSize: "10px",
                [theme.breakpoints.down("xs")]: {
                    fontSize: "8px"
                },
                [theme.breakpoints.up("lg")]: {
                    fontSize: "13px"
                }
            },
            "& .icon": {
                color: "white", 
                fontSize: "20px",
                paddingTop: "1%",
                [theme.breakpoints.down("xs")]: {
                    paddingTop: "0",
                    fontSize: "14px"
                },
                [theme.breakpoints.up("lg")]: {
                    fontSize: "24px",
                    paddingTop: "3%"
                }
            },
            "& .rectangle": {
                opacity: "1"
            },
            "& .topRectangle": {
                opacity: "1"
            }
        }
    }
}))

const FilmCard = (props) => {
    
    const classes = useStyles()

    return (
        <>
            <ButtonBase 
                onClick={() => window.open(props.lsItems.filmLink)}
                >
                
                <Paper className={classes.paper}>
                    { props.lsItems.doneAtWork && 
                        <>
                            <div className="topRectangle" style={{background: props.lsItems.companyColor}}/>
                            <div className="rectangle" style={{background: props.lsItems.companyColor}}>
                                <Typography className={classes.companyName}>
                                    &copy;{props.lsItems.companyName}
                                </Typography>
                            </div>
                        </>
                    }
                    <CardMedia
                        component="img"
                        image= {props.lsItems.filmCover}
                        className="imageCover"
                        alt= {props.lsItems.filmAlt}
                        >

                    </CardMedia>
                    <div className="overlay">
                        <Typography className="overlayTitle">
                            {props.lsItems.filmTitle}
                        </Typography>
                        <Typography className="overlayDesc">
                            {props.lsItems.filmDesc}
                        </Typography>
                        <Typography className="overlayTasks" >
                            {props.lsItems.filmTasks}
                        </Typography>

                        <div className="icons" >
                            <Typography className="preIconText" >
                                Click on window for pre-selected link or on the below icon(s) for specific article(s):
                            </Typography>

                            { props.lsItems.filmLinkedInLink &&
                                <IconButton onClick={() => window.open(props.lsItems.filmLinkedInLink)} >
                                    <FaLinkedin className="icon" />
                                </IconButton>
                            }
                            { props.lsItems.filmYouTubeLink &&
                                <IconButton onClick={() => window.open(props.lsItems.filmYouTubeLink)} >
                                    <FaYoutube className="icon" />
                                </IconButton>
                                
                            }
                            { props.lsItems.filmTwitterLink &&
                                <IconButton onClick={() => window.open(props.lsItems.filmTwitterLink)} >
                                    <FaTwitter className="icon" />
                                </IconButton>
                            }
                            { props.lsItems.filmVimeoLink &&
                                <IconButton onClick={() => window.open(props.lsItems.filmVimeoLink)} >
                                    <FaVimeo className="icon" />
                                </IconButton>
                            }
                            { props.lsItems.filmArticle &&
                                <IconButton onClick={() => window.open(props.lsItems.filmArticle)} >
                                    <RiArticleFill className="icon" />
                                </IconButton>
                            }
                            
                        </div>
                    </div>
                </Paper>
            </ButtonBase>
        </>
    )
}

export default FilmCard;
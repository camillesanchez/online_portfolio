import React from "react";
import { HashLink } from "react-router-hash-link";
import PhotoGrid from '../components/PhotoGrid';
import photography_sunset from "../files/wilson_montoya_JH8hq41zSgQ_unsplash.jpg";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { 
    Box,
    Card,
    CardMedia,
    Container, 
    makeStyles,
    Typography
} from "@material-ui/core";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    imageStyling: {
        position: "absolute",
        height: "50%",
        [theme.breakpoints.down("sm")]: {
            height: "40%"
        }
    },
    nameContainer:{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "50%",
        [theme.breakpoints.down("sm")]: {
            height: "40%"
        }
    },
    textOverlay: {
        fontFamily: "Bambi",
        fontWeight: "bold",
        fontSize: "90px",
        color: "white",
        [theme.breakpoints.down("md")]: {
            fontSize: "80px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "50px"
        }
    },
    textContainer: {
        padding: "2rem 8rem 3rem",
        [theme.breakpoints.down("sm")]: {
            padding: "1.5rem 4rem 2rem"
        }
    },
    quoteContainer: {
        position: "flex",
        justifyContent: "center",
        padding: "1rem",
    },
    introText: {
        marginTop: "27rem",
        [theme.breakpoints.down("sm")]: {
            marginTop: "22rem"
        }
    },
    authorText: {
        fontSize: "15px",
        textAlign: "right",
        fontWeight: "bold",
        marginLeft: "1rem",
        marginRight: "10%",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
        }
    },
    quoteText: {
        fontSize: "16.5px",
        marginLeft: "1rem",
        marginRight: "1rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        }
    },
    rightQuote: {
        marginLeft: "95%", 
        fontSize: "20px",
        [theme.breakpoints.down("xs")]: {
            marginLeft: "89%"
        }
    },
    backTopContainer: {
        textAlign: "right",
        background: "red",
        textDecoration: "none"
    },
    backTopText: {
        fontSize: "12px",
        color: "grey",
        paddingTop: "0.5rem",        
        [theme.breakpoints.down("sm")]: {
            paddingTop: "0rem",
            fontSize: "10px"
        }
    }
}))

// Content
const quote = [
    {
        itemAuthor: "Elliott Erwitt",
        itemText: "To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them."
    }
]
const Photography = () => {

    const classes = useStyles()

    return (
        <>
        <Card>
                <CardMedia
                    component="img"
                    image= {photography_sunset}
                    className={classes.imageStyling}
                    alt="Photo of a person taking a photo of the sunset.">
                    
                </CardMedia>
                <Box className={classes.nameContainer} >
                    <Typography variant="h3" className={classes.textOverlay} >
                        PHOTOGRAPHY
                    </Typography>
                </Box>

            </Card>
            <div className={classes.textContainer} >
                <div className={classes.introText} >
                    <Typography style={{marginTop: "2rem", marginBottom: "1rem"}}>
                        Below I have selected a few photos I took (and retouched). You can find more of my photo-work on my Instagram (linked in the menu).
                    </Typography>
                </div>
                <PhotoGrid/>

                {/* Quote */}
                <Container className={classes.quoteContainer}>
                    <ImQuotesLeft style={{textAlign: "right", fontSize: "20px"}} />
                    {quote.map((lsItem, key) => (
                        <Box key={key} >
                            <Typography className={classes.quoteText}>
                                {lsItem.itemText}
                            </Typography>
                            <ImQuotesRight className={classes.rightQuote}/>
                            <Typography className={classes.authorText}>
                                -- {lsItem.itemAuthor} --
                            </Typography>
                        
                        </Box>
                    ))}
                </Container>

                {/* Link back to Top of page */}
                <HashLink className={classes.backTopContainer}  to="/overall#top" >
                    <Typography className={classes.backTopText}>
                        Back to the Top
                    </Typography>
                </HashLink>


            </div>
        </>

    )
};

export default Photography;
import React from "react";
import { HashLink } from "react-router-hash-link";
import FilmGrid from '../components/FilmGrid';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { 
    Box,
    Card,
    CardMedia, 
    Container,
    makeStyles,
    Typography
} from "@material-ui/core";

// Media Import
import { clap } from "../utils/constants";

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
        justifyContent: "center"
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
        textDecoration: "none",
    },
    backTopText: {
        fontSize: "12px",
        paddingTop: "2rem",
        color: "grey",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "1rem",
            fontSize: "10px"
        }
    }
}))

// Content
const quote = [
    {
        itemAuthor: "Martin Scorsese",
        itemText: "Now more than ever we need to talk to each other, to listen to each other and understand how we see the world, and cinema is the best medium for doing this."
    }
]

// Filmmography portion
const Filmography = () => {

    const classes = useStyles()

    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    image= {clap}
                    className={classes.imageStyling}
                    alt="Photo of a slap with info about a film.">
                    
                </CardMedia>
                <Box className={classes.nameContainer} >
                    <Typography variant="h3" className={classes.textOverlay} >
                        FILMOGRAPHY
                    </Typography>
                </Box>

            </Card>
            <div className={classes.textContainer} >
                {/* Film Grid */}
                <div className={classes.introText} >
                    <Typography style={{marginTop: "2rem", marginBottom: "1rem"}}>
                        You will find below a selection of my video work. <br/> <br/>Please note that the ones with the banner have been created while working at that company, and therefore I do not own the rights to these videos.
                    </Typography>
                </div>
                <FilmGrid/>

                {/* Quotes */}
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

export default Filmography;
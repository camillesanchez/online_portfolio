import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { 
    makeStyles,
    Typography,
    Box,
    Container
} from "@material-ui/core";
import TitleCard from "../components/TitleCard";
import About from './about';
import Filmography from "../pages/filmography";
import Photography from "./photography";
import Footer from '../components/Footer';

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    pagesContainer: {
        marginTop: "0.5rem"
    },
    textContainer: {
        padding: "17rem 8rem 1rem",
        [theme.breakpoints.down("sm")]: {
            padding: "17rem 4rem 1rem"
        }
    },
    quoteContainer: {
        position: "flex",
        justifyContent: "center",
        padding: "1rem",
        [theme.breakpoints.up("lg")]: {
            paddingRight:"max(7rem)",
            paddingLeft:"max(7rem)"
        }

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
        
    }
 }))

 // Content
const quote = [
    {
        itemAuthor: "Annie Leibovitz",
        itemText: "One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."
    }
]

const Overall = () => {

    const classes = useStyles()

    return (
        <>
        
            <section id= "#top">
                <TitleCard />
            </section>

            {/* Quote */}
            <div className={classes.textContainer} >
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

            </div>
            
            {/* All pages */}
            <Box className={classes.pagesContainer} > 
                <section id="filmography">
                    <Filmography  />
                </section>      
                
                <section id="photography">
                    <Photography />
                </section>
                
                <section id= "about">
                    <About  />
                </section>
                
            </Box>
            <Footer/>

        </>

    )
};

export default Overall;

// import Vimeo from "@u-wave/react-vimeo";
// To open a video in vimeo window:
// <Vimeo video="210873459" autoplay />
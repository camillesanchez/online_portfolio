import React from "react";
import { HashLink } from "react-router-hash-link";
import FilmGrid from '../components/FilmGrid';
import QuoteCard from "../components/QuoteCard";
import PhotoTitle from "../components/PhotoTitle";
import IntroParagraph from "../components/IntroParagraph";
import { 
    makeStyles,
    Typography,
    Grid
} from "@material-ui/core";

// Media Import
import { clap } from "../utils/constants";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    topButton: {
        height: "20vh", 
        width: "100vw", 
        zIndex: "1",
        background: "orange",
        "& .topBottomContainers": {
            height: "15%",
            background: "green"
        },
        "& .centerContainer": {
            "& .backTopContainer": {
                textAlign: "right",
                background: "red",
                textDecoration: "none",
                "& .backTopText": {
                    fontSize: "12px",
                    paddingTop: "2rem",
                    color: "grey",
                    [theme.breakpoints.down("sm")]: {
                        paddingTop: "1rem",
                        fontSize: "10px"
                    }
                }
            }
        }
    }
}))


// Content
const header = [
    {
        headerName: "FILMOGRAPHY",
        headerAlt: "Photo of a slap with info about a film.",
        image: clap
    }
];

const introString = "You will find below a selection of my video work. <br/> <br/>Please note that the ones with the banner have been created while working at that company, and therefore I do not own the rights to these videos.";

const quote = [
    {
        itemAuthor: "Martin Scorsese",
        itemText: "Now more than ever we need to talk to each other, to listen to each other and understand how we see the world, and cinema is the best medium for doing this."
    }
];

// Filmmography portion
const Filmography = () => {

    const classes = useStyles()

    return (
        <>

            {/* Title Card */}
            {header.map((lsItem, key) => (
                <PhotoTitle key={key} lsItem={lsItem} />
            ))}

            {/* Text paragraph */}
            <IntroParagraph introString={introString} />

            {/* Film Grid */}
            <FilmGrid/>

            {/* Quote Card */}
            {quote.map((lsItem, key) => (
                <QuoteCard key={key} lsItem={lsItem} />
            ))}

            <div>
      
                {/* Link back to Top of page */}
                <Grid container className="topButton">
                    <Grid item xs />
                    <Grid item xs={10} >
                        <HashLink className={classes.backTopContainer}  to="/overall#top" >
                            <Typography className="backTopText">
                                Back to the Top
                            </Typography>
                        </HashLink>
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

export default Filmography;
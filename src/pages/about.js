import React from "react";
import PhotoTitle from "../components/PhotoTitle";
import QuoteCard from "../components/QuoteCard";
import AboutBackground from "../components/AboutBackground";
import AboutGoodAt from "../components/AboutGoodAt";
import { 
    Box,
    CardMedia, 
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";

// Media imports
import { 
    camillefilming,
    multimediaskills,
    programingskills,
    languagesskills,
    equipmentskills,
} from "../utils/constants";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    textContainer: {
        padding: "2rem 8rem 4rem",
        [theme.breakpoints.down("sm")]: {
            padding: "1.5rem 4rem 1.7rem"
        }
    },
    headers: {
        fontFamily: "Hallo Sans",
        fontSize: "45px",
        fontWeight: "bold",
        marginTop: "1rem",
        marginBottom: "0.5rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "35px",
        }
    },
    text: {
        fontSize: "16.5px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        }
    },
    skillsContainer: {
        maxWidth: "40%",
        maxHeight: "40%"
    },
    imageCover: {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "460px",
        padding: "0rem 2rem",
        [theme.breakpoints.down("md")]: {
            maxWidth: "350px"
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "270px"
        }
    }
}))

// Content
const header = [
    {
        headerName: "ABOUT ME",
        headerAlt: "Photo of Camille Sanchez filming a tennis match at the BNP Paribas Open tennis tournament.",
        image: camillefilming
    }
];


const skillsItems = [
    {
        skillPhoto: multimediaskills,
        skillsAlt: "Video, Photo, Animation and illustration software I know"
    },
    {
        skillPhoto: equipmentskills,
        skillsAlt: "Photo with the Programing Languages known"
    },
    {
        skillPhoto: programingskills,
        skillsAlt: "Photos with the languages I speak"
    },
    {
        skillPhoto: languagesskills,
        skillsAlt: "Photos with the languages I speak"
    }
];


const quote = [
    {
        itemAuthor: "Diane Arbus",
        itemText: "Taking pictures is like tiptoeing into the kitchen late at night and stealing Oreo cookies."
    }
];

// About Page Function
const About = () => {

    const classes = useStyles()

    return (
        <>
            {/* Title Card */}
            {header.map((lsItem, key) => (
                <PhotoTitle key={key} lsItem={lsItem} />
            ))}

            {/* Background & Good at... sections */}
            <AboutBackground />
            <AboutGoodAt />

            {/* Quote Card */}
            {quote.map((lsItem, key) => (
                <QuoteCard key={key} lsItem={lsItem} />
            ))}
        </>
    )
};

export default About;
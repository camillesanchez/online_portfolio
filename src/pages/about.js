import React from "react";
import PhotoTitle from "../components/PhotoTitle";
import QuoteCard from "../components/QuoteCard";
import AboutBackground from "../components/AboutBackground";
import AboutGoodAt from "../components/AboutGoodAt";

// Media imports
import { camillefilming } from "../utils/constants";


// Content
const header = [
    {
        headerName: "ABOUT ME",
        headerAlt: "Photo of Camille Sanchez filming a tennis match at the BNP Paribas Open tennis tournament.",
        image: camillefilming
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
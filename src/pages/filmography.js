import React from "react";
import FilmGrid from '../components/FilmGrid';
import QuoteCard from "../components/QuoteCard";
import PhotoTitle from "../components/PhotoTitle";
import IntroParagraph from "../components/IntroParagraph";

// Media Import
import { clap } from "../utils/constants";

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
            
        </>

    )
};

export default Filmography;
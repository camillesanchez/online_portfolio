import React from "react";
import PhotoGrid from '../components/PhotoGrid';
import PhotoTitle from "../components/PhotoTitle";
import IntroParagraph from "../components/IntroParagraph";
import QuoteCard from "../components/QuoteCard";

// Media Import
import { photography_sunset } from "../utils/constants";

// Content
const header = [
    {
        headerName: "PHOTOGRAPHY",
        headerAlt: "Photo of a person taking a photo of the sunset.",
        image: photography_sunset
    }
];

const introString = "Below I have selected a few photos I took (and retouched). You can find more of my photo-work on my Instagram (linked in the menu).";

const quote = [
    {
        itemAuthor: "Elliott Erwitt",
        itemText: "To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them."
    }
]
const Photography = () => {

    return (
        <>
            {/* Title Card */}
            {header.map((lsItem, key) => (
            <PhotoTitle key={key} lsItem={lsItem} />
            ))}

            {/* Text paragraph */}
            <IntroParagraph introString={introString} />

            {/* Photo Grid */}
            <PhotoGrid/>

            {/* Quote Card */}
            {quote.map((lsItem, key) => (
                <QuoteCard key={key} lsItem={lsItem} />
            ))}
        </>

    )
};

export default Photography;
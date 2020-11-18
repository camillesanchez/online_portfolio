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
            
            {/* All pages */}
            <section id="filmography">
                <Filmography  />
            </section>      
            
            <section id="photography">
                <Photography />
            </section>
            
            <section id= "about">
                <About  />
            </section>
                
            <Footer/>
        </>

    )
};

export default Overall;

// import Vimeo from "@u-wave/react-vimeo";
// To open a video in vimeo window:
// <Vimeo video="210873459" autoplay />
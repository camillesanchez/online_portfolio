import React from "react";
import TitleCard from "../components/TitleCard";
import About from './about';
import Filmography from "../pages/filmography";
import Photography from "./photography";
import Footer from '../components/Footer';
import FloatingNavButton from "../components/FloatingNavButton";

const Overall = () => {

    return (
        <>
            <FloatingNavButton/>
            <section id= "#top">
                <TitleCard />
            </section>
            
            {/* All pages */}
            <section id="filmography">
                <Filmography />
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
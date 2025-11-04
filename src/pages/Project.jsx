import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Scroll from "../components/Scroll";
import BackBlur from "../components/BackBlur";

export default function Projects(){
    return(
        <div classname = "projects-page">
            <BackBlur/>
            <Header/>
            <Scroll/>
            
        </div>
    )
}
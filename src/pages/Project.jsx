import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Scroll from "../components/Scroll";
import BackBlur from "../components/BackBlur";

export default function Project(){
    return(
        <div classname = "project-page">
            <BackBlur/>
            <Header/>
            <Scroll/>
            
        </div>
    )
}
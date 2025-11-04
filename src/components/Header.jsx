import React from "react";
import './../styles/header.css';
import {Link} from "react-router-dom"
import { NavButton } from "./NavButton";
import "./../styles/adaptive.css";

const Header= function(){
    return(
        <header className="header">
            <div className="left_buttons">
                <NavButton to ="/" className = "button button_1">
                    <button  className = "but">rerokai</button>
                </NavButton>
                <NavButton to ="/project" className = "button button_2">
                    <button  className = "but" >blog</button>
                </NavButton>
            </div>
                <button className= "right_buttons">
                    <svg className="night" width="24" height="24" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.4722 2.41632C18.3738 -3.15528 14.0096 4.73783 12.3399 9.38083V27.3419C17.425 21.3549 26.5707 7.98793 22.4722 2.41632Z" stroke="black"/>
                    <path d="M1.5275 2.41632C5.62597 -3.15528 9.99009 4.73783 11.6598 9.38083V27.3419C6.57469 21.3549 -2.57097 7.98793 1.5275 2.41632Z" stroke="black"/>
                    </svg>

                </button>
        </header> 


    )
}

export default Header;
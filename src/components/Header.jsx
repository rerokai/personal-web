import React from "react";
import './../styles/header.css';
import {Link} from "react-router-dom"
import { NavButton } from "./NavButton";


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
                    {/* <h className="HN" >happy new year!!</h> */}
                    {/* <svg className="night" width="24" height="24" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
                    
                    <svg
  className="night"
  width="24"
  height="24"
  viewBox="0 0 48 48"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  
      <path d="M27,43h-6c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v6C28,42.6,27.6,43,27,43z M22,41h4v-4h-4V41z" />
      <path d="M37,37H11c-0.4,0-0.7-0.2-0.9-0.6c-0.2-0.4-0.1-0.8,0.2-1.1l7.2-8.3H14c-0.4,0-0.7-0.2-0.9-0.5c-0.2-0.3-0.1-0.7,0.1-1L19,17h-2c-0.4,0-0.7-0.2-0.9-0.5c-0.2-0.3-0.1-0.7,0.1-1l7-10c0.4-0.5,1.3-0.5,1.6,0l7,10c0.2,0.3,0.2,0.7,0.1,1C31.7,16.8,31.4,17,31,17h-2l5.8,8.4c0.2,0.3,0.2,0.7,0.1,1C34.7,26.8,34.4,27,34,27h-3.5l7.2,8.3c0.3,0.3,0.3,0.7,0.2,1.1C37.7,36.8,37.4,37,37,37z M13.2,35h21.6l-7.2-8.3c-0.3-0.3-0.3-0.7-0.2-1.1c0.2-0.4,0.5-0.6,0.9-0.6h3.8l-5.8-8.4c-0.2-0.3-0.2-0.7-0.1-1c0.2-0.3,0.5-0.5,0.9-0.5h1.9L24,7.7L18.9,15h1.9c0.4,0,0.7,0.2,0.9,0.5c0.2,0.3,0.1,0.7-0.1,1L15.9,25h3.8c0.4,0,0.7,0.2,0.9,0.6c0.2,0.4,0.1,0.8-0.2,1.1L13.2,35z" />
   
</svg>

                    {/* <path d="M22.4722 2.41632C18.3738 -3.15528 14.0096 4.73783 12.3399 9.38083V27.3419C17.425 21.3549 26.5707 7.98793 22.4722 2.41632Z" stroke="black"/> */}
                    {/* <path d="M1.5275 2.41632C5.62597 -3.15528 9.99009 4.73783 11.6598 9.38083V27.3419C6.57469 21.3549 -2.57097 7.98793 1.5275 2.41632Z" stroke="black"/> */}
                    {/* </svg> */}
                    
                </button>
        </header> 


    )
}

export default Header;
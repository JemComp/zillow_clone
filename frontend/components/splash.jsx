import React from "react";
import { Link } from "react-router-dom";

const Splash = (props) => {

    return (
        <div className="main-banner">
            <div className="banner-text">
                <h1 id="tagline">Find It. Tour It. Own It.</h1>
                <input type="search" className='search-bar' placeholder='Enter an address, city, or ZIP code'/>
            </div>
            <img src={window.heroBanner} alt="home-banner" id="hero-banner"></img>
        </div>
    )
}

export default Splash
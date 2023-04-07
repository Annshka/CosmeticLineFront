import React from "react";
import image from "../images/bottles_packages_.jpg";
export const Home = () => {
    return (
        <>
            <div className="container">
                <div className="home-container">
                    <div className="home-text">
                        <h2 >Product composer</h2>
                    </div>
                    <img src={image} alt="cosmetic set" className="img"/>
                </div>
            </div>
        </>
    )
}
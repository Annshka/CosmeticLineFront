import React from "react";
import image from "../../images/under_construction.png";
export const UnderConstruction = () => {
    return (
        <>
            <div className="container">
                <div className="under-construction-container">
                    <img src={image} alt="under construction" className="img"/>
                </div>
            </div>
        </>
    )
}
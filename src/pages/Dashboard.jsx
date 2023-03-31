import React from "react";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Link} from "react-router-dom";

import img1 from "../images/containers.jpg";
import img2 from "../images/fillings.jpg";
import img3 from "../images/rodion.jpg";
import img4 from "../images/caps.jpg";
export const Dashboard = () => {
    return (
        <>
            <div className="container-wrapper">
                <Sidebar/>
                <section className="main-content">
                    <div className="heading">
                        <h1>Welcome </h1>
                        <p>User Products</p>
                    </div>

                    <div className="products">
                        <div className="product">
                            <img src={img1} alt="Cosmetic packaging"/>
                            <div className="product-overlay">
                                <Link className="overlay-text"
                                to='/packages'>
                                    Packages
                                </Link>
                            </div>
                        </div>
                        <div className="product">
                            <img src={img2} alt="Cosmetic fillings"/>
                            <div className="product-overlay">
                                <Link className="overlay-text"
                                         to='/fillings' >
                                    Fillings
                                </Link>
                            </div>
                        </div>
                        <div className="product">
                            <img src={img3} alt="Cosmetic aluminum foil seals"/>
                            <div className="product-overlay">
                                <Link className="overlay-text"
                                         to='/aluminum-foil-seals' >
                                    Aluminum Foil Seals
                                </Link>
                            </div>
                        </div>
                        <div className="product">
                            <img src={img4} alt="Cosmetic caps"/>
                            <div className="product-overlay">
                                <Link className="overlay-text"
                                         to='/caps' >
                                    Caps
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
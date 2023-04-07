import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {FaPlus} from "react-icons/fa";

export const Package = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="container-wrapper">
                    <Sidebar/>
                    <section className="main-content">
                        <div className="heading">
                            <h3>Package</h3>
                            <div className="btn-create">
                                <button className="btn btn-add" onClick={() => navigate('/packages/create-package')}>
                                    <FaPlus/>
                                    Create
                                </button>
                            </div>

                            <Outlet/>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}
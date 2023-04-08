import React from "react";
import './Sidebar.css';
import {
    FaCloudsmith,
    FaFirstOrderAlt,
    FaHockeyPuck,
    FaLayerGroup,
    FaListUl,
    FaPumpSoap,
    FaUserCircle
} from "react-icons/fa";
import {Link} from "react-router-dom";

export const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">User Profile</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <Link className={({ isActive }) => isActive ? "link-active" : "link-inactive" }
                                     to='/account' >
                                <FaUserCircle />
                                Account
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <Link className={({ isActive }) => isActive ? "link-active" : "link-inactive" }
                                     to='/dashboard' >
                                <FaListUl />
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Configurator Menu</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <Link className={({ isActive }) => isActive ? "link-active" : "link-inactive" }
                                     to='/machine-line' >
                                <FaLayerGroup />
                                Machine Line
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <Link className={({ isActive }) => isActive ? "link-active" : "link-inactive" }
                                     to='/packages' >
                                <FaPumpSoap />
                                Packages
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <Link className={({ isActive }) => isActive ? "link-active" : "link-inactive" }
                                     to='/fillings' >
                                <FaCloudsmith />
                                Fillings
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <Link className={({ isActive }) => isActive ? "link-active" : "link-inactive" }
                                     to='/aluminum-foil-seals' >
                                <FaFirstOrderAlt />
                                Aluminum Foil Seals
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <Link className={({ isActive }) => isActive ? "link-active" : "link-inactive" }
                                     to='/caps' >
                                <FaHockeyPuck/>
                                Caps
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>

        </div>
    )
}
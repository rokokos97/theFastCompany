import React from "react";
import { useSelector } from "react-redux";
import {Link, NavLink} from "react-router-dom";

import { getIsLoggedIn } from "../../store/users";
import NavProfile from "./navProfile";
const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <nav className="navbar bg-light mb-3">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="link-dark nav-link " aria-current="page" to="/">
                            Main
                        </NavLink>
                    </li>
                    {isLoggedIn && (
                        <li className="nav-item">
                            <Link
                                className="link-dark nav-link "
                                aria-current="page"
                                to="/users"
                            >
                                Users
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="d-flex">
                    {!isLoggedIn ? (
                        <NavLink
                            className="link-dark nav-link "
                            aria-current="page"
                            to="/login"
                        >
                            Login
                        </NavLink>
                    ) : (
                        <NavProfile />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

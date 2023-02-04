import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const NavProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser } = useAuth();
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };
    return (
        <>
            <div className={"dropdown"} onClick={toggleMenu}>
                <div className="btn dropdown-toggle d-flex align-items-center">
                    <div className={"me-2"}>
                        {currentUser.name}
                        <img
                            src={currentUser.image}
                            alt="avatar"
                            className="img-responsive rounded-circle"
                            height="40"
                        />
                    </div>
                </div>
                <div className={"dropdown-menu w-100" + (isOpen ? " show" : "")}>
                    <Link
                        className={"dropdown-item"}
                        to={`/users/${currentUser._id}`}
                    >
                        Profile
                    </Link>
                    <Link
                        className={"dropdown-item"}
                        to={`logout`}
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavProfile;

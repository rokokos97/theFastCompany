import React from "react";
import { useAuth } from "../../hooks/useAuth";

const NavProfile = () => {
    const { currentUser } = useAuth();
    console.log(currentUser);
    return (
        <>
            <div className={"dropdown"}>
                <div className="btn dropdown-toggle d-flex align-items-center">
                    <div className={"me-2"}>
                        {currentUser.name}
                        <img
                            src={`https://avatars.dicebear.com/api/avataaars/${
                                (Math.random() + 1)
                                    .toString(36)
                                    .substring(7)}.svg`}
                            alt="avatar"
                            className="img-responsive rounded-circle"
                            height="40"
                        />
                    </div>
                    <div className="dropdown-menu w-100 show">some text</div>
                </div>
            </div>
        </>
    );
};

export default NavProfile;

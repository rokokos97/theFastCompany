import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import userService from "../services/userService";
const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
};
const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        try {
            const users = await userService.fetchAll();
            setUsers(users.content);
            setIsLoading(false);
        } catch (error) {
            catchError(error);
        }
    };
    const catchError = (error) => {
        const { message } = error.response.data;
        setError(message);
        setError(false);
    };
    return (
        <UserContext.Provider value={null}>
            {children}
        </UserContext.Provider>
    );
};
UserProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default UserProvider;

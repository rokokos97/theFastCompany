import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import userService from "../services/userService";
import { toast } from "react-toastify";
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
    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);
    const getUsers = async () => {
        try {
            const users = await userService.get();
            setUsers(users.content);
            setIsLoading(false);
        } catch (error) {
            catchError(error);
        }
    };
    const catchError = (error) => {
        const { message } = error.response.data;
        setError(message);
    };
    return (
        <UserContext.Provider value={{ users }}>
            { !isLoading
                ? children
                : <h1>Users loading...</h1>
            }
        </UserContext.Provider>
    );
};
UserProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default UserProvider;

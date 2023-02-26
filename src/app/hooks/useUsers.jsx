import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import userService from "../services/userService";
import { toast } from "react-toastify";
import { useAuth } from "./useAuth";

const UserContext = React.createContext();
export const useUser = () => {
    return useContext(UserContext);
};
const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const { currentUser } = useAuth();
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
            errorCatcher(error);
        }
    };
    useEffect(() => {
        if (isLoading === false) {
            const newUsers = [...users];
            const indexUser = users.findIndex(u => u._id === currentUser._id);
            newUsers[indexUser] = currentUser;
            setUsers(newUsers);
        }
    }, [currentUser]);
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    const getUserById = (userId) => {
        return users.find((u) => u._id === userId);
    };
    return (
        <UserContext.Provider value={{ users, getUserById }}>
            { !isLoading
                ? children
                : "Loading..."
            }
        </UserContext.Provider>
    );
};
UserProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default UserProvider;

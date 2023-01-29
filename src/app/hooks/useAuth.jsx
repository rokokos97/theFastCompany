import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import userService from "../services/userService";
import { toast } from "react-toastify";

const httpAuth = axios.create();
const AuthContext = React.createContext();
export const useAuth = () => {
    return useContext(AuthContext);
};
const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expiresIn";
const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [error, setError] = useState(null);

    function setTokens({ idToken, refreshToken, expiresIn = 3600 }) {
        const expiresDate = new Date().getTime() + expiresIn * 1000;
        console.log(expiresDate);
        localStorage.setItem(TOKEN_KEY, idToken);
        localStorage.setItem(REFRESH_KEY, refreshToken);
        localStorage.setItem(EXPIRES_KEY, expiresDate);
    }
    async function signUp({ email, password, ...rest }) {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`;
        try {
            const { data } = await httpAuth.post(url, {
                email,
                password,
                returnSecureToken: true
            });
            setTokens(data);
            await createUser({ _id: data.localId, email, ...rest });
            console.log("data", data);
        } catch (error) {
            catchError(error);
        }
    }
    async function createUser(data) {
        try {
            const { content } = userService.create(data);
            setCurrentUser(data);
        } catch (error) {
            catchError(error);
        }
    }
    const catchError = (error) => {
        const { message } = error.response.data;
        setError(message);
    };
    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);
    return (
        <AuthContext.Provider value={{ signUp, currentUser }}>
            { children }
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default AuthProvider;

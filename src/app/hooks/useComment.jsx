import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
const CommentContext = React.createContext();

export const useComment = () => {
    return useContext(CommentContext);
};
export const CommentProvider = ({ children }) => {
    const [comment, setComment] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setComment(null);
        setIsLoading(false);
    }, []);
    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);
    // const catchError = (error) => {
    //     const { message } = error.response.data;
    //     setError(message);
    // };
    return (
        <CommentContext.Provider value={{ isLoading, comment }}>
            { children }
        </CommentContext.Provider>
    );
};
CommentProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

import React, { useContext, useEffect, useState } from "react";
import qualityService from "../services/qualityService";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const QualitiesContext = React.createContext();
export const useQualities = () => {
    return useContext(QualitiesContext);
};
export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getQualities = async () => {
            try {
                const qualities = await qualityService.fetchAll();
                setQualities(qualities.content);
                setIsLoading(false);
            } catch (error) {
                const { message } = error.response.data;
                toast.error(message);
                setError(message);
            }
        };
        getQualities();
    }, []);
    const getQuality = (id) => {
        return qualities.find((q) => q._id === id);
    };
    // const catchError = (error) => {
    //     const { message } = error.response.data
    //     setError(message);
    // };
    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);
    return <QualitiesContext.Provider value={{ qualities, getQuality, isLoading }}>
        {children}
    </QualitiesContext.Provider>;
};
QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

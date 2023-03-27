import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import {
    getQualitiesLoadingStatus,
    getQualitiesByIds,
    loadQualitiesList,
    getQualities
} from "../../../store/qualities";
import { useDispatch, useSelector } from "react-redux";

const QualitiesList = ({ qualities }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getQualitiesLoadingStatus());
    const qualitiesList = useSelector(getQualitiesByIds(qualities));
    const qualitiesListTest = useSelector(getQualities());
    useEffect(() => {
        dispatch(loadQualitiesList());
    }, []);

    if (isLoading) return "Loading ...";

    return (
        <>
            {qualitiesList.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
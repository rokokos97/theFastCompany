import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useSelector } from "react-redux";
import { getQualitiesLoadingStatus } from "../../../store/qualities";

const QualitiesList = ({ qualities }) => {
    const isLoading = useSelector(getQualitiesLoadingStatus());
    if (!isLoading) {
        return <>
            {qualities.map((qual) => (
                <Quality key={qual} id={qual} />
            ))}
        </>;
    } else {
        return "loading quality";
    }
};
QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};
export default QualitiesList;

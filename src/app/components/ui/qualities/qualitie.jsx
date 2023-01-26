import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";

const Qualitie = ({ id }) => {
    const { isLoading, getQuality } = useQualities();
    const quality = getQuality(id);
    if (!isLoading) {
        return (
            <span className={"badge m-1 bg-" + quality.color}>{quality.name}</span>
        );
    } else {
        return "loading qualities...";
    }
};
Qualitie.propTypes = {
    id: PropTypes.string
};
export default Qualitie;

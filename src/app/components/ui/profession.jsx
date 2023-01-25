import React from "react";
import PropTypes from "prop-types";
import { useProfessions } from "../../hooks/useProfessions";

const Profession = ({ id }) => {
    const { isLoading, getProfession } = useProfessions();
    console.log(id);
    const prof = getProfession(id);
    console.log(prof.name);
    if (!isLoading) {
        return (
            <p>{prof.name}</p>
        );
    } else {
        return "loading...";
    }
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;

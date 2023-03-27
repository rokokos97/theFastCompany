import React from "react";
import PropTypes from "prop-types";
const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (lastOne === 1) return "person is hanging out";
        return "people are hanging out";
    };
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)}   with you tonight`
                    : "Nobody hangs out with you tonight"}
            </span>
        </h2>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;

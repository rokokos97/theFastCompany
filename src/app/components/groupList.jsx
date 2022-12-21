import React from "react";
import PropTypes from "prop-types";
const GroupList = ({ items, contentProperty, valueProperty }) => {
    console.log(items);
    return (
        <>
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][contentProperty]}
                        className="list-group-item"
                    >
                        {items[item][valueProperty]}
                    </li>
                ))}
            </ul>
        </>
    );
};
GroupList.defaultProps = {
    contentProperty: "_id",
    valueProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired
};
export default GroupList;

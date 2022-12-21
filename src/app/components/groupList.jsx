import React from "react";
import PropTypes from "prop-types";
const GroupList = ({
    items,
    contentProperty,
    valueProperty,
    onItemSelect,
    selectedItem
}) => {
    console.log(items);
    return (
        <>
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][contentProperty]}
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                        role={"button"}
                    >
                        {items[item][valueProperty]}
                    </li>
                ))}
            </ul>
        </>
    );
};
GroupList.defaultProps = {
    valueProperty: "name",
    contentProperty: "_id"
};

GroupList.propTypes = {
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};
export default GroupList;

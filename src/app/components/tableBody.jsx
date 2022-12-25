import React from "react";
import PropTypes from "prop-types";
const TableBody = ({ data, columns }) => {
    return <>
        { data.map((item) =>
            <tr key={item._id}>
                {Object.keys(columns).map((column) =>
                    <td key={item[columns[column].path]} >{item[columns[column].path]}</td>
                )}
            </tr>
        )}
    </>;
};
TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableBody;
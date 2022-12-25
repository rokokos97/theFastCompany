import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const TableBody = ({ data, columns }) => {
    return <>
        { data.map((item) =>
            <tr key={item._id}>
                {Object.keys(columns).map((column) =>
                    <td key={column} >
                        {columns[column].component
                            ? columns[column].component
                            : _.get(item, columns[column].path)}
                    </td>
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

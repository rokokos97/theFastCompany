import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";
import api from "../api";
import GroupList from "./groupList";

function Users({ users, ...rest }) {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState(null);
    const [selectedProf, setSelectedProf] = useState(null);
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const usersCrop = paginate(users, currentPage, pageSize);
    return (
        <>
            {professions && (
                <GroupList
                    items={professions}
                    onItemSelect={handleProfessionSelect}
                    selectedItem={selectedProf}
                    // contentProperty="_id"
                    // valueProperty="name"
                />
            )}
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Qualities</th>
                            <th scope="col">Profession</th>
                            <th scope="col">Meets</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Bookmark</th>
                            <th scope="col" />
                        </tr>
                    </thead>
                    <tbody>
                        {usersCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                countItem={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    );
}

Users.propTypes = {
    users: PropTypes.array
};
export default Users;

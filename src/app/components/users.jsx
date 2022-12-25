import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";
import api from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UserTable from "./userTable";
import _ from "lodash";

function Users({ users: allUsers, ...rest }) {
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState(null);
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };
    const handleReset = () => {
        setSelectedProf(null);
    };
    const handelSort = (item) => {
        setSortBy(item);
    };
    const filteredUsers = selectedProf
        ? allUsers.filter(
            (user) =>
                JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
        )
        : allUsers;
    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, sortBy.path, sortBy.order);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);
    useEffect(() => {
        if (usersCrop.length === 0) setCurrentPage(1);
    }, [usersCrop]);
    return (
        <div className={"d-flex flex-shrink-0"}>
            <div className={"d-flex flex-column p-2"}>
                {professions && (
                    <GroupList
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                        selectedItem={selectedProf}
                        onResat={handleReset}
                        // contentProperty="_id"
                        // valueProperty="name"
                    />
                )}
            </div>
            <div className={"vw-100"}>
                <SearchStatus usersNumber={count} />
                {(count > 0) && (
                    <UserTable users={usersCrop} onSort={handelSort} selectedSort={sortBy} {...rest}/>
                )}
                <Pagination
                    countItem={count}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}
Users.propTypes = {
    users: PropTypes.array
};
export default Users;

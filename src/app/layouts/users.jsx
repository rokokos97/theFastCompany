import React from "react";
import { useParams, Redirect } from "react-router-dom";
import UserPage from "../components/page/userPage/userPage";
import UsersListPage from "../components/page/usersListPage";
import EditUserPage from "../components/page/editUserPage";
import UserProvider from "../hooks/useUsers";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../store/users";
import UsersLoader from "../components/ui/HOC/usersLoader";
const Users = () => {
    const currentUserId = useSelector(getCurrentUser());
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            <UsersLoader>
                <UserProvider>
                    {userId
                        ? (edit
                            ? (userId === currentUserId)
                                ? <EditUserPage/>
                                : <Redirect to={`/users/${currentUserId}/edit`}/>
                            : <UserPage userId={userId} />)
                        : <UsersListPage />
                    }
                </UserProvider>
            </UsersLoader>
        </>
    );
};

export default Users;

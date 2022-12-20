import React from "react";
import User from "./user";
import Pagination from "./pagination";
const Users = ({ users, ...rest }) => {
  const count = users.length;
  const pageSize = 4;
  const handelPageChange = (pageIndex) => {
    console.log("pageIndex", pageIndex);
  };

  return (
    <>
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Провфессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemCont={count}
        pageSize={pageSize}
        onPageChange={handelPageChange}
      />
    </>
  );
};

export default Users;

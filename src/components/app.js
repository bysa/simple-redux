import React from "react";
import UserList from "../containers/user-list";
import UserDetail from "../containers/user-detail";
import AddUser from "../containers/add-user";

export default function App() {
  return (
    <div>
      <h2>Username List:</h2>
      <UserList />
      <AddUser />
      <hr />
      <h2>User Details:</h2>
      <UserDetail />
    </div>
  );
}

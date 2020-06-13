import React from "react";
import Paginator from "../Common/Preloader/Paginator/Paginator";
import User from "./UseR";

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <User
          user={u}
          followingInProgress={props.followingInProgress}
          key={u.id}
          unFollow={props.unFollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Users;

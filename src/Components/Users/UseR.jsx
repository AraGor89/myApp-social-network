import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import { NavLink } from "react-router-dom";

let User = (props) => {
  let user = props.user;
  return (
    <div className={style.userContainer}>
      <div>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="user"
              className={style.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id == user.id)}
              onClick={() => {
                props.unFollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id == user.id)}
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </div>
    </div>
  );
};

export default User;

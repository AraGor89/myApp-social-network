import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import style from "./header.module.css";
import myApp from "../../assets/images/myApp.png";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={myApp} alt="" className={style.myAppPhoto} />

      <div className={style.login_block}>
        {props.isAuth ? (
          <div className={style.login}>
            <span> {props.login}</span>{" "}
            <button className={style.logOutButton} onClick={props.logout}>
              Log out
            </button>
          </div>
        ) : (
          <>
            <NavLink to={"/login"}>
              <button className={style.logInButton}>Log in</button>
            </NavLink>
            <Redirect to="/login" />
          </>
        )}
      </div>
    </header>
  );
};
export default Header;

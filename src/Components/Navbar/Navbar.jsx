import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Navigation path="/profile" content="Profile" />
      <Navigation path="/dialogs" content="Dialogs" />
      <Navigation path="/users" content="Users" />
      <Navigation path="/login" content="Login" />
    </nav>
  );
};

const Navigation = (props) => {
  return (
    <div className={style.item}>
      <NavLink to={props.path} activeClassName={style.activelink}>
        {props.content}
      </NavLink>
    </div>
  );
};
export default Navbar;

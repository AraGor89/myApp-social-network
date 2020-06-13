import React from "react";
import load from "../../../assets/images/load.gif";

let Preloader = (props) => {
  return (
    <div>
      <img src={load} style={{ width: "200px" }} />
    </div>
  );
};
export default Preloader;

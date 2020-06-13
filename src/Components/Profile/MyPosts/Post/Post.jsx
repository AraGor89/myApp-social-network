import React from "react";
import style from "./post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GcvltEcK8FCzX_72ZsFqVLHJ7DjHKFViaLIais7bIkHdpq_-&s"
        alt=""
      />
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};
export default Post;

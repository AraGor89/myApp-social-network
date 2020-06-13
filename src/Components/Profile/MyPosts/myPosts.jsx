import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import style from "./myPosts.module.css";
import Post from "./Post/Post";
import {
  required,
  maxLengthCreator,
} from "./../../../utils/validators/validators";
import { Textarea } from "./../../Common/Preloader/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(50);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"enter your post"}
          component={Textarea}
          name={"newPostBody"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button disabled={props.submitting}>Add post</button>
      </div>
    </form>
  );
};

const afterSubmit = (result, dispatch) =>
  dispatch(reset("ProfileAddNewPostForm"));

const MyPostReduxForm = reduxForm({
  form: "ProfileAddNewPostForm",
  onSubmitSuccess: afterSubmit,
})(AddNewPostForm);

const MyPosts = React.memo((props) => {
  let postElements = props.posts.map((p) => (
    <Post
      message={p.message}
      likeCount={p.likeCount}
      id={p.id}
      key={Math.random()}
    />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostBody);
  };
  return (
    <div className={style.postsBlock}>
      <h2>My posts</h2>
      <MyPostReduxForm onSubmit={onAddPost} />
      <div className={style.posts}>{postElements}</div>
    </div>
  );
});

export default MyPosts;

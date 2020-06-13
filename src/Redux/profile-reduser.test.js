import profileReduser, {
  addPostActionCreator,
  deletePost,
} from "./profile-reduser";
import React from "react";
const state = {
  posts: [
    { id: 1, message: "hi, how are you?", likeCount: 0 },
    { id: 2, message: "it is my first project", likeCount: 15 },
    { id: 3, message: "this is me", likeCount: 32 },
    { id: 4, message: "wow bro", likeCount: 47 },
  ],
};
it("length of posts should be incremented", () => {
  //1. start data
  let action = addPostActionCreator("it kamasutra.com");

  //2. action
  let newState = profileReduser(state, action);

  //3. expextation
  expect(newState.posts.length).toBe(5);
});

it("new post should be added", () => {
  //1. start data
  let action = addPostActionCreator("it kamasutra.com");

  //2. action
  let newState = profileReduser(state, action);

  //3. expextation
  expect(newState.posts[4].message).toBe("it kamasutra.com");
});

it("after deleting, length of the messages should be decremented", () => {
  //1. start data
  let action = deletePost(1);

  //2. action
  let newState = profileReduser(state, action);

  //3. expextation
  expect(newState.posts.length).toBe(3);
});

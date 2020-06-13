import { usersApi, profileApi } from "./../api/api";
import { stopSubmit } from "redux-form";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
//experiments for testing
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCES = "SAVE_PHOTO_SUCCES";

let initialaState = {
  posts: [
    { id: 1, message: "hi, how are you?", likeCount: 0 },
    { id: 2, message: "it is my first project", likeCount: 15 },
    { id: 3, message: "this is me", likeCount: 32 },
  ],
  profile: null,
  status: "",
};

const profileReduser = (state = initialaState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: action.newPostBody,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    ////experiments for testing
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCES:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody,
});
export const setUserProfileSuccsess = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });
//experiments for testing
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccsess = (photos) => ({
  type: SAVE_PHOTO_SUCCES,
  photos,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersApi.getUserId(userId).then((data) => {
      dispatch(setUserProfileSuccsess(data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileApi.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    //dispatch(stopSubmit("edit-profile", { 'contacts':{'facebook' : response.data.messages[0]} })); hat hat
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileApi.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccsess(response.data.data.photos));
  }
};
export default profileReduser;

import sidebarReduser from "./sidebar-reduser";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hi, how are you?", likeCount: 0 },
        { id: 2, message: "it is my first project", likeCount: 15 },
        { id: 3, message: "this is me", likeCount: 32 },
      ],
      newPostText: "it kamasutra.com",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "hey" },
        { id: 2, message: "how are you" },
        { id: 3, message: "what is your name?" },
        { id: 4, message: "are you free tonight?" },
        { id: 5, message: "lets go to the party" },
      ],
      newMessageBody: "",
    },
    sideBar: {},
  },
  _callSubscriber() {
    console.log("state is changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReduser(this._state.sideBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;

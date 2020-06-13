import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import appReduser from "./app-reduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  sideBar: sidebarReduser,
  usersPage: usersReduser,
  auth: authReduser,
  app: appReduser,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window._store_ = store;
export default store;

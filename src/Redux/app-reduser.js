import { getAuthUserData } from "./auth-reduser";
const INITIALIZED_SUCCESS = "SET_INITIALIZED";

let initialaState = {
  initialized: false,
};

const appReduser = (state = initialaState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReduser;

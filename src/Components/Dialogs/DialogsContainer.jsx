import React from "react";
import {
  //upDateNewMessageBodyCreator,
  sendMessageCreator,
} from "./../../Redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

// const DialogsContainer = (props) =>{
// let state = props.store.getState().dialogsPage;

// let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator())
// }
// let onNewMessageChange = (body) => {
//     props.store.dispatch(upDateNewMessageBodyCreator(body))
// }

//     return(
//         <StoreContext.Consumer>
//             {
//                 (store) =>{
//                     let state = store.getState().dialogsPage;

//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator())
//                     }
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(upDateNewMessageBodyCreator(body))
//                     }
//                 return <Dialogs upDateNewMessageBody={onNewMessageChange}
//                                 sendMessage={onSendMessageClick}
//                                 dialogsPage={state}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    //isAuth : state.auth.isAuth
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    // upDateNewMessageBody : (body) => {
    //     dispatch(upDateNewMessageBodyCreator(body))
    // },
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

let composeAllWrappers = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

//withAuthRedirect - @ HOC - a, ira mej vorosh baner arden arac patrastac patatuma mek urish component
//let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = composeAllWrappers; // connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

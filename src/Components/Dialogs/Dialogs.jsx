import React from "react";
import style from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm, reset } from "redux-form";
import { Textarea } from "./../Common/Preloader/FormsControls/FormsControls";
import {
  required,
  maxLengthCreator,
} from "./../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.addMessageTextArea}>
        <Field
          placeholder="enter your message"
          name={"newMessageBody"}
          component={Textarea}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
const afterSubmit = (result, dispatch) =>
  dispatch(reset("dialogAddMessageForm"));

const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm",
  onSubmitSuccess: afterSubmit,
})(AddMessageForm);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>

        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;

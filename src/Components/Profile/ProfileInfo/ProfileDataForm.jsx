import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  Input,
  Textarea,
} from "./../../Common/Preloader/FormsControls/FormsControls";
import style from "./profileInfo.module.css";
import styleForm from "../../Common/Preloader/FormsControls/FormsControl.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && <div className={styleForm.formSummaryError}>{error} </div>}
      <div>
        <b>Full name</b>{" "}
        <Field placeholder={"full name"} name={"fullName"} component={Input} />
      </div>
      <div>
        <b>Looking for a job </b>{" "}
        <Field type={"checkBox"} name={"lookingForAJob"} component={Input} />
      </div>
      <div>
        <b>My professional skills</b>{" "}
        <Field
          name={"lookingForAJobDescription"}
          component={Textarea}
          placeholder={"my skills"}
        />
      </div>
      <div>
        <b>About me</b>{" "}
        <Field
          name={"aboutMe"}
          component={Textarea}
          placeholder={"about me..."}
        />
      </div>
      <div>
        <b>Contacts</b> :{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={style.contact}>
              <b>
                {key} :{" "}
                <Field
                  placeholder={key}
                  name={"contacts." + key}
                  component={Input}
                />{" "}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};
const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;

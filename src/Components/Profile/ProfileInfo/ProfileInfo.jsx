import React, { useState } from "react";
import style from "./profileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfIleInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }
  let profile = props.profile;

  const onSubmit = (formData) => {
    console.log(formData);
    const promise = props.saveProfile(formData);
    promise.then(() => {
      setEditMode(false);
    });
  };
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={style.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          className={style.profilePic}
        />
        {props.isOwner && (
          <span>
            <input type={"file"} onChange={onMainPhotoSelected} />
          </span>
        )}

        {editMode ? (
          <ProfileDataForm
            initialValues={props.profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  const profile = props.profile;
  const goToEditMode = props.goToEditMode;
  return (
    <div>
      <div>
        <button onClick={goToEditMode}>Edit</button>
      </div>
      <p>
        <b>Full name</b> : {profile.fullName}
      </p>
      <p>
        <b>Looking for a job </b>: {profile.lookingForAJob ? "yes" : "no"}
      </p>
      <p>
        <b>My professional skills</b> : {profile.lookingForAJobDescription}
      </p>

      <p>
        <b>About me</b> : {profile.aboutMe}{" "}
      </p>
      <div>
        <b>Contacts</b> :{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};
const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b>{contactTitle}</b> : {contactValue}
    </div>
  );
};

export default ProfIleInfo;

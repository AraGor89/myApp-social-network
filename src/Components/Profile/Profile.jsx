import React from "react";
import MyPostsContainer from "./MyPosts";
import ProfIleInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfIleInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;

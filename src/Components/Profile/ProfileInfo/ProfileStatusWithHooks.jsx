import React, { useState, useEffect } from "react";
const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateMode = () => {
    setEditMode(true);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <b>status</b> :{" "}
          <span onDoubleClick={activateMode}>{props.status || "-----"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deActivateEditMode}
            onChange={onStatusChange}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;

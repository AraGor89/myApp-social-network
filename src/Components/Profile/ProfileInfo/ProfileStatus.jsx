import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editeMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editeMode: true,
    });
  };
  deActivateEditMode = () => {
    this.setState({
      editeMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editeMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "-----"}
            </span>
          </div>
        )}
        {this.state.editeMode && (
          <div>
            <input
              value={this.state.status}
              onChange={this.onStatusChange}
              onBlur={this.deActivateEditMode}
              autoFocus={true}
            ></input>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;

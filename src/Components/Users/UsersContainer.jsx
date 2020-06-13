import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Users from "./Users";
import style from "./users.module.css";
import Preloader from "./../Common/Preloader/Preloader";
import Paginator from "./../Common/Preloader/Paginator/Paginator";
import {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from "./../../Redux/users-reduser";
import {
  getUsersSelector,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "./../../Redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <div className={style.usersContainer}>
        <Paginator
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          totalItemsCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
        />
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  })
)(UsersContainer);

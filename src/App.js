import React from "react";
import { Route, withRouter, HashRouter, Switch } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "./Redux/redux-store";
import HeaderContainer from "./Components/Header";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import UsersContainer from "./Components/Users";
import { initializeApp } from "./Redux/app-reduser";
import Preloader from "./Components/Common/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";
import "./App.css";
const DialogsContainer = React.lazy(() => import("./Components/Dialogs"));
const ProfileContainer = React.lazy(() => import("./Components/Profile"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/" render={() => <UsersContainer />} />
            <Route path="*" render={() => <div> 404 not found </div>} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
const WithRouterConnectedApp = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);

const ReadyApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <WithRouterConnectedApp />
      </Provider>
    </HashRouter>
  );
};
export default ReadyApp;

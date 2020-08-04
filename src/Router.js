import React, { Component } from "react";
import Home from "./Pages/user/Home";
import Main from "./Pages/user/Main";
import Login from "./Pages/admin/Login";
import DashBoard from "./Pages/admin/Dashboard";
import ResetPage from "./Pages/admin/ResetPage";
import Report from "./Pages/admin/Report";
import Not404 from "./Pages/404";
import { Switch, Route } from "react-router-dom";

class Routers extends Component {
  render() {
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
          return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    const Notfound = () => {
      return <Not404 />;
    };
    const Hom = () => {
      return <Home />;
    };
    const Questionair = () => {
      return <Main />;
    };
    const Log = () => {
      return <Login />;
    };
    const Das = () => {
      return <DashBoard />;
    };
    const Reset = () => {
      return <ResetPage />;
    };
    const ReportChart = () => {
      return <Report />;
    };
    function fakeAuthen() {
      if (getCookie("token") !== null) {
        return true;
      } else {
        return false;
      }
    }

    return (
      <Switch>
        <Route exact path="/" render={Hom} />
        <Route exact path="/home" render={Hom} />
        <Route exact path="/main" render={Questionair} />
        <Route exact path="/admin" render={Log} />
        <Route
          render={() =>
            fakeAuthen() ? (
              <div>
                <Route exact path="/admin/dash" render={Das} />
                <Route exact path="/admin/reset" render={Reset} />
                <Route exact path="/admin/report" render={ReportChart} />
              </div>
            ) : (
              <div>
                <Route exact path="/admin/dash" render={Log} />
                <Route exact path="/admin/reset" render={Log} />
                <Route exact path="/admin/report" render={Log} />
                <Route exact path="*" render={Notfound} />
              </div>
            )
          }
        />
        <Route exact path="*" render={Notfound} />
      </Switch>
    );
  }
}

export default Routers;

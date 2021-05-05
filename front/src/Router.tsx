import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./styles/Layout";

import ChooseInfo from "./components/ChooseInfo/ChooseInfo";
import Home from "./components/Home/Home";
import EventList from "./components/EventList/EventList";
import ChooseInvit from "./components/ChooseInvit/ChooseInvit";
import EventDetail from "./components/EventDetail/EventDetail";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

type RouterWrapper = {
  component: any;
  layout: any;
  exact?: any;
  path: any;
};

function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}: RouterWrapper): JSX.Element {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/create-account" component={Signup} />
        <RouteWrapper path="/event-list" component={EventList} layout={Layout} />
        <RouteWrapper path="/choose-info" component={ChooseInfo} layout={Layout} />
        <RouteWrapper path="/create-event" component={Home} layout={Layout} />
        <RouteWrapper path="/invit" component={ChooseInvit} layout={Layout} />
        <RouteWrapper path="/details" component={EventDetail} layout={Layout} />
        <RouteWrapper path="/login" component={Login} layout={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
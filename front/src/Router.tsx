import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./styles/Layout";

import ChooseInfo from "./components/ChooseInfo/ChooseInfo";
import Home from "./components/Home/Home";
import EventList from "./components/EventList/EventList";
import ChooseInvit from "./components/ChooseInvit/ChooseInvit";
import EventDetail from "./components/EventDetail/EventDetail";

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
        <RouteWrapper exact path="/" component={Home} layout={Layout} />
        <RouteWrapper
          path="/ChooseInfo"
          component={ChooseInfo}
          layout={Layout}
        />
        <RouteWrapper path="/events" component={EventList} layout={Layout} />
        <RouteWrapper path="/Invit" component={ChooseInvit} layout={Layout} />
        <RouteWrapper path="/Details" component={EventDetail} layout={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

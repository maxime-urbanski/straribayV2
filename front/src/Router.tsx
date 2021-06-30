import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
  layout?: any;
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
  let token = localStorage.getItem('token');
  if (token) {
    let parts = token
      .split('.')
      .map((part) =>
        Buffer.from(
          part.replace(/-/g, '+').replace(/_/g, '/'),
          'base64'
        ).toString()
      );
      const payload = JSON.parse(parts[1]);
      const { exp } = payload;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      exp *1000 < new Date().getTime() ? (token = '') : token;
      localStorage.setItem('token',token)
  }
  
  return (
    <BrowserRouter>
      <Switch>
      {token ? 
      <>
        <RouteWrapper
          path="/event-list"
          component={EventList}
          layout={Layout}
        />
        <RouteWrapper
          path="/choose-info"
          component={ChooseInfo}
          layout={Layout}
        />
        <RouteWrapper path="/create-event" component={Home} layout={Layout} />
        <RouteWrapper path="/invit" component={ChooseInvit} layout={Layout} />
        <RouteWrapper path="/details" component={EventDetail} layout={Layout} />
      </>
      :
      <>
        <Route exact path="/" component={Login}>
        { token ? <Redirect to='/even-list' /> : <Login />} 
        </Route>
        <Route path="/create-account" component={Signup} />
      </>
    }
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

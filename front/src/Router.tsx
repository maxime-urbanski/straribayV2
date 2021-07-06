import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ChooseInfo from "./components/ChooseInfo/ChooseInfo";
import Home from "./components/Home/Home";
import EventList from "./components/EventList/EventList";
import ChooseInvit from "./components/ChooseInvit/ChooseInvit";
import EventDetail from "./components/EventDetail/EventDetail";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Unauthorized from "./components/Unauthorized/Unauthorized";

import Layout from "./styles/Layout";
import SecondLayout from "./styles/SecondLayout";

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
  const token = localStorage.getItem('token');
  const [checkToken, setCheckToken] = useState('');

  const checkingTokenDate = (token: string) => {
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
      // new Date(exp*1000).toISOString() < new Date().toISOString() ?? setCheckToken('');
      if (exp < Date.now() / 1000) {
        localStorage.clear();

      }
  }


  useEffect(() => {
    
    if (token) {
      checkingTokenDate(token);
      setCheckToken(token);
    } else {
      setCheckToken('');
      // history.push('/');
    }
  }, [token, checkToken]);
  
  return (
    <BrowserRouter>
      <Switch>
      {token  ? 
      <>
        <RouteWrapper exact path='/' component={EventList} layout={Layout} /> 
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
        <RouteWrapper path="/create-event" component={Home} layout={SecondLayout} />
        <RouteWrapper path="/invit" component={ChooseInvit} layout={Layout} />
        <RouteWrapper path="/details" component={EventDetail} layout={Layout} />
      </>
      :
      <>
        <Route exact path="/" component={Login} />
        <Route path="/create-account" component={Signup} />
        <Route path="/event-list" component={Unauthorized} />
        <Route path="/choose-info" component={Unauthorized} />
        <Route path="/create-event" component={Unauthorized} />
        <Route path="/invit" component={Unauthorized} />
        <Route path="/details" component={Unauthorized} />
      </>
    }
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

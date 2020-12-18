  import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ChooseInfo from "./components/ChooseInfo/ChooseInfo";
import Home from "./components/Home/Home";
import EventList from "./components/EventList/EventList";
import ChooseInvit from "./components/ChooseInvit/ChooseInvit";
import EventDetail from "./components/EventDetail/EventDetail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ChooseInfo" component={ChooseInfo} />
        <Route path="/events" component={EventList} />
        <Route path="/Invit" component={ChooseInvit} />
        <Route path="/Details" component={EventDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
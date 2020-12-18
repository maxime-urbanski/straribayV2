import React from "react";
import { Link } from "react-router-dom";

import {
  Header,
  BottomContainer,
  NavBar,
  CreationContainer,
  LastContainer,
} from "../../styles/containers";
import { Title, Button } from "../../styles/elements";
import eventList from "../../Data";

const Details = (props: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { attending, userSelected, event } = props.location.state;
  const { title, description, theme, date, hour, info } = event;
  event.id = eventList.length + 1;

  const addNewEvent = () => {
    eventList.push(event);
  };

  return (
    <>
      <Header>
        <div>
          <p>Logo</p>
        </div>
        <div>
          <p>Profil emplacement</p>
        </div>
      </Header>
      <BottomContainer>
        <NavBar>Hello</NavBar>
        <LastContainer>
          <Title>Create your Event</Title>
          <CreationContainer>
            <h3>{title}</h3>
            <h3>{theme}</h3>
            <h3>{description}</h3>
            <h3>{date}</h3>
            <h3>{hour}</h3>
            <h3>{info}</h3>
            <h3>
              Only
              {attending} can attend
            </h3>
            <h3>
              You&apos;ve invited
              {userSelected}
            </h3>
            <Link
              to={{
                pathname: "./events",
                state: {
                  eventlist: eventList,
                },
              }}
            >
              <Button onClick={addNewEvent}>Add this event ?</Button>
            </Link>
          </CreationContainer>
        </LastContainer>
      </BottomContainer>
    </>
  );
};
export default Details;
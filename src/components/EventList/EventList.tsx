import React from "react";

import EventCard from "../EventCard/EventCard";
import {
  Header,
  BottomContainer,
  NavBar,
  LastContainer,
} from "../../styles/containers";
import { Title } from "../../styles/elements";
import eventList from "../../Data";

function EventList() {
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
          {eventList.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              hour={event.hour}
              author={event.author}
              description={event.description}
              infos={event.infos}
              image={event.image}
            />
          ))}
        </LastContainer>
      </BottomContainer>
    </>
  );
}
export default EventList;
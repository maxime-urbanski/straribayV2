import React from "react";

import EventCard from "../EventCard/EventCard";
import { Title } from "../../styles/elements";
import eventList from "../../Data";

function EventList() {
  return (
    <>
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
    </>
  );
}
export default EventList;

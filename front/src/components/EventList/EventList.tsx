import React from "react";

import EventCard from "../EventCard/EventCard";
import { Title } from "../../styles/elements";
import eventList from "../../Data";

function EventList() {
  return (
    <>
      <Title>List of available events</Title>
      {eventList.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          theme={event.theme}
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

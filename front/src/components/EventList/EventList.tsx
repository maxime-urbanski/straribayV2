import React from "react";
import EventCard from "../EventCard/EventCard";
import { Title } from "../../styles/elements";
import { gql, useQuery } from "@apollo/client";

import './eventList.css';

interface Props {
  _id: string;
  title: string;
  theme: string;
  date: any;
  hour: string;
  description: string;
  infos: string;
  image?: string;
}

const GET_EVENTS = gql`
  query GetEvents {
    getEvents {
      _id
      title
      date
      hour
      description
      infos
      theme
      image
    }
  }
`;


function EventList() {
  const { data, loading, error } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <>
      <Title>List of available events</Title>
      <div className="container">
        {data.getEvents.map(
          ({ _id, title, theme, date, hour, description, infos, image }: Props) => (
            <EventCard
              key={_id}
              title={title}
              theme={theme}
              date={new Date(date * 1).toLocaleDateString()}
              hour={hour}
              description={description}
              infos={infos}
              image={image}
            />
          )
        )}
      </div>
    </>
  );
}
export default EventList;

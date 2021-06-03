import React from "react";
import EventCard from "../EventCard/EventCard";
import { Title } from "../../styles/elements";
import { gql, useQuery } from "@apollo/client";

interface Props {
  _id: string;
  title: string;
  theme: string;
  date: any;
  hour: string;
  description: string;
  infos: string;
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
    }
  }
`;

function EventList() {
  const { data, loading, error } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  // for (let i=0; i<data.getEvents.length; i++) {
  //   const totalDate = data.getEvents[i].date;
  //   const year = totalDate.split('-')[0];
  //   const month = totalDate.split('-')[1];
  //   const day = totalDate.split('T')[0].replace(year, ' ' );
  //   console.log(year, month, day);
  //   console.log("Date", new Date(data.getEvents[0].date).getMonth()+1)
  // }
  return (
    <>
      <Title>List of available events</Title>
      {data.getEvents.map(
        ({ _id, title, theme, date, hour, description, infos }: Props) => (
          <EventCard
            key={_id}
            title={title}
            theme={theme}
            date={new Date(date * 1).toLocaleDateString()}
            hour={hour}
            description={description}
            infos={infos}
          />
        )
      )}
    </>
  );
}
export default EventList;

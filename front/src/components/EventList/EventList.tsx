import React from "react";
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import EventCard, { IEvent } from "../EventCard/EventCard";
import { Title } from "../../styles/elements";
import { gql, useQuery } from '@apollo/client';

const GET_EVENTS = gql `
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

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
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
      {data.getEvents.map(({_id, title, theme, date, hour, description, infos}: IEvent) => (
        <EventCard
          key={_id}
          title={title}
          theme={theme}
          date={new Date(date*1).toLocaleDateString()}
          hour={hour}          
          description={description}
          infos={infos}          
        />
      ))}
    </>
  );
}
export default EventList;

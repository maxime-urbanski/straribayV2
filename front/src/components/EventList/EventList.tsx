import React, { useState, useEffect } from "react";
import EventCard from "../EventCard/EventCard";
import { Title } from "../../styles/elements";
import { gql, useQuery } from "@apollo/client";

import styles from './eventList.module.css';

export interface IAuthor {
  firstname: string;
  lastname: string;
  email: string;
}

interface Props {
  _id: string;
  author: IAuthor;
  title: string;
  theme: string;
  date: any;
  hour: string;
  description: string;
  infos: string;
  image: string;
  valueInputEmail: string;
}

const GET_EVENTS = gql`
  query GetEvents {
    getEvents {
      _id
      author
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

function EventList (props: any) {
  const { data, loading, error } = useQuery(GET_EVENTS);
  // const { loggedEmail } = props.location.state;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <>
      <Title>List of available events</Title>
      <div className={styles.container}>
        {data.getEvents.map(
          ({ _id, author, title, theme, date, hour, description, infos, image, valueInputEmail }: Props) => (
            <EventCard
              key={_id}
              author={author}
              _id={_id}
              title={title}
              theme={theme}
              date={new Date(date * 1).toLocaleDateString()}
              hour={hour}
              description={description}
              infos={infos}
              image={image}
              loggedEmail={valueInputEmail}
            />
          )
        )}
      </div>
    </>
  );
}
export default EventList;

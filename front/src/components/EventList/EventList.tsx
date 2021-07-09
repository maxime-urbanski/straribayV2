import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import EventCard from "../EventCard/EventCard";
import { Title } from "../../styles/elements";
import { UserContext } from '../../UserContext';

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
  userMail: string;
}

export const GET_EVENTS = gql`
  query GetEvents {
    getEvents {
      event {
        _id
        author {
          firstname
          lastname
          email
        }
        title
        date
        hour
        description
        infos
        theme
        image
      }
      email
    }
  }
`;

function EventList ({events}: any) {
  const { data, loading, error } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <>
      <Title>List of available events</Title>
      <div className={styles.container}>
        {data && data.getEvents.event.map(
          ({ _id, author, title, theme, date, hour, description, infos, image }: Props) => (
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
              userMail={data.getEvents.email}
            />
          )
        )}
      </div>
    </>
  );
}
export default EventList;

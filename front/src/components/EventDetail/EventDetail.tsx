import React from "react";
import { Link } from "react-router-dom";

import { CreationContainer } from "../../styles/containers";
import { Title, Button } from "../../styles/elements";
import eventList from "../../Data";

import { gql, useMutation } from '@apollo/client';

const Add_Event = gql`
mutation AddEvent($title: String!, $date: Time!, $hour: String, $author: String, $description: String, $infos: String, $image: Sring) {
  addEvent(title: $title, date: $date, hour: $hour, author: $author, description: $description, infos: $infos, image: $image) {
    title
    date
    hour
    author
    description
    infos
    image
  }
} 
`

const Details = (props: any) => {
    const { attending, userSelected, event } = props.location.state;
    const { title, description, theme, date, hour, info } = event;
      event.id = eventList.length + 1;
    // eslint-disable-next-line react/destructuring-assignment
    const [addEvent, {data}] = useMutation(Add_Event);

    console.log(title);
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
      e.preventDefault();
      addEvent({variables: {
        title: title,
        date: date,
        hour: hour,
        author: "Vince",
        description: description,
        infos: info,
        image: "test image"
      }})      
    } 
    ;
  console.log({data});

  return (
    <>
      <Title>Create your Event</Title>
      <CreationContainer>
        <h3>{data && data.title}</h3>
        <h3>{data && data.theme}</h3>
        <h3>{data && data.description}</h3>
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
          <Button onSubmit={handleSubmit}>Add this event ?</Button>
        </Link>
      </CreationContainer>
    </>
  );
};
export default Details;

import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { CreationContainer } from "../../styles/containers";
import { Title, Button } from "../../styles/elements";

import { gql, useMutation } from "@apollo/client";

const ADD_EVENT = gql`
  mutation AddEvent($input: InputEvent) {
    addEvent(input: $input) {
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

const Details = (props: any): JSX.Element => {
  let history = useHistory(); 
  const { event, picture } = props.location.state;
  const { title, description, theme, date, hour, info } = event;
  const [addEvent] = useMutation(ADD_EVENT);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    await addEvent({
      variables: {
        input: {
          title: title,
          date: date,
          hour: hour,
          description: description,
          infos: info,
          theme: theme,
          image: picture,
        },
      },
    })
    .then(() => history.push("/event-list"))
    .catch((err)=> {
      console.log(err)
    })
  }

  return (
    <>
      <Title>Create your Event</Title>
      <CreationContainer>
        <h3>{title}</h3>
        <h3>{theme}</h3>
        <h3>{description}</h3>
        <h3>{date}</h3>
        <h3>{hour}</h3>
        <h3>{info}</h3>
        <Button onClick={handleSubmit}>Add this event ? </Button>
      </CreationContainer>
    </>
  );
};
export default Details;

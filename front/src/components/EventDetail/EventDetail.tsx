import React from "react";
import { Link } from "react-router-dom";

import { CreationContainer } from "../../styles/containers";
import { Title, Button } from "../../styles/elements";
import eventList from "../../Data";

import { gql, useMutation} from '@apollo/client';

const ADD_EVENT = gql`
mutation AddEvent($title: String, $date: Time, $hour: String, $description: String, $infos: String, $theme: String) {
  addEvent(title: $title, date: $date, hour: $hour, description: $description, infos: $infos, theme: $theme) {
    title
    date
    hour
    description
    infos
    theme
  }
} 
`

const Details = (props: any): JSX.Element => {
    const { attending, userSelected, event } = props.location.state;
    const { title, description, theme, date, hour, info } = event;
      event.id = eventList.length + 1;
    // eslint-disable-next-line react/destructuring-assignment
    const [addEvent] = useMutation(ADD_EVENT);

   
    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
      e.preventDefault(); 
      addEvent({ 
          variables: {
          title: title,
          date: date,
          hour: hour,
          description: description,
          infos: info,
          theme: theme
        }
      })
      .then((response)=> console.log(response.data))
      .catch((err)=> console.log(err))
     console.log(addEvent())
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
        <h3>
          Only <span></span>
          {attending} can attend
        </h3>
        <h3>
          You&apos;ve invited <span></span>
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
          <Button onClick={handleSubmit}>Add this event ?</Button>
        </Link> 
      </CreationContainer>
    </>
  );
}; 
export default Details;

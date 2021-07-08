import React, { useContext } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router";

import { IAuthor } from '../EventList/EventList';
import { GET_EVENTS } from "../EventList/EventList";

import { Card, CardBody, CardPicture, CardText, CardButtons } from "../../styles/containers";
import { Button, CardTitle, Text } from "../../styles/elements";
import { UserContext } from "../../UserContext";

import cross from "../../assets/delete.svg";

import styles from './eventCard.module.css';

export interface IEventCard {
  _id: string;
  author: IAuthor;
  title: string;
  theme: string;
  date: Date | string | any;
  hour: string;
  description: string;
  infos: string;
  image: string;
  userMail: string;
}

const DELETE_EVENT = gql`
  mutation deleteEvent ($input: IId) {
    deleteEvent(input: $input){
      _id
    }
  }
`;

const EventCard = ({
  _id,
  author,
  title,
  theme,
  date,
  hour,
  description,
  infos,
  image,
  userMail,
}: IEventCard) => {
  const { userEmail } = useContext(UserContext);
  const history = useHistory();
  const [deleteEvent] = useMutation(DELETE_EVENT, {
    refetchQueries: mutationResult => [{query: GET_EVENTS}] 
  });
  
  const handleDeleteEvent = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    await deleteEvent({
      variables: {
        input: {
          _id: _id,
        },
      },
    })
    .catch((err) => console.log(err))
  }

  return (
    <Card>
      <CardPicture alt='event picture' src={image}/>
      <CardBody>
        <div className={styles.titleContainer}>
          <CardTitle>{title}</CardTitle>
          {author.email === userMail && 
            <button className={styles.button} onClick={handleDeleteEvent}>
              <img  className={styles.cross} src={cross} alt="delete-event"/>
            </button>
          }
        </div>
        <div className={styles.textContainer}>
          <CardText>
            <Text>{theme}</Text>
            <Text>{date}</Text>
            <Text>{hour}</Text>
          </CardText>
          <CardText>
            <Text>{description}</Text>
            <Text>{infos}</Text>
          </CardText>
          <CardButtons>
            <Button>ATTEND</Button>
            <Button>DETAILS</Button>
          </CardButtons>
        </div>
      </CardBody>
    </Card>
  );
};

export default EventCard;

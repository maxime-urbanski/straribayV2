import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router";

import { Card, CardBody, CardPicture, CardText, CardButtons } from "../../styles/containers";
import { Button, CardTitle, Text } from "../../styles/elements";

import cross from "../../assets/delete.svg";

import styles from './eventCard.module.css';

export interface IEventCard {
  _id: string;
  title: string;
  theme: string;
  date: Date | string | any;
  hour: string;
  description: string;
  infos?: string;
  image?: string;
}

const DELETE_EVENT = gql`
  mutation deleteEvent ($input: IId) {
    deleteEvent(input: $input)
  }
`;

const EventCard: React.FC<IEventCard> = ({
  _id,
  title,
  theme,
  date,
  hour,
  description,
  infos,
  image,
}) => {
  const history = useHistory();
  const [deleteEvent] = useMutation(DELETE_EVENT);

  const adminUser = () => {
    if (localStorage.getItem('token')) return true;
  }
  
  const handleDeleteEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    deleteEvent({
      variables: {
        input: {
          _id: _id,
        },
      },
    })
    .catch((err) => console.log(err))
    .finally(() => history.go(0));
  }

  return (
    <Card>
      <CardPicture alt='event picture' src={image}/>
      <CardBody>
        <div className={styles.titleContainer}>
          <CardTitle>{title}</CardTitle>
          {adminUser ??
            <img className={styles.cross} src={cross} alt="delete-event"/>
          }
        </div>
        <div className={styles.textContainer}>
          <CardText>
            <Text>{_id}</Text>
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

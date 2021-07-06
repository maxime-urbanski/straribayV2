import React from "react";

import { Card, CardBody, CardPicture, CardText, CardButtons } from "../../styles/containers";
import { Button, CardTitle, Text } from "../../styles/elements";

import { gql, useMutation } from "@apollo/client";

import './eventCard.css';

export interface IEventCard {
  title: string;
  theme: string;
  date: Date | string | any;
  hour: string;
  description: string;
  infos?: string;
  image?: string;
}

const DELETE_EVENT = gql`
  mutation DeleteEvent ($input: InputId) {
    deleteEvent(input: $input) {
      _id
    }
  }
`;



const EventCard: React.FC<IEventCard> = ({
  title,
  theme,
  date,
  hour,
  description,
  infos,
  image,
}) => {
  return (
    <Card>
      <CardPicture alt='event picture' src={image}/>
      <CardBody>
        <div>X</div>
        <div><CardTitle>{title}</CardTitle></div>
        <div className="textContainer">
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

import React from "react";

import { Card, CardBody, CardPicture, CardText, CardButtons } from "../../styles/containers";
import { Button, CardTitle, Text } from "../../styles/elements";

export interface IEventCard {
  title: string;
  theme: string;
  date: Date | string | any;
  hour: string;
  description: string;
  infos?: string;
  image?: string;
}

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
        <div><CardTitle>{title}</CardTitle></div>
        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
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

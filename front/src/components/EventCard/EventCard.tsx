import React from "react";

import { Card, CardBody, CardTitle } from "../../styles/containers";
import { Button } from "../../styles/elements";

export interface IEventCard {
  title: string;
  theme: string;
  date: Date | string | any;
  hour: string;
  description: string;
  infos: string | undefined;
}

const EventCard: React.FC<IEventCard> = ({
  title,
  theme,
  date,
  hour,
  description,
  infos,
}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardBody>
        <span style={{ paddingLeft: "15px" }}>{theme}</span>
        <span style={{ paddingLeft: "15px" }}>
          {date} {hour}
        </span>
        <span style={{ paddingLeft: "15px" }}>{description}</span>
        <span style={{ paddingLeft: "15px" }}>{infos}</span>
      </CardBody>

      <div>
        <Button style={{ paddingLeft: "15px" }}>ATTEND</Button>
        <Button style={{ paddingLeft: "15px" }}>DETAILS</Button>
      </div>
    </Card>
  );
};

export default EventCard;

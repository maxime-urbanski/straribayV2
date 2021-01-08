import React from "react";

import { Card } from "../../styles/containers";
import { Button } from "../../styles/elements";

function EventCard({
  title,
  date,
  hour,
  author,
  description,
  infos,
  image,
}: any) {
  return (
    <Card>
      <div>
        <h3>{title}</h3>
        <span>
          {date} {hour}
        </span>
        <span>{author}</span>
        <span>{description}</span>
        <span>{infos}</span>
        <span>{image}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button>ATTEND</Button>
        <Button>DETAILS</Button>
      </div>
    </Card>
  );
}

export default EventCard;

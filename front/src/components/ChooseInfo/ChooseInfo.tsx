import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CreationContainer } from "../../styles/containers";
import { Button, Title } from "../../styles/elements";

const ChooseInfo = (props: any) => {
  const { title, description, theme } = props.location.state;

  const event = {
    title,
    description,
    theme,
  };
  const [info, setInfo] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const handleInfo = (event: any) => {
    setInfo(event.target.value);
  };

  const handleDate = (event: any) => {
    setDate(event.target.value);
  };

  const handleHour = (event: any) => {
    setHour(event.target.value);
  };

  return (
    <>
      <Title>Create your Event</Title>
      <CreationContainer>
        <input
          value={date}
          onChange={handleDate}
          type="date"
          min={new Date().toString()}
          max="01-01-2030"
        />
        <input value={hour} onChange={handleHour} type="time" />
        <textarea value={info} onChange={handleInfo} />
        <Link
          to={{
            pathname: "/Invit",
            state: {
              date,
              hour,
              info,
              event,
            },
          }}
        >
          <Button>next</Button>
        </Link>
      </CreationContainer>
    </>
  );
};

export default ChooseInfo;

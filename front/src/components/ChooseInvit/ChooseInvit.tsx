import React, { useState } from "react";
import { Link } from "react-router-dom";

import Result from "../Result/Result";

import { CreationContainer } from "../../styles/containers";
import { Button, Title } from "../../styles/elements";

const userSuggestions = ["Cloé", "Baptiste", "Maxime", "Marie"];

const ChooseInvit = (props: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { event, hour, date, info } = props.location.state;
  event.date = date;
  event.hour = hour;
  event.info = info;

  const [value, setValue] = useState("");
  const [attending, setAttending] = useState("Friends");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const valueInsensibleCase = new RegExp(value, "i");

  const handleAttend = (event: any) => {
    setAttending(event.target.value);
  };

  return (
    <>
      <Title>Create your Event</Title>
      <CreationContainer>
        <div>
          <label htmlFor="audience">Who can attend :</label>
          <select onChange={handleAttend} name="choose-audience" id="audience">
            <option value="Friends">Friends</option>
            <option value="Promo">Promo</option>
            <option value="All">All</option>
          </select>
        </div>
        <div>
          <label htmlFor="invitations">Invite someone :</label>
          <input
            onChange={handleChange}
            name="choose=invitation"
            id="invitations"
            type="email"
            value={value}
            list="users"
          />
        </div>
        <Result
          valueInsensibleCase={valueInsensibleCase}
          userSuggestions={userSuggestions}
          value={value}
        />
        <Link
          to={{
            pathname: "/Details",
            state: {
              attending,
              userSelected: value,
              event,
            },
          }}
        >
          <Button>Next</Button>
        </Link>
      </CreationContainer>
    </>
  );
};

export default ChooseInvit;

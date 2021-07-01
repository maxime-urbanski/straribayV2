import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CreationContainer } from "../../styles/containers";
import { Button, Title } from "../../styles/elements";


const ChooseInvit = (props: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { event, hour, date, info } = props.location.state;
  event.date = date;
  event.hour = hour;
  event.info = info;

  const [pictureValue, setPictureValue] = useState("");

  const handleChangePicture = (event: any) => {
    setPictureValue(event.target.value);
  };

  return (
    <>
      <Title>Create your Event</Title>
      <CreationContainer>
        <div>
          <label htmlFor="picture">Choose a picture</label>
          <input
            onChange={handleChangePicture}
            name="choose=picture"
            id="picture"
            type="string"
            value={pictureValue}
          />
        </div>
        {pictureValue ?
        <Link
          to={{
            pathname: "/Details",
            state: {
              event,
              picture: pictureValue
            },
          }}
        >
          <Button>Next</Button>
        </Link>
        :
        <Button notValid>Next</Button>
        }
      </CreationContainer>
    </>
  );
};

export default ChooseInvit;

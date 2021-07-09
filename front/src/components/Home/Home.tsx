import React, { useState } from "react";
import { Link } from "react-router-dom";

import ThemeSelect from "../ThemeSelect/ThemeSelect";
import { CreationContainer } from "../../styles/containers";
import { Button, Title, LogoCard } from "../../styles/elements";

import logo from '../../assets/logo.png'

const Home = (): JSX.Element => {
  const [valueInputTitle, setValueInputTitle] = useState("");
  const [valueInputArea, setValueInputArea] = useState("");
  const [valueInputTheme, setValueInputTheme] = useState("gaming");
  const handleInput = (even: any) => {
    setValueInputTitle(even.target.value);
  };
  const handleArea = (event: any) => {
    setValueInputArea(event.target.value);
  };
  const handleSelect = (event: any) => {
    setValueInputTheme(event.target.value);
  };
  return (
    <>
      <Title>Create your Event</Title>
      <CreationContainer>
        <LogoCard src={logo} />
        <h4>Give a title to your event</h4>
        <input value={valueInputTitle} type="text" onChange={handleInput} />
        <h4>Give a theme to your event</h4>
        <ThemeSelect handleSelect={handleSelect} />
        <h4>Give a description to your event </h4>
        <textarea value={valueInputArea} onChange={handleArea} />
        {valueInputTitle && valueInputArea && valueInputTheme ?
        <Link
          to={{
            pathname: "/choose-info",
            state: {
              title: valueInputTitle,
              description: valueInputArea,
              theme: valueInputTheme,
            },
          }}
        >
          <Button>NEXT</Button>
        </Link>
        :
        <Button notValid>Next</Button>
        }
      </CreationContainer>
    </>
  );
};
export default Home;

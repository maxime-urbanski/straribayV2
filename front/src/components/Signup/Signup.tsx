import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useHistory, Link } from "react-router-dom";

import { CreationContainer } from "../../styles/containers";
import { Button, Title, Input } from "../../styles/elements";

import styles from "./signup.module.css";

const Signup = () => {
  const [valueInputFirstname, setValueInputFirstname] = useState("");
  const [valueInputLastname, setValueInputLastname] = useState("");
  const [valueInputEmail, setValueInputMail] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");
  const [valueInputConfirmPassword, setValueInputConfirmPassword] =
    useState("");

  const history = useHistory();
  const handleInputFirstname = (event: any) => {
    setValueInputFirstname(event.target.value);
  };

  const handleInputLastname = (event: any) => {
    setValueInputLastname(event.target.value);
  };

  const handleInputMail = (event: any) => {
    setValueInputMail(event.target.value);
  };

  const handleInputPassword = (event: any) => {
    setValueInputPassword(event.target.value);
  };

  const handleInputConfirmPassword = (event: any) => {
    setValueInputConfirmPassword(event.target.value);
  };

  const ADD_USER = gql`
    mutation AddUser($input: InputUser) {
      addUser(input: $input) {
        firstname
        lastname
        email
      }
    }
  `;
  const goodPassword =
    valueInputPassword.length > 0 &&
    valueInputPassword === valueInputConfirmPassword;

  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    addUser({
      variables: {
        input: {
          firstname: valueInputFirstname,
          lastname: valueInputLastname,
          email: valueInputEmail,
          password: valueInputPassword,
        },
      },
    })
      .catch((err) => console.log(err))
      .finally(() => history.push("/"));
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Title>Create an account on Straribay !</Title>
        <CreationContainer>
          <h4>Your firstname</h4>
          <Input
            value={valueInputFirstname}
            type="text"
            onChange={handleInputFirstname}
            required
          />
          <h4>Your lastname</h4>
          <Input
            value={valueInputLastname}
            type="text"
            onChange={handleInputLastname}
            required
          />
          <h4>Your email</h4>
          <Input
            value={valueInputEmail}
            type="text"
            onChange={handleInputMail}
            required
          />
          <h4>Your password</h4>
          <Input
            value={valueInputPassword}
            type="password"
            onChange={handleInputPassword}
            required
          />
          <h4>Confirm your password</h4>
          <Input
            value={valueInputConfirmPassword}
            type="password"
            onChange={handleInputConfirmPassword}
            required
          />
          {!goodPassword && valueInputConfirmPassword.length > 0 ? (
            <p>Passwords are not the same</p>
          ) : null}
          {goodPassword ? (
            <Button onClick={handleSubmit}>Connect</Button>
          ) : (
            <Button notValid>Connect</Button>
          )}
          <p>Already got an account ? <Link to="/">Go to login</Link></p>
        </CreationContainer>
      </div>
    </div>
  );
};

export default Signup;

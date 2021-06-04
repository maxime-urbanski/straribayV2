import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { CreationContainer } from "../../styles/containers";
import { Button, Title, Input } from "../../styles/elements";

const Login = () => {
  const [valueInputEmail, setValueInputMail] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");
  const handleInputMail = (event: any) => {
    setValueInputMail(event.target.value);
  };

  let history = useHistory();
  const handleInputPassword = (event: any) => {
    setValueInputPassword(event.target.value);
  };

  const AUTHENTIFICATE = gql`
    mutation auth($email: String!, $password: String!) {
      auth(email: $email, password: $password) {
        firstname
        lastname
        token
        email
      }
    }
  `;
  const [auth, { error, loading, data }] = useMutation(AUTHENTIFICATE);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    auth({
      variables: {
        email: valueInputEmail,
        password: valueInputPassword,
      }
    })
      .then((response) => console.log(response.data.auth.token))
      .catch((err) => console.log(err));
    };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error! {error.message}</p>;
  return (
    <>
      <Title>Connection</Title>
      <CreationContainer>
        <h4>Your Email</h4>
        <Input value={valueInputEmail} type="text" onChange={handleInputMail} />
        <h4>Your Password</h4>
        <Input
          value={valueInputPassword}
          type="password"
          onChange={handleInputPassword}
        />
        <Button onClick={handleSubmit}>Connect</Button>
        <p>
          No account yet ? <Link to="/create-account">Create one here</Link>
        </p>
      </CreationContainer>
    </>
  );
};

export default Login;

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
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        user {
          firstname
          lastname
          email
        }
        token
      }
    }
  `;
  const [login, { error, loading }] = useMutation(AUTHENTIFICATE);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    await login({
      variables: {
        email: valueInputEmail,
        password: valueInputPassword,
      }
    })
    .then((response) => {
      const token = response.data.login.token;
      if (token) {
        localStorage.setItem('token', token);
      }
    })      
    .then(() => {
      history.push('/event-list')
      history.go(0)
    }
    )
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

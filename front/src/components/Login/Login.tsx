import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreationContainer } from '../../styles/containers';
import { Button, Title, Input } from "../../styles/elements";

const Login = () => {
  const [valueInputEmail, setValueInputMail] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");
  const handleInputMail = (event: any) => {
    setValueInputMail(event.target.value);
  };
  const handleInputPassword = (event: any) => {
    setValueInputPassword(event.target.value);
  };
  return (
    <>
      <Title>Connection</Title>
        <CreationContainer>
        <h4>Your Email please</h4>
        <Input value={valueInputEmail} type="text" onChange={handleInputMail} />
        <h4>Your Password</h4>
        <Input value={valueInputPassword} type="password" onChange={handleInputPassword} />
        <Button>Connect</Button>
        <p>No account yet ? <Link to="/create-account">Create one here</Link></p>
      </CreationContainer>
    </>
  )
}

export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CreationContainer } from '../../styles/containers';
import { Button, Title, Input } from "../../styles/elements";

const Signup = () => {
  const [valueInputFirstname, setValueInputFirstname] = useState("");
  const [valueInputLastname, setValueInputLastname] = useState("");
  const [valueInputEmail, setValueInputMail] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");
  const [valueInputConfirmPassword, setValueInputConfirmPassword] = useState("");
  
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

//  const checkIfSamePassword = () => {
//    valueInputPassword === valueInputConfirmPassword ? 
//  }

  return (
    <>
      <Title>Créer un compte</Title>
      <CreationContainer>
        <h4>Your firstname</h4>
        <Input value={valueInputFirstname} type="text" onChange={handleInputFirstname} required/>
        <h4>Your lastname</h4>
        <Input value={valueInputLastname} type="text" onChange={handleInputLastname} required/>
        <h4>Your email</h4>
        <Input value={valueInputEmail} type="text" onChange={handleInputMail} required/>
        <h4>Your password</h4>
        <Input value={valueInputPassword} type="password" onChange={handleInputPassword} required/>
        <h4>Confirm your password</h4>
        <Input value={valueInputConfirmPassword} type="password" onChange={handleInputConfirmPassword} required/>
        <Link 
          to={{
            pathname: "/event-list",
            state : {
              valueInputFirstname,
              valueInputLastname,
              valueInputEmail,
              valueInputPassword,
              valueInputConfirmPassword
            }
          }}
        >
        <Button>Connect</Button>
        </Link>
      </CreationContainer>
    </>  )
}

export default Signup;
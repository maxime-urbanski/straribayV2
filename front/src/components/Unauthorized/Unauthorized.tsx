import React from 'react';
import { Link } from 'react-router-dom';

import { Title, Button } from "../../styles/elements";

import "./unauthorized.css";

const Unauthorized = () => {
  return (
    <div className="container">
      <Title>Unauthorized !</Title>
      <p>You are not authorized on this page, please log in or sign up</p>
      <div className="buttonsArea">
        <div className="button">
          <p>go to login page :</p>
          <Link to="/">
            <Button>Login</Button>
          </Link>
        </div>
        <div className="button">
          <p>go to sign up page :</p>
          <Link to="/create-account">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  )
};



export default Unauthorized;

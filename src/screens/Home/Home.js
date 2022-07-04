import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import {Link} from "react-router-dom";
import {logIn, signUp} from "../../services/firebase";

export const Home = ({ onAuth, isSignUp }) => {
  const handleSubmit = ({ login, pass }) => {
    if (isSignUp) {
      signUp(login, pass);
    } else {
      logIn(login, pass);
    }
  }

  return (
    <>
      <h3>Hope Page</h3>
      <LoginForm onSubmit={handleSubmit} />
      <Link to={isSignUp ? "/" : "/signup"}>
        {isSignUp ? "to login" : "to signup"}
      </Link>
    </>
  );
}



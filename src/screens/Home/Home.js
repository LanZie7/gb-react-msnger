import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import {Link} from "react-router-dom";

export const Home = ({ onAuth, isSignUp }) => (
  <>
    <h3>Hope Page</h3>
    <LoginForm isSignUp={isSignUp} onSubmit={onAuth} />
    <Link to={isSignUp ? "/" : "/signup"}>
      {isSignUp ? "to login" : "to signup"}
    </Link>
  </>
);


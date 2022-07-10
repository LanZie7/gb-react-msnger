import React, { useState } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { logIn, signUp } from "../../services/firebase";

export const Home = ({ onAuth, isSignUp }) => {
  const [error, setError] = useState('');
  const handleSubmit = async ({ login, pass }) => {
    try {
      if (isSignUp) {
        await signUp(login, pass);
      } else {
        await logIn(login, pass);
      }
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <h3>Hope Page</h3>
      <LoginForm onSubmit={handleSubmit} />
      {error && <h5>{error}</h5>}
      <Link to={isSignUp ? "/" : "/signup"}>
        {isSignUp ? "to login" : "to signup"}
      </Link>
    </>
  );
}



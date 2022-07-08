import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import { Routes } from "react-router";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";
import { ThemeContext } from "./utils/ThemeContext";
import { Home } from "./screens/Home/Home";
import { Articles } from "./screens/Articles/Articles";

import './App.css';
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {PublicRoute} from "./components/PublicRoute/PublicRoute";

import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./services/firebase";


function App() {

  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  }
  const handleLogout = () => {
    setAuthed(false);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        handleLogin()
      } else {
        handleLogout()
      }
    });
    return () => unsubscribe();
  }, []);

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return  (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "#757de8" : "#534bae" })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="profile"
              style={({ isActive }) => ({ color: isActive ? "#757de8" : "#534bae" })}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="chat"
              style={({ isActive }) => ({ color: isActive ? "#757de8" : "#534bae" })}
            >
              Chats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="articles"
              style={({ isActive }) => ({ color: isActive ? "#757de8" : "#534bae" })}
            >
              Articles
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={handleLogin} />} />
            <Route path="signup" element={<Home onAuth={handleLogin} isSignUp />}/>
          </Route>

          <Route path="/profile" element={<PrivateRoute authed={authed} />}>
            <Route path="" element={<Profile onLogout={handleLogout} />} />
          </Route>

          <Route path="/articles" element={<Articles />} />
          <Route path="/chat" element={<ChatList />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App;

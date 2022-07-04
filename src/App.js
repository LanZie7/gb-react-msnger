import React, { useState } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import { Routes } from "react-router";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";
import { ThemeContext } from "./utils/ThemeContext";
import { Home } from "./screens/Home/Home";
import { Articles } from "./screens/Articles/Articles";

import './App.css';


function App() {
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
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/chat" element={<ChatList />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          {/*<Route path="*" element={<h4>404 Error</h4>} />*/}
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App;

import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import { Routes } from "react-router";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";
import { ThemeContext } from "./utils/ThemeContext";
import { store } from "./store";

import './App.css';


const Home = () => <h3>Hope Page</h3>;

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return  (
    <Provider store={store}>
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
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<ChatList />}>
              <Route path=":id" element={<Chat />} />
            </Route>
            <Route path="*" element={<h4>404 Error</h4>} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  )
}

export default App;

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
import {Home} from "./screens/Home/Home";


const initialChats = [
  {
    name: "ReactChat",
    id: "reactChat",
  },
  {
    name: "VueChat",
    id: "vueChat",
  },
  {
    name: "AngularChat",
    id: "angularChat",
  },
];

const initialMsgs = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

function App() {
  const [theme, setTheme] = useState("dark");

  const [chats, setChats] = useState(initialChats);
  const [messages, setMsgs] = useState(initialMsgs);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const addMsg = (addText, id) => {
    setMsgs({ ...messages, [id]: [...messages[id], addText] });
  };

  const addChat = (newChat) => {
    setChats(prevChats => [...prevChats, newChat]);
    setMsgs(prevMsgs => ({ ...prevMsgs, [newChat.id]: [] }))
  };

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
            <Route path="/chat" element={<ChatList chats={chats} addChat={addChat} />}>
              <Route path=":id" element={<Chat messages={messages} addMsg={addMsg} />} />
            </Route>
            <Route path="*" element={<h4>404 Error</h4>} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  )
}

export default App;

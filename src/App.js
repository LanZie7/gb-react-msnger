import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import { Routes } from "react-router";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";
import { ThemeContext } from "./utils/ThemeContext";
import { Home } from "./screens/Home/Home";
import { addChat, deleteChat } from "./store/chats/actions";

import './App.css';


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

  const chats = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const [messages, setMsgs] = useState(initialMsgs);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const addMsg = (addText, id) => {
    setMsgs({ ...messages, [id]: [...messages[id], addText] });
  };

  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
    setMsgs(prevMsgs => ({ ...prevMsgs, [newChat.id]: [] }))
  };

  const removeChat = (id) => {
    dispatch(deleteChat(id))
    setMsgs(prevMsgs => {
      const newMsgs = {...prevMsgs};
      delete newMsgs[id];
      return newMsgs;
    })
  };


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
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={
            <ChatList
              chats={chats}
              addChat={addNewChat}
              deleteChat={removeChat}
            />
          }>
            <Route path=":id" element={<Chat messages={messages} addMsg={addMsg} />} />
          </Route>
          <Route path="*" element={<h4>404 Error</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App;

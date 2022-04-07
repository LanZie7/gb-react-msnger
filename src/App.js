import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Routes } from "react-router";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./screens/Chat/Chat";

import './App.css';


const Home = () => <h3>Hope Page</h3>;

function App() {
  return  (
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
            to="chat"
            style={({ isActive }) => ({ color: isActive ? "#757de8" : "#534bae" })}
          >
            Chats
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatList />}>
          <Route path=":id" element={<Chat />} />
        </Route>
        {/*<Route path="*" element={<h4>404 Error</h4>} />*/}
      </Routes>
    </BrowserRouter>
    )
}

export default App;

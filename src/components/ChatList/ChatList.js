import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import { IconButton } from '@mui/material';
import DeleteButton from '@mui/icons-material/Delete';

import { ChangeThemeBtn } from "../Example/Example";

import "./ChatList.styles.css";
import {Form} from "../Form/Form";


export const ChatList = ({ chats, addChat }) => {
  const { changeTheme } = useContext(ThemeContext);

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };

    addChat(newChat);
  }

  return (
    <>
      <ChangeThemeBtn
        onClick={
          changeTheme
          // setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
        }
      >Change Theme
      </ChangeThemeBtn>

      <div className="chat-list">
        {chats.map((chat) => (
          <div>
            <Link className="chat-item" to={`/chat/${chat.id}`} key={chat.id}>
              { chat.name }
            </Link>
            <IconButton className="deleteBtn" aria-label="delete" size="small">
              <DeleteButton fontSize="small" />
            </IconButton>
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
}

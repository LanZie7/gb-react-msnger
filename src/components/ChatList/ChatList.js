import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import { IconButton } from '@mui/material';
import DeleteButton from '@mui/icons-material/Delete';

import { ChangeThemeBtn } from "../Example/Example";

import "./ChatList.styles.css";
import {Form} from "../Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {selectChats} from "../../store/chats/selectors";
import {addChat, deleteChat} from "../../store/chats/actions";
import {clearMessagesForChat, initMessagesForChat} from "../../store/messages/actions";


export const ChatList = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const { changeTheme } = useContext(ThemeContext);

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };

    dispatch(addChat(newChat));
    dispatch(initMessagesForChat(newChat.id));
  };

  const handleRemoveChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(clearMessagesForChat(id));
  }


  return (
    <>
      <ChangeThemeBtn
        variant="text"
        onClick={
          changeTheme
          // setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
        }
      >Change Theme
      </ChangeThemeBtn>

      <div className="chat-list">
        {chats.map((chat) => (
          <div className="chat-list-content" key={chat.id}>
            <Link className="chat-item" to={`/chat/${chat.id}`}>
              { chat.name }
            </Link>
            <IconButton
              className="deleteBtn"
              aria-label="delete"
              onClick={() => handleRemoveChat(chat.id)}
            >Delete
              <DeleteButton
                style={{ color: "white" }}
                fontSize="small"
              />
            </IconButton>
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
}

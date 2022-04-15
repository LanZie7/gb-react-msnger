import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import SendIcon from "@material-ui/icons/Send";
import { Button } from "@mui/material";
import { ChangeThemeBtn } from "../Example/Example";

import "./ChatList.styles.css";


const chats = [
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

export const ChatList = () => {
  const { changeTheme } = useContext(ThemeContext);

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
          <Link className="chat-item" to={`/chat/${chat.id}`} key={chat.id}>
            { chat.name }
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
}

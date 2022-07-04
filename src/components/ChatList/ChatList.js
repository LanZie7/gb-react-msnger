import "./ChatList.styles.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";


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

export const ChatList = () => (
    <>
        <div className="chat-list">
            {chats.map((chat) =>
                <Link className="chat-item" to={`/chat/${chat.id}`} key={chat.id}>
                    { chat.name }
                </Link>
            )}
        </div>
        <Outlet />
    </>
);
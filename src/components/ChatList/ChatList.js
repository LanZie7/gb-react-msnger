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

export const ChatList = () => (
    <>
        <div className="chat-list">
            {chats.map((chat) =>
                <div className="chat-item" key={chat.id}>{chat.name}</div>
            )}
        </div>
    </>
);
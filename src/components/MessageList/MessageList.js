import { AUTHORS } from "../../utils/constants";
import "./MessageList.styles.css";

export const MessageList = ({ messages }) => (
    <div className="messageList">
        {messages.map(({ text, author }) => (
            <div className={ author === AUTHORS.person ? "person-msg" : "bot-msg" }>
                { author }: { text }
            </div>
        ))}
    </div>
);
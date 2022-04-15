import { Message, MessageWithBlueColor } from "../Message/Message";

import "./MessageList.styles.css";


export const MessageList = ({ messages }) => messages.map((msg) =>
  <MessageWithBlueColor className="messageList" key={msg.id} text={msg.text} author={msg.author} />);

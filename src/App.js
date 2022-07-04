import './App.css';
import React, {useEffect, useState} from "react";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";

const person = "Lana";

function App() {
    const[messages, setMsgs] = useState([]);

    const addMsg = (addText) => {
        setMsgs([...messages, addText]);
    }

    const sendMsg = (sendText) => {
        addMsg({
            author: AUTHORS.person,
            text: sendText
        });
    };

    useEffect(() => {
        let timeout;
        if (messages[messages.length - 1]?.author === AUTHORS.person) {
            timeout = setTimeout(() => {
                addMsg({ author: AUTHORS.robot, text: 'Hello, ' + AUTHORS.person + '!' });
            }, 1000);
        }

        return () => {
            clearTimeout((timeout));
        };
    }, [messages]);


  return (
    <div className="App">
      <MessageList messages={ messages } />
        <Form onSubmit={ sendMsg } />
    </div>
  );
}

export default App;

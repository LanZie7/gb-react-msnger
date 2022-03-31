import './App.css';
import React, { useEffect, useRef, useState } from "react";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";


function App() {
    const[messages, setMsgs] = useState([]);

    const timeout = useRef();
    const wrapperRef = useRef();

    const addMsg = (addText) => {
        setMsgs([...messages, addText]);
    }

    const sendMsg = (sendText) => {
        addMsg({
            author: AUTHORS.person,
            text: sendText,
            id: `msg-${Date.now()}`,
        });
    };

    useEffect(() => {
        if (messages[messages.length - 1]?.author === AUTHORS.person) {
            timeout.current = setTimeout(() => {
                addMsg({
                    author: AUTHORS.robot,
                    text: "Hello, " + AUTHORS.person + "!" ,
                    id: `msg=${Date.now()}`,
                });
            }, 1000);
        }

        return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

    // const handleScroll = () => {
    //     wrapperRef.current?.scrollTo({ x: 0, y: 0 });
    // };


  return (
    <div className="App" ref={ wrapperRef } style={{ overflow: "auto" }}>
      <MessageList messages={ messages } />
        <Form onSubmit={ sendMsg } />
        {/*<button onClick={ handleScroll }>Scroll</button>*/}
    </div>
  );
}

export default App;

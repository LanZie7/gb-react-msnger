import './App.css';
import { useEffect, useRef, useState } from "react";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";
import { ChatList } from "./components/ChatList/ChatList";
import { theme } from "./components/Theme/Theme";
import { ThemeProvider } from "@mui/material";


function App() {
    const[messages, setMsgs] = useState([]);
    const [ chats ] = (useState([]));

    // const theme = unstable_createMuiStrictModeTheme();

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
      <ThemeProvider theme={theme}>
        <div className="App" ref={ wrapperRef } style={{ overflow: "auto", margin: "20px" }}>
            <ChatList />
            <MessageList messages={ messages } />
            <Form onSubmit={ sendMsg } />
            {/*<button onClick={ handleScroll }>Scroll</button>*/}
        </div>
      </ThemeProvider>
  );
}

export default App;

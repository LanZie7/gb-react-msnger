import { useEffect, useRef, useState } from "react";
import { AUTHORS } from "../../utils/constants";
import { MessageList } from "../../components/MessageList/MessageList";
import { Form } from "../../components/Form/Form";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../components/Theme/Theme";
import { ChatList } from "../../components/ChatList/ChatList";
import { Navigate, useParams } from "react-router";


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

const initMsgs = {
    reactChat: [],
    vueChat: [],
    angularChat: [],
};


export function Chat() {

    const { id } = useParams();
    const [ messages, setMsgs ] = useState(initMsgs);

    const timeout = useRef();
    const wrapperRef = useRef();

    const addMsg = (addText) => {
        setMsgs({...messages, [id]: [...messages[id], addText] });
    };

    const sendMsg = (sendText) => {
        addMsg({
            author: AUTHORS.person,
            text: sendText,
            id: `msg-${Date.now()}`,
        });
    };

    useEffect(() => {
        const lastMsg = messages[id]?.[messages[id]?.length - 1];
        if (lastMsg?.author === AUTHORS.person) {
            timeout.current = setTimeout(() => {
                addMsg({
                    author: AUTHORS.robot,
                    text: "Hello, " + AUTHORS.person + "!" ,
                    id: `msg-${Date.now()}`,
                });
            }, 1000);
        }

        return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

    if (!messages[id]) {
        return <Navigate to="/chats" replace />
    }

    // const handleScroll = () => {
    //     wrapperRef.current?.scrollTo({ x: 0, y: 0 });
    // };


    return (
        <ThemeProvider theme={theme}>
            <div className="App" ref={ wrapperRef } style={{ overflow: "auto", margin: "20px" }}>
                <MessageList messages={ messages } />
                <Form onSubmit={ sendMsg } />
                {/*<button onClick={ handleScroll }>Scroll</button>*/}
            </div>
        </ThemeProvider>
    );

}
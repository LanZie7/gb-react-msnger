import { useEffect, useMemo, useRef } from "react";
import { AUTHORS } from "../../utils/constants";
import { MessageList } from "../../components/MessageList/MessageList";
import { Form } from "../../components/Form/Form";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../components/Theme/Theme";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { addMessage, addMessageWithReply } from "../../store/messages/actions";


export function Chat() {

    const { id } = useParams();

    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();


    const timeout = useRef();
    const wrapperRef = useRef();

    const sendMsg = (sendText) => {
        dispatch(
            addMessageWithReply(
              {
                author: AUTHORS.person,
                text: sendText,
                id: `msg-${Date.now()}`,
              }, id
            )
        )
    };

    // useEffect(() => {
    //     const lastMsg = messages?.[messages?.length - 1];
    //     if (lastMsg?.author === AUTHORS.person) {
    //         timeout.current = setTimeout(() => {
    //             dispatch(
    //               addMessage(
    //                   {
    //                     author: AUTHORS.robot,
    //                     text: "Hello, " + AUTHORS.person + "!" ,
    //                     id: `msg-${Date.now()}`,
    //                   }, id
    //                 )
    //             );
    //         }, 1000);
    //     }
    //
    //     return () => {
    //         clearTimeout(timeout.current);
    //     };
    // }, [messages]);
    //
    // if (!messages) {
    //     return <Navigate to="/chat" replace />
    // }

    // const handleScroll = () => {
    //     wrapperRef.current?.scrollTo({ x: 0, y: 0 });
    // };


    return (
        <ThemeProvider theme={theme}>
            <div className="App" ref={ wrapperRef } style={{ overflow: "auto", margin: "20px" }}>
                <MessageList messages={messages} />
                <Form onSubmit={ sendMsg } />
                {/*<button onClick={ handleScroll }>Scroll</button>*/}
            </div>
        </ThemeProvider>
    );

}
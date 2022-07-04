import {AUTHORS} from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const INIT_MESSAGES_FOR_CHAT = "MESSAGES::INIT_MESSAGES_FOR_CHAT";
export const CLEAR_MESSAGES_FOR_CHAT = "MESSAGES::CLEAR_MESSAGES_FOR_CHAT";

export const addMessage = (newMsg, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    newMsg,
    chatId,
  }
});

export const initMessagesForChat = (chatId) => ({
  type: INIT_MESSAGES_FOR_CHAT,
  payload: chatId,
});

export const clearMessagesForChat = (chatId) => ({
  type: CLEAR_MESSAGES_FOR_CHAT,
  payload: chatId
});

export const addMessageWithReply = (newMsg, chatId) => (dispatch) => {
  dispatch(addMessage(newMsg, chatId));
  if (newMsg?.author === AUTHORS.person) {
    setTimeout(() => {
      dispatch(
        addMessage(
          {
            author: AUTHORS.robot,
            text: "Hello, " + AUTHORS.person + "!" ,
            id: `msg-${Date.now()}`,
          }, chatId
        )
      );
    }, 1000);
  }
};
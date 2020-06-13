const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

let initialState = {
  dialogs: [
    { id: 1, name: "John" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Liana" },
    { id: 4, name: "Antony" },
    { id: 5, name: "Viktor" },
  ],
  messages: [
    { id: 1, message: "hey" },
    { id: 2, message: "how are you" },
    { id: 3, message: "what is your name?" },
    { id: 4, message: "are you free tonight?" },
    { id: 5, message: "lets go to the party" },
  ],
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export default dialogsReduser;

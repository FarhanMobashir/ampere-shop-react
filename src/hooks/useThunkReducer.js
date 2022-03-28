import React from "react";
export const useThunkReducer = (reducer, initialState) => {
  const [state, dispath] = React.useReducer(reducer, initialState);
  const enhancedDispatch = (action) => {
    console.log("enhancedDispatch: ", action, state);
    if (typeof action === "function") {
      action(dispath);
    } else {
      dispath(action);
    }
  };
  return [state, enhancedDispatch];
};

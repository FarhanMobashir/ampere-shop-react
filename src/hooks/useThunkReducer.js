import React from "react";
export const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const enhancedDispatch = React.useCallback(
    (action) => {
      console.log("action ------> ", action.type, "\n", action.payload);
      if (typeof action === "function") {
        action(dispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );
  return [state, enhancedDispatch];
};

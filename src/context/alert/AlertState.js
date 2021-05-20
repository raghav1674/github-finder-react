import AlertReducer from "./alertReducer";

import AlertContext from "./alertContext";

import { REMOVE_ALERT, SET_ALERT } from "../../types";

import React, { useReducer } from "react";

const AlertState = (props) => {
  // represents the alert states
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => {
      removeAlert();
    }, 4000);
  };

  // remove alert
  const removeAlert = () => {
    dispatch({
      type: REMOVE_ALERT,
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

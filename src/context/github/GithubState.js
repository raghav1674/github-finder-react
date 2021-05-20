import React, { useReducer } from "react";

import axios from "axios";

import GithubContext from "./githubContext";

import GithubReducer from "./githubReducer";

import { SEARCH_USERS, GET_USER, CLEAR_USERS, SET_LOADING } from "../../types";

// store the functions and the initial State

const GithubState = (props) => {
  // initial state
  const initialState = {
    users: [],
    loading: false,
    user: {},
  };

  // state and dispatch
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // action will get the data and dispatch that payload and type to the reducer and reducer will create new state

  // search for  the users
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // after fetching we have to dispatch it to reducer.

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // get the user

  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // clear user
  const clearUser = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  // set loading

  const setLoading = () => {
    return dispatch({
      type: SET_LOADING,
    });
  };

  // at last we will return the Provider wihich will provide the access to the state
  return (
    <GithubContext.Provider
      value={{
        // will contain all the state and functions which you want to update state in all Components
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        getUser,
        clearUser,
        setLoading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

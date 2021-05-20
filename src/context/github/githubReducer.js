// based on the type of action create a new state

import { CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING } from "../../types";

const GithubReducer = (state, action) => {
  // switch case based on action create new state


  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default GithubReducer;

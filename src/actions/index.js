import { ADD_NEW_USER, USER_SELECTED } from "./types";

export const selectUser = user => {
  return {
    type: USER_SELECTED,
    payload: user
  };
};

export const addNewUser = user => {
  return {
    type: ADD_NEW_USER,
    payload: user
  };
};

export const selectUser = user => {
  console.log(user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  };
};

export const addNewUser = user => {
  console.log("asdadadad");
  return {
    type: "ADD_NEW_USER",
    payload: user
  };
};

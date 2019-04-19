import { ADD_NEW_USER } from "../actions/types";

const initialState = {
  users: [
    {
      id: 1,
      first: "Bucky",
      last: "Roberts",
      age: 71,
      description: "Bucky is a react developer",
      thumbnail: ""
    },
    {
      id: 2,
      first: "Shafigh",
      last: "Parsa",
      age: 31,
      description: "Shafigh is a back-end developer",
      thumbnail: ""
    },
    {
      id: 3,
      first: "Amin",
      last: "Ameri",
      age: 21,
      description: "Amin is a front-end developer",
      thumbnail: ""
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
}

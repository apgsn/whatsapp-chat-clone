import * as types from "../actions/types.js";

const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return { ...state, name: action.name, id: action.id };
    case types.USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;

import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        data: action.payload,
      };
    case ACTIONS.DELETE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;

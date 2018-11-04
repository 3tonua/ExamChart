import { SET_RESULTS } from "../constants";

function results(state = [], action) {
  switch (action.type) {
    case SET_RESULTS:
      state = action.payload;
      break;
  }
  return state;
}

export default results;

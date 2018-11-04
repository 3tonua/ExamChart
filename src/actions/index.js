import { SET_RESULTS } from "../constants";
import { results } from "../constants/results";

export const fetchResults = () => dispatch => {
  return dispatch({ type: SET_RESULTS, payload: results });
};

export const savePoint = item => (dispatch, getState) => {
  const state = getState();
  const results = state.results;
  const index = results.findIndex(result => result.id === item.id);
  let newResults = [...results];
  newResults[index] = item;
  return dispatch({ type: SET_RESULTS, payload: newResults });
};

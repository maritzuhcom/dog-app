import { GET_DOG_NAMES, GET_DOG_PICS } from '../actions/dogs';

const defaultState = {
  dogNames: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_DOG_NAMES:
      return {
        // return what you want the state to be.
        // copy of state
        ...state,
        // updated state
        dogNames: action.payload,
      };

    case GET_DOG_PICS:
      return {
        ...state,
        dogPics: action.payload,
      };

    default:
      // gets called when action.type doesn't match any of the switch cases
      return { ...state };
  }
}

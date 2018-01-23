import { GOT_DOGS } from '../actions/dogs';

const defaultState = {
  dogList: [],
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case GOT_DOGS: {
      return { ...state, dogList: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}

import {
  FETCH_ELEMENTS_FAILURE,
  FETCH_ELEMENTS_START,
  FETCH_ELEMENTS_SUCCESS,
} from "./constants";

const initialState: never[] = [];

export default function elementsReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_ELEMENTS_START: {
      // omit implementatio
      break;
    }
    case FETCH_ELEMENTS_SUCCESS: {
      break;
    }
    case FETCH_ELEMENTS_FAILURE: {
      break;
    }
    default:
      return state;
  }
}

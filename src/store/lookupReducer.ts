import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FETCH_LOOK_UPS_FAILURE,
  FETCH_LOOK_UPS_START,
  FETCH_LOOK_UPS_SUCCESS,
  FETCH_LOOK_UPS_VALUES_FAILURE,
  FETCH_LOOK_UPS_VALUES_START,
  FETCH_LOOK_UPS_VALUES_SUCCESS,
} from "./constants";

const fetchLookUps =
  () =>
  async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch({
      type: FETCH_LOOK_UPS_START,
    });
    try {
      const response = await axios.get(
        `https://650af6bedfd73d1fab094cf7.mockapi.io/lookups`
      );
      if (response.status === 200) {
        dispatch({
          type: FETCH_LOOK_UPS_SUCCESS,
          payload: response?.data, // Access the data using response.data
        });
      }
    } catch (e) {
      dispatch({
        type: FETCH_LOOK_UPS_FAILURE,
        payload: {
          message: "There was an error",
          code: "error_occurred", // Correct the spelling of "occurred"
        },
      });
    }
  };



export default fetchLookUps;

const initialState: any = {};

const lookUpReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_LOOK_UPS_START: {
      return {
        ...state,
        status: "loading",
      };
    }
    case FETCH_LOOK_UPS_SUCCESS: {
      return {
        ...state,
        status: "success",
        data: action.payload,
      };
    }
    case FETCH_LOOK_UPS_FAILURE: {
      const { code } = action.payload;
      return {
        ...state,
        status: "failure",
        error: code,
      };
    }

    case FETCH_LOOK_UPS_VALUES_START: {
      return {
        ...state,
        status: "loading",
      };
    }
    case FETCH_LOOK_UPS_VALUES_SUCCESS: {
      return {
        ...state,
        status: "success",
        data: action.payload,
      };
    }
    case FETCH_LOOK_UPS_VALUES_FAILURE: {
      const { code } = action.payload;
      return {
        ...state,
        status: "failure",
        error: code,
      };
    }

    default:
      return state;
  }
};

export { fetchLookUps, lookUpReducer };

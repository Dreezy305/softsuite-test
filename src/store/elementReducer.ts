import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FETCH_ELEMENTS_FAILURE,
  FETCH_ELEMENTS_START,
  FETCH_ELEMENTS_SUCCESS,
} from "./constants";

const fetchElements =
  () =>
  async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch({
      type: FETCH_ELEMENTS_START,
    });
    try {
      const response = await axios.get(
        `https://650af6bedfd73d1fab094cf7.mockapi.io/elements`
      );
      if (response.status === 200) {
        dispatch({
          type: FETCH_ELEMENTS_SUCCESS,
          payload: response?.data, // Access the data using response.data
        });
      }
    } catch (e) {
      dispatch({
        type: FETCH_ELEMENTS_FAILURE,
        payload: {
          message: "There was an error",
          code: "error_occurred", // Correct the spelling of "occurred"
        },
      });
    }
  };

const initialState: any = {};

const elementsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ELEMENTS_START: {
      return {
        ...state,
        status: "loading",
      };
    }
    case FETCH_ELEMENTS_SUCCESS: {
      return {
        ...state,
        status: "success",
        data: action.payload,
      };
    }
    case FETCH_ELEMENTS_FAILURE: {
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

export { elementsReducer, fetchElements };

import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FETCH_LOOK_UPS_VALUES_FAILURE,
  FETCH_LOOK_UPS_VALUES_START,
  FETCH_LOOK_UPS_VALUES_SUCCESS,
} from "./constants";

const fetchLookUpsValues =
  (id: any | string) =>
  async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch({
      type: FETCH_LOOK_UPS_VALUES_START,
    });
    try {
      const response = await axios.get(
        `https://650af6bedfd73d1fab094cf7.mockapi.io/lookups/${id}/lookupvalues`
      );
      if (response.status === 200) {
        dispatch({
          type: FETCH_LOOK_UPS_VALUES_SUCCESS,
          payload: response?.data, // Access the data using response.data
        });
      }
    } catch (e) {
      dispatch({
        type: FETCH_LOOK_UPS_VALUES_FAILURE,
        payload: {
          message: "There was an error",
          code: "error_occurred", // Correct the spelling of "occurred"
        },
      });
    }
  };

const initialState: any = {};
const lookUpValuesReducer = (state = initialState, action: any) => {
  switch (action.type) {
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

export { fetchLookUpsValues, lookUpValuesReducer };

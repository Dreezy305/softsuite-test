import { Action, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { lookUpReducer } from "./lookupReducer";
import { lookUpValuesReducer } from "./lookupValueReducer";
import { elementsReducer } from "./elementReducer";

const store = configureStore({
  reducer: {
    lookups: lookUpReducer,
    lookupsValues: lookUpValuesReducer,
    elements: elementsReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

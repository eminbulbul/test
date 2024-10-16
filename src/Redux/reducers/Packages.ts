// reducers/packageReducer.ts
import { AnyAction } from "redux";
import { GET_PACKAGE, SET_LOADING } from "../types";

const initialState = {
  data: [],
  loading: false,
};

const packageReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_PACKAGE:
      return {
        ...state,
        data: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default packageReducer;

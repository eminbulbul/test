import { AnyAction } from "redux";

import { SET_LOGIN, SET_LOGOUT } from "../types";

const INIT_STATE = {
  isAuthenticated: false,
  user: null,
};

const States = (state = INIT_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_LOGIN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_LOGOUT: {
      return { ...INIT_STATE };
    }
    default:
      return state;
  }
};
export default States;

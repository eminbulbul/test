import { AnyAction } from "redux";

import { SET_ONBOARDING, SET_LOGOUT } from "../types";

const INIT_STATE = {
  step: 0,
  university: [],
};

const States = (state = INIT_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_ONBOARDING: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};
export default States;

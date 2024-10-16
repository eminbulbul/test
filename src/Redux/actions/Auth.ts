import { SET_LOGIN } from "../types";

export const loginUserRedux = (data: any) => {
  return {
    type: SET_LOGIN,
    payload: data,
  };
};

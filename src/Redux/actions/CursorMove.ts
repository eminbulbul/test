import { AnyAction } from "redux";

export const SET_MOUSE_POSITION = "SET_MOUSE_POSITION";
//! context Use state yerine,Reduxta artık bu şekilde kullan

export const setMousePositionRedux = (data: any) => {
  return {
    type: SET_MOUSE_POSITION,
    payload: data,
  };
};

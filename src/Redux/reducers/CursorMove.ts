import { AnyAction } from "redux";

const initialState = {
  mousePosition: { x: 0, y: 0 },
};

const CursorMove = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "SET_MOUSE_POSITION":
      return {
        ...state,
        mousePosition: action.payload,
      };
    default:
      return state;
  }
};

export default CursorMove;

import { combineReducers } from "redux";
import Settings from "./Settings";
import Auth from "./Auth";
import Onboarding from "./Onboarding";
import CursorMove from "./CursorMove";
import packageReducer from "./Packages";

const reducers = combineReducers({
  auth: Auth,
  settings: Settings,
  onboarding: Onboarding,
  cursorMove: CursorMove,
  package: packageReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

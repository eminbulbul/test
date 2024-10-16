import { SET_ONBOARDING } from "../types";

export const onboardingUpdateRedux = (data: any) => {
  return {
    type: SET_ONBOARDING,
    payload: data,
  };
};

/*
export const onboarding_r = () => {
  deleteCookie("token");
  return {
    type: SET_LOGOUT,
  };
};
*/

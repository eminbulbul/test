// actions/packageActions.ts
import { GET_PACKAGE, SET_LOADING } from "../types";
import axios from "axios";

export const fetchPackageBySlug = (slug: string) => async (dispatch: any) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const response = await axios.get(
      `https://api.linkkurs.com/api/link-kurs/packages/${slug}`
    );
    dispatch({
      type: GET_PACKAGE,
      payload: response.data,
    });
    dispatch({ type: SET_LOADING, payload: false });
  } catch (error) {
    console.error("Error fetching package data", error);
    dispatch({ type: SET_LOADING, payload: false });
  }
};

import { useState } from "react";
import axios, { AxiosResponse } from "axios";
interface IPostApiState {
  loading: boolean;
  error: string | null;
  data: object | null;
  status?: number;
  message?: string;
}
interface IMutateProps {
  apiPath?: string;
  method?: "PUT" | "DELETE" | "POST" | "GET";
  baseURL?: string;
  withCredentials?: boolean;
}
type TMutateReturn = [
  (object?: any, params?: any) => any,
  object | null | any,
  boolean
];
const useMutateApi = ({
  apiPath,
  method,
  baseURL,
}: IMutateProps): TMutateReturn => {
  const [responseData, setResponseData] = useState<IPostApiState>({
    loading: false,
    error: null,
    data: null,
    status: 0,
  });

  const fetchApi = async (variables?: object, params?: object) => {
    setResponseData({ ...responseData, loading: true });
    const axiosConfig = {
      baseURL: baseURL ? baseURL : process.env.REACT_APP_API_URL,
      url: apiPath,
      method: method ? method : "POST",
      params: params,
      data: variables,
    };
    const response = await axios(axiosConfig)
      .then((res: AxiosResponse) => res)
      .catch((err) => {
        return { ...err.toJSON(), ...err.response };
      });
    let resData;
    switch (response.status) {
      case 200:
        resData = {
          loading: false,
          error: null,
          data: response.data,
          message: response.data.message,
        };
        setResponseData(resData);
        return resData;

      case 400:
        resData = {
          loading: false,
          error: response.data.message,
          data: null,
          status: response.status,
        };
        setResponseData(resData);
        return resData;
      case 500:
        resData = {
          loading: false,
          error: response.data.message,
          data: null,
          status: response.status,
        };
        setResponseData(resData);
        return resData;
      case null:
        resData = {
          loading: false,
          error: "Bir hata oluştu. Lütfen daha tekrar deneyiniz.",
          data: null,
          status: response.status,
        };
        setResponseData(resData);
        return resData;
      default:
        resData = {
          loading: false,
          error: response.data.message,
          data: null,
          status: response.status,
        };
        setResponseData(resData);
        return resData;
    }
  };
  return [fetchApi, responseData.data, responseData.loading];
};
export default useMutateApi;

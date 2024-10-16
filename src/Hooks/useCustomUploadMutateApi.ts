import { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface IPostApiState {
  loading: boolean;
  error: string | null;
  data: object | null;
}

interface IMutateProps {
  apiPath?: string;
  method?: "PUT" | "DELETE" | "POST" | "GET";
}
type TMutateReturn = [
  (object: any, params?: any) => any,
  object | null,
  boolean
];

const useCustomUploadMutateApi = ({
  apiPath,
  method,
}: IMutateProps): TMutateReturn => {
  const [responseData, setResponseData] = useState<IPostApiState>({
    loading: false,
    error: null,
    data: null,
  });

  const fetchApi = async (variables: object, params?: object) => {
    setResponseData({ ...responseData, loading: true });
    const axiosConfig = {
      baseURL: process.env.REACT_APP_API_URL,
      url: apiPath,
      method: method ? method : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      params: params,
      data: variables,
    };

    const response = await axios(axiosConfig)
      .then((res: AxiosResponse) => res)
      .catch((err) => err.toJSON());

    if (response.message !== undefined) {
      setResponseData({
        loading: false,
        error: response.message,
        data: null,
      });

      return { data: null, error: response.message, loading: false };
    }

    setResponseData({
      loading: false,
      error: null,
      data: response.data,
    });
    return {
      loading: false,
      error: null,
      data: response.data,
    };
  };
  return [fetchApi, responseData.data, responseData.loading];
};
export default useCustomUploadMutateApi;

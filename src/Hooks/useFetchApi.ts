import { useState } from "react";
import axios, { AxiosResponse } from "axios";

type FetchReturn = [(apiPathFirst?: any) => any, any, boolean];

interface fetchApiState {
  loading: boolean;
  data: any;
  error: any;
}
const useFetchApi = (apiPath?: string): FetchReturn => {
  const [responseData, setResponseData] = useState<fetchApiState>({
    loading: false,
    error: null,
    data: null,
  });
  const fetchApi = async (apiPathFirst: string) => {
    setResponseData({ ...responseData, loading: true });
    const requestOptions = {
      url: apiPathFirst || apiPath,
      method: "GET",
    };
    const response = await axios(requestOptions)
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

export default useFetchApi;

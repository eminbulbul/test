import useSWR from "swr";
import axios from "axios";

export default function useSwrFetchApi<Type>(
  url: string,
  payload?: object | null,
  options = {}
) {
  const method = payload ? "POST" : "GET";

  const fetcher = async () => {
    const options = {
      method,
      ...(payload && { data: payload }),
    };

    return await axios(url, options).then((res) => res.data);
  };
  const defaultOptions = {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  };
  const { data, mutate, error, isValidating } = useSWR<Type>(
    url + method,
    fetcher,
    {
      ...defaultOptions,
      ...options,
    }
  );

  const loading = !data && !error;

  return { data, loading, error: error?.toJSON(), mutate, isValidating };
}

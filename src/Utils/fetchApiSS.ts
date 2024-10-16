import axios, { AxiosResponse } from "axios";

export async function fetchApiSS(apiPath: string, payload?: object) {
  const method = payload ? "POST" : "GET";

  const requestOptions = {
    url: process.env.REACT_APP_API_URL + apiPath,
    method,
    ...(payload && { data: payload }),
  };

  return await axios(requestOptions)
    .then((res: AxiosResponse) => res.data)
    .catch((err) => err.toJSON());
}

export default fetchApiSS;

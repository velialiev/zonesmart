import axios from 'axios';
import authInterceptor from '../interceptors/auth.interceptor';
import basicHeadersInterceptor from '../interceptors/basic-headers.inteceptor';
import responseParserInterceptor from '../interceptors/response-parser.interceptor';

const baseURL = 'https://zonesmart.su/api/';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(basicHeadersInterceptor);
axiosInstance.interceptors.request.use(authInterceptor);
axiosInstance.interceptors.response.use(responseParserInterceptor);

const get = (url, queryParams, isWithoutAuth = false) => {
  let urlWithQueryParams = url;

  if (queryParams) {
    urlWithQueryParams += '?';

    Object.entries(queryParams)
    .forEach(([key, value]) => {
      if (!value) return;

      urlWithQueryParams += `&${key}=${value}`;
    });
  }

  return axiosInstance.get(urlWithQueryParams, { headers: { isWithoutAuth } });
};

const post = (url, body, isWithoutAuth = false) => {
  return axiosInstance.post(url, JSON.stringify(body), { headers: { isWithoutAuth } });
};

const Http = {
  get,
  post,
};

export default Http;

const basicHeadersInterceptor = (request) => {
  request.headers['Content-Type'] = 'application/json';
  return request
};

export default basicHeadersInterceptor;

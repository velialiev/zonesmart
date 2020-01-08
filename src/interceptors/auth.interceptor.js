import Http from '../controllers/api.controller';
import AuthController from '../controllers/auth.controller';

const authInterceptor = async (request) => {
  const isWithoutAuth = Boolean(request.headers.isWithoutAuth);
  delete request.headers.isWithoutAuth;

  if (!AuthController.token || isWithoutAuth) return request;

  try {
    await AuthController.verifyJWT();
  } catch {
    const { access } = await AuthController.refreshJWT();
    AuthController.setToken(access);
    // AuthController.token = access;
  }
  request.headers.Authorization = `JWT ${AuthController.token}`;
  return request;
};

export default authInterceptor;

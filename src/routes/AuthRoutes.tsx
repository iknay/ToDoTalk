import { Signin, Signup } from '@/pages';
import { AUTH_ROUTES } from '@/routings/authRoutes';
import { Route, Routes } from 'react-router-dom';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path={AUTH_ROUTES.SIGNIN} element={<Signin />} />
      <Route path={AUTH_ROUTES.SIGNUP} element={<Signup />} />
    </Routes>
  );
};

export default AuthRoutes;

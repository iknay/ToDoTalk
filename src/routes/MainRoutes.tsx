import NavigationBar from '@/components/customs/NavigationBar/NavigationBar';
import { Dashboard } from '@/pages';
import { MAIN_ROUTES } from '@/routings/mainRoutes';
import { Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <NavigationBar>
      <Routes>
        <Route path={MAIN_ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </NavigationBar>
  );
};

export default MainRoutes;

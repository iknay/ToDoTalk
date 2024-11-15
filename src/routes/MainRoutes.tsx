import SidebarLayout from '@/components/customs/Sidebar/SidebarLayout';

import { Dashboard, Tasks } from '@/pages';
import { MAIN_ROUTES } from '@/routings/mainRoutes';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <SidebarLayout>
      <Routes>
        <Route path="/" element={<Navigate to={MAIN_ROUTES.DASHBOARD} />} />
        <Route path={MAIN_ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={MAIN_ROUTES.TASKS} element={<Tasks />} />
      </Routes>
    </SidebarLayout>
  );
};

export default MainRoutes;

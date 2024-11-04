import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { AuthRoutes, MainRoutes } from './routes';
import { useAuthStore } from './zustand/stores/authStore';

function App() {
  const user = useAuthStore.use.user();
  const renderRoutes = () => {
    if (!user.id) {
      return <AuthRoutes />;
    }
    return <MainRoutes />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={renderRoutes()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

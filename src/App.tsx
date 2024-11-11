import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { AuthRoutes, MainRoutes } from './routes';
import { useAuthStore } from './zustand/stores/authStore';
import Provider from './Provider';
import './styles/scrollbar.css';

function App() {
  const user = useAuthStore.use.user();
  console.log(user);
  const renderRoutes = () => {
    if (!user.email) {
      return <AuthRoutes />;
    }
    return <MainRoutes />;
  };

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={renderRoutes()} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

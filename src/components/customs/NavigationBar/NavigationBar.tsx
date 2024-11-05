import { Button } from '@/components/ui/button';
import { AUTH_ROUTES } from '@/routings/authRoutes';
import { useAuthStore } from '@/zustand/stores/authStore';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const NavigationBar = ({ children }: Props) => {
  const removeUser = useAuthStore.use.removeUser();
  const navigate = useNavigate();
  const handleSignOut = () => {
    removeUser();
    navigate(AUTH_ROUTES.SIGNIN);
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex items-center justify-between h-[4rem] px-4 border-b-black border">
        Logo
        <div>
          <Button variant="link">Dashboard</Button>
          <Button variant="link">Software</Button>
          <Button variant="link">Machines</Button>
          <Button variant="link">Accessories</Button>
          <Button variant="link">Employees</Button>
          <Button variant="link" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default NavigationBar;

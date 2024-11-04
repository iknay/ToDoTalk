import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AUTH_ROUTES } from '@/routings/authRoutes';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25rem] p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Create an account</h1>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button>Sign up</Button>
      <span className="text-center">
        {' '}
        Already have an account?{' '}
        <Button variant="link" onClick={() => navigate(AUTH_ROUTES.SIGNIN)}>
          Sign in
        </Button>{' '}
      </span>
    </div>
  );
};

export default Signup;

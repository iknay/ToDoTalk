import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AUTH_ROUTES } from '@/routings/authRoutes';
import { MAIN_ROUTES } from '@/routings/mainRoutes';
import { useAuthStore } from '@/zustand/stores/authStore';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const formRef = useRef<any>();

  const setUser = useAuthStore.use.setUser();

  const dummyDatabase = {
    users: [
      { username: 'user', email: 'admin@admin.com', password: 'password' },
    ],
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formRef?.current;
    const userCredentials = dummyDatabase.users.find(
      (user) => user.email === email.value && user.password === password.value,
    );

    console.log({ email: email.value, password: password.value });
    console.log(userCredentials);

    if (userCredentials) {
      setUser({ email: email.value });
      navigate(MAIN_ROUTES.DASHBOARD);
    }
  };

  return (
    <form
      ref={formRef}
      className="w-[25rem] p-4 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold">Sign in</h1>
      <Input id="email" name="email" type="email" placeholder="Email" />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button type="submit">Sign in</Button>
      <span className="text-center">
        {' '}
        Don't have an account yet?
        <Button variant="link" onClick={() => navigate(AUTH_ROUTES.SIGNUP)}>
          Create an account
        </Button>{' '}
      </span>
    </form>
  );
};

export default Signin;

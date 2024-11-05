import { defaultUser } from '@/lib/static/defaultValues';
import { IUser } from '@/lib/typings/IUser';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import createSelectors from '../selector/createSelectors';

export interface AuthStoreState {
  user: IUser;
  setUser: (value: IUser) => void;
  removeUser: () => void;
}

export const useAuthStoreBase = create<AuthStoreState>()(
  persist(
    (set) => ({
      user: defaultUser,
      setUser: (value: IUser) => set({ user: value }),
      removeUser: () => set({ user: defaultUser }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useAuthStore = createSelectors(useAuthStoreBase);

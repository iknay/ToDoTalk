import { House, ListTodo, MessageCircle, Settings, User2 } from 'lucide-react';
import avatar from '@/assets/avatar.jpg';

export const SidebarLang = {
  items: [
    {
      label: 'Home',
      icon: <House />,
      href: '/',
    },
    {
      label: 'Tasks',
      icon: <ListTodo />,
      href: '/tasks',
    },
    {
      label: 'Messages',
      icon: <MessageCircle />,
      href: '/messages',
    },
    {
      label: 'Settings',
      icon: <Settings />,
      href: '/settings',
    },
  ],
  user: {
    type: 'admin',
    avatar: <img src={avatar} alt="avatar" />,
    firstName: 'Yancee',
    lastName: 'Villanueva',
    email: 'admin@admin.com',
  },
};

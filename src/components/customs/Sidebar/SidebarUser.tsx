import { Avatar } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { AUTH_ROUTES } from '@/routings/authRoutes';
import { useAuthStore } from '@/zustand/stores/authStore';
import { ChevronsUpDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarUserProps {
  user: {
    avatar: React.ReactNode;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export const SidebarUser = ({ user }: SidebarUserProps) => {
  const removeUser = useAuthStore((state) => state.removeUser);

  const navigate = useNavigate();
  const handleSignOut = () => {
    removeUser();
    navigate(AUTH_ROUTES.SIGNIN);
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="border size-8 border-muted">
                {user.avatar}
              </Avatar>

              <div className="flex flex-col">
                <span className="font-medium">{user.firstName}</span>
                <span className="text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side="right"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem>
              <span className="cursor-pointer" onClick={handleSignOut}>
                Sign out
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

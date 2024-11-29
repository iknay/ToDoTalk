import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { SidebarLang } from '@/lib/lang/sidebarLang';
import { SidebarUser } from './SidebarUser';
import { useNavigate } from 'react-router-dom';

export function AppSidebar() {
  const navigate = useNavigate();
  return (
    <Sidebar collapsible="icon" className="border-r-2 border-sidebar-border">
      <SidebarHeader className="mb-7">
        <h1>Logo</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SidebarLang.items.map((item) => {
              return (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    isActive={location.pathname.includes(item.href)}
                    onClick={() => navigate(item.href)}
                  >
                    {item.icon}
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="rounded-md ">
        <SidebarUser user={SidebarLang.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

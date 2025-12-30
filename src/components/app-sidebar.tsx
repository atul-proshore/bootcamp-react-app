"use client";
import Layout from "@/app/dashboard/layout";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ScanLine, History, LayoutDashboard } from "lucide-react";
import { Button } from "./shadcnUI/button";
import { PanelLeftIcon } from "lucide-react";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Scanner",
    url: "#",
    icon: ScanLine,
  },
  {
    title: "History",
    url: "#",
    icon: History,
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <Button
          className="bg-transparent text-black hover:bg-transparent hover:text-black focus:ring-0 w-10 ml-auto"
          onClick={(event) => {
            toggleSidebar();
          }}
        >
          <PanelLeftIcon />
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

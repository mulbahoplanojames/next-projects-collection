"use client";

import * as React from "react";
import {
  BookCopy,
  Component,
  DollarSign,
  GraduationCap,
  House,
  LifeBuoy,
  Send,
  User,
  UtensilsCrossed,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const data = {
  user: {
    name: "Oplano James",
    email: "oplanojames@gmail.com",
    avatar: "/avatars/oplano.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: House,
      // isActive: true,
      items: [
        {
          title: "Dashboard 1",
          url: "/dashboard",
        },
        {
          title: "Dashboard 2",
          url: "/dashboard2",
        },
        {
          title: "Dashboard 3",
          url: "/dashboard3",
        },
      ],
    },
    {
      title: "Students",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "All Students",
          url: "/all-students",
        },
        {
          title: "Add Student",
          url: "/add-student",
        },
        {
          title: "Edit Student",
          url: "/edit-students",
        },
      ],
    },
    {
      title: "Courses",
      url: "#",
      icon: BookCopy,
      items: [
        {
          title: "All Courses",
          url: "/all-courses",
        },
        {
          title: "Add Course",
          url: "/add-course",
        },
        {
          title: "Edit Course",
          url: "/edit-courses",
        },
      ],
    },
    {
      title: "Departments",
      url: "#",
      icon: Component,
      items: [
        {
          title: "All Departments",
          url: "#",
        },
        {
          title: "Add Department",
          url: "#",
        },
        {
          title: "Edit Department",
          url: "#",
        },
        {
          title: "Delete Department",
          url: "#",
        },
      ],
    },
    {
      title: "Teachers",
      url: "#",
      icon: User,
      items: [
        {
          title: "All Teachers",
          url: "#",
        },
        {
          title: "Teacher Profile",
          url: "#",
        },
        {
          title: "Add Teacher",
          url: "#",
        },
        {
          title: "Edit Teacher",
          url: "#",
        },
      ],
    },
    {
      title: "Food",
      url: "#",
      icon: UtensilsCrossed,
      items: [
        {
          title: "Food Menu",
          url: "#",
        },
        {
          title: "Food Details",
          url: "#",
        },
      ],
    },
    {
      title: "Fees",
      url: "#",
      icon: DollarSign,
      items: [
        {
          title: "Fees Collection",
          url: "#",
        },
        {
          title: "Fees Receipt",
          url: "#",
        },
        {
          title: "Add Fees",
          url: "#",
        },
      ],
    },
  ],

  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} className="bg-primary_1">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Mul High School
                  </span>
                  <span className="truncate text-xs"></span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

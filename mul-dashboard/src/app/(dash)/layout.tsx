import { ThemeProvider } from "@/context/theme-provider";
import "../globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import Notification from "@/components/notifications";
import Profile from "@/components/profile";
import SearchCom from "@/components/search";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const metadata = {
  title: "Student Admin Dashboard",
  description: "This is the admin dashboard for students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center justify-between pr-5">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1 " />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                </div>
                <div className="flex items-center md:gap-10 gap-4">
                  <SearchCom />
                  <Profile />
                  <Notification />
                  <ModeToggle />
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}

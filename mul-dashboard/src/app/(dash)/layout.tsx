import { ThemeProvider } from "@/context/theme-provider";
import "../globals.css";

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
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}

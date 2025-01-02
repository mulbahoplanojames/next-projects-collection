"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/navData";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNavbar() {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer md:hidden block" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-3xl pt-8">Mulba</SheetTitle>
        </SheetHeader>
        <menu className="flex flex-col gap-6 text-xl mt-10">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <SheetClose asChild key={link.label}>
                <Link
                  href={link.href}
                  className={`text-lg hover:text-gray-600 w-20 ${
                    isActive ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </menu>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

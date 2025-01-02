"use client";
import { navLinks } from "@/data/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarMenu = () => {
  const pathName = usePathname();
  return (
    <>
      <menu className="hidden md:inline-flex gap-6 text-base items-center w-1/4">
        {navLinks.map((link) => {
          const isActive = pathName === link.href;
          return (
            <Link
              href={link.href}
              key={link.label}
              className={`text-lg ${isActive ? "border-b-2" : "text-gray-500"}`}
            >
              {link.label}
            </Link>
          );
        })}
      </menu>
    </>
  );
};

export default NavbarMenu;

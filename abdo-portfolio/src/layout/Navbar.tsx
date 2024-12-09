"use client";

import { Button } from "@/components/ui/button";
import { navlinks } from "@/data/navData";
import { Link as ScrollLink } from "react-scroll";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between py-5 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-primary_main via-secondary_main to-secondary_main sticky top-0 z-50">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="md:text-3xl text-2xl font-bold cursor-pointer "
        >
          AbdoDev
        </ScrollLink>

        <menu className="hidden md:flex lg:space-x-24 md:space-x-16">
          {navlinks.map((link) => (
            <ScrollLink
              key={link.url}
              to={link.url}
              smooth={true}
              duration={500}
              className="hover:text-primary_main text-lg transition-colors cursor-pointer"
            >
              {link.title}
            </ScrollLink>
          ))}
        </menu>

        <div className="">
          <Button className="bg-primary_main text-text_primary hover:bg-secondary_main hover:opacity-70 text-base md:block hidden">
            Get in touch
          </Button>
          <MobileNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

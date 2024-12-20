"use client";

import { Button } from "@/components/ui/button";
import { navlinks } from "@/data/navData";
import { Link as ScrollLink } from "react-scroll";
import MobileNav from "./MobileNav";

import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  animateScroll as scroll,
  // scrollSpy,
} from "react-scroll";

const Navbar = () => {
  // Defining functions to perform different types of scrolling.
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  // const scrollToBottom = () => {
  //   scroll.scrollToBottom();
  // };

  // const scrollTo = () => {
  //   scroll.scrollTo(100);
  // };

  const handleSetActive = (to: unknown) => {
    console.log(to);
  };

  return (
    <>
      <nav className="w-full flex items-center justify-between py-3 px-4 md:px-4 lg:px-12 backdrop-blur-[21px] backdrop-saturate-200 bg-gradient-to-r from-[rgba(0,137,143,0.49)] via-[#212832] to-[#0A0E11] sticky top-0 z-50">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer "
        >
          AbdoDev
        </ScrollLink>

        <menu className="hidden md:flex lg:space-x-16 md:space-x-12">
          {navlinks.map((link) => (
            <ScrollLink
              key={link.url}
              activeClass="active"
              to={link.url}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onSetActive={handleSetActive}
              className="hover:text-primary_main text-base transition-colors cursor-pointer"
            >
              {link.title}
            </ScrollLink>
          ))}
        </menu>

        <div className="">
          <Button className="bg-primary_main text-text_primary hover:bg-secondary_main hover:opacity-70 text-sm md:block hidden">
            Get in touch
          </Button>
          <MobileNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

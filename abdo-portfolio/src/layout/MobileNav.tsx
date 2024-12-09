"use client";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Logs } from "lucide-react";
import { navlinks } from "@/data/navData";
import { Link } from "react-scroll";
import { Calendar } from "@/components/ui/calendar";

const MobileNav = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Logs size={40} />
        </SheetTrigger>
        <SheetContent className="bg-gradient-to-r from-background_main via-primary_main to-primary_main">
          <SheetHeader>
            <SheetTitle className="text-3xl pt-2 text-text_primary text-left">
              AbdoDev
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-8 py-10">
            {navlinks.map((link) => (
              <SheetClose asChild key={link.url}>
                <Link
                  to={link.url}
                  smooth={true}
                  duration={500}
                  className="hover:text-primary_main text-2xl transition-colors cursor-pointer text-text_primary"
                >
                  {link.title}
                </Link>
              </SheetClose>
            ))}
          </div>
          <SheetFooter className="mb-4">
            <SheetClose asChild>
              <Button className=" text-text_primary hover:bg-secondary_main hover:opacity-70 text-base">
                Get in touch
              </Button>
            </SheetClose>
          </SheetFooter>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
          />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        className="w-full py-12 bg-gray-900 md:px-20 px-2 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center"
        id="/home"
      >
        <div className="md:w-[90%] w-full py-4 md:px-4 px-0">
          <div className="w-full">
            <div className="w-full relative h-[13rem] rounded-3xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
                fill
              />
            </div>
            <p className="flex justify-between items-center text-base mt-4">
              <span>Innovative API Solutions</span>
              <ArrowRight size={28} className="cursor-pointer" />
            </p>
          </div>

          <div className="w-full  mt-6">
            <div className="w-full  h-[13rem] rounded-3xl relative overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
                fill
              />
            </div>
            <p className="flex justify-between items-center text-base mt-4">
              <span>Cloud Base Architecture</span>
              <ArrowRight size={28} className="cursor-pointer" />
            </p>
          </div>
        </div>
        <div className="bg-blue-00 w-full  h-fit">
          <h1 className="md:text-6xl text-4xl pb-5">
            Building Robust Backends
          </h1>
          <p className="md:text-lg text-base pb-8 ">
            Welcome to my portfolio, where innovation meets technology. As a
            passionate backend developer, I bring a blend of creativity and
            expertise to the table, always seeking new ways to push the
            boundaries of what&apos;s possible.
          </p>
          <Button
            size={"lg"}
            className="bg-primary_main text-text_primary hover:bg-secondary_main hover:opacity-70 text-base py-4 px-6"
          >
            Explore My Work
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HomeHeroBanner = () => {
  return (
    <>
      <section className=" dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-6xl">
              Best Clothing Collection
            </h1>
            <p className="mt-6 mb-4 text-lg sm:mb-8 ">
              Find everything you need to look and feel your best, shop the
              latest men&apos; fashion trends, and lifestyle products.
            </p>
            <Link rel="noopener noreferrer" href="#">
              <Button size="lg" className="font-semibold rounded">
                Start Shopping
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128  relative w-full">
            <Image
              src="globe.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              fill
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeroBanner;

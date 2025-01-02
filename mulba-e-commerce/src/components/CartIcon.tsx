import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <>
      <Link href="/cart" className="cursor-pointer relative">
        <ShoppingBag className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-black text-white text-xs font-semibold rounded-full flex justify-center items-center">
          0
        </span>
      </Link>
    </>
  );
};

export default CartIcon;

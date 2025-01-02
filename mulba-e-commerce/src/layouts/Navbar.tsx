import CartIcon from "@/components/CartIcon";
import NavbarMenu from "@/components/NavbarMenu";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ListOrdered, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <>
      <nav className="flex justify-between items-center py-4 lg:px-20 md:px-8 px-4 border-b">
        <div className="flex gap-3 items-center">
          <Menu className="cursor-pointer md:hidden block" />
          <h2 className="md:text-2xl text-xl font-semibold">Mulba</h2>
        </div>
        <NavbarMenu />
        <div className="flex w-auto md:w-1/3 items-center justify-end gap-5 ">
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href="/orders" className="cursor-pointer relative">
                <ListOrdered className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-black text-white text-xs font-semibold rounded-full flex justify-center items-center">
                  0
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <Button size="sm">login</Button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

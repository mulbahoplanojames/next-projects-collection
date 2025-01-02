import CartIcon from "@/components/CartIcon";
import NavbarMenu from "@/components/NavbarMenu";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
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
          <Button size="sm">login</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

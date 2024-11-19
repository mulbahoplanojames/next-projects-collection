import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import Image from "next/image";
import { Search } from "lucide-react";

const SearchCom = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Search className="h-6 w-6" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 px-6 py-5">
          <Command className="rounded-lg border shadow-md md:min-w-[450px]">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandSeparator />
              <CommandGroup heading="Users">
                <CommandItem>
                  <Image
                    width={10}
                    height={10}
                    className="h-5 w-5 rounded-full"
                    src="https://avatars.githubusercontent.com/u/10254028?v=4"
                    alt="avatar"
                  />
                  <span>Lucas Santos</span>
                </CommandItem>
                <CommandItem>
                  <Image
                    width={10}
                    height={10}
                    className="h-5 w-5 rounded-full"
                    src="https://avatars.githubusercontent.com/u/110323?v=4"
                    alt="avatar"
                  />
                  <span>Matheus Fernandes</span>
                </CommandItem>
                <CommandItem>
                  <Image
                    width={10}
                    height={10}
                    className="h-5 w-5 rounded-full"
                    src="https://avatars.githubusercontent.com/u/102766?v=4"
                    alt="avatar"
                  />
                  <span>Renan Souza</span>
                </CommandItem>
                <CommandItem>
                  <Image
                    width={10}
                    height={10}
                    className="h-5 w-5 rounded-full"
                    src="https://avatars.githubusercontent.com/u/102766?v=4"
                    alt="avatar"
                  />
                  <span>Gabriel Pinto</span>
                </CommandItem>
                <CommandItem>
                  <Image
                    width={10}
                    height={10}
                    className="h-5 w-5 rounded-full"
                    src="https://avatars.githubusercontent.com/u/102766?v=4"
                    alt="avatar"
                  />
                  <span>Lucas Gomes</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DropdownMenuContent>
      </DropdownMenu>
      <></>
    </>
  );
};

export default SearchCom;

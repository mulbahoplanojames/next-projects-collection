import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { LogOut, MailCheck, MessageCircleMore, UserRound } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>OP</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 mr-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserRound size={36} />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageCircleMore size={36} />
          Message
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MailCheck size={36} />
          Notification
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut size={36} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;

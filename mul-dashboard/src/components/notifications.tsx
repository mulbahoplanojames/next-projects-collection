import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellDot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const notifications = [
  {
    title: "Oplano James mentioned you in a post 2h ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    title: "Oplano James reacted to your post 3h ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    title: "Oplano James commented on your post 5h ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    title: "Oplano James sent you a message 8h ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    title: "Oplano James liked your post 10h ago",
    avatar: "https://github.com/shadcn.png",
  },
];

const Notification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BellDot className=" h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {notifications.map((notification) => (
          <div key={notification.title}>
            <DropdownMenuItem className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={notification.avatar} />
                <AvatarFallback>OP</AvatarFallback>
              </Avatar>
              {notification.title}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;

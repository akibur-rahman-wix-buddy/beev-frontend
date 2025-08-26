import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, User, Activity, Settings, LogOut } from "lucide-react";
import profile from "@/assets/images/profile2.png";
import { Link } from "react-router";
import { StateContext } from "@/context/StateContext";
import { useContext } from "react";

const UserProfileDropdown = ({ className, onLogout }) => {
  const { isSmall } = useContext(StateContext);
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex lg:flex-row-reverse items-center gap-2 sm:gap-3 xl:gap-4 hover:opacity-80 transition-opacity outline-none cursor-pointer text-textPrimary",
          className
        )}
      >
        <Avatar className="size-10 sm:size-11 lg:size-12">
          <AvatarImage src={profile} alt="Sara" />
          <AvatarFallback className="text-textPrimary border">
            SA
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="font-medium md:text-lg lg:text-xl">Sara</span>
          <ChevronDown className="size-5 hidden sm:block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 bg-[#F3EDE5] border-stone-200"
        align={isSmall ? "center" : "end"}
        sideOffset={8}
      >
        <Link to="/profile" className="group">
          <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 text-textPrimary font-medium hover:bg-[#F9F5F0] cursor-pointer">
            <User className="size-4.5 group-hover:scale-120 text-textPrimary transition-all duration-200" />
            Profile
          </DropdownMenuItem>
        </Link>
        <Link to="/profile/my-activity" className="group">
          <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 text-textPrimary font-medium hover:bg-[#F9F5F0] cursor-pointer">
            <Activity className="size-4.5 group-hover:scale-120 text-textPrimary transition-all duration-200" />
            My Activity
          </DropdownMenuItem>
        </Link>
        <Link to="/profile/settings" className="group">
          <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 text-textPrimary font-medium hover:bg-[#F9F5F0] cursor-pointer">
            <Settings className="size-4.5 group-hover:scale-120 text-textPrimary transition-all duration-200" />
            Settings
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="group flex items-center gap-3 px-4 py-3 text-textPrimary font-medium hover:bg-[#F9F5F0] cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut className="size-4.5 group-hover:scale-120 text-destructive transition-all duration-200" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileDropdown;

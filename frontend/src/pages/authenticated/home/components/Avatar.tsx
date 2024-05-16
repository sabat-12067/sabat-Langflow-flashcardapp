"use client";

import { CiLogout } from "react-icons/ci";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from "@/libs/supabase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import clsx from "clsx";

// type Checked = DropdownMenuCheckboxItemProps["checked"];

export function Avatar() {
  // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  // const [showPanel, setShowPanel] = React.useState<Checked>(false);

  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"} className="flex gap-1 text-[11px] p-2 md:px-2">
          {user.user_metadata.full_name.split(" ")[0]}
          <span>
            <IoIosArrowDropdown size={14}/>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
      className={clsx("cursor-pointer flex justify-between rounded-lg px-2 py-2", !isDarkMode ? " bg-[#141a32] text-white" : "bg-gray-100")}
      >
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          onClick={handleSignOut}
          className="flex gap-10"
        >
          <p className="text-[12px]">Logout</p>
          <span className="">
            <CiLogout size={20} />
          </span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

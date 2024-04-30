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
import { IoIosArrowDropdownCircle } from "react-icons/io";

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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"} className="flex gap-1 text-sm">
          {user.user_metadata.full_name.split(" ")[0]}
          <span>
            <IoIosArrowDropdownCircle />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          className="cursor-pointer flex justify-between py-0 px-4"
          onClick={handleSignOut}
        >
          <p>Logout</p>
          <span className="">
            <CiLogout size={24} />
          </span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

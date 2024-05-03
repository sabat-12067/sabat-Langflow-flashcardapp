import { supabase } from "@/libs/supabase";
import { FC } from "react";
import { PiBrainThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import ModeToggle from "@/components/modeToggle";
import clsx from "clsx";

import {logo} from "/logotwo.png"

interface NavbarProps {}
const Navbar: FC<NavbarProps> = ({}) => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  return (
    <header className="pt-2 pb-10 md:py-6 px-4 md:px-10 flex justify-between">
      <div
        className="flex gap-2 cursor-pointer pt-1 md:pt-0"
        onClick={() => navigate("/cards")}
      >
        <span className="">
          <img 
          src="/logotwo.png"
          className="h-6 w-6 rounded-lg"
        
          />
        </span>
        <p className={clsx("text-lg", isDarkMode ? "text-black" : "text-white")}>LangFlow</p>
      </div>
      <div className="flex gap-2 text-sm">
        <Avatar />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;

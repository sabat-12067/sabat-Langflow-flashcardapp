import { supabase } from "@/libs/supabase";
import { FC } from "react";
import { PiBrainThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import ModeToggle from "@/components/modeToggle";
import clsx from "clsx";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = ({}) => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);


  return (
    <header className="pt-4 pb-10 md:py-10 px-10 flex justify-between">
      <div
        className="flex gap-2 cursor-pointer"
        onClick={() => navigate("/cards")}
      >
        <span className="">
          <PiBrainThin className="" color={"black"} size={26} />
        </span>
        <p className={clsx("text-lg", isDarkMode ? "text-black" : "text-white")}>LangFlow</p>
      </div>
      <div className="flex gap-2">
        <Avatar />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;

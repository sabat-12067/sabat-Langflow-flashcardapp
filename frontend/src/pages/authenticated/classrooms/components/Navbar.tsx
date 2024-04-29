import { supabase } from "@/libs/supabase";
import { FC } from "react";
import { PiBrainThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = ({}) => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);
  

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <header className="pt-4 pb-10 md:py-10 px-10 flex justify-between">
      <div 
      className="flex gap-2 cursor-pointer"
      onClick={() => navigate("/cards")}
      >
        <span className="my-1">
          <PiBrainThin size={26} />
        </span>
        <p 
        className="hidden md:block md:text-[22px] font-mono"
        >
          LangFlow
        </p>
      </div>
      <div className="">
        <Avatar />
          </div>
    </header>
  );
};

export default Navbar;

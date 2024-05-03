import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CiEdit } from "react-icons/ci";

import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import clsx from "clsx";
interface CardProps {
  front: string;
  back: string;
}
const Card: FC<CardProps> = ({ front, back }) => {
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  return (
    <div className={clsx("border-[1px] solid white py-5 flex flex-col h-[90px] w-[75px] md:h-[120px] md:w-[120px] gap-2 m-4 relative rounded-md", isDarkMode ? "border-black" : "text-white")}>
      <div className="absolute right-2 top-2 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger className="">
            <CiEdit
            className="mb-2" 
            color={isDarkMode ? "black" : "white"} size={14} 
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={clsx(
              "px-4 py-4 rounded-lg space-y-2 h-[230px]",
              isDarkMode ? "bg-gray-100" : "text-white bg-black"
            )}
          >
            <DropdownMenuSeparator />
            <form className="flex flex-col gap-4">
              <h3>Edit Card</h3>
              <Input 
              placeholder="Edit front side..." 
              className={clsx(isDarkMode ? "" : "text-black")}
              />
              <Input 
              placeholder="Edit back side..." 
              className={clsx(isDarkMode ? "" : "text-black")}
              />
              <div className="flex gap-1 fixed right-2 bottom-2">
                <Button className="text-[11px]" variant={"destructive"}>
                  Delete Card
                </Button>
                <Button className="text-[11px]" variant={"secondary"}>
                  Save
                </Button>
              </div>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="text-sm md:text-xl lg:text-2xl mx-auto">{front}</p>
      <p className="text-[11px] md:text-[16px] font-light mx-auto text-center">{back}</p>
    </div>
  );
};

export default Card;

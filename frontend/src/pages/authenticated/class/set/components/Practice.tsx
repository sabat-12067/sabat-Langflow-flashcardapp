import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card } from "@/types";
import clsx from "clsx";
import { FC } from "react";
import { PiCards } from "react-icons/pi";
import { useSelector } from "react-redux";
interface PracticeProps {
    cards: Card[]
}
const Practice: FC<PracticeProps> = ({
cards
}) => {
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  return (
    <Drawer>
      <DrawerTrigger>
        <Button
         className="flex gap-1 mb-8" 
         variant={"outline"}
         >
          <span className="hidden md:block">Practice</span>
          <PiCards size={17} />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className={clsx(
          "p-6 md:px-0 py-12 h-full",
          isDarkMode ? "" : "bg-black text-white"
        )}
      >
       <div>

       </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Practice;

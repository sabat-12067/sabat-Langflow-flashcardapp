import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card } from "@/types";
import clsx from "clsx";
import { FC, useState } from "react";
import { AiOutlineSound } from "react-icons/ai";
import { PiCards } from "react-icons/pi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

interface PracticeProps {
  cards: Card[];
}
const Practice: FC<PracticeProps> = ({ cards }) => {
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);
  const [switchSides, setSwitchSides] = useState(false);

  const [slide, setSlide] = useState(0)

  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="flex gap-1 mb-8" variant={"outline"}>
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
        <DrawerClose>
          <button className="fixed left-6 top-4">
            <IoMdCloseCircleOutline className="" size={34} />
          </button>
        </DrawerClose>
        <div className="text-center mx-auto py-[130px]">
          <Carousel className="w-full max-w-xs">
            <CarouselContent className="">
              {cards?.map((card, i) => {
                return (
                  <CarouselItem
                    key={i}
                    className={clsx(
                      "h-[500px] w-[400px] rounded-lg text-center py-[212px] text-5xl",
                      isDarkMode ? "bg-slate-100" : "bg-[#090c19]"
                    )}
                    onClick={() => setSwitchSides(!switchSides)}
                  >
                    {switchSides ? card.front : card.back}
                    <AiOutlineSound
                      className={clsx(
                        "fixed bottom-2 left-6 cursor-pointer hover:rounded-lg",
                        isDarkMode ? "hover:bg-slate-200" : "hover:bg-slate-800"
                      )}
                      color={isDarkMode ? "black" : "gray"}
                      size={isDarkMode ? 26 : 24}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <p className="p-2 text-sm">{slide + "/" + cards?.length}</p>

            <CarouselPrevious
             className="text-black"
             />
            <CarouselNext 
            className="text-black" 
            />
          </Carousel>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Practice;

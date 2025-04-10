import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card } from "@/types";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { PiCards } from "react-icons/pi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import AiAssistantMenu from "./AiAssistantMenu";
import { Skeleton } from "@/components/ui/skeleton";

interface PracticeProps {
  cards: Card[];
}
type AiOptions = "PRONOUNCE" | "SYNONYMS" | "EXAMPLE" | "";

const Practice: FC<PracticeProps> = ({ cards }) => {
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);
  const [switchSides, setSwitchSides] = useState(false);
  const [cardsLength, setCardslength] = useState<number>(0);
  const [aiFeedback, setAiFeedback] = useState<AiOptions>("");

  useEffect(() => {
    setSwitchSides(false);
  }, [cardsLength]);

  const handleUpdateAI = (word: AiOptions) => {
    setAiFeedback(word);
  };

  console.log(aiFeedback);

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
          <button className="fixed left-6 top-4 flex">
            <IoMdCloseCircleOutline className="" size={34} />
            <span className="text-[14px] py-1">(ESC)</span>
          </button>
        </DrawerClose>

        <div
          className={clsx(
            "flex max-w-[800px] mx-auto my-[130px] duration-700 transition ease-in-out cursor-pointer foxed",
            !switchSides && ""
          )}
          onClick={() => setSwitchSides(!switchSides)} 
        >
          {
            aiFeedback ?
            // <Skeleton>
               <div
            className="absolute left-[300px] h-[500px] border-s border-white border-[1px] py-2" 
            >
              <h3 className="text-lg font-semibold px-4 pb-2">
              Loading {aiFeedback} AI explanations
              </h3>
            <div className="border-s border-white border-[1px] w-[400px] px-0"/>
            </div>
            
            // </Skeleton>
            : 
            <div>
              
            </div>
            }
          <button
            className={clsx("my-[240px] cursor-pointer")}
            onClick={() => setCardslength(cardsLength - 1)}
            disabled={cardsLength === 0}
          >
            <GrFormPrevious
              size={28}
              color={cardsLength === 0 ? "gray" : "white"}
            />
          </button>

          <div
            className={clsx(
              "text-center mx-auto h-[500px] w-[300px] relative",
              isDarkMode ? "" : "bg-slate-900"
            )}
          >
            <div
              className={clsx(
                "my-[236px] text-3xl",
                switchSides && "text-blue-500"
              )}
            >
              <div>
                {cards &&
                  (switchSides
                    ? cards[cardsLength]?.front
                    : cards[cardsLength]?.back)}
              </div>

              <AiAssistantMenu
                word={
                  cards &&
                  (switchSides
                    ? cards[cardsLength]?.front
                    : cards[cardsLength]?.back)
                }
                handleUpdateAI={handleUpdateAI}
              />
            </div>

            <p className="mx-auto">{cardsLength + 1 + "/" + cards?.length}</p>
          </div>
          <button
            className="my-[240px] cursor-pointer"
            onClick={() => setCardslength(cardsLength + 1)}
            disabled={cards?.length - 1 === cardsLength}
          >
            <MdNavigateNext
              size={28}
              color={cards?.length - 1 === cardsLength ? "gray" : "white"}
            />
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default Practice;

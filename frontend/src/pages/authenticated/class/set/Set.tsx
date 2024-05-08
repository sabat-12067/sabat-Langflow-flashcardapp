import { FC, useState } from "react";
import { useGetStudySetCardsQuery } from "@/services/cards";
import { useLocation } from "react-router-dom";
import Card from "./components/Card";
import { Button } from "@/components/ui/button";
import { PiCards } from "react-icons/pi";
import AddCardDialog from "./components/AddCardDialog";
import { RoomSettingsSheet } from "./components/RoomSettingsSheet";
import Navbar from "../../home/components/Navbar";
import { useSelector } from "react-redux";
import clsx from "clsx";
interface SetProps {
  id?: number;
}
const Set: FC<SetProps> = ({ }) => {
  const [roomTitle] = useState(localStorage.getItem("Set"));
  const location = useLocation();
  const currentStudySetId = location.pathname.slice(
    location.pathname.length - 2,
    location.pathname.length
  );
  const { data } = useGetStudySetCardsQuery(currentStudySetId);
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);


  console.log(data)

  return (
    <div>
      <Navbar />
      <main className="">
        <div className="max-w-[90%] md:max-w-[65%] mx-auto flex justify-between">
          <h3 className={clsx("text-center mb-10 text-2xl", isDarkMode ? "" : "text-white")}>{roomTitle}</h3>
          <div className="flex gap-2">
            <Button className="flex gap-1" variant={"outline"}>
              <span className="hidden md:block">
              Practice 
              </span>
              <PiCards size={17} />

            </Button>
            <AddCardDialog />
            <RoomSettingsSheet />
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-6 justify-center max-w-[99%] pr-8 sm:max-w-[85%] lg:max-w-[65%] 2xl:max-w-[52%] mx-auto">
          {data?.map((card: any, i: number) => (
            <Card id={card.id} key={i} front={card.front} back={card.back} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Set;

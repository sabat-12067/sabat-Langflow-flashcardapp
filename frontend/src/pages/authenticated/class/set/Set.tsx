import { FC, useState } from "react";
import Navbar from "../../classrooms/components/Navbar";
import { useGetStudySetCardsQuery } from "@/services/cards";
import { useLocation } from "react-router-dom";
import Card from "./components/Card";
import { Button } from "@/components/ui/button";
import { PiCards } from "react-icons/pi";
import AddCardDialog from "./components/AddCardDialog";
import { RoomSettingsSheet } from "./components/RoomSettingsSheet";
interface SetProps {
  id: number;
}
const Set: FC<SetProps> = ({ }) => {
  const [roomTitle] = useState(localStorage.getItem("Set"));
  const location = useLocation();
  const currentStudySetId = location.pathname.slice(
    location.pathname.length - 2,
    location.pathname.length
  );
  const { data } = useGetStudySetCardsQuery(currentStudySetId);

  return (
    <div>
      <Navbar />
      <main className="">
        <div className="max-w-[90%] md:max-w-[65%] mx-auto flex justify-between">
          <h3 className="text-center mb-10 text-2xl">{roomTitle}</h3>
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
        <div className="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 justify-center max-w-[80%] sm:max-w-[70%] lg:max-w-[56%] mx-auto">
          {data?.map((card: any, i: number) => (
            <Card key={i} front={card.front} back={card.back} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Set;

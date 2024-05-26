import { FC, useEffect, useState } from "react";
import {
  useGetStudySetCardsQuery,
  useGetStudySetQuery,
} from "@/services/cards";
import { useLocation, useParams } from "react-router-dom";
import Card from "./components/Card";
import AddCardDialog from "./components/AddCardDialog";
import { RoomSettingsSheet } from "./components/RoomSettingsSheet";
import Navbar from "../../home/components/Navbar";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Practice from "./components/Practice";
import { Skeleton } from "@/components/ui/skeleton";
interface SetProps {
  id?: number;
}
const Set: FC<SetProps> = ({ id }) => {
  const [roomTitle] = useState(localStorage.getItem("Set"));
  const location = useLocation();
  const currentStudySetId = location.pathname.slice(
    location.pathname.length - 2,
    location.pathname.length
  );
  const { data, isLoading } = useGetStudySetCardsQuery(currentStudySetId);
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  useEffect(() => {
    if (data?.length! > 0) {
      localStorage.setItem("Card length: ", data!.length.toString());
    }
  }, [data?.length])

  const cardSkeleton = localStorage.getItem("Card length: ")
  console.log(cardSkeleton)
  

  return (
    <div>
      <Navbar />
      <main className="">
        <div className="max-w-[90%] md:max-w-[65%] mx-auto flex justify-between">
          <h3
            className={clsx(
              "text-center mb-10 text-2xl",
              isDarkMode ? "" : "text-white"
            )}
          >
            {roomTitle}
          </h3>
          <div className="flex gap-2">
            <Practice cards={data!} />
            <AddCardDialog />
            <RoomSettingsSheet id={currentStudySetId} description={""} />
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-6 justify-center max-w-[99%] pr-8 sm:max-w-[85%] lg:max-w-[65%] 2xl:max-w-[52%] mx-auto">
          {isLoading
            ? 
            Array.from({ length: parseInt(cardSkeleton!) }).map((_, index) => (
              <Skeleton
                key={index}
                className="w-[220px] h-[180px] rounded-md m-4"
              />
            ))
            :
             data?.map((card: any, i: number) => (
                <Card
                  id={card.id}
                  key={i}
                  front={card.front}
                  back={card.back}
                />
              ))}
        </div>
      </main>
    </div>
  );
};

export default Set;

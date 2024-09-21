import { useGetClassroomsQuery } from "@/services/cards";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import StudyGroups from "./components/StudyGroups";
import { CreateClassRoomDialog } from "./components/CreateClassRoomDialog";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";

const Cards = () => {
  const user = useSelector((state: any) => state.auth.user);
  const { data, error, isLoading, refetch } = useGetClassroomsQuery(user.id, {
    refetchOnMountOrArgChange: true,
  });
  useEffect(() => {
    if (data?.length! > 0) {
      localStorage.setItem("Class length: ", data!.length.toString());
    }
  }, [data?.length]);

  console.log(data);

  

  const storedValue = localStorage.getItem("Class length: ");
  const setLength = storedValue !== null ? parseInt(storedValue, 10) : 0;
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  
  return (
    <div className="text-center">
      <Navbar />
        <div className="flex justify-between max-w-[88%] md:max-w-[75%] mx-auto">
          <h1 
          className={clsx("text-xl md:text-2xl", !isDarkMode && 'text-white')}
          >
            My Classrooms
            </h1>
          <CreateClassRoomDialog />
        </div>
        <div className={clsx("grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center max-w-[90%] sm:max-w-[70%] lg:max-w-[56%] mx-auto py-6 md:py-2 pr-4 gap-6 ", isDarkMode ? "" : "text-white")}>
          {isLoading
            ? Array.from({ length: setLength }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-[220px] h-[180px] rounded-md m-4"
                />
              ))
            : data?.map((studyGroup, i) => {
                return (
                  <StudyGroups
                    id={studyGroup.id}
                    key={i}
                    title={studyGroup.name}
                    description={studyGroup.description}
                  />
                );
              })}
        </div>
    </div>
  );
};

export default Cards;

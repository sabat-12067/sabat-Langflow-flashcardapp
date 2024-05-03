import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetStudySetQuery } from "@/services/cards";
import ClassSet from "./ClassSet";
import { Skeleton } from "@/components/ui/skeleton";
import CreateStudySetDialog from "./CreateStudySetDialog";
import {SettingsSheet} from "./SettingsSheet";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Navbar from "../../home/components/Navbar";

interface ClassProps {}
const Class: FC<ClassProps> = ({}) => {
  const [classroomTitle, setClassroomTitle] = useState(localStorage.getItem("Classroom: "))
  const params = useParams();
  const classId = params.classId?.slice(1, params.classId.length)!
  const { data, isLoading, refetch } = useGetStudySetQuery(classId, {
    refetchOnMountOrArgChange: true,
  });  
  const [shouldRefetch, setShouldRefetch] = useState(0)
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  useEffect(() => {
    if (data?.length! > 0) {
      localStorage.setItem(
        `${params.classId} set length:`,
        data!.length.toString()
      );
    }
    if(shouldRefetch >= 0) refetch()
  }, [data?.length, shouldRefetch]);

  const storedValue = localStorage.getItem(`${params.classId} set length:`);
  const setLength = storedValue !== null ? parseInt(storedValue, 10) : 0;
  
  
  const handleChange = (name: string) => {
    setClassroomTitle(name)
  }

  return (
    <div className="text-center">
      <Navbar />
      <div className="max-w-[65%] mx-auto">
        <div className="flex justify-between">
          <h1 className={clsx("text-2xl", isDarkMode ? "" : "text-white")}>
            {classroomTitle} Classroom
          </h1>
          <div className="flex gap-1">
            <SettingsSheet 
            classId={classId}
            onChange={handleChange}
            />
            <CreateStudySetDialog onRefetch={() => setShouldRefetch(shouldRefetch + 1)}/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center max-w-[90%] sm:max-w-[70%] lg:max-w-[56%] mx-auto py-2">
  {isLoading
    ? Array.from({ length: setLength }).map((_, index) => (
        <Skeleton key={index} className="w-[220px] h-[180px] rounded-md m-4" />
      ))
    : data?.map((set, i) => (
        <ClassSet key={i} id={set.id!} name={set.name} description={set.description} />
      ))
  }
</div>

    </div>
  );
};

export default Class;

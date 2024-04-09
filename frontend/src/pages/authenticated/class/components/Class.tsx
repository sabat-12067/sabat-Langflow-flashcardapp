import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../classrooms/components/Navbar";
import { useGetStudySetQuery } from "@/services/cards";
import ClassSet from "./ClassSet";
import { Skeleton } from "@/components/ui/skeleton";
import CreateStudySetDialog from "./CreateStudySetDialog";
import {SettingsSheet} from "./SettingsSheet";

interface ClassProps {}
const Class: FC<ClassProps> = ({}) => {

  
  const params = useParams();

  const { data, isLoading, refetch } = useGetStudySetQuery(params.classId?.slice(1, params.classId.length)!, {
    refetchOnMountOrArgChange: true,
  });
  console.log('DATA: ', data)
  
  const [shouldRefetch, setShouldRefetch] = useState(0)

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
  
  
  return (
    <div className="text-center">
      <Navbar />
      <div className="max-w-[65%] mx-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl">
            {localStorage.getItem("Classroom: ")} Classroom
          </h1>
          <div className="flex gap-1">
            <SettingsSheet title={localStorage.getItem("Classroom: ")!}/>
            <CreateStudySetDialog onRefetch={() => setShouldRefetch(shouldRefetch + 1)}/>
          </div>
        </div>
      </div>
      <div className="my-20 flex w-fit mx-auto gap-10">
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

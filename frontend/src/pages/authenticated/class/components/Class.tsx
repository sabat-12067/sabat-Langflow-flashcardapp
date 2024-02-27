import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../classrooms/components/Navbar";
import { useGetClassQuery } from "@/services/cards";
import { Button } from "@/components/ui/button";
import { GrAdd } from "react-icons/gr";
import { TbSettingsPin } from "react-icons/tb";
import ClassSet from "./ClassSet";
import { Skeleton } from "@/components/ui/skeleton";

interface ClassProps {}
const Class: FC<ClassProps> = ({}) => {
  const params = useParams();

  const { data, isLoading } = useGetClassQuery(
    params.classId?.slice(1, params.classId.length)!
  );

  useEffect(() => {
    if (data?.length! > 0) {
      localStorage.setItem(
        `${params.classId} set length:`,
        data!.length.toString()
      );
    }
  }, [data?.length]);

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
            <Button className="flex gap-1">
              <span className="">
                {localStorage.getItem("Classroom: ")} Settings
              </span>
              <TbSettingsPin size={18} />
            </Button>{" "}
            <Button className="flex gap-1" variant={"secondary"}>
              <span className="">New Set</span>
              <GrAdd size={15} />
            </Button>{" "}
          </div>
        </div>
      </div>
      <div className="my-20 flex w-fit mx-auto gap-10">
  {isLoading
    ? Array.from({ length: setLength }).map((_, index) => (
        <Skeleton key={index} className="w-[220px] h-[180px] rounded-md m-4" />
      ))
    : data?.map((set, i) => (
        <ClassSet key={set.id} id={i} name={set.name} description={set.description} />
      ))
  }
</div>

    </div>
  );
};

export default Class;

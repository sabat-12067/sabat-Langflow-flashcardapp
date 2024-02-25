import { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../classrooms/components/Navbar";
import { useGetClassQuery } from "@/services/cards";
import { Button } from "@/components/ui/button";
import { GrAdd } from "react-icons/gr";
import { TbSettingsPin } from "react-icons/tb";
import ClassSet from "./ClassSet";


interface ClassProps {}
const Class: FC<ClassProps> = ({}) => {
  const params = useParams();
  console.log(params);

  const { data, isLoading } = useGetClassQuery(
    params.classId?.slice(1, params.classId.length)!
  );

  console.log(data);

  return (
    <div className="text-center">
      <Navbar />
      <div className="max-w-[65%] mx-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl">Hindis Sets</h1>
          <div className="flex gap-1">
          <Button className="flex gap-1">
          <span className="">Hindi Settings</span>
          <TbSettingsPin size={18} />
        </Button>             <Button className="flex gap-1" variant={"secondary"}>
          <span className="">New Set</span>
          <GrAdd size={15} />
        </Button>          </div>
        </div>
        <div className="my-20 flex">
          {
            data?.map((set) => <ClassSet key={set.id} id={set.id!} name={set.name} description={set.description}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Class;

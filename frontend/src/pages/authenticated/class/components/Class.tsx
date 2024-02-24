import { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../classrooms/components/Navbar";
import { useGetClassQuery } from "@/services/cards";
interface ClassProps {}
const Class: FC<ClassProps> = ({}) => {
  const params = useParams();
  console.log(params);

  const {data, isLoading} = useGetClassQuery(params.classId.slice(1, params.classId.length))

  console.log(data);
  

  return (
    <div>
      <Navbar />
      <div className='max-w-[65%] mx-auto'>
            <div className='flex justify-between'>
            <h1 className='text-2xl'>My Classrooms</h1>
              Class
            <div className='flex flex-row justify-center'>
              
            </div>
    </div>
            </div>
    </div>
  );
};

export default Class;

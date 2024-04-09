import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
interface ClassSetProps {
  id: number;
  name: string;
  description: string;
}
const ClassSet: FC<ClassSetProps> = ({ id, name, description }) => {
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation();

  console.log(location.pathname)
  
  return (
    <div className="border-[1px] border-white mx-auto p-4 rounded-md space-y-6 w-[200px] h-[180px] relative">
      <h3 className="font-semibold text-xl">{name}</h3>
      <p>{description}</p>
      <Button 
      className="bottom-2 absolute left-0 right-0 w-fit mx-auto" 
      variant={"secondary"}
      onClick={() => navigate(`${location.pathname}/:${id}`)}
      >
        Study
      </Button>
    </div>
  );
};

export default ClassSet;

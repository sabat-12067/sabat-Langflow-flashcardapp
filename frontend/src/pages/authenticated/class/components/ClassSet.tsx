import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
interface ClassSetProps {
  id: number;
  name: string;
  description: string;
}
const ClassSet: FC<ClassSetProps> = ({ id, name, description }) => {
  const navigate = useNavigate()
  const location = useLocation();  
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  return (
    <div className={clsx("py-5 flex flex-col h-[150px] w-[120px] md:h-[170px] md:w-[170px] m-2 justify-between rounded-md md:p-6", isDarkMode ? "border-s border-[1px] border-black" : "border-[1px] border-s border-white")}>
      <h3 className={clsx("font-semibold text-xl", isDarkMode ? "" : "text-white")}>{name}</h3>
      <p className={clsx(isDarkMode ? "" : "text-white")}>{description}</p>
      <Button 
      className="bottom-2 absolute left-0 right-0 w-fit mx-auto" 
      variant={"secondary"}
      onClick={() => {
        localStorage.setItem("Set", name)
        navigate(`${location.pathname}/:${id}`)

      }}
      >
        Study
      </Button>
    </div>
  );
};

export default ClassSet;

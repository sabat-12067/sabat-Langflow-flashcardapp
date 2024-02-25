import { Button } from "@/components/ui/button";
import { FC } from "react";
interface ClassSetProps {
  id: number;
  name: string;
  description: string;
}
const ClassSet: FC<ClassSetProps> = ({ id, name, description }) => {
  return (
    <div className="border-[1px] border-white w-fit mx-auto p-4 rounded-md space-y-6 max-w-[220px] h-[180px] relative">
      <h3 className="font-semibold text-xl">{name}</h3>
      <p>{description}</p>
      <Button className="bottom-2 absolute left-0 right-0 w-fit mx-auto" variant={"secondary"}>
        Study
      </Button>
    </div>
  );
};

export default ClassSet;

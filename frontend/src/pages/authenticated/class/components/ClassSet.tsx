import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
  const navigate = useNavigate();
  const location = useLocation();
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  console.log(description.length);

  return (
    <div
      className={clsx(
        "py-5 flex flex-col h-[150px] w-[110px] md:h-[170px] md:w-[170px] m-2 justify-between rounded-md md:p-6",
        isDarkMode
          ? "border-s border-[1px] border-black"
          : "border-[1px] border-s border-white"
      )}
    >
      <h3
        className={clsx(
          "font-semibold text-md md:text-xl",
          isDarkMode ? "" : "text-white"
        )}
      >
        {name}
      </h3>
      <p
        className={clsx(
          "text-[11px] md:text-sm",
          isDarkMode ? "" : "text-white "
        )}
      >
        <HoverCard>
          <HoverCardTrigger className={clsx("text-white", description.length > 30 && 'cursor-pointer')}>
            {description.length > 30
              ? description.slice(0, 17) + "..."
              : description}
          </HoverCardTrigger>
          {description.length > 40 && (
            <HoverCardContent className="text-white bg-black">
              {description}
            </HoverCardContent>
          )}
        </HoverCard>
      </p>

      <Button
        className="w-fit mx-auto text-[12px] p-3 md:text-md"
        variant={"secondary"}
        onClick={() => {
          localStorage.setItem("Set", name);
          navigate(`${location.pathname}/:${id}`);
        }}
      >
        Study
      </Button>
    </div>
  );
};

export default ClassSet;

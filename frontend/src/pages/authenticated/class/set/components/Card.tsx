import { FC } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { useForm } from "react-hook-form";

import { Card as CardType } from "@/types";
import EditCardModal from "./EditCardModal";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
interface CardProps {
  front: string;
  back: string;
  id: string;
}
const Card: FC<CardProps> = ({ front, back, id }) => {
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CardType>();

  return (
    <div
      className={clsx(
        "border-[1px] solid white py-5 flex flex-col h-[90px] w-[75px] md:h-[120px] md:w-[120px] gap-2 m-4 relative rounded-md",
        isDarkMode ? "border-black" : "text-white"
      )}
    >
      <div className="absolute right-2 top-2 z-50">
        <EditCardModal id={id} front={front} back={back} />
      </div>
      {front.length > 10 ? (
        <HoverCard>
          <HoverCardTrigger>
            <p className="text-sm md:text-xl lg:text-2xl mx-auto text-center cursor-pointer">
              {front.slice(0, 8)}...
            </p>
          </HoverCardTrigger>
          <HoverCardContent
          className="bg-black text-white p-2 border-white border-[1px] border-s"
          >
            {front}
          </HoverCardContent>
        </HoverCard>
      ) : (
        <p className="text-sm md:text-xl lg:text-2xl mx-auto">
          {front}
        </p>
      )}
      <p className="text-[11px] md:text-[14px] font-light mx-auto text-center">
        {back}
      </p>
    </div>
  );
};

export default Card;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useDeleteCardMutation,
  useEditClassroomMutation,
  useEditStudySetCardsMutation,
} from "@/services/cards";
import { toast } from "sonner";
import { Card as CardType } from "@/types";
import ClipLoader from "react-spinners/ClipLoader";
import EditCardModal from "./EditCardModal";
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
      <p className="text-sm md:text-xl lg:text-2xl mx-auto">{front}</p>
      <p className="text-[11px] md:text-[14px] font-light mx-auto text-center">
        {back}
      </p>
    </div>
  );
};

export default Card;

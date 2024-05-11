import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  useDeleteCardMutation,
  useEditStudySetCardsMutation,
} from "@/services/cards";
import { Label } from "@radix-ui/react-label";
import clsx from "clsx";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { Card as CardType } from "@/types";

import { toast } from "sonner";

interface EditCardModalProps {
  id: string;
  front: string;
  back: string;
}
const EditCardModal: FC<EditCardModalProps> = ({ id, front, back }) => {
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CardType>();
  const [editCard, { isLoading }] = useEditStudySetCardsMutation();
  const [deleteCard, { isLoading: isDelLoading }] = useDeleteCardMutation();

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      await editCard({ ...data, id: id });
      toast("Card saved");
      reset(); // This should be called after the createCard promise resolves
    } catch (error) {
      console.error("Failed to create card:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        <CiEdit
          className="mb-2"
          color={isDarkMode ? "black" : "white"}
          size={14}
        />
      </DialogTrigger>
      <DialogContent
        className={clsx(
          "max-w-[389px] sm:max-w-[425px] rounded-lg",
          isDarkMode ? "" : "bg-black text-white"
        )}
      >
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit Card</DialogTitle>
            <DialogDescription className={isDarkMode ? "" : "text-gray-300"}>
              Make changes to this card here.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Front
              </Label>
              <Input
                {...register("front", {
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters are allowed",
                  },
                })}
                placeholder="Edit front side..."
                className={clsx("col-span-3", isDarkMode ? "" : "text-black")}
                defaultValue={front}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Back
              </Label>
              <Input
                {...register("back", {
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters are allowed",
                  },
                })}
                placeholder="Edit back side..."
                className={clsx("col-span-3", isDarkMode ? "" : "text-black")}
                defaultValue={back}
              />
            </div>
          </div>
          <DialogFooter className="">
            <DialogClose className="">
            <Button
              className="text-[13px] mx-1"
              variant={"destructive"}
              type="button"
              onClick={() => deleteCard(id)}
            >
              {isDelLoading ? (
                <ClipLoader
                  color="white"
                  loading={isDelLoading}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  className="my-3"
                />
              ) : (
                "Delete"
              )}
            </Button>
            <Button
             className="text-[13px] px-6" 
             variant={"secondary"}
             >
              {isLoading ? (
                <ClipLoader
                  color="white"
                  loading={isDelLoading}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  className="my-3"
                />
              ) : (
                "Edit"
              )}
            </Button>{" "}
            </DialogClose>

          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditCardModal;

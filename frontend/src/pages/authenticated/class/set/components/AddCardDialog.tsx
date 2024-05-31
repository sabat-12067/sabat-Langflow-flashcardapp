
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrAdd } from "react-icons/gr";
import {  Card } from "@/types";
import {
    useCreateStudySetCardsMutation,
} from "@/services/cards";
import { useParams } from 'react-router-dom';
import { toast } from "sonner";
import { useSelector } from "react-redux";
import clsx from "clsx";

  
interface AddCardDialog{
  onRefetch?: () => void;
}


const AddCardDialog = ({}:AddCardDialog) => {

  const params = useParams()
  const flashCardSetId = params.setId!.slice(1, params.classId?.length)
  const [createCard, { isLoading }] = useCreateStudySetCardsMutation();
  const {register,handleSubmit, reset, formState: { errors }} = useForm<any>();
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  const onSubmit: SubmitHandler<Card> = async (data) => {
    
    try {
      await createCard({ ...data, flashcard_set_id: flashCardSetId});
      toast("New card created!");
      localStorage.removeItem("Card length: ")
      reset();


    } catch (error) {
      console.error("Failed to create card:", error);
    }
  };
  

  
  return (
    <Dialog>
    <DialogTrigger asChild>
    <Button className="flex gap-1" variant={"outline"}>
            <span className="hidden md:block">
            Add card
            </span>
       <GrAdd size={15} />
    </Button>
    </DialogTrigger>
    <DialogContent className={clsx("max-w-[389px] sm:max-w-[425px] rounded-lg", isDarkMode ? "" : "bg-black text-white")}>
      <DialogTitle>Create a new card</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Front
              </Label>
              <Input
                {...register("front", {
                  required: "Front side is required",
                  maxLength: {
                    value: 300,
                    message: "Maximum 20 characters are allowed"
                  },
                  validate: value => value.trim().length > 0 || "Front side cannot be empty"
                })}
                placeholder={errors.front && "Front side is required"}
                id="name"
                className={clsx("col-span-3", errors.front ? "border-orange-700" : "", isDarkMode ? "" : "text-black")}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Back
              </Label>
              <Input
                {...register("back", {
                  required: "Back side is required",
                  maxLength: {
                    value: 300,
                    message: "Maximum 20 characters are allowed"
                  },
                  validate: value => value.trim().length > 0 || "Back side cannot be empty"
                })}
                placeholder={errors.back && "Back side is required"}
                id="username"
                className={clsx("col-span-3", errors.back ? "border-orange-700" : "", isDarkMode ? "" : "text-black")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              className="flex gap-2 w-[130px]"
              variant={"secondary"}
              type="submit"
            >
              {isLoading ? (
                <ClipLoader
                  color={"black"}
                  loading={isLoading}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  className="my-3"
                />
              ) : (
                "Add Card"
              )}
            </Button>
          </DialogFooter>
        </form>
    </DialogContent>

  </Dialog>
  )
}

export default AddCardDialog
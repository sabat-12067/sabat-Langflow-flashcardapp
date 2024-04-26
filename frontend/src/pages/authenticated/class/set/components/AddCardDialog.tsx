
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

  
interface AddCardDialog{
  onRefetch?: () => void;
}


const AddCardDialog = ({}:AddCardDialog) => {

  const params = useParams()
  const flashCardSetId = params.setId!.slice(1, params.classId?.length)
  const [createCard, { isLoading }] = useCreateStudySetCardsMutation();
  const {register,handleSubmit, reset, formState: { errors }} = useForm<any>();
  const onSubmit: SubmitHandler<Card> = async (data) => {
    try {
      await createCard({ ...data, flashcard_set_id: flashCardSetId});
      toast("New card created!");
      reset(); // This should be called after the createCard promise resolves
    } catch (error) {
      console.error("Failed to create card:", error);
    }
  };
  

  
  return (
    <Dialog>
    <DialogTrigger asChild>
    <Button className="flex gap-1" variant={"outline"}>
            Add card <GrAdd size={15} />
    </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogTitle>Create a new card</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Front
              </Label>
              <Input
                {...register("front", { required: true, maxLength: 20 })}
                placeholder={errors.front && "Front side is required"}
                id="name"
                className={errors.front ? "col-span-3 border-orange-700" : "col-span-3"}

              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Back
              </Label>
              <Input
                {...register("back", {
                  required: true,
                  maxLength: 20,
                })}
                placeholder={errors.back && "Back side is required"}
                id="username"
                className={errors.back ? "col-span-3 border-orange-700" : "col-span-3"}
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
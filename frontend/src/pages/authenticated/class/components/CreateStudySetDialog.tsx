
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
import {  StudySet } from "@/types";
import {
  useCreateStudySetMutation,
} from "@/services/cards";
import { useParams } from 'react-router-dom';
import { toast } from "sonner";
import { useSelector } from "react-redux";
import clsx from "clsx";

  
interface CreateStudySetDialog{
  onRefetch: () => void;
}


const CreateStudySetDialog = ({onRefetch}:CreateStudySetDialog) => {

  const params = useParams()
  const [createSet, { isLoading, error, data: response }] = useCreateStudySetMutation();
  const {register,handleSubmit,formState: { errors }, reset} = useForm<any>();
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);
  const onSubmit: SubmitHandler<StudySet> =async (data) => {
    try {
      await createSet({ ...data, user_id_or_study_class_id: params.classId!.slice(1, params.classId?.length) });
      toast("New study set created!");
      reset();  // Reset the form fields after successful submission
    } catch (error) {
      console.error("Failed to create study set:", error);
    }
  };

  return (
    <Dialog>
    <DialogTrigger asChild>
    <Button className="flex gap-1 p-2" variant={"secondary"}>
              <span className="text-[11px] md:text-sm">New Set</span>
              <GrAdd size={12} />
    </Button>
    </DialogTrigger>
    <DialogContent className={clsx("sm:max-w-[425px]", isDarkMode ? "" : "bg-black text-white")}>
      <DialogTitle>Create a new set</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="te xt-right">
                Name
              </Label>
              <Input
                {...register("name", { required: true, maxLength: 20 })}
                placeholder={errors.name && "Name is required"}
                id="name"
                className={clsx(errors.name ? "col-span-3 border-orange-700" : "col-span-3", isDarkMode ? "" : "text-black")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                {...register("description", {
                  required: false,
                  maxLength: 100,
                })}
                id="username"
                className={clsx(errors.name ? "col-span-3 border-orange-700" : "col-span-3", isDarkMode ? "" : "text-black")}
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
                "Save Classroom"
              )}
            </Button>
          </DialogFooter>
        </form>
    </DialogContent>

  </Dialog>
  )
}

export default CreateStudySetDialog
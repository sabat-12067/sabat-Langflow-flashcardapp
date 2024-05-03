import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";

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
import { FormFields } from "@/types";
import {
  useCreateClassroomMutation,
} from "@/services/cards";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export function CreateClassRoomDialog() {

  const user = useSelector((state: any) => state.auth.user);
  const {register,handleSubmit,formState: { errors }, reset} = useForm<FormFields>();
  const [createClassroom, { isLoading, error, data: response }] = useCreateClassroomMutation();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await createClassroom({ ...data, user_id_or_study_class_id: user.id });
      reset();
      toast('Classroom created!');  // Show toast only after request completion
    } catch (error) {
      console.error("Error creating classroom:", error);
    }
  };

  const navigate = useNavigate()

  useEffect(() => {
    if (error && "data" in error && error.data) {
      const errorData = error.data as { name: string[] };
      if (errorData.name && errorData.name.length > 0) {
        toast.error(errorData.name[0]);
      } else {
        toast.error("An unexpected error occurred.");
      }}
  }, [error]);

  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);
  if(response){
    localStorage.removeItem("Classroom: ")
    localStorage.setItem("Classroom: ", response.name)
    navigate(`/class/:${response.id}`)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-1" variant={"secondary"}>
          <span className="text-[12px] sm:text-md">New Classroom</span>
          <GrAdd size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent className={clsx("max-w-[390px] rounded-lg sm:max-w-[425px]", isDarkMode ? "" : "bg-black text-white")}>
        <DialogTitle>Create a new Classroom</DialogTitle>
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
                className={
                  clsx( errors.name ? "col-span-3 border-orange-700" : "col-span-3", isDarkMode ? "" : "text-black")
                }
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
                className={clsx("col-span-3", isDarkMode ? "" : "text-black")}
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
  );
}

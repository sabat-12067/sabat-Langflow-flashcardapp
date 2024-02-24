import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form"
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
import { FormFields } from "@/types";
import { useCreateClassroomMutation, useDeleteClassroomMutation } from "@/services/cards";
import { useSelector } from "react-redux";
import { DialogClose } from "@radix-ui/react-dialog";


export function CreateClassRoomDialog() {
  const user = useSelector((state: any) => state.auth.user);
  
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>()

  const [createClassroom, {isLoading}] = useCreateClassroomMutation()
  const [deleteClassroom] = useDeleteClassroomMutation()
  //const [updateClassroom] = useDeleteClassroomMutation()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    createClassroom({...data, user_id_or_study_class_id: user.id})
  }

  console.log(isLoading);
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-1" variant={"secondary"}>
          <span className="">New Classroom</span>
          <GrAdd size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Create a new Classroom</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input {...register("name", {required: true, maxLength: 20})}
            placeholder={errors.name && "Name is required"} 
            id="name" 
            className={errors.name ? "col-span-3 border-orange-700" : "col-span-3"} 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input {...register("description", {required:false, maxLength:100})} id="username" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button className="flex gap-2 w-[130px]" variant={"secondary"} type="submit">
            {
              isLoading ?
              <ClipLoader
              color={"black"}
              loading={isLoading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="my-3"
            />
               : "Save Classroom"
            }
          </Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

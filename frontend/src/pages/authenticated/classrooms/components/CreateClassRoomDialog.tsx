import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form"


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
import { useCreateClassroomMutation } from "@/services/cards";

export function CreateClassRoomDialog() {

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>()
  const onSubmit: SubmitHandler<FormFields> = handleSubmit((data) => {
    console.log(data);
    useCreateClassroomMutation(data)
  })

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
          <Button variant={"secondary"} type="submit">Save Classroom</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form"


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

export function CreateClassRoomDialog() {

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => console.log(data))

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
        <form onSubmit={onSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input {...register("name")} id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input {...register("description")} id="username" className="col-span-3" />
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

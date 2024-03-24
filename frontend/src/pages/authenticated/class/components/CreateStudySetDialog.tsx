import { FC } from 'react'

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
import {  StudySet } from "@/types";
import {
  useCreateClassroomMutation,
  useCreateStudySetMutation,
  useDeleteClassroomMutation,
} from "@/services/cards";
import { useParams } from 'react-router-dom';


interface CreateStudySetDialogProps {
  
}
const CreateStudySetDialog: FC<CreateStudySetDialogProps> = ({
  
}) => {


  const params = useParams()
  console.log(params.classId!.slice(1, params.classId?.length));
  

  const [createSet, { isLoading, error, data: response }] = useCreateStudySetMutation();
  const {register,handleSubmit,formState: { errors }} = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    createSet({ ...data, user_id_or_study_class_id: params.classId!.slice(1, params.classId?.length) });
  };



  return (
    <Dialog>
    <DialogTrigger asChild>
    <Button className="flex gap-1" variant={"secondary"}>
              <span className="">New Set</span>
              <GrAdd size={15} />
            </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
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
                className={
                  errors.name ? "col-span-3 border-orange-700" : "col-span-3"
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
                className="col-span-3"
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
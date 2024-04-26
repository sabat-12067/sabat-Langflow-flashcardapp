import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteClassroomMutation } from "@/services/cards";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ConfirmDeleteClassroomDialog = ({id}: {id: number}) => {
    const navigate = useNavigate()
    const [deleteClassroom, {isLoadingC}] = useDeleteClassroomMutation()
    console.log(id);
    
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="destructive"
          className="w-[350px]"
          //onClick={() => deleteClassroom(classRoomId)}
        >
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="h-36">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription 
          className="text-gray-300">
            This action cannot be undone. This will permanently delete this classroom.
          </DialogDescription>
        </DialogHeader>
        <Button 
        className="w-fit fixed right-8 bottom-4" 
        variant={"destructive"}
        onClick={() => {
            deleteClassroom(id)
            navigate("/cards")
            toast("Classroom deleted!")
        }}
        >
            Delete
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteClassroomDialog;

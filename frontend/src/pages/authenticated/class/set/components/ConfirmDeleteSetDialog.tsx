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
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";

const ConfirmDeleteSetDialog = ({id}: {id: string}) => {
    const navigate = useNavigate()
    const [deleteClassroom, {isLoading}] = useDeleteClassroomMutation()

    
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
          className="">
            This action cannot be undone. This will permanently delete this classroom.
          </DialogDescription>
        </DialogHeader>
        <Button 
    className="w-fit fixed right-8 bottom-4" 
    variant="destructive"
    onClick={async () => {
        await deleteClassroom(id);  // Ensure deletion completes
        navigate("/cards");
        toast("Classroom deleted!");
    }}
>
    {isLoading ? (
        <ClipLoader
            color="white"
            loading={isLoading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="my-3"
        />
    ) : (
        "Delete"
    )}
</Button>

      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteSetDialog;

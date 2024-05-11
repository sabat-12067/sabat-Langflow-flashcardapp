import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteClassroomMutation, useDeleteStudySetMutation } from "@/services/cards";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";

const ConfirmDeleteSetDialog = ({id}: {id: string}) => {
    const navigate = useNavigate()
    const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);
    const [deleteSet, {isLoading}] = useDeleteStudySetMutation()
    const currentClassroomIdParams = useParams()
    const currentClassRoomId = currentClassroomIdParams?.classId?.slice(1, currentClassroomIdParams.classId?.length);
    
    
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
      <DialogContent 
      className={clsx("h-36", isDarkMode ? "" : "bg-black text-white")}
      >
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription 
          className={clsx(isDarkMode ? "" : "text-gray-300")}>
          
            This action cannot be undone. This will permanently delete this study set.
          </DialogDescription>
        </DialogHeader>
        <Button 
    className="w-fit fixed right-8 bottom-4" 
    variant="destructive"
    onClick={async () => {
        await deleteSet(id);  // Ensure deletion completes
        navigate(`/class/:${currentClassRoomId}`);
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

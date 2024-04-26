import { CiEdit } from "react-icons/ci";
import { TbSettingsPin } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { ImCheckmark2 } from "react-icons/im";
import { ImCancelCircle } from "react-icons/im";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useEditClassroomMutation } from "@/services/cards";
import { toast } from "sonner";

interface SettingsSheet {
  classId: string;
  onChange: (name: string) => void
}
export enum ErrorState {
  FALSE = 'false',
  TRUE = 'true',
  SHORT = 'short',
}

export function RoomSettingsSheet({classId, onChange }: SettingsSheet) {
  const [errorState, setErrorState] = useState<ErrorState>(ErrorState.FALSE);
  const [edit, setEdit] = useState(false)
  const [roomTitle, setRoomTitle] = useState(localStorage.getItem("Set"))
  const [classroomName, setClassroomName] = useState("");
  const [editCard, { isLoading, error, data: response }] = useEditClassroomMutation();


  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex gap-1">
          <span className="hidden md:block">Settings</span>
          <TbSettingsPin size={18} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6 md:px-0 py-12">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-xl flex justify-between">
              {edit ? (
                <div className="flex flex-col gap-4">
                  <Input
                    className="bg-black text-white cursor-pointer hover:bg-gray-900 w-fit text-md font-light"
                    placeholder="Type new name here....."
                    value={classroomName}
                    onChange={(e) => {
                      if (e.target.value.length <= 15) {
                        setClassroomName(e.target.value);
                      }
                    }}
                  />
                  {classroomName.length > 14 && (
                    <p className="text-orange-400 font-thin">
                      15 characters max
                    </p>
                  )}
                  {errorState === "short" && (
                    <p className="text-orange-400 font-thin">
                      Please type a name
                    </p>
                  )}
                </div>
              ) : (
                <h1 className="text-2xl font-light">{roomTitle} Settings</h1>
              )}
              {!edit ? (
                <button
                  className="mt-2"
                  onClick={() => {
                    setEdit(true)
                  }}
                >
                  <CiEdit size={22} />
                </button>
              ) : (
                <div className="flex gap-2 mt-2">
                  <button
                    className="my-auto"
                    onClick={() => {
                      if(classroomName.length > 0){
                        editCard({
                          name: classroomName,
                          description: "",
                          id: classId,
                        });
                        setClassroomName("");
                        toast("Name updated!");
                        setClassroomName(classroomName)
                        setEdit(false)
                        onChange(classroomName)
                      }else{
                        setErrorState(ErrorState.SHORT)
                      }
     
                    }}
                  >
                    <ImCheckmark2 size={20} />
                  </button>
                  <button>
                    <ImCancelCircle size={20} onClick={() => setEdit(false)} />
                  </button>
                </div>
              )}
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-14 py-10 ml-4">
            <div className="flex justify-between">
              <p>Shuffle Mode</p>
              <Switch></Switch>
            </div>
          </div>
          <DrawerFooter className="pt-10">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

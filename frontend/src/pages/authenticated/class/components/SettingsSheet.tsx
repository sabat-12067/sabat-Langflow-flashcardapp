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
import {useEditClassroomMutation } from "@/services/cards";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import ConfirmDeleteClassroomDialog from "./ConfirmDeleteClassroomDialog";
import clsx from "clsx";
import { useSelector } from "react-redux";

interface SettingsSheet {
  classId: string;
  onChange: (name: string) => void
}
export enum ErrorState {
  FALSE = 'false',
  TRUE = 'true',
  SHORT = 'short',
}
export function SettingsSheet({classId, onChange }: SettingsSheet) {
  const [errorState, setErrorState] = useState<ErrorState>(ErrorState.FALSE);
  const [edit, setEdit] = useState(false)
  const [currentClassroomName, setcurrentClassroomName] = useState(localStorage.getItem("Classroom: "))
  const [classroomName, setClassroomName] = useState("");
  const [editCard, { isLoading, error, data: response }] = useEditClassroomMutation();
  const params = useParams()
  const classRoomId = params.classId!.slice(1, params.classId!.length)
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button 
        className="flex gap-1"
        >
          <TbSettingsPin size={21} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className={clsx("p-6 md:px-0 py-12 h-full", isDarkMode ? "" : "bg-black text-white")}>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-xl flex justify-between">
              {edit ? (
                <div className="flex flex-col gap-4">
                  <Input
                    className={clsx("cursor-pointer w-[300px] text-sm font-light", isDarkMode ? "" : "text-black", errorState === 'short' && 'border-red-500 border-s border-[1px]')}
                    placeholder={errorState === "short" ? "Name is required!" : "Type new name here....."}
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
         
                </div>
              ) : (
                <p className="text-2xl font-light">{currentClassroomName} Settings</p>
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
                <div className="flex gap-2">
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
                        setcurrentClassroomName(classroomName)
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
                    <ImCancelCircle size={20} onClick={() => {
                      setEdit(false)
                      setErrorState(ErrorState.FALSE)
                      } }
                      />
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
            <div className="flex justify-between">
              <p>Shuffle Mode</p>
              <Switch></Switch>
            </div>
            <div className="flex justify-between">
              <p>Shuffle Mode</p>
              <Switch></Switch>
            </div>
            <div className="flex justify-between">
              <p>Shuffle Mode</p>
              <Switch></Switch>
            </div>
          </div>
          <DrawerFooter className="pt-10">
            <DrawerClose asChild>
              <Button className={!isDarkMode && "text-black"} variant="outline">Close</Button>
            </DrawerClose>
            <ConfirmDeleteClassroomDialog id={classRoomId}/>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

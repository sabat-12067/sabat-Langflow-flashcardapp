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

interface SettingsSheet {
  title: string;
}

export function SettingsSheet({ title }: SettingsSheet) {
  const [edit, setEdit] = useState(false);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex gap-1">
          Settings
          <TbSettingsPin size={18} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6 md:px-0 py-12">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-xl flex justify-between">
              {edit ? (
                <Input
                  className="bg-black text-white cursor-pointer hover:bg-gray-900 w-fit text-xl font-light"
                  placeholder="Type new name here..."
                />
              ) : (
                <h1 className="text-2xl font-light">{title}</h1>
              )}
              {!edit ? (
                <button className="mt-2" onClick={() => setEdit(true)}>
                  <CiEdit size={22} />
                </button>
              ) : (
                <div className="flex gap-2 mt-2">
                  <button className="my-auto" >
                    <ImCheckmark2 size={18} />
                  </button>
                  <button>
                  <ImCancelCircle size={18} onClick={() => setEdit(false)}/>
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
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

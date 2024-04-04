import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { TbSettingsPin } from "react-icons/tb"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Switch } from "@/components/ui/switch"

interface SettingsSheet {
  title: string
}

export function SettingsSheet({title}: SettingsSheet) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex gap-1">
          Settings
          <TbSettingsPin size={18} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="py-10">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title} Settings</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-14 py-10">
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
  )
}

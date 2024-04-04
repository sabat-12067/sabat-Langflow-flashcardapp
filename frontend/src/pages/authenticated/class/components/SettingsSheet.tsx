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
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title} Settings</DrawerTitle>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

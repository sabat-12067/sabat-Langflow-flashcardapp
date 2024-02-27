
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { TbSettingsPin } from "react-icons/tb"
  


const SettingsSheet  = ({
  
}) => {
  return (
<Sheet>
  <SheetTrigger>
  <Button className="flex gap-1">
              <span className="">
                {localStorage.getItem("Classroom: ")} Settings
              </span>
              <TbSettingsPin size={18} />
            </Button>
  </SheetTrigger>
  <SheetContent>
    <div className="text-center">
        <h1 className="">
            Your are in Hindi's Classroom
        </h1>
    </div>
  </SheetContent>
</Sheet>
  )
}

export default SettingsSheet
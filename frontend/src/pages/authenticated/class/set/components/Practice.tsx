import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { FC } from 'react'
import { PiCards } from 'react-icons/pi'
interface PracticeProps {
  
}
const Practice: FC<PracticeProps> = ({
  
}) => {
  return (
    <Drawer>
        <DrawerTrigger>
        <Button className="flex gap-1 mb-8" variant={"outline"}>
              <span className="hidden md:block">Practice</span>
              <PiCards size={17} />
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    Title
                </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
                Footer
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
  )
}

export default Practice
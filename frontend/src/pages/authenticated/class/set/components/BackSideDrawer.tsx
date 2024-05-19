import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { FC } from 'react'
interface BackSideDrawerProps {
    front: string
    back: string
}   
const BackSideDrawer: FC<BackSideDrawerProps> = ({
    front, back
}) => {
  return (
    <Dialog>
        <DialogTrigger
        onClick={(e) => e.stopPropagation()}
        >
            {front}
        </DialogTrigger>
        <DialogContent className='border-none'>
            <p className='text-2xl mx-auto text-white mb-[100px]'>{back}</p>
        </DialogContent>
    </Dialog>
  )
}

export default BackSideDrawer
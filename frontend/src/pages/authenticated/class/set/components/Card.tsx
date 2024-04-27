import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { CiMenuKebab } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";


import { FC } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
interface CardProps {
  front: string
  back: string
}
const Card: FC<CardProps> = ({
  front, back
}) => {
  return (
    <div className='border-[1px] solid white py-5 flex flex-col h-[90px] w-[90px] md:h-[120px] md:w-[120px] gap-2 m-4 relative'>
      <div className='absolute right-2 top-2'>
      <DropdownMenu>
  <DropdownMenuTrigger>
  <CiMenuKebab className='' color='white' size={18}/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='bg-black px-4 py-4 rounded-lg w-46 space-y-2 h-[180px]'>
    <DropdownMenuSeparator />
    <form className='flex flex-col gap-4'>
      <Input placeholder='Edit front side...'/>
      <Input placeholder='Edit back side...'/>
      <div className='flex gap-1 fixed right-2 bottom-2'>
        <Button className='text-[11px]' variant={"destructive"}>
          Delete Card
        </Button>
        <Button className='text-[11px]' variant={"secondary"}>
          Save
        </Button>
      </div>
    </form>

  </DropdownMenuContent>
</DropdownMenu>
      </div>

      <p className='text-xl md:text-2xl mx-auto'>{front}</p>
      <p className='font-light mx-auto'>{back}</p>
    </div>
  )
}

export default Card
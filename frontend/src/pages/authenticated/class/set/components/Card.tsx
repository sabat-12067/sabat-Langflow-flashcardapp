import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { CiMenuKebab } from "react-icons/ci";

import { FC } from 'react'
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
  <CiMenuKebab size={18}/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='bg-black p-4 rounded-lg'>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem>
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      </div>

      <p className='text-xl md:text-2xl mx-auto'>{front}</p>
      <p className='font-light mx-auto'>{back}</p>
    </div>
  )
}

export default Card
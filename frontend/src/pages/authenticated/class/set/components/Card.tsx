import { FC } from 'react'
interface CardProps {
  front: string
  back: string
}
const Card: FC<CardProps> = ({
  front, back
}) => {
  return (
    <div className='border-[1px] solid white py-5 flex flex-col h-[90px] w-[90px] md:h-[120px] md:w-[120px] gap-2 m-4'>
      <p className='text-xl md:text-2xl mx-auto'>{front}</p>
      <p className='font-light mx-auto'>{back}</p>
    </div>
  )
}

export default Card
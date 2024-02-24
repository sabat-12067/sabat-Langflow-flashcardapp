import { Button } from '@/components/ui/button'
import { useDeleteClassroomMutation } from '@/services/cards'
import { FC } from 'react'
interface StudyGroupsProps {
  title: string
  description: string
  id: number
}
const StudyGroups: FC<StudyGroupsProps> = ({
   title, description, id
}) => {

  const [deleteClassroom, {isLoading}] = useDeleteClassroomMutation()

  console.log(isLoading);
  

  return (
    <div className='flex flex-col m-4 my-12 border-white border-2 border-s p-4 rounded-lg gap-6 w-64 h-48 relative'>
      <h2 className='text-2xl'>{title}</h2>
      <p className='text-sm'>{description ? description : ""}</p>
      <Button className='w-fit mx-auto absolute bottom-4 left-0 right-0' variant={"secondary"}>Launch {title}</Button>
      <Button 
      onClick={() => deleteClassroom(id)}>
        Del
      </Button> 
    </div>
  )
}

export default StudyGroups
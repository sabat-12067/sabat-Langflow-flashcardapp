import { Button } from '@/components/ui/button'
import { useDeleteClassroomMutation } from '@/services/cards'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
interface StudyGroupsProps {
  title: string
  description: string
  id: number
}
const StudyGroups: FC<StudyGroupsProps> = ({
   title, description, id
}) => {

  const [deleteClassroom, {isLoading}] = useDeleteClassroomMutation()
  const navigate = useNavigate()
  


  return (
    <div className='flex flex-col m-4 my-12 border-white border-2 border-s p-4 rounded-lg gap-6 w-64 h-48 relative'>
      <h2 className='text-2xl'>{title}</h2>
      <p className='text-sm'>{description ? description : ""}</p>
      <Button 
      className='w-fit mx-auto absolute bottom-4 left-0 right-0' 
      variant={"secondary"}
      onClick={() => {
        navigate(`/class/:${id}`)
        if(localStorage.getItem("Classroom: ")){
          localStorage.removeItem("Classroom: ")
        }
        localStorage.setItem("Classroom: ", title)
      }}
      >
        Launch {title}
      </Button>
    </div>
  )
}

export default StudyGroups
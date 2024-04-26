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
    <div className='py-5 flex flex-col h-[150px] w-[120px] md:h-[200px] md:w-[200px] m-2 justify-between border-s border-[1px] p-6'>
      <div>
      <h2 className='text-2xl'>{title}</h2>
      <p className='text-sm'>{description ? description : ""}</p>
      </div>
      <Button 
      className='w-fit mx-auto' 
      variant={"secondary"}
      onClick={() => {
        navigate(`/class/:${id}`)
        if(localStorage.getItem("Classroom: ")){
          localStorage.removeItem("Classroom: ")
        }
        localStorage.setItem("Classroom: ", title)
      }}
      >
        Launch 
        <span className='hidden md:block'>
        {title}
          </span>
      </Button>
    </div>
  )
}

export default StudyGroups
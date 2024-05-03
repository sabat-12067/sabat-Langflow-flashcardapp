import { Button } from '@/components/ui/button'
import { useDeleteClassroomMutation } from '@/services/cards'
import clsx from 'clsx'
import { FC } from 'react'
import { useSelector } from 'react-redux'
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
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);



  return (
    <div
     className={clsx('py-4 flex flex-col h-[150px] w-[110px] md:h-[170px] md:w-[170px] justify-between rounded-md md:p-6',
      isDarkMode ? "border-s border-[1px] border-black" : "border-s border-[1px] border-white")}
     >
      <div>
      <h2 className='text-xl md:text-2xl'>{title}</h2>
      <p className='text-sm'>{description ? description : ""}</p>
      </div>
      <Button 
      className='w-fit mx-auto text-[12px] p-3 md:text-md' 
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
      </Button>
    </div>
  )
}

export default StudyGroups
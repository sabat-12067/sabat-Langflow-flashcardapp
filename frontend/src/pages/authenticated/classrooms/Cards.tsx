
import { useGetClassroomsQuery } from '@/services/cards';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import StudyGroups from './components/StudyGroups';
import { CreateClassRoomDialog } from './components/CreateClassRoomDialog';


const Cards= () => {
  const user = useSelector((state: any) => state.auth.user);
  const { data, error, isLoading } = useGetClassroomsQuery(user.id, {
    refetchOnMountOrArgChange: true,

  })
  console.log(data);
  return (
    <div className='text-center'>
           <Navbar />
           <div className='max-w-[65%] mx-auto'>
            <div className='flex justify-between'>
            <h1 className='text-2xl'>My Classrooms</h1>
              <CreateClassRoomDialog />
            </div>
            <div className='flex flex-row justify-center'>
              {data?.map((studyGroup, i) => {
                return (
                  <StudyGroups key={i} title={studyGroup.name} description={studyGroup.description}/>
                )
              })}
            </div>
           </div>
    </div>
  )
}

export default Cards

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useGetClassroomsQuery } from '@/services/cards';
import { useSelector } from 'react-redux';
import StudyGroups from './components/StudyGroups';


//http://127.0.0.1:8000/

const Cards= () => {
  

  const user = useSelector((state: any) => state.auth.user);
  const { data, error, isLoading } = useGetClassroomsQuery(user.id)

  console.log(data);



  
  return (
    <div className=' text-center'>
           <Navbar />
           <div className=''>
            <h1 className='text-2xl'>My Classrooms</h1>
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
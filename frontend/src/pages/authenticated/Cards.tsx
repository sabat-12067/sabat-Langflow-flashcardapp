
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useGetClassroomsQuery } from '@/services/cards';
import { useSelector } from 'react-redux';


//http://127.0.0.1:8000/

const Cards= () => {
  

  const user = useSelector((state: any) => state.auth.user);
  const { data, error, isLoading } = useGetClassroomsQuery(user.id)

  console.log(data);


  
  
  return (
    <div className=' text-center'>
           <Navbar />
           <div className=''>
            <h1>My Study Groups</h1>
           </div>
    </div>
  )
}

export default Cards
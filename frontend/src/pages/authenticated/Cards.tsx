
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useGetClassroomsQuery } from '@/services/cards';


//http://127.0.0.1:8000/

const Cards= () => {
  

  const { data, error, isLoading } = useGetClassroomsQuery('2')

  console.log(data);


  
  
  return (
    <div className=' text-center'>
           <Navbar />
           <div className='py-60'>

           </div>
    </div>
  )
}

export default Cards
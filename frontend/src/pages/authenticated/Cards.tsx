import { useNavigate } from 'react-router-dom'
import { supabase } from '../../libs/supabase'
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';


//http://127.0.0.1:8000/

const Cards= () => {
  
  const navigate = useNavigate()
  const user = useSelector((state: any) => state.auth.user)
  console.log(user);

  
  
  return (
    <div className=' text-center'>
           <Navbar />
           <div className='py-60'>

           </div>
    </div>
  )
}

export default Cards
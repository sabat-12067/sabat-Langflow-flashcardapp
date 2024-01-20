
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../libs/supabase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../state/authSlice';



const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const usere = useSelector((state: any) => state.auth.user)
  console.log(usere);

  useEffect(() => {
    async function getUserData(){
      await supabase.auth.getUser().then((v) => {
        if(v.data?.user){
          dispatch(setUser(v.data?.user))
          navigate("/cards")
          
        }else{
          navigate("/")
        }
      })
    }
    getUserData()
  }, [])

   

  return (
    <div className='py-80 max-w-[300px] mx-auto'>
      <Auth
       supabaseClient={supabase}
       theme='dark'
       providers={["google"]}
       />

    </div>
  )
}

export default SignIn
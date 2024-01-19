
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../libs/supabase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const SignIn = () => {
  const navigate = useNavigate()
  useEffect(() => {
    async function getUserData(){
      await supabase.auth.getUser().then((v) => {
        if(v.data?.user){
          console.log(v.data.user);
          console.log("authenticated");
          navigate("/cards")
          
        }else{
          console.log("not authenticated");
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
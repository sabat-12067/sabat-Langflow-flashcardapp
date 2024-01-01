
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

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/")
  };

   

  return (
    <div className='py-80'>
      <Auth
       supabaseClient={supabase}
       theme='dark'
       providers={["google"]}
       />

<button onClick={() => handleSignOut()}>Sign Out</button>

    </div>
  )
}

export default SignIn
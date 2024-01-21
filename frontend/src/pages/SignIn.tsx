
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../libs/supabase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../state/authSlice';
import {ThemeSupa} from '@supabase/auth-ui-shared'



const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

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


  const customTheme = {
    default: {
      colors: {
        brandButtonText: 'white',
        defaultButtonBackground: 'black',
        defaultButtonBackgroundHover: '#3e3e3e',
        //..
      },
    }
  }
   

  return (
    <div className='py-80 max-w-[300px] mx-auto'>
<Auth
        supabaseClient={supabase}
        providers={['google']}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#22c55e'
              }
            }
          },
          className: {
            button: 'button',
            label: "label"
          }
        }}
        theme="dark"
      />

    </div>
  )
}

export default SignIn
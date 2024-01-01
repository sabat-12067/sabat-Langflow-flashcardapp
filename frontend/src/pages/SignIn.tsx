import { FC, useEffect } from 'react'
import { supabase } from '../libs/supabase';
import { useNavigate } from 'react-router-dom';
import { handleSignIn, handleSignOut } from '../libs/auth';


interface SignInProps {
  
}
const SignIn: FC<SignInProps> = ({
  
}) => {

  return (
    <div className='flex flex-col gap-20'>
      <button onClick={handleSignIn}>Sign in with Google</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default SignIn
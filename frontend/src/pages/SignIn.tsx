import { FC } from 'react'
import { supabase } from '../libs/supabase';

interface SignInProps {
  
}
const SignIn: FC<SignInProps> = ({
  
}) => {

  const handleSignIn = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'google'
    });

    if (error) console.error('Error signing in:', error);
    else console.log('Successfully signed in:', data, error);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      console.log('Successfully signed out');
    }
  };


  return (
    <div className='flex flex-col gap-20'>
      <button onClick={handleSignIn}>Sign in with Google</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default SignIn
import { useNavigate } from 'react-router-dom';
import { supabase } from '../libs/supabase';
import { useMutation } from '@tanstack/react-query';



export const handleSignIn = () => {
    const navigate = useNavigate();
    const {mutate: login, isPending} = useMutation({
        mutationFn: loginApi,
        onSuccess: () => {
            navigate("/cards")
        },
        onError: (err) => {
            console.log(err);
        }
    })
    return {login, isPending}
}

export const loginApi = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'google'
    },)

    if (error) console.error('Error signing in:', error);
    else{
      console.log('Successfully signed in:', data, error);
    } 
  };

export   const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      console.log('Successfully signed out');
    }
  };

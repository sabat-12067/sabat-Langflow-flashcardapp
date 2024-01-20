import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../libs/supabase'
import { useSelector, useDispatch } from 'react-redux';




const Cards= () => {


  const navigate = useNavigate()



    const user = useSelector((state: any) => state.auth.user)
    console.log(user);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/")
  };

  

  return (
    <div className='py-60 text-center'>
           <h1 className='text-3xl'>Cards page</h1>
           <p>Hello {user?.user_metadata?.full_name}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Cards
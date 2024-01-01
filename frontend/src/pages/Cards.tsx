import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSignOut, supabase } from '../libs/supabase'
import { Auth } from '@supabase/auth-ui-react'



const Cards= () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<any>()

  useEffect(() => {
    async function getUserData(){
      await supabase.auth.getUser().then((v) => {
        if(v.data?.user){
          setUser(v.data.user)
        }else{

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
    <div className='py-60'>
           <h1>Cards page</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Cards
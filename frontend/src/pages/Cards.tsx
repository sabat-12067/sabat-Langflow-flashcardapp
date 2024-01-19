import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../libs/supabase'



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

  console.log(user);
  

  return (
    <div className='py-60 text-center'>
           <h1 className='text-3xl'>Cards page</h1>
           <p>Hello {user?.user_metadata?.full_name}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Cards
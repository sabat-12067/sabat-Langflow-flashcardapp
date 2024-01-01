import { FC } from 'react'
interface AppProps {
  
}
const App: FC<AppProps> = ({
  
}) => {

  console.log(import.meta.env.VITE_SUPABASE_URL);
  
  return (
    <div>
      App
    </div>
  )
}

export default App
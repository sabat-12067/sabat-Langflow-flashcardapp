import { FC } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Cards from './pages/Cards'

interface AppProps {
  
}
const App: FC<AppProps> = ({
  
}) => {

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SignIn />}>
      <Route index element={<Cards />}/>
    </Route>
  )
 )
  
  return (
    <div className='text-center py-40'>
      <button>
        Log in with google
      </button>
    </div>
  )
}

export default App
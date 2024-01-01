import { FC } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Cards from './pages/Cards'
import SignIn from './pages/SignIn'

interface AppProps {
  
}
const App: FC<AppProps> = ({
  
}) => {

 const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element={<SignIn />} />
    <Route path="/cards" element={<Cards />} />
  </>
  )
 )
  
  return (
    <div className='text-center py-40'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
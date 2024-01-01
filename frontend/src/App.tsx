import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cards from './pages/Cards'
import SignIn from './pages/SignIn'


const App = () => {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<SignIn />}/>
          <Route path='/cards' element={<Cards />}/>
       </Routes>
    </Router>
  )
}

export default App
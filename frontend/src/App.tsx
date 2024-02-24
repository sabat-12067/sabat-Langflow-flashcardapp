import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cards from './pages/authenticated/classrooms/Cards'
import SignIn from './pages/signin/SignIn'
import Class from './pages/authenticated/class/components/Class'


const App = () => {
  return (
    <Router>
       <Routes>
          <Route path='class/:classId' element={<Class />}/>
          <Route path='/' element={<SignIn />}/>
          <Route path='/cards' element={<Cards />}/>
       </Routes>
    </Router>
  )
}

export default App
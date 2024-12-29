import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import LoginFormWrapper from './components/LoginFormWrapper'
import ProtectedRoute from './components/ProtectedRoute'



const App=()=>{
  return(
    <BrowserRouter>
  <Routes>
    <Route path="/login" element={<LoginFormWrapper/>}/>
    <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
    <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>} />
    <Route path="*" element={<NotFound/>} />

  </Routes>
  </BrowserRouter>
  )
}

export default App
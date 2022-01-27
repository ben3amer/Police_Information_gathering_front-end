import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navigation from './components/navigation/navigation'
import Search from './components/search/search'
import Login from './components/login/login'
import AddInfraction from './components/addInfraction/addInfraction'
import AuthContext from './store/auth-context'

function App() {
  const { isLoggedIn } = useContext(AuthContext)
  console.log(isLoggedIn)
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/createInfraction' element={<AddInfraction />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AllUser from './components/AllUser'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import TechnicalAbhi from './components/TechnicalAbhi'

function App() {

  return (
    <>
    <Router>
    <Navbar />
      
      <Routes>

        <Route path="/" element={<TechnicalAbhi/>} />
        <Route path="/all" element={<AllUser/>} />
        <Route path="/add" element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>

    </Router>
    </>
  )
}

export default App

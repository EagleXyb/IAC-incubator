import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Assessment from './pages/Assessment'
import Admin from './pages/Admin'
import TestConfig from './pages/TestConfig'
import Profile from './pages/Profile'
import BasicAssessment from './pages/BasicAssessment'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test-config" element={<TestConfig />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/basic-assessment" element={<BasicAssessment />} />
      </Routes>
    </Router>


  )
}

export default App

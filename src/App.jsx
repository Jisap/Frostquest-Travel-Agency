import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Index from './Components/Page'


function App() {

  const location = useLocation()

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  )
}

export default App

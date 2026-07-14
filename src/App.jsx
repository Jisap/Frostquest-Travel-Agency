import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Index from './Components/Page'
import About from './Components/Page/About'
import Footer from './Components/Footer/Footer'
import Tours from './Components/Page/Tour'


function App() {

  const location = useLocation()

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tours />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  )
}

export default App

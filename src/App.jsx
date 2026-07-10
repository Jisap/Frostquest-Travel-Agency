import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Index from './Components/Page'
import About from './Components/Page/About'
import Footer from './Components/Footer/Footer'


function App() {

  const location = useLocation()

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  )
}

export default App

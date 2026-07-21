import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Index from './Components/Page'
import About from './Components/Page/About'
import Footer from './Components/Footer/Footer'
import Tours from './Components/Page/Tour'
import ToursDetails from './Components/Page/Tours-Details'
import Blog from './Components/Page/Blog'
import BlogDetails from './Components/Page/BlogDetails'
import Contact from './Components/Page/Contact'
import Destination from './Components/Page/Destination'


function App() {

  const location = useLocation()

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tours />} />
        <Route path="/tour-details/:id" element={<ToursDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  )
}

export default App

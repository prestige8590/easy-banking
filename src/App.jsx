import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App

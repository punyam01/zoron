import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ContactPage from './pages/Contact'
import Footer from './components/Footer'
import AboutPage from './pages/AboutUs'

export default function App() {
  useEffect(() => {
    const lenis = new (Lenis as any)()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="bg-background min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/aboutus" element={<AboutPage/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

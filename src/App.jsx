import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Navbar       from './components/Navbar'
import Footer       from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Home         from './pages/Home'
import About        from './pages/About'
import WhatsOn      from './pages/WhatsOn'
import FoodDrink    from './pages/FoodDrink'
import Functions    from './pages/Functions'
import Contact      from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/"           element={<Home />}      />
          <Route path="/about"      element={<About />}     />
          <Route path="/whats-on"   element={<WhatsOn />}   />
          <Route path="/food-drink" element={<FoodDrink />} />
          <Route path="/functions"  element={<Functions />} />
          <Route path="/contact"    element={<Contact />}   />
          <Route path="*"           element={<NotFound />}  />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: 'var(--ivory)', paddingTop: '6rem' }}
    >
      <p className="font-display text-8xl font-bold mb-4" style={{ color: 'var(--green-deep)' }}>404</p>
      <h1 className="font-display text-3xl font-bold mb-4" style={{ color: 'var(--charcoal)' }}>Page not found</h1>
      <p className="font-body mb-8" style={{ color: 'var(--stone)' }}>
        Looks like this round&apos;s gone missing. Let&apos;s get you back to the bar.
      </p>
      <a href="/" className="btn btn-amber">Back to Home</a>
    </div>
  )
}

export default function App() {
  // Show loader only on first visit per session
  const [loading, setLoading] = useState(() => {
    if (typeof sessionStorage === 'undefined') return false
    return !sessionStorage.getItem('mid-yoken-visited')
  })

  const handleLoaderComplete = useCallback(() => {
    sessionStorage.setItem('mid-yoken-visited', '1')
    setLoading(false)
  }, [])

  return (
    <HelmetProvider>
      {/* Loading screen — sits above everything, slides up on complete */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen key="loader" onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      <BrowserRouter>
        <ScrollToTop />
        {/* Site content — always mounted so hero video can preload */}
        <div
          className="flex flex-col min-h-screen"
          style={loading ? { visibility: 'hidden' } : {}}
        >
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

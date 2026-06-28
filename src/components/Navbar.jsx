import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/',           label: 'Home'       },
  { to: '/about',      label: 'About'      },
  { to: '/whats-on',   label: "What's On"  },
  { to: '/food-drink', label: 'Food & Drink'},
  { to: '/functions',  label: 'Functions'  },
  { to: '/contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Only the homepage has a dark video hero — all other pages use light backgrounds
  const isHome = location.pathname === '/'
  // Show solid green background if scrolled OR if not on the home page
  const solid = scrolled || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? 'nav-glass backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
        style={solid ? { backgroundColor: 'rgba(28,56,41,0.96)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group" aria-label="The Mid Yoken — Home">
            <span
              className="font-display text-xl tracking-tight transition-opacity duration-200 group-hover:opacity-80"
              style={{ fontWeight: 700, color: solid ? 'var(--cream)' : 'var(--cream)' }}
            >
              The Mid Yoken
            </span>
            <span className="font-body text-amber-warm text-xs tracking-widest uppercase mt-0.5">
              Bar &amp; Lounge · Edinburgh
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-body text-sm tracking-wide transition-colors duration-200 relative group ${
                    isActive
                      ? 'text-amber-warm'
                      : 'text-cream hover:text-amber-gold'
                  }`
                }
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-amber-warm scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </NavLink>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:01313393190"
              className="hidden sm:inline-flex btn btn-amber text-xs"
              aria-label="Call to book: 0131 339 3190"
            >
              <PhoneIcon /> Call to Book
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 text-cream"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col pt-24 pb-10 px-8"
            style={{ backgroundColor: 'rgba(28,56,41,0.98)', backdropFilter: 'blur(12px)' }}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block font-display text-3xl py-3 border-b border-white/10 transition-colors ${
                        isActive ? 'text-amber-warm' : 'text-cream hover:text-amber-gold'
                      }`
                    }
                    style={{ fontStyle: 'italic' }}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <a href="tel:01313393190" className="btn btn-amber w-full justify-center">
                <PhoneIcon /> 0131 339 3190
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576868380497"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cream-outline w-full justify-center"
              >
                Find us on Facebook
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

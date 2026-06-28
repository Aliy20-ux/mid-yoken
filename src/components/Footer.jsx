import { Link } from 'react-router-dom'

const hours = [
  { day: 'Monday',    time: '1pm – 11pm' },
  { day: 'Tuesday',   time: '1pm – 11pm' },
  { day: 'Wednesday', time: '1pm – 11pm' },
  { day: 'Thursday',  time: '1pm – 11pm' },
  { day: 'Friday',    time: '1pm – 1am'  },
  { day: 'Saturday',  time: '1pm – 1am'  },
  { day: 'Sunday',    time: '1pm – 1am'  },
]

const nav = [
  { to: '/',           label: 'Home'        },
  { to: '/about',      label: 'About Us'    },
  { to: '/whats-on',   label: "What's On"   },
  { to: '/food-drink', label: 'Food & Drink' },
  { to: '/functions',  label: 'Functions'   },
  { to: '/contact',    label: 'Contact'     },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const todayIndex = new Date().getDay() // 0=Sun
  // Reorder so Monday is first
  const orderedHours = [...hours.slice(0, 7)] // already Mon-Sun order defined above

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--charcoal)' }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Top amber line */}
      <div className="h-1" style={{ background: 'linear-gradient(to right, var(--amber-warm), var(--amber-gold), var(--amber-warm))' }} />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-6" aria-label="The Mid Yoken Home">
            <p className="font-display text-2xl text-cream font-bold">The Mid Yoken</p>
            <p className="font-body text-xs text-amber-warm tracking-widest uppercase mt-1">Bar &amp; Lounge · Edinburgh</p>
          </Link>
          <p className="font-body text-stone text-sm leading-relaxed mb-6">
            Your community local in East Craigs, Edinburgh. Under new ownership — bringing good times, warm welcome, and the spirit of the neighbourhood back together.
          </p>
          {/* Social */}
          <a
            href="https://www.facebook.com/profile.php?id=61576868380497"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-body text-cream/70 hover:text-amber-warm transition-colors duration-200"
            aria-label="Follow The Mid Yoken on Facebook"
          >
            <FacebookIcon />
            <span>Follow us on Facebook</span>
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-body text-xs text-amber-warm tracking-widest uppercase mb-6">Explore</h3>
          <ul className="space-y-3">
            {nav.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="font-body text-sm text-stone hover:text-cream transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening hours */}
        <div>
          <h3 className="font-body text-xs text-amber-warm tracking-widest uppercase mb-6">Opening Hours</h3>
          <ul className="space-y-2">
            {orderedHours.map(({ day, time }, i) => {
              // todayIndex 0=Sun→6 in our array order; Mon=0
              const todayInOrder = todayIndex === 0 ? 6 : todayIndex - 1
              const isToday = i === todayInOrder
              return (
                <li key={day} className={`flex justify-between text-sm font-body gap-4 ${isToday ? 'text-amber-gold font-bold' : 'text-stone'}`}>
                  <span>{day}{isToday && <span className="ml-1.5 text-xs text-amber-warm">(today)</span>}</span>
                  <span className="tabular-nums">{time}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Contact / Find us */}
        <div>
          <h3 className="font-body text-xs text-amber-warm tracking-widest uppercase mb-6">Find Us</h3>
          <address className="not-italic space-y-4">
            <p className="flex gap-3 text-sm text-stone font-body leading-snug">
              <PinIcon className="flex-shrink-0 mt-0.5" />
              <span>75 Craigmount Brae<br />East Craigs<br />Edinburgh EH12 8XF</span>
            </p>
            <a
              href="tel:01313393190"
              className="flex gap-3 text-sm text-stone hover:text-cream font-body transition-colors duration-200"
            >
              <PhoneIcon className="flex-shrink-0 mt-0.5" />
              <span>0131 339 3190</span>
            </a>
            <a
              href="https://maps.google.com/?q=75+Craigmount+Brae+Edinburgh+EH12+8XF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 text-sm text-stone hover:text-cream font-body transition-colors duration-200"
            >
              <MapIcon className="flex-shrink-0 mt-0.5" />
              <span>Get Directions</span>
            </a>
          </address>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2 text-xs text-stone font-body">
              <DotIcon className="text-green-light" /> Family friendly
            </div>
            <div className="flex items-center gap-2 text-xs text-stone font-body">
              <DotIcon className="text-green-light" /> Dog friendly
            </div>
            <div className="flex items-center gap-2 text-xs text-stone font-body">
              <DotIcon className="text-green-light" /> Free parking · Free WiFi
            </div>
            <div className="flex items-center gap-2 text-xs text-stone font-body">
              <DotIcon className="text-green-light" /> Disabled facilities
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-6"
        style={{ borderColor: 'rgba(138,127,112,0.2)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body text-stone">
          <p>© {year} The Mid Yoken Bar &amp; Lounge. All rights reserved.</p>
          <p className="text-center">
            75 Craigmount Brae, East Craigs, Edinburgh EH12 8XF ·{' '}
            <a href="tel:01313393190" className="hover:text-cream transition-colors">0131 339 3190</a>
          </p>
          <p>Please drink responsibly.</p>
        </div>
      </div>
    </footer>
  )
}

/* ── SVG Icons ── */
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}
function PinIcon({ className = '' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function PhoneIcon({ className = '' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}
function MapIcon({ className = '' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
    </svg>
  )
}
function DotIcon({ className = '' }) {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="4" cy="4" r="3"/>
    </svg>
  )
}

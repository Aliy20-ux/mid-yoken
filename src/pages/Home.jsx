import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import { useOpenStatus } from '../hooks/useOpenStatus'

const highlights = [
  {
    icon: <SportIcon />,
    title: 'Live Sport',
    body: 'Sky Sports & TNT Sports on big screens. Football, rugby, racing, cricket — every big match, every week.',
  },
  {
    icon: <MusicIcon />,
    title: 'Live Entertainment',
    body: 'Live music, DJ nights, karaoke, quiz nights — something on every week. Check What\'s On for dates.',
  },
  {
    icon: <GardenIcon />,
    title: 'Beer Garden',
    body: 'Sun\'s out? Our outdoor space is the best seat in East Craigs. Dog friendly, naturally.',
  },
  {
    icon: <FoodIcon />,
    title: 'Home-Made Food',
    body: 'Proper pub food made with care. Home-made pies and hearty classics — fuel for the match.',
  },
]

const whatsOnPreview = [
  { category: 'Sport',      title: 'Live Football & Rugby',        note: 'Every weekend on the big screen'     },
  { category: 'Weekly',     title: 'Quiz Night',                   note: '📅 Date — coming soon'              },
  { category: 'Weekly',     title: 'Karaoke Night',                note: '📅 Date — coming soon'              },
  { category: 'Monthly',    title: 'Live Music',                   note: '📅 Dates — coming soon'             },
  { category: 'DJ Night',   title: 'DJ in the Lounge',             note: '📅 Date — coming soon'              },
]

export default function Home() {
  const isOpen = useOpenStatus()
  const prefersReduced = useReducedMotion()

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end overflow-hidden grain-overlay"
        aria-label="Hero"
      >
        {/* Background video */}
        <motion.div
          className="absolute inset-0 hero-placeholder"
          style={prefersReduced ? {} : { y: heroY }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
            preload="auto"
          >
            <source src="/images/hero.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(26,25,24,0.92) 0%, rgba(26,25,24,0.5) 40%, rgba(26,25,24,0.15) 70%, rgba(26,25,24,0.3) 100%)',
            }}
          />
        </motion.div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 md:pb-28"
          style={prefersReduced ? {} : { opacity: heroOpacity }}
        >
          {/* Open / Closed badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2"
          >
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-bold tracking-widest uppercase ${
                isOpen
                  ? 'bg-green-mid text-cream'
                  : 'bg-charcoal/80 text-stone border border-stone/30'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-amber-gold animate-pulse' : 'bg-stone'}`} />
              {isOpen ? 'Open Now' : 'Closed — Opens 1pm'}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              className="font-display text-display-xl text-cream font-bold"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Your Local,
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="font-display text-display-xl font-bold italic"
              style={{ color: 'var(--amber-gold)' }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              Brought Back Alive.
            </motion.h1>
          </div>

          {/* Sub */}
          <motion.p
            className="font-body text-cream/80 text-lg max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            The Mid Yoken — East Craigs' community bar &amp; lounge. Live sport, great drinks,
            home-made food, and a proper welcome for everyone. Family &amp; dog friendly.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            <a href="tel:01313393190" className="btn btn-amber">
              <PhoneIcon /> Call to Book
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576868380497"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cream-outline"
            >
              <FacebookIcon /> Find us on Facebook
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="font-body text-xs text-cream/40 tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-amber-warm/50"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </section>

      {/* ── FACTS STRIP ────────────────────────────────────────── */}
      <section
        className="py-5 overflow-hidden"
        style={{ background: 'var(--green-deep)' }}
        aria-label="Quick facts"
      >
        <div className="flex flex-wrap justify-center divide-x divide-white/10 text-center">
          {['4.3★ Google Rating', '103 Reviews', '~110 Capacity', 'Guinness Accredited', 'Est. East Craigs'].map(fact => (
            <span key={fact} className="px-6 py-2 font-body text-xs text-cream/70 tracking-widest uppercase">
              {fact}
            </span>
          ))}
        </div>
      </section>

      {/* ── HIGHLIGHTS ──────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-14 text-center">
            <span className="amber-rule mx-auto" />
            <h2 className="font-display text-display-md font-bold" style={{ color: 'var(--green-deep)' }}>
              Everything a local should be.
            </h2>
            <p className="font-body mt-4 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--stone)' }}>
              Sport, food, entertainment, and a warm welcome — all under one roof in the heart of East Craigs.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {highlights.map(({ icon, title, body }) => (
              <RevealItem key={title}>
                <div
                  className="highlight-card rounded-sm p-8 h-full flex flex-col gap-4 cursor-default"
                  style={{ background: 'var(--cream)', borderTop: '3px solid var(--amber-warm)' }}
                >
                  <span className="text-amber-warm w-10 h-10 flex items-center justify-center rounded-sm" style={{ background: 'rgba(196,137,42,0.12)' }}>
                    {icon}
                  </span>
                  <h3 className="font-display text-xl font-bold" style={{ color: 'var(--green-deep)' }}>{title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--stone)' }}>{body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── SPLIT SECTION — About taster ────────────────────────── */}
      <section className="section-pad overflow-hidden" style={{ background: 'var(--green-deep)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="fadeLeft">
            <span className="amber-rule" />
            <p className="font-display text-xs text-amber-warm tracking-widest uppercase mb-4 font-semibold">Est. East Craigs · Edinburgh</p>
            <h2 className="font-display text-display-md text-cream font-bold mb-6">
              "The middle place to yoke the horses."
            </h2>
            <p className="font-body text-cream/70 leading-relaxed mb-4">
              The name Mid Yoken marks the site of an old steading that once stood amid the open farmland and pasture of East Craigs — a stopping point, a meeting place, a breath before the journey continued.
            </p>
            <p className="font-body text-cream/70 leading-relaxed mb-8">
              That spirit lives on. Under new ownership, The Mid Yoken is here to bring the community together — a warm, welcoming anchor in the heart of the neighbourhood.
            </p>
            <Link to="/about" className="btn btn-amber">
              Our Story
            </Link>
          </Reveal>

          <Reveal variant="fadeRight" className="grid grid-cols-2 gap-4">
            {/* Stat cards */}
            {[
              { num: '4.3★', label: 'Google Rating' },
              { num: '103', label: 'Happy Reviews' },
              { num: '~110', label: 'Capacity' },
              { num: '6', label: 'Days a Week' },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="p-6 rounded-sm text-center"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <p className="font-display text-3xl text-amber-gold font-bold mb-1">{num}</p>
                <p className="font-body text-xs text-cream/60 tracking-wide uppercase">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── WHAT'S ON PREVIEW ───────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="amber-rule" />
              <h2 className="font-display text-display-md font-bold" style={{ color: 'var(--green-deep)' }}>
                What's On
              </h2>
            </div>
            <Link to="/whats-on" className="btn btn-green-outline self-start md:self-auto flex-shrink-0">
              Full Schedule →
            </Link>
          </Reveal>

          <RevealGroup stagger={0.08}>
            {whatsOnPreview.map(({ category, title, note }) => (
              <RevealItem key={title}>
                <div
                  className="flex flex-wrap items-center gap-4 py-5 border-b"
                  style={{ borderColor: 'rgba(138,127,112,0.25)' }}
                >
                  <span
                    className="font-body text-xs tracking-widest uppercase px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{ background: 'var(--green-deep)', color: 'var(--amber-gold)' }}
                  >
                    {category}
                  </span>
                  <span className="font-display text-xl font-semibold flex-1" style={{ color: 'var(--charcoal)' }}>
                    {title}
                  </span>
                  <span className="font-body text-sm" style={{ color: 'var(--stone)' }}>
                    {note}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── HOURS + LOCATION STRIP ──────────────────────────────── */}
      <section
        className="section-pad-sm"
        style={{ background: 'var(--charcoal)' }}
        aria-label="Opening hours and location"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <Reveal variant="fadeLeft">
            <h3 className="font-body text-xs text-amber-warm tracking-widest uppercase mb-6">Opening Hours</h3>
            <div className="space-y-2">
              {[
                { days: 'Monday – Thursday', hours: '1pm – 11pm' },
                { days: 'Friday – Saturday',  hours: '1pm – 1am'  },
                { days: 'Sunday',             hours: '1pm – 1am'  },
              ].map(({ days, hours }) => (
                <div key={days} className="flex justify-between font-body text-sm" style={{ color: 'var(--stone)' }}>
                  <span>{days}</span>
                  <span className="tabular-nums text-cream/80">{hours}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="fadeRight">
            <h3 className="font-body text-xs text-amber-warm tracking-widest uppercase mb-6">Find Us</h3>
            <address className="not-italic font-body text-sm leading-loose" style={{ color: 'var(--stone)' }}>
              75 Craigmount Brae<br />
              East Craigs, Edinburgh<br />
              EH12 8XF
            </address>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://maps.google.com/?q=75+Craigmount+Brae+Edinburgh+EH12+8XF"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amber"
              >
                Get Directions
              </a>
              <a href="tel:01313393190" className="btn btn-cream-outline">
                0131 339 3190
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BOTTOM CTA BANNER ───────────────────────────────────── */}
      <section
        className="py-24 text-center relative overflow-hidden grain-overlay"
        style={{ background: 'var(--amber-warm)' }}
        aria-label="Call to action"
      >
        <Reveal>
          <h2 className="font-display text-display-lg font-bold text-charcoal mb-4">
            The round's on us — come in and say hello.
          </h2>
          <p className="font-body text-charcoal/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether it's a quiet pint after work, a family dinner, or a big night out — The Mid Yoken is your place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01313393190" className="btn btn-green">
              <PhoneIcon /> Call 0131 339 3190
            </a>
            <Link to="/contact" className="btn btn-green-outline">
              Get Directions
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  )
}

/* ── SVG Icons ───── */
function SportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      <path d="M2 12h20"/>
    </svg>
  )
}
function MusicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  )
}
function GardenIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12M12 12C12 12 7 9 4 4c5 0 8 2 8 8M12 12c0 0 5-3 8-8-5 0-8 2-8 8"/>
    </svg>
  )
}
function FoodIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8h1a4 4 0 010 8h-1"/>
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}
function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}

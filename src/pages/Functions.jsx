import { Link } from 'react-router-dom'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'

const occasions = [
  { icon: <BirthdayIcon />,  title: 'Birthday Parties',   body: 'Mark the milestone in style. Exclusive use, decorating welcome, bar packages available on request.' },
  { icon: <FamilyIcon />,   title: 'Family Gatherings',   body: 'Christenings, anniversaries, reunions — a warm, welcoming space for everyone in the family.' },
  { icon: <WorkIcon />,     title: 'Work Events',          body: 'Christmas parties, leaving dos, team nights out. We can organise food, drinks packages and entertainment.' },
  { icon: <SportIcon />,    title: 'Match Screenings',     body: 'Book the function room for a private screening of the big game. Perfect for large groups.' },
  { icon: <WakeIcon />,     title: 'Wakes & Memorials',   body: 'A dignified, private space for a proper send-off. We\'ll take care of everything so you don\'t have to.' },
  { icon: <PartyIcon />,    title: 'Private Celebrations', body: 'Engagement parties, baby showers, retirements — whatever the occasion, we\'ve got the space.' },
]

const features = [
  { label: 'Capacity',        value: 'Up to ~110 guests'           },
  { label: 'Bar service',     value: 'Full bar available'          },
  { label: 'Beer garden',     value: 'Outdoor area available'      },
  { label: 'Entertainment',   value: 'Live music, DJ, karaoke'     },
  { label: 'Sport screens',   value: 'Sky & TNT Sports'            },
  { label: 'Catering',        value: 'Home-made food on request'   },
  { label: 'Parking',         value: 'Free on-site car park'       },
  { label: 'Accessibility',   value: 'Disabled facilities'         },
  { label: 'Enquiry',         value: 'Call or message — no fuss'  },
]

export default function Functions() {
  return (
    <main className="pt-24">

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden grain-overlay"
        style={{ background: 'var(--charcoal)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <span className="amber-rule mx-auto" />
            <p className="font-body text-xs text-amber-warm tracking-widest uppercase mb-4">Private Hire &amp; Events</p>
            <h1 className="font-display text-display-xl text-cream font-bold mb-6">
              Functions &amp; Celebrations
            </h1>
            <p className="font-body text-cream/70 text-lg leading-relaxed max-w-xl mx-auto">
              From intimate family gatherings to full-room celebrations — The Mid Yoken has the space, the bar, and the warmth to make your event one to remember.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="tel:01313393190" className="btn btn-amber">
                <PhoneIcon /> Call to Enquire
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576868380497"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cream-outline"
              >
                <FacebookIcon /> Message on Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CAPACITY HIGHLIGHT ────────────────────────────────── */}
      <section
        className="py-10"
        style={{ background: 'var(--amber-warm)' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-center">
          {[
            { num: '~110', label: 'Guests capacity' },
            { num: 'Full', label: 'Bar service' },
            { num: 'Free', label: 'Parking on site' },
            { num: '24h', label: 'Notice — no fuss' },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col items-center">
              <p className="font-display text-4xl font-bold text-charcoal">{num}</p>
              <p className="font-body text-xs tracking-widest uppercase text-charcoal/60 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OCCASIONS ─────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <span className="amber-rule mx-auto" />
            <h2 className="font-display text-display-md font-bold" style={{ color: 'var(--green-deep)' }}>
              Perfect for any occasion
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {occasions.map(({ icon, title, body }) => (
              <RevealItem key={title}>
                <div
                  className="highlight-card p-8 rounded-sm h-full flex flex-col gap-4"
                  style={{ background: 'var(--cream)', borderTop: '3px solid var(--amber-warm)' }}
                >
                  <span className="text-amber-warm">{icon}</span>
                  <h3 className="font-display text-xl font-bold" style={{ color: 'var(--green-deep)' }}>{title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--stone)' }}>{body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── VENUE FEATURES ────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--green-deep)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="fadeLeft">
            <span className="amber-rule" />
            <h2 className="font-display text-display-md text-cream font-bold mb-10">
              Everything included.
            </h2>
            <dl className="space-y-4">
              {features.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <dt className="font-body text-sm font-bold tracking-wide uppercase" style={{ color: 'var(--amber-warm)' }}>
                    {label}
                  </dt>
                  <dd className="font-body text-sm" style={{ color: 'var(--cream)', opacity: 0.8 }}>{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal variant="fadeRight" delay={0.15}>
            {/* Beer garden callout */}
            <div
              className="p-10 rounded-sm mb-6"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <span className="text-amber-warm mb-4 block"><GardenIcon /></span>
              <h3 className="font-display text-2xl text-cream font-bold mb-3">Beer garden available</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--cream)', opacity: 0.65 }}>
                When the Scottish sun cooperates, our outdoor beer garden is available as part of your function booking. Perfect for summer gatherings and overflow space.
              </p>
            </div>

            <div
              className="p-8 rounded-sm"
              style={{ background: 'rgba(196,137,42,0.15)', border: '1px solid rgba(196,137,42,0.25)' }}
            >
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--cream)', opacity: 0.8 }}>
                <strong className="text-amber-gold">How to book:</strong> Just give us a call or message us on Facebook with your date, expected numbers, and any requirements. We'll sort the rest — no complicated forms, no deposit drama.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ENQUIRY CTA ───────────────────────────────────────── */}
      <section
        className="py-24 text-center relative overflow-hidden grain-overlay"
        style={{ background: 'var(--amber-warm)' }}
      >
        <Reveal>
          <h2 className="font-display text-display-lg text-charcoal font-bold mb-4">
            Let's make your event happen.
          </h2>
          <p className="font-body text-charcoal/70 max-w-lg mx-auto mb-10 leading-relaxed">
            No booking fee to enquire. We're flexible, friendly, and here to make your event as easy as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01313393190" className="btn btn-green">
              <PhoneIcon /> Call 0131 339 3190
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576868380497"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green-outline"
            >
              <FacebookIcon /> Message on Facebook
            </a>
          </div>
          <p className="font-body text-sm text-charcoal/50 mt-6">
            Or come in and chat to us in person — we're at 75 Craigmount Brae, East Craigs, from 1pm daily.
          </p>
        </Reveal>
      </section>
    </main>
  )
}

/* ── SVG Icons ── */
function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
}
function FacebookIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
}
function BirthdayIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><line x1="2" y1="21" x2="22" y2="21"/><line x1="7" y1="8" x2="7" y2="3"/><path d="M5 3s1-1.5 2 0 2 0 2 0"/><line x1="17" y1="8" x2="17" y2="3"/><path d="M15 3s1-1.5 2 0 2 0 2 0"/><line x1="12" y1="8" x2="12" y2="3"/><path d="M10 3s1-1.5 2 0 2 0 2 0"/></svg>
}
function FamilyIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
}
function WorkIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
}
function SportIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
}
function WakeIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
}
function PartyIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
}
function GardenIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22V12M12 12C12 12 7 9 4 4c5 0 8 2 8 8M12 12c0 0 5-3 8-8-5 0-8 2-8 8"/></svg>
}

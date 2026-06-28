import { Link } from 'react-router-dom'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import { useOpenStatus } from '../hooks/useOpenStatus'

const hours = [
  { day: 'Monday',    open: '13:00', close: '23:00' },
  { day: 'Tuesday',   open: '13:00', close: '23:00' },
  { day: 'Wednesday', open: '13:00', close: '23:00' },
  { day: 'Thursday',  open: '13:00', close: '23:00' },
  { day: 'Friday',    open: '13:00', close: '01:00' },
  { day: 'Saturday',  open: '13:00', close: '01:00' },
  { day: 'Sunday',    open: '13:00', close: '01:00' },
]

function formatTime(t) {
  const [h, m] = t.split(':').map(Number)
  if (h === 0 || h > 12) return `${h === 0 ? 12 : h - (h > 12 ? 12 : 0)}:${String(m).padStart(2,'0')}${h < 12 ? 'am' : h < 24 ? 'pm' : 'am'}`
  return `${h}:${String(m).padStart(2,'0')}${h < 12 ? 'am' : 'pm'}`
}

function formatHours(open, close) {
  const closeH = parseInt(close)
  if (closeH <= 2) {
    const next = closeH === 1 ? '1am' : '2am'
    return `${formatTime(open)} – ${next}`
  }
  return `${formatTime(open)} – ${formatTime(close)}`
}

const todayDayIndex = new Date().getDay() // 0=Sun

export default function Contact() {
  const isOpen = useOpenStatus()

  return (
    <main className="pt-24">

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden grain-overlay"
        style={{ background: 'var(--green-deep)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <span className="amber-rule mx-auto" />
            <p className="font-body text-xs text-amber-warm tracking-widest uppercase mb-4">Find Us</p>
            <h1 className="font-display text-display-xl text-cream font-bold mb-4">
              Come and See Us
            </h1>
            {/* Live open/closed */}
            <div className="mt-2 inline-flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-bold ${
                  isOpen
                    ? 'bg-green-mid text-cream'
                    : 'bg-charcoal/60 text-stone border border-stone/30'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-amber-gold animate-pulse' : 'bg-stone'}`} />
                {isOpen ? 'We\'re open right now!' : 'Currently closed — open from 1pm'}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MAP + ADDRESS + HOURS ─────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Map embed */}
          <Reveal variant="fadeLeft" className="rounded-sm overflow-hidden shadow-lg">
            <iframe
              title="The Mid Yoken on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.5!2d-3.3084!3d55.9421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s75+Craigmount+Brae+Edinburgh+EH12+8XF!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.2) contrast(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing The Mid Yoken location at 75 Craigmount Brae, Edinburgh"
            />
          </Reveal>

          {/* Contact details */}
          <Reveal variant="fadeRight">
            <span className="amber-rule" />
            <h2 className="font-display text-display-md font-bold mb-8" style={{ color: 'var(--green-deep)' }}>
              Find us &amp; get in touch
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <span className="text-amber-warm flex-shrink-0 mt-1"><PinIcon /></span>
                <div>
                  <p className="font-body font-bold text-sm mb-1" style={{ color: 'var(--charcoal)' }}>Address</p>
                  <address className="not-italic font-body text-sm leading-relaxed" style={{ color: 'var(--stone)' }}>
                    75 Craigmount Brae<br />
                    East Craigs<br />
                    Edinburgh EH12 8XF
                  </address>
                  <a
                    href="https://maps.google.com/?q=75+Craigmount+Brae+Edinburgh+EH12+8XF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 font-body text-xs text-amber-warm hover:text-amber-gold transition-colors underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <span className="text-amber-warm flex-shrink-0 mt-1"><PhoneIcon /></span>
                <div>
                  <p className="font-body font-bold text-sm mb-1" style={{ color: 'var(--charcoal)' }}>Phone</p>
                  <a
                    href="tel:01313393190"
                    className="font-body text-sm transition-colors hover:text-amber-warm"
                    style={{ color: 'var(--stone)' }}
                  >
                    0131 339 3190
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex gap-4">
                <span className="text-amber-warm flex-shrink-0 mt-1"><FacebookIcon /></span>
                <div>
                  <p className="font-body font-bold text-sm mb-1" style={{ color: 'var(--charcoal)' }}>Social</p>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576868380497"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm transition-colors hover:text-amber-warm underline"
                    style={{ color: 'var(--stone)' }}
                  >
                    The Mid Yoken on Facebook
                  </a>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="tel:01313393190" className="btn btn-amber">
                  <PhoneIcon /> Call Us Now
                </a>
                <a
                  href="https://maps.google.com/?q=75+Craigmount+Brae+Edinburgh+EH12+8XF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-green"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOURS TABLE ───────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="amber-rule mx-auto" />
            <h2 className="font-display text-display-md font-bold" style={{ color: 'var(--green-deep)' }}>
              Opening Hours
            </h2>
          </Reveal>

          <Reveal>
            <div
              className="rounded-sm overflow-hidden"
              style={{ border: '1px solid rgba(138,127,112,0.2)' }}
            >
              {hours.map(({ day, open, close }, i) => {
                // todayDayIndex: 0=Sun. hours array is Mon[0]–Sun[6]
                const dayIndexInArray = i
                const todayInArray = todayDayIndex === 0 ? 6 : todayDayIndex - 1
                const isToday = dayIndexInArray === todayInArray

                return (
                  <div
                    key={day}
                    className={`flex justify-between items-center px-6 py-4 ${
                      i < hours.length - 1 ? 'border-b' : ''
                    } ${isToday ? 'bg-green-deep/5' : 'bg-ivory'}`}
                    style={{
                      borderColor: 'rgba(138,127,112,0.15)',
                      background: isToday ? 'rgba(28,56,41,0.06)' : undefined,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="font-body font-bold text-sm"
                        style={{ color: isToday ? 'var(--green-deep)' : 'var(--charcoal)' }}
                      >
                        {day}
                      </span>
                      {isToday && (
                        <span
                          className="font-body text-xs px-2 py-0.5 rounded-full font-bold"
                          style={{
                            background: isOpen ? 'var(--green-deep)' : 'rgba(138,127,112,0.15)',
                            color: isOpen ? 'var(--amber-gold)' : 'var(--stone)',
                          }}
                        >
                          {isOpen ? '● Open now' : 'Closed now'}
                        </span>
                      )}
                    </div>
                    <span
                      className="font-body text-sm tabular-nums"
                      style={{ color: isToday ? 'var(--green-deep)' : 'var(--stone)' }}
                    >
                      {formatHours(open, close)}
                    </span>
                  </div>
                )
              })}
            </div>

            <p className="font-body text-xs text-center mt-4" style={{ color: 'var(--stone)' }}>
              Hours may vary on bank holidays and special occasions. Call to confirm: <a href="tel:01313393190" className="underline hover:text-amber-warm transition-colors">0131 339 3190</a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PARKING & ACCESSIBILITY ───────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--green-deep)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="amber-rule mx-auto" />
            <h2 className="font-display text-display-md text-cream font-bold">
              Getting here &amp; accessibility
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {[
              { icon: <CarIcon />,  title: 'Free Parking',  body: 'Free on-site car park available for all customers.' },
              { icon: <WheelIcon />, title: 'Disabled Access', body: 'Fully accessible venue with disabled facilities and level access.' },
              { icon: <WifiIcon />, title: 'Free WiFi',      body: 'Complimentary WiFi throughout the pub — ask staff for the password.' },
              { icon: <DogIcon />,  title: 'Dog Friendly',   body: 'Well-behaved dogs welcome in all areas. Water bowl always available.' },
            ].map(({ icon, title, body }) => (
              <RevealItem key={title}>
                <div
                  className="highlight-card p-8 rounded-sm flex flex-col gap-4 h-full"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <span className="text-amber-warm">{icon}</span>
                  <h3 className="font-display text-lg text-cream font-bold">{title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--cream)', opacity: 0.65 }}>{body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section
        className="py-20 text-center"
        style={{ background: 'var(--amber-warm)' }}
      >
        <Reveal>
          <h2 className="font-display text-display-md text-charcoal font-bold mb-4">
            We'll see you soon.
          </h2>
          <p className="font-body text-charcoal/70 max-w-lg mx-auto mb-10 leading-relaxed">
            Whatever brings you in — we're ready. The door's open from 1pm.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01313393190" className="btn btn-green">
              <PhoneIcon /> 0131 339 3190
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576868380497"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green-outline"
            >
              <FacebookIcon /> Facebook
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  )
}

/* ── SVG Icons ── */
function PinIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> }
function PhoneIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> }
function FacebookIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> }
function CarIcon() { return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2"/><circle cx="9" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M3 9h18"/></svg> }
function WheelIcon() { return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="1"/><path d="M9.5 6.5L8 12l2 4"/><path d="M14.5 6.5L16 12l-2 4"/><path d="M8 16l4 2 4-2"/><path d="M8 16l2 5"/><path d="M16 16l-2 5"/></svg> }
function WifiIcon() { return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg> }
function DogIcon() { return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2 .336-3.5 2.088-3.5 4 0 .478.08.944.22 1.395.217.678.064 1.352-.25 1.96L2 11l1 1 1.48-.62A5.5 5.5 0 007 12h4a5.5 5.5 0 002.52-.62L15 12l1-1-.97-.645c-.314-.608-.467-1.282-.25-1.96.14-.451.22-.917.22-1.395 0-1.476-.89-2.727-2.19-3.261"/><path d="M14 12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6"/></svg> }

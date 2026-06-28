import { Link } from 'react-router-dom'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'

const sportFixtures = [
  { competition: 'Premier League', note: 'Every match day — Sky Sports' },
  { competition: 'Scottish Premiership', note: 'Hearts, Hibs, Celtic, Rangers & more' },
  { competition: 'Champions League / Europa', note: 'TNT Sports — all the big nights' },
  { competition: 'Six Nations Rugby', note: 'Scotland & all the home nations' },
  { competition: 'Horse Racing', note: 'All the big meetings on the screens' },
  { competition: 'Cricket', note: 'Test matches & T20 — big screen' },
]

const entertainment = [
  {
    icon: <MicIcon />,
    title: 'Quiz Night',
    frequency: 'Weekly',
    detail: '📅 Night & time coming soon — follow Facebook for updates',
    action: 'Register your team',
  },
  {
    icon: <SingIcon />,
    title: 'Karaoke Night',
    frequency: 'Weekly',
    detail: '📅 Night & time coming soon — follow Facebook for updates',
    action: null,
  },
  {
    icon: <MusicNoteIcon />,
    title: 'Live Music',
    frequency: 'Monthly',
    detail: '📅 Dates & artists coming soon — follow Facebook for updates',
    action: null,
  },
  {
    icon: <DJIcon />,
    title: 'DJ Night',
    frequency: 'Monthly',
    detail: '📅 Dates coming soon — follow Facebook for updates',
    action: null,
  },
]

export default function WhatsOn() {
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
            <p className="font-body text-xs text-amber-warm tracking-widest uppercase mb-4">Events &amp; Entertainment</p>
            <h1 className="font-display text-display-xl text-cream font-bold mb-6">
              What's On
            </h1>
            <p className="font-body text-cream/70 text-lg leading-relaxed max-w-xl mx-auto">
              Sport, music, quiz nights, karaoke — there's always something on at The Mid Yoken.
              Follow us on Facebook to stay up to date.
            </p>
            <div className="mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=61576868380497"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amber"
              >
                <FacebookIcon /> Follow on Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LIVE SPORT ────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-12">
            <span className="amber-rule" />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-body text-xs text-amber-warm tracking-widest uppercase mb-2">Sky Sports &amp; TNT Sports</p>
                <h2 className="font-display text-display-md font-bold" style={{ color: 'var(--green-deep)' }}>
                  Live Sport on the Big Screen
                </h2>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-body font-bold tracking-widest uppercase"
                style={{ background: 'var(--green-deep)', color: 'var(--amber-gold)' }}
              >
                <span className="w-2 h-2 rounded-full bg-amber-gold animate-pulse" />
                Showing Live
              </div>
            </div>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
            {sportFixtures.map(({ competition, note }) => (
              <RevealItem key={competition}>
                <div
                  className="highlight-card p-6 rounded-sm flex gap-4 items-start"
                  style={{ background: 'var(--cream)', borderLeft: '3px solid var(--amber-warm)' }}
                >
                  <TvIcon />
                  <div>
                    <p className="font-body font-bold text-sm mb-1" style={{ color: 'var(--charcoal)' }}>{competition}</p>
                    <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--stone)' }}>{note}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.3} className="mt-8 p-5 rounded-sm text-sm font-body" style={{ background: 'rgba(28,56,41,0.07)', color: 'var(--stone)' }}>
            ℹ️ Fixtures and kick-off times are subject to broadcaster scheduling. Call us on{' '}
            <a href="tel:01313393190" className="underline hover:text-amber-warm transition-colors">0131 339 3190</a>{' '}
            to confirm a specific match is showing.
          </Reveal>
        </div>
      </section>

      {/* ── ENTERTAINMENT ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--green-deep)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-14 text-center">
            <span className="amber-rule mx-auto" />
            <h2 className="font-display text-display-md text-cream font-bold">
              Entertainment &amp; Events
            </h2>
            <p className="font-body text-cream/60 mt-4 max-w-lg mx-auto leading-relaxed">
              We're building the weekly programme now. Follow us on Facebook for schedule announcements — more events coming very soon.
            </p>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {entertainment.map(({ icon, title, frequency, detail, action }) => (
              <RevealItem key={title}>
                <div
                  className="highlight-card p-8 rounded-sm h-full flex flex-col gap-4"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <span className="text-amber-warm">{icon}</span>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--amber-warm)' }}>{frequency}</p>
                    <h3 className="font-display text-xl text-cream font-bold">{title}</h3>
                  </div>
                  <p className="font-body text-sm leading-relaxed flex-1" style={{ color: 'var(--cream)', opacity: 0.55 }}>
                    {detail}
                  </p>
                  {action && (
                    <a
                      href="tel:01313393190"
                      className="font-body text-xs text-amber-warm hover:text-amber-gold transition-colors underline"
                    >
                      {action} →
                    </a>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── POOL & DARTS ──────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="fadeLeft">
            <span className="amber-rule" />
            <h2 className="font-display text-display-md font-bold mb-6" style={{ color: 'var(--green-deep)' }}>
              Games &amp; Pool Table
            </h2>
            <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--stone)' }}>
              Fancy a frame? We have a pool table and darts board available — perfect for a casual game between friends or a more competitive evening.
            </p>
            <p className="font-body leading-relaxed mb-8" style={{ color: 'var(--stone)' }}>
              Whether you're a seasoned player or just looking to pass the time, our games area is open to all.
            </p>
            <a href="tel:01313393190" className="btn btn-green">
              Call to Check Availability
            </a>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-4" stagger={0.1}>
            {[
              { icon: <PoolIcon />, label: 'Pool Table' },
              { icon: <DartsIcon />, label: 'Darts Board' },
              { icon: <TvIcon />, label: 'Big Screens' },
              { icon: <WifiIcon />, label: 'Free WiFi' },
            ].map(({ icon, label }) => (
              <RevealItem key={label}>
                <div
                  className="p-6 rounded-sm text-center flex flex-col items-center gap-3 highlight-card"
                  style={{ background: 'var(--ivory)' }}
                >
                  <span className="text-amber-warm">{icon}</span>
                  <p className="font-body text-sm font-bold" style={{ color: 'var(--charcoal)' }}>{label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── PRIVATE EVENTS TEASER ─────────────────────────────── */}
      <section
        className="py-20 text-center grain-overlay relative overflow-hidden"
        style={{ background: 'var(--amber-warm)' }}
      >
        <Reveal>
          <h2 className="font-display text-display-md text-charcoal font-bold mb-4">
            Booking a private event?
          </h2>
          <p className="font-body text-charcoal/70 max-w-lg mx-auto mb-10 leading-relaxed">
            We have a function room available for private parties, corporate events, and celebrations. Capacity for up to ~110 guests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/functions" className="btn btn-green">
              Functions &amp; Private Hire
            </Link>
            <a href="tel:01313393190" className="btn btn-green-outline">
              0131 339 3190
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  )
}

/* ── SVG Icons ── */
function FacebookIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
}
function TvIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
}
function MicIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
}
function SingIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="2"/><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M12 8v8m-4-4h8"/></svg>
}
function MusicNoteIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
}
function DJIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/></svg>
}
function PoolIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="14" r="2"/><circle cx="16" cy="10" r="2"/><path d="M4 20l14-14"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>
}
function DartsIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><line x1="22" y1="2" x2="12" y2="12"/><line x1="22" y1="2" x2="22" y2="8"/><line x1="22" y1="2" x2="16" y2="2"/></svg>
}
function WifiIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
}

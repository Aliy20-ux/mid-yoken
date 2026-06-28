import { Link } from 'react-router-dom'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'

const values = [
  {
    icon: <HeartIcon />,
    title: 'Community first',
    body: 'We are here for the neighbourhood. From after-school pick-ups to Friday lock-ins, every member of the community is welcome here.',
  },
  {
    icon: <DogIcon />,
    title: 'Dog & family friendly',
    body: 'Four legs, two legs, small legs — all welcome. We have space, warmth, and patience for the whole family.',
  },
  {
    icon: <PintIcon />,
    title: 'Quality drinks',
    body: 'Cask ales, craft beers, ciders, wines, spirits — and Guinness Quality Accredited. We take our pint seriously.',
  },
  {
    icon: <HomeIcon />,
    title: 'Home-made food',
    body: 'Proper pub food made in-house. Home-made pies and hearty classics. Nothing pretentious — just good, filling, delicious.',
  },
]

const amenities = [
  'Beer garden & outdoor seating',
  'Car park (free)',
  'Free WiFi',
  'Disabled facilities',
  'Pool table',
  'Darts',
  'Function room',
  'Live sport — Sky & TNT Sports',
]

export default function About() {
  return (
    <main className="pt-24">

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden grain-overlay"
        style={{ background: 'var(--green-deep)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <span className="amber-rule mx-auto" />
            <p className="font-body text-xs text-amber-warm tracking-widest uppercase mb-4">Our Story</p>
            <h1 className="font-display text-display-xl text-cream font-bold mb-6">
              The Middle Place.
            </h1>
            <p className="font-body text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
              A name rooted in the land. A pub rooted in the community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── HERITAGE STORY ────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          <Reveal variant="fadeLeft">
            <span className="amber-rule" />
            <h2 className="font-display text-display-md font-bold mb-6" style={{ color: 'var(--green-deep)' }}>
              "Mid Yoken" — what does it mean?
            </h2>
            <div className="space-y-5 font-body leading-relaxed" style={{ color: 'var(--stone)' }}>
              <p>
                Long before the housing scheme spread across East Craigs, this land was open farmland and pasture — rolling fields worked by the hands and horses of those who made their living from the earth.
              </p>
              <p>
                <strong className="text-charcoal">A "yoke"</strong> was the harness that joined horse to plough. A working day was divided into yokes — periods of labour between breaks. And the <em>Mid Yoken</em>? That was the halfway point. The middle place to stop, to rest, to let the horses breathe.
              </p>
              <p>
                It was a place of pause. A place where neighbours met. A place that marked the ground beneath your feet as somewhere worth stopping.
              </p>
              <p>
                The old steading is long gone — the fields now streets, the pasture now garden walls and school runs. But the spirit of that stopping place endures. The Mid Yoken is still a middle place. Still a meeting place. Still somewhere worth stopping.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fadeRight" delay={0.15}>
            {/* Quote card */}
            <blockquote
              className="relative p-10 rounded-sm"
              style={{ background: 'var(--cream)', borderLeft: '4px solid var(--amber-warm)' }}
            >
              <p
                className="font-display text-2xl italic leading-snug mb-6"
                style={{ color: 'var(--green-deep)' }}
              >
                "A stopping place, a meeting place, a breath before the journey continued."
              </p>
              <footer className="font-body text-xs tracking-widest uppercase" style={{ color: 'var(--amber-warm)' }}>
                The Heritage of Mid Yoken
              </footer>
            </blockquote>

            {/* Heritage tag */}
            <div
              className="mt-6 p-6 rounded-sm flex gap-4 items-start"
              style={{ background: 'var(--cream)' }}
            >
              <span className="text-amber-warm flex-shrink-0 mt-1"><MapPinIcon /></span>
              <div>
                <p className="font-body font-bold text-sm mb-1" style={{ color: 'var(--charcoal)' }}>
                  75 Craigmount Brae, East Craigs
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--stone)' }}>
                  The site of one of Edinburgh's old farm steadings — now, once again, a gathering place for the community.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NEW OWNERSHIP ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--green-deep)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="amber-rule mx-auto" />
            <h2 className="font-display text-display-md text-cream font-bold mb-8">
              New ownership, same soul.
            </h2>
            <div className="space-y-5 font-body leading-relaxed text-cream/70 text-lg max-w-2xl mx-auto">
              <p>
                Under new ownership, The Mid Yoken has reopened with one simple purpose: to give East Craigs a pub it can be proud of again.
              </p>
              <p>
                A place to watch the match. A place for a midweek pint. A place to bring the kids and the dog. A place where everyone knows they're welcome — and means it.
              </p>
              <p>
                We're working hard to earn our place as the community's local. We hope you'll give us the chance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES GRID ───────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <span className="amber-rule mx-auto" />
            <h2 className="font-display text-display-md font-bold" style={{ color: 'var(--green-deep)' }}>
              What we stand for.
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {values.map(({ icon, title, body }) => (
              <RevealItem key={title}>
                <div
                  className="highlight-card p-8 rounded-sm h-full flex flex-col gap-4"
                  style={{ background: 'var(--cream)', borderTop: '3px solid var(--amber-warm)' }}
                >
                  <span className="text-amber-warm" style={{ width: 36, height: 36 }}>{icon}</span>
                  <h3 className="font-display text-lg font-bold" style={{ color: 'var(--green-deep)' }}>{title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--stone)' }}>{body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── AMENITIES ─────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="fadeLeft">
            <span className="amber-rule" />
            <h2 className="font-display text-display-md font-bold mb-8" style={{ color: 'var(--green-deep)' }}>
              Everything you need, all in one place.
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {amenities.map(a => (
                <li key={a} className="flex items-center gap-3 font-body text-sm" style={{ color: 'var(--charcoal)' }}>
                  <CheckIcon />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fadeRight" delay={0.15} className="relative h-80 rounded-sm overflow-hidden hero-placeholder">
            <img
              src="/images/interior.jpg"
              alt="The Mid Yoken interior — welcoming and warm"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
            {/* [PLACEHOLDER — replace with real interior photo] */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-body text-xs text-cream/40 tracking-widest uppercase text-center">
                Photo coming soon
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section
        className="py-20 text-center"
        style={{ background: 'var(--amber-warm)' }}
      >
        <Reveal>
          <h2 className="font-display text-display-md text-charcoal font-bold mb-4">
            Come and see for yourself.
          </h2>
          <p className="font-body text-charcoal/70 max-w-lg mx-auto mb-10 leading-relaxed">
            We're open from 1pm every day. Drop in, say hello, and let us show you what we're about.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-green">Find Us</Link>
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
function HeartIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
}
function DogIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2 .336-3.5 2.088-3.5 4 0 .478.08.944.22 1.395.217.678.064 1.352-.25 1.96L2 11l1 1 1.48-.62A5.5 5.5 0 007 12h4a5.5 5.5 0 002.52-.62L15 12l1-1-.97-.645c-.314-.608-.467-1.282-.25-1.96.14-.451.22-.917.22-1.395 0-1.476-.89-2.727-2.19-3.261"/><path d="M14 12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6"/></svg>
}
function PintIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
}
function HomeIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
}
function MapPinIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
function CheckIcon() {
  return (
    <span style={{ width: 20, height: 20, background: 'var(--green-deep)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--amber-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
  )
}

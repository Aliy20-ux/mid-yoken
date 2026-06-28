import { Link } from 'react-router-dom'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'

/* ─── [PLACEHOLDER — replace with real menu items when finalised] ─── */
const foodMenu = [
  {
    category: 'Home-Made Pies',
    note: '[PLACEHOLDER — replace with real pie fillings and prices]',
    items: [
      { name: 'Steak & Ale Pie', desc: 'Slow-braised beef, rich ale gravy, shortcrust pastry. Served with mash and seasonal veg.', price: 'TBC' },
      { name: 'Chicken & Leek Pie', desc: 'Creamy chicken and leek filling in a golden puff pastry case. Served with chips.', price: 'TBC' },
      { name: 'Cheese & Onion Pie', desc: 'Classic vegetarian pie — mature cheddar, caramelised onion, puff pastry.', price: 'TBC' },
    ],
  },
  {
    category: 'Pub Classics',
    note: '[PLACEHOLDER — replace with real dishes and prices]',
    items: [
      { name: 'Battered Haddock & Chips', desc: 'Fresh haddock in light beer batter, hand-cut chips, mushy peas, tartare sauce.', price: 'TBC' },
      { name: 'Loaded Burger', desc: 'Beef patty, mature cheddar, house sauce, brioche bun. Served with fries.', price: 'TBC' },
      { name: 'Scampi & Chips', desc: 'Breaded scampi, thick-cut chips, garden peas, tartare sauce.', price: 'TBC' },
    ],
  },
  {
    category: 'Light Bites & Snacks',
    note: '[PLACEHOLDER — replace with real items and prices]',
    items: [
      { name: 'Soup of the Day', desc: 'Chef\'s homemade soup served with crusty bread and butter.', price: 'TBC' },
      { name: 'Toasted Sandwiches', desc: 'Ask at the bar for today\'s choices.', price: 'TBC' },
      { name: 'Nachos', desc: 'Tortilla chips, cheddar, salsa, sour cream, jalapeños.', price: 'TBC' },
    ],
  },
]

const drinksRange = [
  {
    category: 'Cask & Craft Ales',
    icon: <PintIcon />,
    items: ['Rotating cask ales — ask at the bar', 'Craft lagers & IPAs', 'Real ale range changes regularly'],
  },
  {
    category: 'Draught & Bottled',
    icon: <BeerIcon />,
    items: ['Guinness — Quality Accredited', 'Tennent\'s Lager', 'Selection of draught lagers', 'Bottled beers & ciders'],
  },
  {
    category: 'Wines & Spirits',
    icon: <WineIcon />,
    items: ['House red, white & rosé wines', 'Prosecco & sparkling', 'Full spirits range — gin, whisky, vodka, rum', 'Premium spirits on request'],
  },
  {
    category: 'Soft Drinks',
    icon: <SoftIcon />,
    items: ['Full soft drinks range', 'Juices & mixers', 'Hot drinks — tea & coffee', 'Alcohol-free options available'],
  },
]

export default function FoodDrink() {
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
            <p className="font-body text-xs text-amber-warm tracking-widest uppercase mb-4">Kitchen &amp; Bar</p>
            <h1 className="font-display text-display-xl text-cream font-bold mb-6">
              Food &amp; Drink
            </h1>
            <p className="font-body text-cream/70 text-lg leading-relaxed max-w-xl mx-auto">
              Home-made pies, hearty pub classics, and a proper bar — everything you need for a great evening.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOOD PLACEHOLDER NOTICE ───────────────────────────── */}
      <section className="py-6" style={{ background: 'var(--amber-warm)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-sm text-charcoal text-center">
            <strong>Our full menu is coming soon.</strong> The items below are indicative examples — call us on{' '}
            <a href="tel:01313393190" className="underline">0131 339 3190</a>{' '}
            to ask what's on today, or pop in and see the board.
            <span className="ml-2 text-xs opacity-70">[PLACEHOLDER — owner to replace with real menu]</span>
          </p>
        </div>
      </section>

      {/* ── FOOD MENU ─────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="mb-14 text-center">
            <span className="amber-rule mx-auto" />
            <h2 className="font-display text-display-md font-bold" style={{ color: 'var(--green-deep)' }}>
              Our Kitchen
            </h2>
            <p className="font-body mt-4 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--stone)' }}>
              Proper home-made pub food — made with care, not shortcuts. Our pies are the house speciality.
            </p>
          </Reveal>

          <div className="space-y-14">
            {foodMenu.map(({ category, note, items }) => (
              <Reveal key={category}>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--green-deep)' }}>
                    {category}
                  </h3>
                  <div className="flex-1 h-px" style={{ background: 'var(--amber-warm)', opacity: 0.3 }} />
                </div>
                <p className="font-body text-xs mb-6 italic" style={{ color: 'var(--stone)' }}>{note}</p>
                <div className="space-y-4">
                  {items.map(({ name, desc, price }) => (
                    <div
                      key={name}
                      className="flex gap-6 p-6 rounded-sm"
                      style={{ background: 'var(--cream)' }}
                    >
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h4 className="font-display font-bold text-lg" style={{ color: 'var(--charcoal)' }}>
                            {name}
                          </h4>
                          <span
                            className="font-body text-sm font-bold flex-shrink-0 px-3 py-1 rounded-full"
                            style={{ background: 'var(--green-deep)', color: 'var(--amber-gold)' }}
                          >
                            {price}
                          </span>
                        </div>
                        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--stone)' }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-12 p-6 rounded-sm text-center" style={{ background: 'var(--cream)' }}>
            <p className="font-body text-sm mb-4" style={{ color: 'var(--stone)' }}>
              Dietary requirements? We're happy to help — just ask at the bar.
              Menu subject to change based on availability.
            </p>
            <a href="tel:01313393190" className="btn btn-green">
              Call to Enquire — 0131 339 3190
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── DRINKS ────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--green-deep)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-14 text-center">
            <span className="amber-rule mx-auto" />
            <h2 className="font-display text-display-md text-cream font-bold">
              The Bar
            </h2>
            <p className="font-body text-cream/60 mt-4 max-w-xl mx-auto leading-relaxed">
              A proper pub bar — cask ales, craft beers, wines, spirits, and Guinness at its finest.
            </p>
            {/* Guinness badge */}
            <div
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <span className="w-2 h-2 rounded-full bg-amber-gold" />
              <span className="font-body text-xs text-amber-gold tracking-widest uppercase font-bold">
                Guinness Quality Accredited
              </span>
            </div>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {drinksRange.map(({ category, icon, items }) => (
              <RevealItem key={category}>
                <div
                  className="highlight-card p-8 rounded-sm h-full flex flex-col gap-4"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <span className="text-amber-warm">{icon}</span>
                  <h3 className="font-display text-xl text-cream font-bold">{category}</h3>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="font-body text-sm flex items-start gap-2" style={{ color: 'var(--cream)', opacity: 0.65 }}>
                        <span className="text-amber-warm mt-1 flex-shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.3} className="mt-10 text-center">
            <p className="font-body text-sm text-cream/50">
              £10–40 per person (food &amp; drinks). Full range available at the bar — ask our staff for today's specials.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="py-20 text-center"
        style={{ background: 'var(--amber-warm)' }}
      >
        <Reveal>
          <h2 className="font-display text-display-md text-charcoal font-bold mb-4">
            Hungry? Thirsty? Come on in.
          </h2>
          <p className="font-body text-charcoal/70 max-w-lg mx-auto mb-10 leading-relaxed">
            We're open from 1pm daily. The kitchen is open — call ahead to confirm availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01313393190" className="btn btn-green">
              Call 0131 339 3190
            </a>
            <Link to="/contact" className="btn btn-green-outline">
              Find Us
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  )
}

/* ── SVG Icons ── */
function PintIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
}
function BeerIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 11H3a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2z"/><path d="M21 11V9a2 2 0 00-4 0v2"/><line x1="7" y1="11" x2="7" y2="8"/><line x1="12" y1="11" x2="12" y2="8"/></svg>
}
function WineIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 22h14"/><path d="M4.5 9.5h15"/><path d="M9 22V12L5 4h14l-4 8v10"/></svg>
}
function SoftIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2h8l2 6-1.5 2a8 8 0 01-9 0L6 8z"/><path d="M12 10v12"/><path d="M8 22h8"/></svg>
}

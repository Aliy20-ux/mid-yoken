import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const BUBBLES = [
  { id: 1, cx: 44, delay: 0,    dur: 1.8, size: 3   },
  { id: 2, cx: 58, delay: 0.4,  dur: 2.2, size: 2.5 },
  { id: 3, cx: 72, delay: 0.8,  dur: 1.6, size: 4   },
  { id: 4, cx: 50, delay: 1.1,  dur: 2.0, size: 2   },
  { id: 5, cx: 65, delay: 0.2,  dur: 1.9, size: 3   },
  { id: 6, cx: 42, delay: 1.4,  dur: 2.3, size: 2   },
  { id: 7, cx: 76, delay: 0.6,  dur: 1.7, size: 3.5 },
  { id: 8, cx: 55, delay: 1.7,  dur: 2.1, size: 2   },
]

function Bubble({ cx, delay, dur, size, fillActive }) {
  if (!fillActive) return null
  return (
    <motion.circle
      cx={cx}
      cy={185}
      r={size}
      fill="rgba(255,255,255,0.3)"
      initial={{ cy: 185, opacity: 0 }}
      animate={{ cy: 38, opacity: [0, 0.7, 0] }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        repeatDelay: 0.4,
        ease: 'easeOut',
      }}
    />
  )
}

export default function LoadingScreen({ onComplete }) {
  const prefersReduced = useReducedMotion()
  const [phase, setPhase] = useState('filling') // filling → foam → text → exit
  const [fillActive, setFillActive] = useState(false)
  const calledRef = useRef(false)

  useEffect(() => {
    if (prefersReduced) {
      const t = setTimeout(() => { if (!calledRef.current) { calledRef.current = true; onComplete() } }, 400)
      return () => clearTimeout(t)
    }

    const t0 = setTimeout(() => setFillActive(true), 300)
    const t1 = setTimeout(() => setPhase('foam'),    2900)
    const t2 = setTimeout(() => setPhase('text'),    3500)
    const t3 = setTimeout(() => setPhase('exit'),    4600)
    const t4 = setTimeout(() => {
      if (!calledRef.current) { calledRef.current = true; onComplete() }
    }, 5500)
    return () => [t0, t1, t2, t3, t4].forEach(clearTimeout)
  }, [onComplete, prefersReduced])

  if (prefersReduced) return null

  const isExit = phase === 'exit'

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--green-deep)',
            overflow: 'hidden',
          }}
        >
          {/* Grain overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
              opacity: 0.4,
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
            }}
          />

          {/* Amber radial glow — pulses as glass fills */}
          <motion.div
            style={{
              position: 'absolute',
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196,137,42,0.22) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={
              phase === 'foam' || phase === 'text'
                ? { scale: 1.6, opacity: 1 }
                : fillActive
                ? { scale: 1.0, opacity: 0.5 }
                : { scale: 0.4, opacity: 0 }
            }
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />

          {/* ── PINT GLASS SVG ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <svg
              viewBox="0 0 120 220"
              width="170"
              height="255"
              style={{ filter: 'drop-shadow(0 24px 48px rgba(196,137,42,0.35))' }}
              aria-hidden="true"
            >
              <defs>
                {/* Inner glass shape – used as clip for beer + cover */}
                <clipPath id="glass-liquid-clip">
                  <path d="M22,20 Q19,108 34,194 L86,194 Q101,108 98,20 Z" />
                </clipPath>

                {/* Amber beer gradient */}
                <linearGradient id="beer-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#7A4810" />
                  <stop offset="25%"  stopColor="#C4892A" />
                  <stop offset="55%"  stopColor="#DBA84E" />
                  <stop offset="80%"  stopColor="#C4892A" />
                  <stop offset="100%" stopColor="#6B3D0E" />
                </linearGradient>

                {/* Foam gradient */}
                <linearGradient id="foam-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#FBF7F2" />
                  <stop offset="100%" stopColor="#EDE5D6" />
                </linearGradient>

                {/* Glass shine gradient */}
                <linearGradient id="glass-shine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="rgba(255,255,255,0.14)" />
                  <stop offset="40%"  stopColor="rgba(255,255,255,0.06)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)"    />
                </linearGradient>
              </defs>

              {/* ── Glass body (empty tint) */}
              <path
                d="M22,20 Q19,108 34,194 L86,194 Q101,108 98,20 Z"
                fill="rgba(255,255,255,0.04)"
              />

              {/*
                ── BEER FILL — reverse-cover technique ───────────────────
                The full amber shape is always drawn inside the clip.
                A green rect (matching bg) sits on top and shrinks from
                bottom to top (height 174→0, y fixed at 20), revealing
                beer from the bottom of the glass upward.
                No CSS transform tricks — just SVG height animation.
              */}
              {/* Amber fill — always drawn, only visible as cover shrinks */}
              <path
                d="M22,20 Q19,108 34,194 L86,194 Q101,108 98,20 Z"
                fill="url(#beer-grad)"
              />

              {/* Green cover — shrinks upward to reveal beer from bottom */}
              <motion.rect
                x="0"
                y="20"
                width="120"
                clipPath="url(#glass-liquid-clip)"
                fill="#1C3829"
                initial={{ height: 174 }}
                animate={fillActive ? { height: 0 } : { height: 174 }}
                transition={{ duration: 2.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              />

              {/* ── BUBBLES (clipped inside beer) ─────────────────────── */}
              <g clipPath="url(#glass-liquid-clip)">
                {BUBBLES.map(b => (
                  <Bubble key={b.id} {...b} fillActive={fillActive} />
                ))}
              </g>

              {/* ── SURFACE SHIMMER — thin amber line at fill level ────── */}
              {fillActive && phase === 'filling' && (
                <motion.line
                  x1="34" x2="86"
                  stroke="rgba(240,212,154,0.5)"
                  strokeWidth="1.5"
                  clipPath="url(#glass-liquid-clip)"
                  initial={{ y1: 194, y2: 194, opacity: 0 }}
                  animate={{ y1: 22, y2: 22, opacity: [0, 0.8, 0] }}
                  transition={{ duration: 2.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}

              {/* ── FOAM HEAD ─────────────────────────────────────────── */}
              <motion.g
                initial={{ opacity: 0, y: 14 }}
                animate={phase === 'foam' || phase === 'text' ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                clipPath="url(#glass-liquid-clip)"
              >
                <ellipse cx="60" cy="32" rx="38" ry="16" fill="url(#foam-grad)" />
                {[
                  { cx: 38, cy: 26, r: 9 },
                  { cx: 55, cy: 22, r: 11 },
                  { cx: 72, cy: 25, r: 9 },
                  { cx: 84, cy: 30, r: 7 },
                  { cx: 30, cy: 32, r: 6 },
                  { cx: 45, cy: 19, r: 7 },
                  { cx: 65, cy: 18, r: 8 },
                  { cx: 78, cy: 20, r: 6 },
                ].map((b, i) => (
                  <motion.circle
                    key={i}
                    cx={b.cx} cy={b.cy} r={b.r}
                    fill="url(#foam-grad)"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="0.5"
                    initial={{ scale: 0 }}
                    animate={phase === 'foam' || phase === 'text' ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    style={{ transformOrigin: `${b.cx}px ${b.cy}px` }}
                  />
                ))}
              </motion.g>

              {/* ── Glass outline ──────────────────────────────────────── */}
              <path
                d="M22,20 Q19,108 34,194 L86,194 Q101,108 98,20 Z"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
              />

              {/* Rim ellipse */}
              <ellipse cx="60" cy="20" rx="38" ry="9"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.32)"
                strokeWidth="1.2"
              />

              {/* Base */}
              <rect x="30" y="192" width="60" height="8" rx="3"
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1"
              />

              {/* Shine strips */}
              <path
                d="M26,26 Q24,100 36,188"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M30,26 Q28,100 39,188"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* ── TEXT ────────────────────────────────────────────────────── */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 18 }}
            animate={phase === 'text' ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p
              className="font-display text-4xl font-bold text-cream"
              style={{ letterSpacing: '-0.02em' }}
            >
              The Mid Yoken
            </p>
            <p
              className="font-body text-xs mt-2 tracking-widest uppercase"
              style={{ color: 'var(--amber-warm)' }}
            >
              Bar &amp; Lounge · East Craigs · Edinburgh
            </p>
          </motion.div>

          {/* ── Progress bar ─────────────────────────────────────────────── */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              background: 'rgba(255,255,255,0.08)',
            }}
          >
            <motion.div
              style={{ height: '100%', background: 'var(--amber-warm)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4.4, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { motion, useReducedMotion } from 'framer-motion'

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  as: Tag = 'div',
  ...props
}) {
  const prefersReduced = useReducedMotion()

  const MotionTag = motion[Tag] ?? motion.div

  if (prefersReduced) {
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export function RevealGroup({ children, stagger = 0.1, className = '' }) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, variant = 'fadeUp', className = '', ...props }) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

import { motion } from 'framer-motion';
import './SplashAnimation.css';

export default function SplashAnimation() {
  const strokeProps = {
    fill: 'transparent',
    stroke: '#fff',
    strokeWidth: 10,
    strokeLinecap: 'square',
    strokeLinejoin: 'miter',
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
  };

  return (
    <div className="splash-container">
      <motion.svg width="120" height="120" viewBox="0 0 120 120" className="s-letter">

        {/* Top horizontal line */}
        <motion.path
          d="M30,30 H90"
          {...strokeProps}
          transition={{ delay: 0.0, duration: 0.4 }}
        />

        {/* Middle horizontal line */}
        <motion.path
          d="M30,60 H90"
          {...strokeProps}
          transition={{ delay: 0.4, duration: 0.4 }}
        />

        {/* Bottom horizontal line */}
        <motion.path
          d="M30,90 H90"
          {...strokeProps}
          transition={{ delay: 0.8, duration: 0.4 }}
        />

        {/* Left vertical (connects top to middle) */}
        <motion.path
          d="M30,30 V60"
          {...strokeProps}
          transition={{ delay: 1.2, duration: 0.4 }}
        />

        {/* Right vertical (connects middle to bottom) */}
        <motion.path
          d="M90,60 V90"
          {...strokeProps}
          transition={{ delay: 1.6, duration: 0.4 }}
        />
      </motion.svg>

      {/* SNAG text appears afterward */}
      <motion.div
        className="snag-text"
        initial={{ opacity: 0, x: 30, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          delay: 2.2,
          duration: 0.8,
          ease: 'easeOut'
        }}
      >
        SNAG
      </motion.div>
    </div>
  );
}

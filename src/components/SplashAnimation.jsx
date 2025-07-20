import { motion } from 'framer-motion';
import './SplashAnimation.css';

export default function SplashAnimation() {
  return (
    <div className="splash-container">
      {/* The animated stroke 'S' */}
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="s-letter"
      >
        <motion.path
          // This path draws a more accurate 'S' shape
          d="M90,30 C90,10 30,10 30,40 C30,60 90,60 90,80 C90,110 30,110 30,90"
          fill="transparent"
          stroke="#fff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5, delay: 0.2 }
          }}
        />
      </motion.svg>

      {/* Word 'SNAG' appears and shifts */}
      <motion.div
        className="snag-text"
        initial={{ opacity: 0, x: 30, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ 
          delay: 2.2, 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        SNAG
      </motion.div>
    </div>
  );
}

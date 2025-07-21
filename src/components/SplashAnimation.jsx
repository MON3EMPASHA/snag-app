import { motion } from 'framer-motion';
import './SplashAnimation.css';

export default function SplashAnimation() {
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;
  const snagTextY = screenW < 600 ? -280 : -305; // Responsive y value

  return (
    <div className="splash-container">
        {/* Logo */}
        <motion.svg
          className="s-fullscreen-svg"
          viewBox={`0 0 ${screenW} ${screenH}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Top horizontal line */}
          <motion.line
            x1={0} y1={screenH * 0.3} x2={screenW} y2={screenH * 0.3}
            stroke="#fff"
            strokeWidth="10"
            strokeLinecap="square"
            initial={{ x1: 0, x2: screenW }}
            animate={{ x1: screenW / 2 - 60, x2: screenW / 2 + 60 }}
            transition={{ delay: 0.0, duration: 0.5 }}
          />

          {/* Middle horizontal line */}
          <motion.line
            x1={0} y1={screenH * 0.4} x2={screenW} y2={screenH * 0.4}
            stroke="#fff"
            strokeWidth="10"
            strokeLinecap="square"
            initial={{ x1: 0, x2: screenW }}
            animate={{ x1: screenW / 2 - 60, x2: screenW / 2 + 60 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />

          {/* Bottom horizontal line */}
          <motion.line
            x1={0} y1={screenH * 0.5} x2={screenW} y2={screenH * 0.5}
            stroke="#fff"
            strokeWidth="10"
            strokeLinecap="square"
            initial={{ x1: 0, x2: screenW }}
            animate={{ x1: screenW / 2 - 60, x2: screenW / 2 + 60 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />

          {/* Left vertical line */}
          <motion.line
            x1={screenW / 2 - 60} y1={0-100} x2={screenW / 2 - 60} y2={screenH+100}
            stroke="#fff"
            strokeWidth="10"
            strokeLinecap="square"
            initial={{ y1: 0, y2: screenH, opacity: 0 }}
            animate={{ y1: screenH * 0.3, y2: screenH * 0.4, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          />

          {/* Right vertical line */}
          <motion.line
            x1={screenW / 2 + 60} y1={0-100} x2={screenW / 2 + 60} y2={screenH+100}
            stroke="#fff"
            strokeWidth="10"
            strokeLinecap="square"
            initial={{ y1: 0, y2: screenH, opacity: 0 }}
            animate={{ y1: screenH * 0.4, y2: screenH * 0.5, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          />
        </motion.svg>
        {/* SNAG text */}
        <motion.div
          className="snag-text"
          style={{ display: "flex", gap: "0.1em", y: snagTextY }}
        >
            {["S", "N", "A", "G"].map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 2.2 + index * 0.3, // Stagger: each letter delayed
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="snag-letter"
                style={{ "--index": index }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>


      </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

/**
 * LiquidLoopAnimation Component
 * A premium, smooth 3D-like liquid loop animation using Framer Motion and Tailwind CSS.
 * * @param {string} size - The width and height of the element (e.g., "300px")
 * @param {number} rotationSpeed - Duration in seconds for one full 360° rotation
 * @param {number} floatIntensity - The pixel distance for the up/down floating motion
 */

const LiquidLoopAnimation = ({ 
  size = "400px", 
  rotationSpeed = 20, 
  floatIntensity = 20 
}) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[600px] bg-black overflow-hidden rounded-xl">
      
      {/* Soft Radial Glow Background */}
      <div 
        className="absolute rounded-full opacity-30 blur-[120px]"
        style={{
          width: `calc(${size} * 1.5)`,
          height: `calc(${size} * 1.5)`,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(0, 0, 0, 0) 70%)'
        }}
      />

      {/* Main Animation Container */}
      <motion.div
        style={{ width: size, height: size }}
        className="relative z-10 cursor-pointer"
        
        // Floating and Breathing Animation
        animate={{
          y: [0, -floatIntensity, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        
        // Hover Interaction: Subtle Tilt
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {/* Infinite Rotation Layer */}
        <motion.div
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: rotationSpeed,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Glassy Liquid Image */}
          <img
            src="/liqud loop.png"
            alt="Liquid Loop"
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          />
        </motion.div>
      </motion.div>

      {/* Optional: Subtle Overlay Reflection for "Glassy" feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)'
        }}
      />
    </div>
  );
};

export default LiquidLoopAnimation;

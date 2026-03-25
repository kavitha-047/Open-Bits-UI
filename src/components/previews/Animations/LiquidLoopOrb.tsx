import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export interface LiquidLoopOrbProps {
  size?: number | string;
  intensity?: number;
  rotationSpeed?: number;
  glowColor?: string;
  imageSrc?: string;
}

const LiquidLoopOrb: React.FC<LiquidLoopOrbProps> = ({
  size = 600,
  intensity = 1,
  rotationSpeed = 40,
  glowColor = 'rgba(59, 130, 246, 0.6)',
  imageSrc = '/liqud loop.png'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for super smooth, heavy cinematic feel
  const springConfig = { damping: 40, stiffness: 80, mass: 3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Parallax tilt transforms
  // Moving the mouse shifts the perspective fluidly
  const rotateX = useTransform(smoothY, [-1, 1], [15 * intensity, -15 * intensity]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15 * intensity, 15 * intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Normalize coordinates from -1 to 1 based on center of element
    const x = ((e.clientX - left) / width - 0.5) * 2; 
    const y = ((e.clientY - top) / height - 0.5) * 2; 
    
    mouseX.set(x); 
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const cssSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div 
      className="relative flex items-center justify-center w-full h-[800px] bg-[#030303] overflow-hidden rounded-xl"
      style={{ perspective: '1400px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Master Composition Container */}
      <motion.div
        ref={containerRef}
        style={{
          width: cssSize,
          height: cssSize,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-10 flex items-center justify-center cursor-pointer"
        
        // Subtle entire composition floating motion (Breathing)
        animate={{
          y: [0, -15 * intensity, 0],
        }}
        transition={{
          duration: 10, // Very slow, ambient float
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Soft Radial Back Glow */}
        <div 
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '120%',
            height: '120%',
            background: `radial-gradient(circle, ${glowColor} 0%, rgba(0,0,0,0) 65%)`,
            filter: 'blur(80px)',
            opacity: 0.7,
            transform: 'translateZ(-150px)',
          }}
        />

        {/* 1. BACK LAYER (Atmosphere)
            Larger, heavily blurred, lower opacity, very slow ambient drift 
        */}
        <motion.img
          src={imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-contain opacity-25 blur-[32px] pointer-events-none"
          style={{ transform: 'translateZ(-120px) scale(1.4)' }}
          animate={{
            x: [-30 * intensity, 30 * intensity, -30 * intensity],
            y: [-15 * intensity, 15 * intensity, -15 * intensity],
            rotateZ: [0, -10, 0] // extremely subtle counter-rotation
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* 2. MIDDLE LAYER (Depth & Volume)
            Slightly blurred, subtle scale breathing 
        */}
        <motion.img
          src={imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-contain opacity-60 blur-[10px] pointer-events-none mix-blend-screen"
          style={{ transform: 'translateZ(-40px) scale(1.15)' }}
          animate={{
            scale: [1.15, 1.2 + (0.05 * intensity), 1.15],
            rotateZ: [0, 180, 360]
          }}
          transition={{
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotateZ: {
              duration: rotationSpeed * 1.5, // much slower than front
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />

        {/* 3. FRONT LAYER (Core Object)
            Sharpest layer, slow elegant rotation, subtle drop shadow 
        */}
        <motion.img
          src={imageSrc}
          alt="Liquid Loop Core"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-30"
          style={{ 
            transform: 'translateZ(40px)', 
            filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))'
          }}
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: rotationSpeed,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      {/* Interacting Cinematic Glint Overlay (Adds glossy environmental reflection) */}
      <div 
        className="absolute inset-0 pointer-events-none z-40 opacity-30 mix-blend-overlay"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, transparent 40%, transparent 80%, rgba(255,255,255,0.05) 100%)'
        }}
      />
    </div>
  );
};

export default LiquidLoopOrb;

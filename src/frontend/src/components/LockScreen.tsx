import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  getEnglishDate,
  getEnglishTime,
  getHindiDate,
  getHindiTime,
} from "../utils/hindi";

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const [now, setNow] = useState(new Date());
  const [swipeStart, setSwipeStart] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setSwipeStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (swipeStart !== null) {
      const delta = swipeStart - e.changedTouches[0].clientY;
      if (delta > 50) onUnlock();
    }
    setSwipeStart(null);
  };

  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-between overflow-hidden cursor-pointer select-none"
      style={{
        backgroundImage:
          "url('/assets/generated/wallpaper-marwadi.dim_1080x1920.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onUnlock}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />

      {/* Top: Notifications area */}
      <div className="relative z-10 pt-12 px-6 w-full">
        <div className="flex items-center justify-between text-white/80 text-xs">
          <span className="font-body">Marwadi OS</span>
          <div className="flex items-center gap-2">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>
      </div>

      {/* Center: Time display */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Hindi time - large */}
        <motion.div
          className="text-white font-devanagari text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="font-bold leading-none tracking-tight"
            style={{
              fontSize: "clamp(52px, 14vw, 72px)",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              fontFamily: "'Noto Sans Devanagari', sans-serif",
            }}
          >
            {getHindiTime(now).split(" ")[0]}
          </div>
          <div
            className="text-white/80 mt-1"
            style={{
              fontSize: "clamp(20px, 5vw, 28px)",
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              textShadow: "0 1px 10px rgba(0,0,0,0.5)",
            }}
          >
            {getEnglishTime(now)}
          </div>
        </motion.div>

        {/* Date */}
        <motion.div
          className="text-center mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div
            className="text-white/90 font-medium"
            style={{
              fontSize: "clamp(12px, 3.5vw, 16px)",
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              textShadow: "0 1px 8px rgba(0,0,0,0.5)",
            }}
          >
            {getHindiDate(now)}
          </div>
          <div
            className="text-white/70 mt-0.5"
            style={{
              fontSize: "clamp(10px, 3vw, 13px)",
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            {getEnglishDate(now)}
          </div>
        </motion.div>

        {/* Decorative Om symbol */}
        <motion.div
          className="mt-4 text-yellow-300/80"
          style={{
            fontSize: "2rem",
            textShadow: "0 0 20px rgba(255,184,0,0.6)",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          ॐ
        </motion.div>
      </div>

      {/* Bottom: Swipe hint */}
      <motion.div
        className="relative z-10 pb-10 flex flex-col items-center gap-2"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div
          className="text-white/90 text-center"
          style={{
            fontSize: "clamp(11px, 3vw, 14px)",
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            textShadow: "0 1px 6px rgba(0,0,0,0.5)",
          }}
        >
          ऊपर स्वाइप करें
        </div>
        <div className="text-white/60" style={{ fontSize: "11px" }}>
          Swipe up to unlock
        </div>
        <div className="text-white/70 text-lg">↑</div>
      </motion.div>

      {/* Decorative Rajasthani border at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, #FF6B2B, #FFB800, #E91E8C, #1A3A8F, #FF6B2B)",
        }}
      />
    </motion.div>
  );
}

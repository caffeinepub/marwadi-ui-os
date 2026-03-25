import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { App } from "../backend.d";
import { getShortTime } from "../utils/hindi";

interface HomeScreenProps {
  apps: App[];
  onAppOpen: (app: App) => void;
}

export function HomeScreen({
  apps: _apps,
  onAppOpen: _onAppOpen,
}: HomeScreenProps) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  const days = [
    "रविवार",
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरुवार",
    "शुक्रवार",
    "शनिवार",
  ];
  const months = [
    "जनवरी",
    "फरवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर",
  ];
  const dayName = days[now.getDay()];
  const dateStr = `${dayName}, ${now.getDate()} ${months[now.getMonth()]}`;

  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/wallpaper-marwadi.dim_1080x1920.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Status bar */}
      <div
        className="relative z-10 flex items-center justify-between px-5 pt-3 pb-2"
        style={{ minHeight: "40px" }}
      >
        <span
          className="text-white font-semibold"
          style={{
            fontSize: "13px",
            textShadow: "0 1px 4px rgba(0,0,0,0.8)",
          }}
        >
          {getShortTime(now)}
        </span>
        <div className="flex items-center gap-1.5">
          <span style={{ fontSize: "14px" }}>📶</span>
          <span style={{ fontSize: "14px" }}>📡</span>
          <span style={{ fontSize: "14px" }}>🔋</span>
        </div>
      </div>

      {/* Marwadi OS label */}
      <motion.div
        className="relative z-10 text-center pb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div
          className="inline-block px-4 py-0.5 rounded-full"
          style={{
            background: "rgba(255,184,0,0.2)",
            border: "1px solid rgba(255,184,0,0.4)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            className="text-yellow-200 font-semibold tracking-wider"
            style={{ fontSize: "10px", letterSpacing: "0.15em" }}
          >
            MARWADI UI OS
          </span>
        </div>
      </motion.div>

      {/* Center clock */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Big time */}
        <div
          className="text-white font-thin"
          style={{
            fontSize: "80px",
            lineHeight: 1,
            textShadow: "0 4px 24px rgba(0,0,0,0.6)",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "-2px",
          }}
        >
          {hour12}:{minutes}
          <span
            style={{
              fontSize: "32px",
              fontWeight: 300,
              marginLeft: "6px",
              opacity: 0.8,
            }}
          >
            {ampm}
          </span>
        </div>

        {/* Date */}
        <div
          className="text-white/80"
          style={{
            fontSize: "16px",
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            letterSpacing: "0.02em",
          }}
        >
          {dateStr}
        </div>

        {/* Marwadi greeting */}
        <motion.div
          className="mt-6 px-6 py-3 rounded-2xl text-center"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,184,0,0.3)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div
            className="text-yellow-200 font-semibold"
            style={{
              fontSize: "18px",
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            खम्मा घणी 🙏
          </div>
          <div
            className="text-white/60 mt-1"
            style={{
              fontSize: "11px",
              fontFamily: "'Noto Sans Devanagari', sans-serif",
            }}
          >
            मारवाड़ी UI OS में आपका स्वागत है
          </div>
        </motion.div>

        {/* Tricolor accent line */}
        <div
          className="mt-8 rounded-full"
          style={{
            width: "120px",
            height: "3px",
            background: "linear-gradient(90deg, #FF9933, #FFFFFF, #138808)",
            boxShadow: "0 0 12px rgba(255,153,51,0.5)",
          }}
        />
      </motion.div>

      {/* Swipe up hint */}
      <motion.div
        className="relative z-10 text-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{
          delay: 0.8,
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 2,
        }}
      >
        <div
          className="text-white/50"
          style={{
            fontSize: "11px",
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          ↑ ऊपर स्वाइप करें
        </div>
      </motion.div>

      {/* Decorative bottom color bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, #FF6B2B, #FFB800, #E91E8C, #1A3A8F, #FF6B2B)",
        }}
      />
    </motion.div>
  );
}

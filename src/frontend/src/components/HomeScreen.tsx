import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { App } from "../backend.d";
import { DOCK_APP_IDS } from "../data/apps";
import { getShortTime } from "../utils/hindi";
import { AppIcon } from "./AppIcon";

interface HomeScreenProps {
  apps: App[];
  onAppOpen: (app: App) => void;
}

export function HomeScreen({ apps, onAppOpen }: HomeScreenProps) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dockApps = apps.filter((a) => DOCK_APP_IDS.some((id) => id === a.id));
  const gridApps = apps.filter((a) => !DOCK_APP_IDS.some((id) => id === a.id));

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
      <div className="absolute inset-0 bg-black/20" />

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

      {/* App grid */}
      <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar px-3 pt-2">
        <motion.div
          className="grid gap-y-4 gap-x-2"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.04 },
            },
          }}
        >
          {gridApps.map((app, i) => (
            <motion.div
              key={app.id.toString()}
              className="flex justify-center"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
                delay: i * 0.04,
              }}
            >
              <AppIcon app={app} onTap={onAppOpen} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom dock */}
      <div className="relative z-10 px-4 pb-4 pt-2">
        <motion.div
          className="flex items-center justify-around px-4 py-3 rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          {dockApps.map((app) => (
            <AppIcon
              key={app.id.toString()}
              app={app}
              onTap={onAppOpen}
              size="dock"
            />
          ))}
        </motion.div>
      </div>

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

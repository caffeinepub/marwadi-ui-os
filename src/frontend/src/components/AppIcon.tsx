import { motion } from "motion/react";
import type { App } from "../backend.d";

interface AppIconProps {
  app: App;
  onTap: (app: App) => void;
  size?: "normal" | "dock";
}

export function AppIcon({ app, onTap, size = "normal" }: AppIconProps) {
  const isDock = size === "dock";

  return (
    <motion.div
      className="flex flex-col items-center gap-1 cursor-pointer select-none"
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={() => onTap(app)}
    >
      {/* Icon square */}
      <div
        className="flex items-center justify-center shadow-app-icon relative overflow-hidden"
        style={{
          width: isDock ? "54px" : "52px",
          height: isDock ? "54px" : "52px",
          borderRadius: "22px",
          background: app.color,
          boxShadow: "0 4px 15px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        {/* Shine overlay */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "50%",
            borderRadius: "22px 22px 60% 60%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",
          }}
        />
        <span
          style={{
            fontSize: isDock ? "28px" : "26px",
            lineHeight: 1,
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
          }}
        >
          {app.icon}
        </span>
      </div>

      {/* App name - only for grid apps */}
      {!isDock && (
        <div
          className="flex flex-col items-center gap-0"
          style={{ maxWidth: "60px" }}
        >
          <span
            className="text-white font-semibold text-center leading-tight truncate w-full"
            style={{
              fontSize: "10px",
              textShadow: "0 1px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)",
            }}
          >
            {app.name}
          </span>
          <span
            className="text-white/80 text-center leading-tight truncate w-full"
            style={{
              fontSize: "9px",
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              textShadow: "0 1px 4px rgba(0,0,0,0.8)",
            }}
          >
            {app.hindiName}
          </span>
        </div>
      )}
    </motion.div>
  );
}

import { AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { App } from "./backend.d";
import { AppView } from "./components/AppView";
import { HomeScreen } from "./components/HomeScreen";
import { LockScreen } from "./components/LockScreen";
import { INITIAL_APPS } from "./data/apps";
import { useActor } from "./hooks/useActor";
import {
  useAddApp,
  useCloseApp,
  useGetAllApps,
  useGetOpenApp,
  useOpenApp,
} from "./hooks/useQueries";

type Screen = "lock" | "home" | "app";

export default function AppRoot() {
  const [screen, setScreen] = useState<Screen>("lock");
  const [openApp, setOpenApp] = useState<App | null>(null);
  const seededRef = useRef(false);

  const { actor, isFetching } = useActor();
  const { data: apps = [], isLoading: appsLoading } = useGetAllApps();
  const { data: openAppId } = useGetOpenApp();
  const openAppMutation = useOpenApp();
  const closeAppMutation = useCloseApp();
  const addAppMutation = useAddApp();

  // Seed apps on first load when actor is ready
  const addAppMutateAsync = addAppMutation.mutateAsync;
  useEffect(() => {
    if (!actor || isFetching || seededRef.current) return;

    const seedApps = async () => {
      seededRef.current = true;
      try {
        // Get existing apps first
        const existing = await actor.getAllApps();
        const existingIds = new Set(existing.map((a) => a.id.toString()));

        // Add only missing apps in parallel
        const toAdd = INITIAL_APPS.filter(
          (a) => !existingIds.has(a.id.toString()),
        );
        await Promise.all(
          toAdd.map((app) =>
            addAppMutateAsync(app).catch((err) => {
              console.warn(`Failed to add app ${app.name}:`, err);
            }),
          ),
        );
      } catch (err) {
        console.warn("Seeding error:", err);
      }
    };

    seedApps();
  }, [actor, isFetching, addAppMutateAsync]);

  const displayApps = apps.length > 0 ? apps : INITIAL_APPS;

  const handleUnlock = () => setScreen("home");

  const handleAppOpen = async (app: App) => {
    setOpenApp(app);
    setScreen("app");
    try {
      await openAppMutation.mutateAsync(app.id);
    } catch (err) {
      console.warn("openApp error:", err);
    }
  };

  const handleAppClose = async () => {
    setOpenApp(null);
    setScreen("home");
    try {
      await closeAppMutation.mutateAsync();
    } catch (err) {
      console.warn("closeApp error:", err);
    }
  };

  // Sync from backend if there's an open app ID
  useEffect(() => {
    if (openAppId != null && screen !== "app") {
      const app = displayApps.find((a) => a.id === openAppId);
      if (app) {
        setOpenApp(app);
        setScreen("app");
      }
    }
  }, [openAppId, screen, displayApps]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #1a0a2e 0%, #2d1354 25%, #4a1942 50%, #2d1354 75%, #1a0a2e 100%)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Ambient glow behind phone */}
      <div
        className="absolute"
        style={{
          width: "420px",
          height: "880px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,107,43,0.25) 0%, rgba(233,30,140,0.15) 40%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Phone frame */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: "390px",
          height: "844px",
          borderRadius: "50px",
          background:
            "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          padding: "12px",
          boxShadow: `
            0 0 0 1px rgba(255,107,43,0.3),
            0 0 0 2px rgba(0,0,0,0.8),
            0 20px 60px rgba(255,107,43,0.2),
            0 40px 100px rgba(233,30,140,0.15),
            0 60px 120px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 0 0 1px rgba(255,255,255,0.05)
          `,
        }}
      >
        {/* Phone inner bezel */}
        <div
          className="absolute inset-3 rounded-[40px] overflow-hidden"
          style={{
            background: "#000",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        />

        {/* Notch / Dynamic Island */}
        <div
          className="absolute top-5 left-1/2 -translate-x-1/2 z-50"
          style={{
            width: "120px",
            height: "34px",
            borderRadius: "20px",
            background: "#000",
            boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          {/* Camera dot */}
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "8px",
              height: "8px",
              background: "#1a1a2e",
              border: "1.5px solid #333",
            }}
          />
        </div>

        {/* Screen */}
        <div
          className="absolute"
          style={{
            top: "12px",
            left: "12px",
            right: "12px",
            bottom: "12px",
            borderRadius: "40px",
            overflow: "hidden",
            background: "#111",
          }}
        >
          {/* Home indicator bar */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50 rounded-full"
            style={{
              width: "120px",
              height: "4px",
              background: "rgba(255,255,255,0.25)",
            }}
          />

          <AnimatePresence mode="wait">
            {screen === "lock" && (
              <LockScreen key="lock" onUnlock={handleUnlock} />
            )}
            {screen === "home" && (
              <HomeScreen
                key="home"
                apps={displayApps}
                onAppOpen={handleAppOpen}
              />
            )}
            {screen === "app" && openApp && (
              <AppView
                key={`app-${openApp.id}`}
                app={openApp}
                onBack={handleAppClose}
              />
            )}
          </AnimatePresence>

          {/* Loading overlay */}
          {appsLoading && screen === "home" && (
            <div
              className="absolute inset-0 flex items-center justify-center z-50"
              style={{
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(4px)",
              }}
            >
              <div className="text-white text-center">
                <div className="w-8 h-8 rounded-full border-2 border-white/30 border-t-white animate-spin mx-auto mb-2" />
                <p
                  className="text-xs"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  लोड हो रहा है...
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Side buttons */}
        {/* Volume up */}
        <div
          className="absolute"
          style={{
            left: "-3px",
            top: "160px",
            width: "4px",
            height: "32px",
            borderRadius: "2px 0 0 2px",
            background: "linear-gradient(180deg, #2a2a3e, #1a1a2e)",
            boxShadow: "-2px 0 4px rgba(0,0,0,0.5)",
          }}
        />
        {/* Volume down */}
        <div
          className="absolute"
          style={{
            left: "-3px",
            top: "204px",
            width: "4px",
            height: "32px",
            borderRadius: "2px 0 0 2px",
            background: "linear-gradient(180deg, #2a2a3e, #1a1a2e)",
            boxShadow: "-2px 0 4px rgba(0,0,0,0.5)",
          }}
        />
        {/* Power button */}
        <div
          className="absolute"
          style={{
            right: "-3px",
            top: "180px",
            width: "4px",
            height: "50px",
            borderRadius: "0 2px 2px 0",
            background: "linear-gradient(180deg, #2a2a3e, #1a1a2e)",
            boxShadow: "2px 0 4px rgba(0,0,0,0.5)",
          }}
        />
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-4 left-0 right-0 text-center"
        style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}
      >
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255,184,0,0.5)", textDecoration: "none" }}
        >
          caffeine.ai
        </a>
      </div>
    </div>
  );
}

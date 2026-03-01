import { motion } from "motion/react";
import type { ReactElement } from "react";
import type { App } from "../backend.d";

// UPI Pay App
function UpiPayApp() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Balance card */}
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #FF6B2B, #FF8C42, #E91E8C)",
          boxShadow: "0 8px 24px rgba(255,107,43,0.4)",
        }}
      >
        <p
          className="text-white/70 text-sm"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          मेरा बैलेंस • My Balance
        </p>
        <p className="text-3xl font-bold mt-1">₹ 12,450.00</p>
        <p className="text-white/60 text-xs mt-2">HDFC Bank ••••4521</p>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { icon: "📤", label: "भेजें", sub: "Send" },
          { icon: "📥", label: "पाएं", sub: "Receive" },
          { icon: "📷", label: "स्कैन", sub: "Scan" },
          { icon: "📋", label: "इतिहास", sub: "History" },
        ].map((btn) => (
          <div
            key={btn.sub}
            className="flex flex-col items-center gap-1 p-2 rounded-xl cursor-pointer active:scale-95 transition-transform"
            style={{
              background: "rgba(255,107,43,0.1)",
              border: "1px solid rgba(255,107,43,0.2)",
            }}
          >
            <span className="text-2xl">{btn.icon}</span>
            <span
              className="text-xs font-semibold text-orange-700"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              {btn.label}
            </span>
            <span className="text-xs text-gray-500">{btn.sub}</span>
          </div>
        ))}
      </div>

      {/* Recent transactions */}
      <div>
        <p
          className="text-sm font-semibold text-gray-600 mb-2"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          हाल के लेनदेन • Recent Transactions
        </p>
        {[
          {
            name: "राम किराना",
            sub: "Ram Kirana Store",
            amount: "- ₹240",
            color: "#E91E8C",
          },
          {
            name: "अनिता देवी",
            sub: "Anita Devi",
            amount: "+ ₹500",
            color: "#2E7D32",
          },
          {
            name: "पेट्रोल पंप",
            sub: "Petrol Pump",
            amount: "- ₹800",
            color: "#E91E8C",
          },
        ].map((tx) => (
          <div
            key={tx.sub}
            className="flex items-center justify-between p-3 rounded-xl mb-2"
            style={{
              background: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">
                ₹
              </div>
              <div>
                <p
                  className="text-xs font-semibold"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {tx.name}
                </p>
                <p className="text-xs text-gray-400">{tx.sub}</p>
              </div>
            </div>
            <span className="text-sm font-bold" style={{ color: tx.color }}>
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dukaan App
function DukaanApp() {
  const products = [
    {
      name: "Banarasi Silk Saree",
      hindiName: "बनारसी साड़ी",
      price: "₹2,499",
      emoji: "👘",
    },
    {
      name: "Rajasthani Juti",
      hindiName: "राजस्थानी जूती",
      price: "₹699",
      emoji: "👟",
    },
    {
      name: "Brass Diya Set",
      hindiName: "पीतल दीया",
      price: "₹349",
      emoji: "🪔",
    },
    {
      name: "Masala Dabba",
      hindiName: "मसाला डब्बा",
      price: "₹449",
      emoji: "🥘",
    },
    {
      name: "Block Print Kurta",
      hindiName: "ब्लॉक प्रिंट कुर्ता",
      price: "₹899",
      emoji: "👕",
    },
    {
      name: "Clay Water Pot",
      hindiName: "माटी की मटकी",
      price: "₹199",
      emoji: "🏺",
    },
  ];

  return (
    <div className="p-4">
      <div
        className="flex items-center gap-2 rounded-xl px-3 py-2 mb-4"
        style={{
          background: "rgba(233,30,140,0.08)",
          border: "1px solid rgba(233,30,140,0.2)",
        }}
      >
        <span>🔍</span>
        <span className="text-sm text-gray-400">खोजें... Search products</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {products.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-transform"
            style={{
              border: "1px solid rgba(233,30,140,0.15)",
              background: "white",
            }}
          >
            <div
              className="h-20 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(233,30,140,0.1), rgba(255,107,43,0.1))",
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>{p.emoji}</span>
            </div>
            <div className="p-2">
              <p className="text-xs font-semibold text-gray-800 leading-tight">
                {p.name}
              </p>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {p.hindiName}
              </p>
              <p className="text-sm font-bold text-pink-600 mt-1">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Mandir App
function MandirApp() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Om symbol */}
      <div
        className="w-28 h-28 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #F9A825, #FFB800, #FF6B2B)",
          boxShadow:
            "0 0 30px rgba(255,184,0,0.6), 0 0 60px rgba(255,107,43,0.3)",
        }}
      >
        <span
          style={{
            fontSize: "4rem",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
          }}
        >
          ॐ
        </span>
      </div>

      <div className="text-center">
        <h2
          className="text-xl font-bold text-amber-700"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          जय श्री राम
        </h2>
        <p className="text-gray-500 text-sm">Jai Shri Ram</p>
      </div>

      {/* Prayer times */}
      <div
        className="w-full rounded-2xl p-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(249,168,37,0.1), rgba(255,184,0,0.15))",
          border: "1px solid rgba(255,184,0,0.3)",
        }}
      >
        <p
          className="text-sm font-semibold text-amber-800 mb-3"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          📿 आज की पूजा • Today's Prayers
        </p>
        {[
          { time: "5:00 AM", name: "मंगला आरती", sub: "Mangala Aarti" },
          { time: "7:00 AM", name: "सुप्रभात आरती", sub: "Suprabhat Aarti" },
          { time: "12:00 PM", name: "राजभोग", sub: "Rajbhog Offering" },
          { time: "7:00 PM", name: "संध्या आरती", sub: "Sandhya Aarti" },
          { time: "9:00 PM", name: "शयन आरती", sub: "Shayan Aarti" },
        ].map((p) => (
          <div
            key={p.time}
            className="flex items-center justify-between py-1.5 border-b border-amber-100 last:border-0"
          >
            <div>
              <p
                className="text-xs font-semibold text-amber-900"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {p.name}
              </p>
              <p className="text-xs text-gray-400">{p.sub}</p>
            </div>
            <span className="text-xs font-bold text-amber-600">{p.time}</span>
          </div>
        ))}
      </div>

      <div
        className="w-full rounded-xl p-3 text-center"
        style={{
          background: "rgba(255,107,43,0.08)",
          border: "1px solid rgba(255,107,43,0.2)",
        }}
      >
        <p
          className="text-xs text-orange-700 italic"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          "कर्म करो, फल की चिंता मत करो"
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Do your duty, don't worry about results — Bhagavad Gita
        </p>
      </div>
    </div>
  );
}

// Cricket App
function CricketApp() {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Live match */}
      <div
        className="rounded-2xl p-4 text-white"
        style={{ background: "linear-gradient(135deg, #1A3A8F, #1565C0)" }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs bg-red-500 px-2 py-0.5 rounded-full font-bold animate-pulse">
            🔴 LIVE
          </span>
          <span className="text-xs text-white/60">T20 World Cup 2026</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <span className="text-2xl">🇮🇳</span>
            <p className="text-sm font-bold mt-1">India</p>
            <p className="text-xl font-black">186/4</p>
            <p className="text-xs text-white/60">18.4 Overs</p>
          </div>
          <div className="text-center">
            <span className="text-2xl">⚔️</span>
            <p className="text-white/40 text-xs">VS</p>
          </div>
          <div className="text-center">
            <span className="text-2xl">🇵🇰</span>
            <p className="text-sm font-bold mt-1">Pakistan</p>
            <p className="text-xl font-black">142/6</p>
            <p className="text-xs text-white/60">20.0 Overs</p>
          </div>
        </div>
        <div className="mt-3 text-center">
          <p className="text-xs text-yellow-300 font-semibold">
            India needs 44 runs in 8 balls
          </p>
        </div>
      </div>

      {/* Top batsmen */}
      <div>
        <p
          className="text-sm font-bold text-blue-900 mb-2"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          🏏 बल्लेबाज • Batsmen
        </p>
        {[
          { name: "Rohit Sharma", runs: 78, balls: 44, sr: "177.2" },
          { name: "Virat Kohli", runs: 62, balls: 38, sr: "163.1" },
        ].map((b) => (
          <div
            key={b.name}
            className="flex items-center justify-between p-2 rounded-xl mb-1.5"
            style={{ background: "rgba(26,58,143,0.07)" }}
          >
            <span className="text-sm font-semibold text-blue-900">
              {b.name}
            </span>
            <div className="flex gap-3 text-xs text-gray-600">
              <span>
                <span className="font-bold text-blue-800">{b.runs}</span> (
                {b.balls})
              </span>
              <span className="text-green-600">SR: {b.sr}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Samachar App
function SamacharApp() {
  const news = [
    {
      title: "राजस्थान में नई मेट्रो परियोजना शुरू",
      sub: "New metro project launched in Rajasthan",
      time: "2 घंटे पहले",
    },
    {
      title: "जयपुर में साहित्य उत्सव का आगाज़",
      sub: "Jaipur Literature Festival begins today",
      time: "3 घंटे पहले",
    },
    {
      title: "भारत ने क्रिकेट में पाकिस्तान को हराया",
      sub: "India defeats Pakistan in T20 World Cup",
      time: "5 घंटे पहले",
    },
    {
      title: "सोने की कीमतें नई ऊंचाई पर",
      sub: "Gold prices reach new heights",
      time: "6 घंटे पहले",
    },
    {
      title: "मानसून जल्द आएगा राजस्थान में",
      sub: "Monsoon expected early in Rajasthan this year",
      time: "8 घंटे पहले",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
        {["सब", "राजनीति", "खेल", "व्यापार", "मनोरंजन"].map((cat, i) => (
          <div
            key={cat}
            className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer"
            style={{
              background:
                i === 0
                  ? "linear-gradient(135deg, #1A237E, #283593)"
                  : "rgba(26,35,126,0.1)",
              color: i === 0 ? "white" : "#1A237E",
              fontFamily: "'Noto Sans Devanagari', sans-serif",
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      {news.map((item) => (
        <div
          key={item.title}
          className="mb-3 p-3 rounded-xl cursor-pointer active:scale-98 transition-transform"
          style={{
            background: "white",
            border: "1px solid rgba(26,35,126,0.1)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <p
            className="text-sm font-bold text-gray-800 leading-tight mb-1"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            {item.title}
          </p>
          <p className="text-xs text-gray-500 mb-1">{item.sub}</p>
          <p
            className="text-xs text-blue-400"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            🕐 {item.time}
          </p>
        </div>
      ))}
    </div>
  );
}

// Panchang App
function PanchangApp() {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #BF360C, #E64A19, #FF6B2B)",
        }}
      >
        <p
          className="text-xs text-white/70"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          आज का पंचांग • Today's Panchang
        </p>
        <p
          className="text-lg font-bold mt-1"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          फाल्गुन शुक्ल द्वादशी
        </p>
        <p className="text-sm text-white/80">Phalgun Shukla Dwadashi</p>
        <p className="text-xs text-white/60 mt-1">Vikram Samvat 2082</p>
      </div>

      {[
        { label: "तिथि", hindi: "द्वादशी", eng: "Dwadashi (12th)" },
        { label: "वार", hindi: "रविवार", eng: "Sunday" },
        { label: "नक्षत्र", hindi: "आश्लेषा", eng: "Ashlesha" },
        { label: "योग", hindi: "ब्रह्म", eng: "Brahma Yoga" },
        { label: "करण", hindi: "तैतिल", eng: "Taitila" },
        { label: "सूर्योदय", hindi: "०६:५२", eng: "06:52 AM" },
        { label: "सूर्यास्त", hindi: "१८:३५", eng: "06:35 PM" },
        { label: "राहुकाल", hindi: "१२:१५ - १:४५", eng: "12:15 - 1:45 PM" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between p-3 rounded-xl"
          style={{
            background: "rgba(191,54,12,0.07)",
            border: "1px solid rgba(191,54,12,0.12)",
          }}
        >
          <span
            className="text-xs font-bold text-orange-900"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            {item.label}
          </span>
          <div className="text-right">
            <p
              className="text-xs font-semibold text-orange-800"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              {item.hindi}
            </p>
            <p className="text-xs text-gray-400">{item.eng}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Generic "Coming Soon" App
function ComingSoonApp({ app }: { app: App }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-5 p-6">
      <div
        className="w-24 h-24 rounded-3xl flex items-center justify-center"
        style={{
          background: app.color,
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        }}
      >
        <span style={{ fontSize: "3rem" }}>{app.icon}</span>
      </div>
      <div className="text-center">
        <h2
          className="text-xl font-bold text-gray-800"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          जल्द आ रहा है
        </h2>
        <p className="text-gray-500 mt-1">Coming Soon</p>
        <p className="text-sm text-gray-400 mt-2">
          {app.name} • {app.hindiName}
        </p>
      </div>
      <div
        className="px-4 py-2 rounded-xl text-sm font-medium"
        style={{ background: "rgba(0,0,0,0.06)", color: "#666" }}
      >
        🚧 Under Construction • निर्माणाधीन
      </div>
    </div>
  );
}

interface AppViewProps {
  app: App;
  onBack: () => void;
}

const APP_CONTENT_MAP: Record<string, () => ReactElement> = {
  "1": () => <UpiPayApp />,
  "2": () => <DukaanApp />,
  "4": () => <MandirApp />,
  "5": () => <CricketApp />,
  "6": () => <SamacharApp />,
  "7": () => <PanchangApp />,
};

export function AppView({ app, onBack }: AppViewProps) {
  const appIdStr = app.id.toString();
  const ContentComponent = APP_CONTENT_MAP[appIdStr];

  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex flex-col bg-gray-50 overflow-hidden"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 350, damping: 35 }}
    >
      {/* App header */}
      <div
        className="flex items-center gap-3 px-4 py-3 text-white relative"
        style={{
          background: app.color,
          boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          minHeight: "56px",
        }}
      >
        {/* Shine */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 60%)",
          }}
        />

        <button
          type="button"
          onClick={onBack}
          className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center active:scale-90 transition-transform"
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <span style={{ fontSize: "14px" }}>←</span>
        </button>

        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-2">
            <span style={{ fontSize: "20px" }}>{app.icon}</span>
            <div>
              <p className="text-sm font-bold leading-tight">{app.name}</p>
              <p
                className="text-white/80 leading-tight"
                style={{
                  fontSize: "11px",
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                }}
              >
                {app.hindiName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* App content */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
        {ContentComponent ? <ContentComponent /> : <ComingSoonApp app={app} />}
      </div>
    </motion.div>
  );
}

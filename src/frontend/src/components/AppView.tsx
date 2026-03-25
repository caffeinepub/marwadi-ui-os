import { AnimatePresence, motion } from "motion/react";
import { type ReactElement, useState } from "react";
import type { App } from "../backend.d";

const HINDI_FONT = "'Noto Sans Devanagari', sans-serif";

// ─── 1. UPI Pay App ───────────────────────────────────────────────────────────
function UpiPayApp() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #FF6B2B, #FF8C42, #E91E8C)",
          boxShadow: "0 8px 24px rgba(255,107,43,0.4)",
        }}
      >
        <p className="text-white/70 text-sm" style={{ fontFamily: HINDI_FONT }}>
          मेरा बैलेंस • My Balance
        </p>
        <p className="text-3xl font-bold mt-1">₹ 12,450.00</p>
        <p className="text-white/60 text-xs mt-2">HDFC Bank ••••4521</p>
      </div>
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
              style={{ fontFamily: HINDI_FONT }}
            >
              {btn.label}
            </span>
            <span className="text-xs text-gray-500">{btn.sub}</span>
          </div>
        ))}
      </div>
      <div>
        <p
          className="text-sm font-semibold text-gray-600 mb-2"
          style={{ fontFamily: HINDI_FONT }}
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
                  style={{ fontFamily: HINDI_FONT }}
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

// ─── 2. Dukaan App ────────────────────────────────────────────────────────────
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
                style={{ fontFamily: HINDI_FONT }}
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

// ─── 3. Sabzi Mandi App ───────────────────────────────────────────────────────
function SabziMandiApp() {
  const veggies = [
    { name: "Tomato", hindi: "टमाटर", emoji: "🍅", price: 40, unit: "kg" },
    { name: "Potato", hindi: "आलू", emoji: "🥔", price: 25, unit: "kg" },
    { name: "Onion", hindi: "प्याज", emoji: "🧅", price: 35, unit: "kg" },
    { name: "Spinach", hindi: "पालक", emoji: "🌿", price: 30, unit: "kg" },
    { name: "Carrot", hindi: "गाजर", emoji: "🥕", price: 45, unit: "kg" },
    {
      name: "Cauliflower",
      hindi: "फूलगोभी",
      emoji: "🥦",
      price: 50,
      unit: "kg",
    },
  ];
  const [qty, setQty] = useState<Record<string, number>>({});
  const [ordered, setOrdered] = useState(false);

  const total = veggies.reduce(
    (sum, v) => sum + (qty[v.name] ?? 0) * v.price,
    0,
  );

  const updateQty = (name: string, delta: number) => {
    setQty((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] ?? 0) + delta),
    }));
  };

  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <h2
          className="font-bold text-green-800"
          style={{ fontFamily: HINDI_FONT }}
        >
          ताज़ी सब्ज़ियाँ • Fresh Vegetables
        </h2>
        <span className="text-xs text-green-600 font-semibold">जयपुर मंडी</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {veggies.map((v) => (
          <div
            key={v.name}
            className="rounded-2xl p-3"
            style={{
              background: "rgba(46,125,50,0.07)",
              border: "1px solid rgba(46,125,50,0.18)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span style={{ fontSize: "1.8rem" }}>{v.emoji}</span>
              <div>
                <p
                  className="text-xs font-bold text-green-900"
                  style={{ fontFamily: HINDI_FONT }}
                >
                  {v.hindi}
                </p>
                <p className="text-xs text-gray-500">{v.name}</p>
                <p className="text-xs font-bold text-green-700">
                  ₹{v.price}/{v.unit}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="w-7 h-7 rounded-full bg-green-100 text-green-700 font-bold text-lg flex items-center justify-center active:scale-90 transition-transform"
                onClick={() => updateQty(v.name, -1)}
              >
                −
              </button>
              <span className="font-bold text-green-800 text-sm">
                {qty[v.name] ?? 0}
              </span>
              <button
                type="button"
                className="w-7 h-7 rounded-full bg-green-600 text-white font-bold text-lg flex items-center justify-center active:scale-90 transition-transform"
                onClick={() => updateQty(v.name, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart total */}
      <div
        className="rounded-2xl p-4 flex items-center justify-between mt-2"
        style={{
          background: "linear-gradient(135deg, #2E7D32, #43A047)",
          color: "white",
        }}
      >
        <div>
          <p
            className="text-xs text-white/70"
            style={{ fontFamily: HINDI_FONT }}
          >
            कुल • Total
          </p>
          <p className="text-2xl font-bold">₹{total}</p>
        </div>
        <AnimatePresence mode="wait">
          {ordered ? (
            <motion.div
              key="confirmed"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-4 py-2 rounded-xl bg-white text-green-700 font-bold text-sm"
            >
              ✅ ऑर्डर हो गया!
            </motion.div>
          ) : (
            <motion.button
              key="order"
              type="button"
              className="px-4 py-2 rounded-xl bg-white text-green-700 font-bold text-sm active:scale-95 transition-transform"
              style={{ fontFamily: HINDI_FONT }}
              onClick={() => total > 0 && setOrdered(true)}
            >
              ऑर्डर करें
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── 4. Mandir App ────────────────────────────────────────────────────────────
function MandirApp() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
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
          style={{ fontFamily: HINDI_FONT }}
        >
          जय श्री राम
        </h2>
        <p className="text-gray-500 text-sm">Jai Shri Ram</p>
      </div>
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
          style={{ fontFamily: HINDI_FONT }}
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
                style={{ fontFamily: HINDI_FONT }}
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
          style={{ fontFamily: HINDI_FONT }}
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

// ─── 5. Cricket App ───────────────────────────────────────────────────────────
function CricketApp() {
  return (
    <div className="p-4 flex flex-col gap-4">
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
      <div>
        <p
          className="text-sm font-bold text-blue-900 mb-2"
          style={{ fontFamily: HINDI_FONT }}
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

// ─── 6. Samachar App ──────────────────────────────────────────────────────────
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
              fontFamily: HINDI_FONT,
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
            style={{ fontFamily: HINDI_FONT }}
          >
            {item.title}
          </p>
          <p className="text-xs text-gray-500 mb-1">{item.sub}</p>
          <p
            className="text-xs text-blue-400"
            style={{ fontFamily: HINDI_FONT }}
          >
            🕐 {item.time}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── 7. Panchang App ──────────────────────────────────────────────────────────
function PanchangApp() {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #BF360C, #E64A19, #FF6B2B)",
        }}
      >
        <p className="text-xs text-white/70" style={{ fontFamily: HINDI_FONT }}>
          आज का पंचांग • Today's Panchang
        </p>
        <p
          className="text-lg font-bold mt-1"
          style={{ fontFamily: HINDI_FONT }}
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
            style={{ fontFamily: HINDI_FONT }}
          >
            {item.label}
          </span>
          <div className="text-right">
            <p
              className="text-xs font-semibold text-orange-800"
              style={{ fontFamily: HINDI_FONT }}
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

// ─── 8. Phone App ─────────────────────────────────────────────────────────────
function PhoneApp() {
  const [display, setDisplay] = useState("");
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  return (
    <div className="flex flex-col h-full">
      {/* Display */}
      <div className="px-6 pt-5 pb-2 text-center">
        <p className="text-3xl font-bold text-gray-800 tracking-widest min-h-10">
          {display || <span className="text-gray-300">•••</span>}
        </p>
      </div>

      {/* Recent calls */}
      <div className="px-4 pb-3">
        <p
          className="text-xs font-bold text-gray-500 mb-2"
          style={{ fontFamily: HINDI_FONT }}
        >
          हाल की कॉल्स • Recent Calls
        </p>
        {[
          {
            name: "माँ (Maa)",
            time: "2 मिनट पहले",
            icon: "👩",
            color: "#E91E8C",
          },
          {
            name: "पिताजी (Papa)",
            time: "1 घंटे पहले",
            icon: "👨",
            color: "#1565C0",
          },
          {
            name: "रामू भाई (Ramu Bhai)",
            time: "कल",
            icon: "🧑",
            color: "#2E7D32",
          },
        ].map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0"
          >
            <span style={{ fontSize: "1.4rem" }}>{c.icon}</span>
            <div className="flex-1">
              <p
                className="text-sm font-semibold text-gray-800"
                style={{ fontFamily: HINDI_FONT }}
              >
                {c.name}
              </p>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: HINDI_FONT }}
              >
                {c.time}
              </p>
            </div>
            <span className="text-xs" style={{ color: c.color }}>
              📞
            </span>
          </div>
        ))}
      </div>

      {/* Dial pad */}
      <div className="px-6 pb-2 grid grid-cols-3 gap-2">
        {keys.map((k) => (
          <button
            key={k}
            type="button"
            className="h-12 rounded-2xl font-bold text-lg text-gray-800 active:scale-90 transition-transform"
            style={{
              background: "rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
            onClick={() => setDisplay((d) => (d + k).slice(0, 12))}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Call button */}
      <div className="flex justify-center gap-6 px-6 pb-4">
        <button
          type="button"
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl active:scale-90 transition-transform"
          style={{
            background: "linear-gradient(135deg, #1B5E20, #2E7D32)",
            boxShadow: "0 4px 16px rgba(46,125,50,0.4)",
          }}
        >
          📞
        </button>
        {display.length > 0 && (
          <button
            type="button"
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl active:scale-90 transition-transform"
            style={{ background: "rgba(0,0,0,0.08)" }}
            onClick={() => setDisplay((d) => d.slice(0, -1))}
          >
            ⌫
          </button>
        )}
      </div>
    </div>
  );
}

// ─── 9. Messages App ──────────────────────────────────────────────────────────
const CONVERSATIONS = [
  {
    id: 1,
    name: "माँ (Maa)",
    avatar: "👩",
    preview: "खाना खाया क्या?",
    time: "अभी",
    messages: [
      { from: "them", text: "बेटा, कैसे हो?" },
      { from: "me", text: "ठीक हूँ माँ! आप सुनाओ" },
      { from: "them", text: "खाना खाया क्या?" },
      { from: "me", text: "हाँ माँ, अभी खाया" },
    ],
  },
  {
    id: 2,
    name: "राजू भाई (Raju Bhai)",
    avatar: "🧑",
    preview: "कल मिलते हैं यार",
    time: "10 मिनट",
    messages: [
      { from: "them", text: "भाई क्या हाल है?" },
      { from: "me", text: "बढ़िया भाई!" },
      { from: "them", text: "कल मिलते हैं यार" },
    ],
  },
  {
    id: 3,
    name: "सुनीता जी (Sunita Ji)",
    avatar: "👩‍💼",
    preview: "जी ज़रूर, नमस्ते",
    time: "कल",
    messages: [
      { from: "them", text: "नमस्ते! कल meeting है" },
      { from: "me", text: "जी ज़रूर, नमस्ते" },
    ],
  },
];

function MessagesApp() {
  const [selected, setSelected] = useState<(typeof CONVERSATIONS)[0] | null>(
    null,
  );

  if (selected) {
    return (
      <div className="flex flex-col h-full">
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{
            background: "rgba(13,71,161,0.07)",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <button
            type="button"
            className="text-blue-600 font-bold"
            onClick={() => setSelected(null)}
          >
            ← वापस
          </button>
          <span style={{ fontSize: "1.5rem" }}>{selected.avatar}</span>
          <span
            className="font-bold text-gray-800 text-sm"
            style={{ fontFamily: HINDI_FONT }}
          >
            {selected.name}
          </span>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-3 flex flex-col gap-2">
          {selected.messages.map((m, i) => (
            <div
              key={`${m.from}-${i}`}
              className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className="max-w-[75%] px-3 py-2 rounded-2xl text-sm"
                style={{
                  background:
                    m.from === "me"
                      ? "linear-gradient(135deg, #0D47A1, #1565C0)"
                      : "rgba(0,0,0,0.07)",
                  color: m.from === "me" ? "white" : "#111",
                  fontFamily: HINDI_FONT,
                  borderRadius:
                    m.from === "me"
                      ? "18px 18px 4px 18px"
                      : "18px 18px 18px 4px",
                }}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 pb-4 pt-2 flex gap-2">
          <div
            className="flex-1 rounded-full px-4 py-2 text-sm text-gray-400"
            style={{
              background: "rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.1)",
              fontFamily: HINDI_FONT,
            }}
          >
            संदेश लिखें...
          </div>
          <button
            type="button"
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0D47A1, #1565C0)" }}
          >
            <span className="text-white text-sm">→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2
        className="font-bold text-blue-900 mb-3"
        style={{ fontFamily: HINDI_FONT }}
      >
        संदेश • Messages
      </h2>
      {CONVERSATIONS.map((c) => (
        <button
          key={c.id}
          type="button"
          className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0 cursor-pointer active:bg-gray-50 w-full text-left"
          onClick={() => setSelected(c)}
        >
          <div
            className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center"
            style={{ fontSize: "1.5rem" }}
          >
            {c.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="font-semibold text-gray-800 text-sm"
              style={{ fontFamily: HINDI_FONT }}
            >
              {c.name}
            </p>
            <p
              className="text-xs text-gray-400 truncate"
              style={{ fontFamily: HINDI_FONT }}
            >
              {c.preview}
            </p>
          </div>
          <span
            className="text-xs text-gray-400 flex-shrink-0"
            style={{ fontFamily: HINDI_FONT }}
          >
            {c.time}
          </span>
        </button>
      ))}
    </div>
  );
}

// ─── 10. Camera App ───────────────────────────────────────────────────────────
function CameraApp() {
  const [mode, setMode] = useState("फोटो");
  const [captured, setCaptured] = useState(false);

  return (
    <div className="flex flex-col h-full bg-black">
      {/* Viewfinder */}
      <div
        className="flex-1 relative flex items-center justify-center"
        style={{ background: "#111" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "33.33% 33.33%",
          }}
        />
        <div className="relative z-10 text-center">
          {captured ? (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <p className="text-white text-4xl">📸</p>
              <p
                className="text-white/70 text-xs mt-2"
                style={{ fontFamily: HINDI_FONT }}
              >
                फोटो खिंच गई!
              </p>
            </motion.div>
          ) : (
            <p
              className="text-white/20 text-xs"
              style={{ fontFamily: HINDI_FONT }}
            >
              कैमरा तैयार है
            </p>
          )}
        </div>
        {/* Corner markers */}
        {[
          "top-4 left-4",
          "top-4 right-4",
          "bottom-4 left-4",
          "bottom-4 right-4",
        ].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos} w-6 h-6`}
            style={{
              borderColor: "rgba(255,184,0,0.7)",
              borderStyle: "solid",
              borderWidth: pos.includes("top-4 left")
                ? "2px 0 0 2px"
                : pos.includes("top-4 right")
                  ? "2px 2px 0 0"
                  : pos.includes("bottom-4 left")
                    ? "0 0 2px 2px"
                    : "0 2px 2px 0",
            }}
          />
        ))}
      </div>

      {/* Mode selector */}
      <div className="flex justify-center gap-4 py-3 bg-black">
        {["फोटो", "वीडियो", "स्लो-मो"].map((m) => (
          <button
            key={m}
            type="button"
            className="text-xs font-semibold px-3 py-1 rounded-full transition-all"
            style={{
              color: mode === m ? "#FFB800" : "rgba(255,255,255,0.5)",
              fontFamily: HINDI_FONT,
              borderBottom:
                mode === m ? "2px solid #FFB800" : "2px solid transparent",
            }}
            onClick={() => setMode(m)}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Capture button row */}
      <div className="flex items-center justify-around px-8 pb-6 bg-black">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
          🖼️
        </div>
        <button
          type="button"
          className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center active:scale-90 transition-transform"
          style={{ background: captured ? "#FFB800" : "white" }}
          onClick={() => {
            setCaptured(true);
            setTimeout(() => setCaptured(false), 1500);
          }}
        />
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-white text-xs">↻</span>
        </div>
      </div>
    </div>
  );
}

// ─── 11. Weather App ──────────────────────────────────────────────────────────
function WeatherApp() {
  const forecast = [
    { day: "सोम", icon: "☀️", high: 34, low: 22 },
    { day: "मंगल", icon: "⛅", high: 32, low: 21 },
    { day: "बुध", icon: "🌤️", high: 35, low: 23 },
    { day: "गुरु", icon: "☀️", high: 37, low: 24 },
    { day: "शुक्र", icon: "🌦️", high: 30, low: 20 },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Current weather */}
      <div
        className="rounded-2xl p-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #0288D1, #29B6F6, #4FC3F7)",
          boxShadow: "0 8px 24px rgba(2,136,209,0.4)",
        }}
      >
        <p className="text-xs font-semibold text-white/70 mb-1">
          जयपुर, राजस्थान
        </p>
        <p style={{ fontSize: "4rem" }}>☀️</p>
        <p className="text-5xl font-black mt-1">32°</p>
        <p
          className="text-lg font-semibold mt-1"
          style={{ fontFamily: HINDI_FONT }}
        >
          धूप • Sunny
        </p>
        <p
          className="text-xs text-white/60 mt-2"
          style={{ fontFamily: HINDI_FONT }}
        >
          अधिकतम 35° / न्यूनतम 22°
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "हवा", val: "18 km/h", icon: "💨" },
          { label: "नमी", val: "45%", icon: "💧" },
          { label: "UV Index", val: "8 High", icon: "🌡️" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-3 text-center"
            style={{
              background: "rgba(2,136,209,0.1)",
              border: "1px solid rgba(2,136,209,0.2)",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
            <p
              className="text-xs font-bold text-blue-700 mt-1"
              style={{ fontFamily: HINDI_FONT }}
            >
              {s.label}
            </p>
            <p className="text-xs text-gray-600 font-semibold">{s.val}</p>
          </div>
        ))}
      </div>

      {/* 5-day forecast */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "rgba(2,136,209,0.07)",
          border: "1px solid rgba(2,136,209,0.15)",
        }}
      >
        <p
          className="text-xs font-bold text-blue-900 mb-3"
          style={{ fontFamily: HINDI_FONT }}
        >
          5 दिन का पूर्वानुमान
        </p>
        <div className="flex justify-between">
          {forecast.map((f) => (
            <div key={f.day} className="flex flex-col items-center gap-1">
              <span
                className="text-xs text-gray-500 font-semibold"
                style={{ fontFamily: HINDI_FONT }}
              >
                {f.day}
              </span>
              <span style={{ fontSize: "1.4rem" }}>{f.icon}</span>
              <span className="text-xs font-bold text-blue-900">{f.high}°</span>
              <span className="text-xs text-gray-400">{f.low}°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 12. Settings App ─────────────────────────────────────────────────────────
function SettingsApp() {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);

  const sections = [
    {
      title: "नेटवर्क • Network",
      items: [
        {
          icon: "📶",
          label: "Wi-Fi",
          sublabel: wifi ? "चालू (JAIPUR_HOME)" : "बंद",
          toggle: true,
          value: wifi,
          onToggle: setWifi,
        },
        {
          icon: "🔵",
          label: "Bluetooth",
          sublabel: bluetooth ? "चालू" : "बंद",
          toggle: true,
          value: bluetooth,
          onToggle: setBluetooth,
        },
      ],
    },
    {
      title: "सामान्य • General",
      items: [
        {
          icon: "🖥️",
          label: "Display",
          sublabel: "प्रदर्शन / Brightness 80%",
          toggle: false,
          value: false,
          onToggle: () => {},
        },
        {
          icon: "🌐",
          label: "Language",
          sublabel: "हिंदी / Hindi",
          toggle: false,
          value: false,
          onToggle: () => {},
        },
        {
          icon: "ℹ️",
          label: "About",
          sublabel: "Marwadi UI OS v1.0",
          toggle: false,
          value: false,
          onToggle: () => {},
        },
      ],
    },
  ];

  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Profile */}
      <div
        className="flex items-center gap-3 p-4 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,107,43,0.1), rgba(233,30,140,0.08))",
          border: "1px solid rgba(255,107,43,0.2)",
        }}
      >
        <div
          className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center"
          style={{ fontSize: "2rem" }}
        >
          👤
        </div>
        <div>
          <p
            className="font-bold text-gray-800"
            style={{ fontFamily: HINDI_FONT }}
          >
            राम प्रसाद शर्मा
          </p>
          <p className="text-xs text-gray-500">Ram Prasad Sharma</p>
          <p className="text-xs text-orange-600 font-semibold mt-0.5">
            +91 98765 43210
          </p>
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.title}>
          <p
            className="text-xs font-bold text-gray-500 mb-2 px-1"
            style={{ fontFamily: HINDI_FONT }}
          >
            {section.title}
          </p>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {section.items.map((item, idx) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  borderBottom:
                    idx < section.items.length - 1
                      ? "1px solid rgba(0,0,0,0.05)"
                      : "none",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">
                    {item.label}
                  </p>
                  <p
                    className="text-xs text-gray-400"
                    style={{ fontFamily: HINDI_FONT }}
                  >
                    {item.sublabel}
                  </p>
                </div>
                {item.toggle ? (
                  <button
                    type="button"
                    className="w-10 h-6 rounded-full transition-all duration-200 relative"
                    style={{ background: item.value ? "#FF6B2B" : "#ddd" }}
                    onClick={() => item.onToggle(!item.value)}
                  >
                    <div
                      className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200"
                      style={{ left: item.value ? "22px" : "2px" }}
                    />
                  </button>
                ) : (
                  <span className="text-gray-300 text-sm">›</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 13. Maps App ─────────────────────────────────────────────────────────────
function MapsApp() {
  const [popup, setPopup] = useState<string | null>(null);

  const landmarks = [
    {
      id: "hw",
      emoji: "🛕",
      name: "Hawa Mahal",
      hindi: "हवा महल",
      top: "25%",
      left: "52%",
    },
    {
      id: "cp",
      emoji: "🏛️",
      name: "City Palace",
      hindi: "सिटी पैलेस",
      top: "35%",
      left: "40%",
    },
    {
      id: "jb",
      emoji: "🛍️",
      name: "Johari Bazaar",
      hindi: "जौहरी बाज़ार",
      top: "45%",
      left: "58%",
    },
    {
      id: "cd",
      emoji: "🎪",
      name: "Chokhi Dhani",
      hindi: "चोखी ढाणी",
      top: "65%",
      left: "35%",
    },
  ];

  return (
    <div className="flex flex-col gap-3 p-4">
      <div
        className="flex items-center gap-2 rounded-xl px-3 py-2"
        style={{
          background: "rgba(0,105,92,0.08)",
          border: "1px solid rgba(0,105,92,0.2)",
        }}
      >
        <span>🔍</span>
        <span
          className="text-sm text-gray-400"
          style={{ fontFamily: HINDI_FONT }}
        >
          जयपुर, राजस्थान खोजें...
        </span>
      </div>

      {/* Map canvas */}
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{
          height: "280px",
          background: "#e8f5e9",
          border: "2px solid rgba(0,105,92,0.2)",
        }}
      >
        {/* Street grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,105,92,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,105,92,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Main roads */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,105,92,0.25) 2px, transparent 2px), linear-gradient(90deg, rgba(0,105,92,0.25) 2px, transparent 2px)",
            backgroundSize: "120px 120px",
          }}
        />
        {/* Label */}
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded-lg"
          style={{ background: "rgba(0,105,92,0.85)" }}
        >
          <span
            className="text-white text-xs font-bold"
            style={{ fontFamily: HINDI_FONT }}
          >
            जयपुर • Jaipur
          </span>
        </div>

        {/* Landmarks */}
        {landmarks.map((lm) => (
          <button
            key={lm.id}
            type="button"
            className="absolute cursor-pointer bg-transparent border-0 p-0"
            style={{
              top: lm.top,
              left: lm.left,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => setPopup(popup === lm.id ? null : lm.id)}
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
                style={{
                  background: "white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                  border: "2px solid #00695C",
                }}
              >
                {lm.emoji}
              </div>
            </motion.div>
            <AnimatePresence>
              {popup === lm.id && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.9 }}
                  animate={{ opacity: 1, y: -6, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-28 rounded-xl px-2 py-1.5 text-center z-10"
                  style={{
                    background: "white",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(0,105,92,0.3)",
                  }}
                >
                  <p
                    className="text-xs font-bold text-teal-800"
                    style={{ fontFamily: HINDI_FONT }}
                  >
                    {lm.hindi}
                  </p>
                  <p className="text-xs text-gray-500">{lm.name}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {landmarks.map((lm) => (
          <div
            key={lm.id}
            className="flex items-center gap-2 p-2 rounded-xl"
            style={{
              background: "rgba(0,105,92,0.07)",
              border: "1px solid rgba(0,105,92,0.15)",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>{lm.emoji}</span>
            <div>
              <p
                className="text-xs font-bold text-teal-800"
                style={{ fontFamily: HINDI_FONT }}
              >
                {lm.hindi}
              </p>
              <p className="text-xs text-gray-400">{lm.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 14. Music App ────────────────────────────────────────────────────────────
function MusicApp() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const playlist = [
    { title: "केसरिया बालम", artist: "राजस्थानी बैंड" },
    { title: "म्हारो देश राजस्थान", artist: "फोक ग्रुप" },
    { title: "पधारो म्हारे देस", artist: "सुरताल" },
    { title: "घूमर घूमे रे", artist: "राजस्थानी बैंड" },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Album art */}
      <div className="flex justify-center">
        <motion.div
          className="w-40 h-40 rounded-3xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #6A1B9A, #8E24AA, #E91E8C)",
            boxShadow: "0 12px 40px rgba(106,27,154,0.4)",
          }}
          animate={{ rotate: playing ? 360 : 0 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <span style={{ fontSize: "4rem" }}>🎵</span>
        </motion.div>
      </div>

      {/* Track info */}
      <div className="text-center">
        <p
          className="font-bold text-gray-800 text-lg"
          style={{ fontFamily: HINDI_FONT }}
        >
          मारवाड़ी लोकगीत
        </p>
        <p className="text-sm text-gray-500" style={{ fontFamily: HINDI_FONT }}>
          राजस्थानी बैंड
        </p>
      </div>

      {/* Progress bar */}
      <div>
        <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #6A1B9A, #E91E8C)",
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1:24</span>
          <span>4:05</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-around px-6">
        <button
          type="button"
          className="text-2xl active:scale-90 transition-transform"
        >
          ⏮
        </button>
        <button
          type="button"
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl active:scale-90 transition-transform"
          style={{
            background: "linear-gradient(135deg, #6A1B9A, #E91E8C)",
            boxShadow: "0 4px 16px rgba(106,27,154,0.4)",
          }}
          onClick={() => {
            setPlaying((p) => !p);
            setProgress((p) => (p + 5) % 100);
          }}
        >
          <span className="text-white">{playing ? "⏸" : "▶"}</span>
        </button>
        <button
          type="button"
          className="text-2xl active:scale-90 transition-transform"
        >
          ⏭
        </button>
      </div>

      {/* Playlist */}
      <div>
        <p
          className="text-xs font-bold text-gray-500 mb-2"
          style={{ fontFamily: HINDI_FONT }}
        >
          प्लेलिस्ट • Playlist
        </p>
        {playlist.map((song, i) => (
          <div
            key={song.title}
            className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0 cursor-pointer"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, #6A1B9A, #E91E8C)",
                color: "white",
              }}
            >
              {i + 1}
            </div>
            <div className="flex-1">
              <p
                className="text-xs font-bold text-gray-800"
                style={{ fontFamily: HINDI_FONT }}
              >
                {song.title}
              </p>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: HINDI_FONT }}
              >
                {song.artist}
              </p>
            </div>
            <span className="text-gray-300">▶</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 15. Rickshaw App ─────────────────────────────────────────────────────────
function RickshawApp() {
  const [destination, setDestination] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const vehicles = [
    {
      id: "auto",
      name: "Auto Rickshaw",
      hindi: "ऑटो",
      icon: "🛺",
      price: 30,
      time: "5 मिनट",
    },
    {
      id: "erickshaw",
      name: "E-Rickshaw",
      hindi: "ई-रिक्शा",
      icon: "⚡",
      price: 25,
      time: "8 मिनट",
    },
    {
      id: "bike",
      name: "Bike",
      hindi: "बाइक",
      icon: "🏍️",
      price: 20,
      time: "4 मिनट",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Location inputs */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "rgba(245,127,23,0.07)",
          border: "1px solid rgba(245,127,23,0.2)",
        }}
      >
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-orange-100">
          <span className="text-green-500 text-lg">●</span>
          <div
            className="flex-1 text-sm font-semibold text-gray-800"
            style={{ fontFamily: HINDI_FONT }}
          >
            घर (Home) — जयपुर
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-lg">●</span>
          <input
            type="text"
            placeholder="कहाँ जाना है? Where to go?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="flex-1 text-sm outline-none bg-transparent"
            style={{ fontFamily: HINDI_FONT, color: "#333" }}
          />
        </div>
      </div>

      {/* Map placeholder */}
      <div
        className="rounded-2xl h-28 flex items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #e8f5e9, #e3f2fd)",
          border: "1px solid rgba(245,127,23,0.15)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,127,23,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,127,23,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl">🏠</span>
            <span
              className="text-xs text-gray-600"
              style={{ fontFamily: HINDI_FONT }}
            >
              घर
            </span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-4 h-0.5 rounded-full"
                style={{ background: "#F57F17", opacity: 0.6 + i * 0.1 }}
              />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl">📍</span>
            <span
              className="text-xs text-gray-600"
              style={{ fontFamily: HINDI_FONT }}
            >
              गंतव्य
            </span>
          </div>
        </div>
      </div>

      {/* Vehicle options */}
      <div className="flex flex-col gap-2">
        {vehicles.map((v) => (
          <button
            key={v.id}
            type="button"
            className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all active:scale-95 text-left w-full"
            style={{
              background: selected === v.id ? "rgba(245,127,23,0.12)" : "white",
              border:
                selected === v.id
                  ? "2px solid #F57F17"
                  : "1px solid rgba(0,0,0,0.08)",
              boxShadow:
                selected === v.id ? "0 2px 12px rgba(245,127,23,0.2)" : "none",
            }}
            onClick={() => setSelected(v.id)}
          >
            <span style={{ fontSize: "1.8rem" }}>{v.icon}</span>
            <div className="flex-1">
              <p
                className="font-bold text-gray-800 text-sm"
                style={{ fontFamily: HINDI_FONT }}
              >
                {v.hindi}
              </p>
              <p className="text-xs text-gray-400">
                {v.name} • {v.time}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-orange-600">₹{v.price}</p>
              <p className="text-xs text-gray-400">est.</p>
            </div>
          </button>
        ))}
      </div>

      {/* Book button */}
      <AnimatePresence mode="wait">
        {booked ? (
          <motion.div
            key="confirmed"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-2xl p-4 text-center text-white font-bold"
            style={{ background: "linear-gradient(135deg, #1B5E20, #2E7D32)" }}
          >
            <p style={{ fontFamily: HINDI_FONT }}>✅ बुकिंग हो गई!</p>
            <p className="text-sm font-normal text-white/80">
              Booking Confirmed!
            </p>
          </motion.div>
        ) : (
          <button
            type="button"
            className="rounded-2xl p-4 text-white font-bold text-center active:scale-95 transition-transform"
            style={{
              background: selected
                ? "linear-gradient(135deg, #F57F17, #F9A825)"
                : "rgba(0,0,0,0.1)",
              color: selected ? "white" : "#aaa",
              fontFamily: HINDI_FONT,
            }}
            onClick={() => selected && setBooked(true)}
          >
            बुक करें • Book Ride
          </button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── 16. Chai App ─────────────────────────────────────────────────────────────
function ChaiApp() {
  const teas = [
    { name: "Masala Chai", hindi: "मसाला चाय", price: 15, icon: "☕" },
    { name: "Adrak Chai", hindi: "अदरक चाय", price: 18, icon: "🫚" },
    { name: "Elaichi Chai", hindi: "इलाइची चाय", price: 20, icon: "🌿" },
    { name: "Tulsi Chai", hindi: "तुलसी चाय", price: 18, icon: "🍃" },
    { name: "Cutting Chai", hindi: "कटिंग चाय", price: 12, icon: "🫖" },
    {
      name: "Special Marwadi Chai",
      hindi: "स्पेशल मारवाड़ी चाय",
      price: 25,
      icon: "⭐",
    },
  ];
  const [qty, setQty] = useState<Record<string, number>>({});
  const [ordered, setOrdered] = useState(false);

  const total = teas.reduce((sum, t) => sum + (qty[t.name] ?? 0) * t.price, 0);

  const updateQty = (name: string, delta: number) => {
    setQty((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] ?? 0) + delta),
    }));
  };

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="text-center mb-1">
        <p
          className="text-2xl font-bold text-amber-900"
          style={{ fontFamily: HINDI_FONT }}
        >
          चायवाला ☕
        </p>
        <p className="text-xs text-gray-500">Marwadi Chai House</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {teas.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl p-3"
            style={{
              background: "rgba(78,52,46,0.07)",
              border: "1px solid rgba(78,52,46,0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span style={{ fontSize: "1.6rem" }}>{t.icon}</span>
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs font-bold text-amber-900 leading-tight"
                  style={{ fontFamily: HINDI_FONT }}
                >
                  {t.hindi}
                </p>
                <p className="text-xs text-gray-400 truncate">{t.name}</p>
                <p className="text-xs font-bold text-amber-700">₹{t.price}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 font-bold text-base flex items-center justify-center active:scale-90 transition-transform"
                onClick={() => updateQty(t.name, -1)}
              >
                −
              </button>
              <span className="font-bold text-amber-900 text-sm">
                {qty[t.name] ?? 0}
              </span>
              <button
                type="button"
                className="w-6 h-6 rounded-full bg-amber-700 text-white font-bold text-base flex items-center justify-center active:scale-90 transition-transform"
                onClick={() => updateQty(t.name, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div
        className="rounded-2xl p-4 flex items-center justify-between"
        style={{
          background: "linear-gradient(135deg, #4E342E, #6D4C41)",
          color: "white",
        }}
      >
        <div>
          <p
            className="text-xs text-white/70"
            style={{ fontFamily: HINDI_FONT }}
          >
            कुल • Total
          </p>
          <p className="text-2xl font-bold">₹{total}</p>
        </div>
        <AnimatePresence mode="wait">
          {ordered ? (
            <motion.div
              key="done"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-4 py-2 rounded-xl bg-white text-amber-800 font-bold text-sm"
            >
              ☕ आ रही है!
            </motion.div>
          ) : (
            <motion.button
              key="order"
              type="button"
              className="px-4 py-2 rounded-xl bg-white text-amber-800 font-bold text-sm active:scale-95 transition-transform"
              style={{ fontFamily: HINDI_FONT }}
              onClick={() => total > 0 && setOrdered(true)}
            >
              ऑर्डर करें
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── 17. Prototype App ────────────────────────────────────────────────────────
function PrototypeApp() {
  const steps = [
    { label: "Prototype", hindi: "प्रोटोटाइप", done: true },
    { label: "Testing", hindi: "परीक्षण", done: true },
    { label: "Launch", hindi: "लॉन्च", done: false },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Phone mockup card */}
      <div
        className="rounded-2xl p-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #1565C0, #1976D2, #42A5F5)",
          boxShadow: "0 8px 24px rgba(21,101,192,0.4)",
        }}
      >
        <div className="text-5xl mb-3">📱</div>
        <p className="text-xl font-black">Marwad OS Phone</p>
        <p
          className="text-sm text-white/70 mt-1"
          style={{ fontFamily: HINDI_FONT }}
        >
          मारवाड़ मोबाइल
        </p>
        <div className="flex justify-around mt-4">
          {[
            { icon: "🔋", label: "5000 mAh" },
            { icon: "🇮🇳", label: "Made in India" },
            { icon: "💰", label: "₹8,999" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p style={{ fontSize: "1.4rem" }}>{s.icon}</p>
              <p className="text-xs font-semibold mt-1 text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress tracker */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "rgba(21,101,192,0.07)",
          border: "1px solid rgba(21,101,192,0.2)",
        }}
      >
        <p
          className="text-sm font-bold text-blue-900 mb-4"
          style={{ fontFamily: HINDI_FONT }}
        >
          🔬 विकास की स्थिति • Development Status
        </p>
        <div className="relative flex justify-between items-center">
          {/* Progress line */}
          <div className="absolute top-4 left-8 right-8 h-1 bg-gray-200 rounded-full z-0">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: "60%" }}
            />
          </div>
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex flex-col items-center gap-2 z-10"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                style={{
                  background: step.done
                    ? "linear-gradient(135deg, #1565C0, #1976D2)"
                    : "rgba(0,0,0,0.1)",
                  color: step.done ? "white" : "#999",
                  boxShadow: step.done
                    ? "0 2px 8px rgba(21,101,192,0.4)"
                    : "none",
                }}
              >
                {step.done ? "✓" : "→"}
              </div>
              <p
                className="text-xs font-bold text-center text-blue-900"
                style={{ fontFamily: HINDI_FONT }}
              >
                {step.hindi}
              </p>
              <p className="text-xs text-gray-400 text-center">{step.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specs */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: "📷", label: "Camera", val: "64 MP Triple" },
          { icon: "⚡", label: "Processor", val: "Octa-Core 2.4GHz" },
          { icon: "💾", label: "RAM", val: "6GB + 128GB" },
          { icon: "🌐", label: "Network", val: "5G + WiFi 6" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-3"
            style={{
              background: "rgba(21,101,192,0.07)",
              border: "1px solid rgba(21,101,192,0.15)",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
            <p className="text-xs font-bold text-blue-900 mt-1">{s.label}</p>
            <p className="text-xs text-gray-500">{s.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 18. Dealer Network App ───────────────────────────────────────────────────
function DealerNetworkApp() {
  const dealers = [
    { city: "Jaipur", hindi: "जयपुर", status: "Active", dealers: 12 },
    { city: "Jodhpur", hindi: "जोधपुर", status: "Active", dealers: 7 },
    { city: "Udaipur", hindi: "उदयपुर", status: "Active", dealers: 5 },
    { city: "Bikaner", hindi: "बीकानेर", status: "Pending", dealers: 3 },
    { city: "Ajmer", hindi: "अजमेर", status: "Pending", dealers: 2 },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Header stats */}
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #4527A0, #5E35B1, #7E57C2)",
          boxShadow: "0 8px 24px rgba(69,39,160,0.4)",
        }}
      >
        <p
          className="text-xs text-white/70 mb-2"
          style={{ fontFamily: HINDI_FONT }}
        >
          डीलर नेटवर्क • Dealer Network
        </p>
        <div className="flex justify-around">
          <div className="text-center">
            <p className="text-3xl font-black">29</p>
            <p
              className="text-xs text-white/70"
              style={{ fontFamily: HINDI_FONT }}
            >
              कुल डीलर
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">5</p>
            <p
              className="text-xs text-white/70"
              style={{ fontFamily: HINDI_FONT }}
            >
              शहर
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">24</p>
            <p
              className="text-xs text-white/70"
              style={{ fontFamily: HINDI_FONT }}
            >
              सक्रिय
            </p>
          </div>
        </div>
      </div>

      {/* Dealer list */}
      <div className="flex flex-col gap-2">
        {dealers.map((d) => (
          <div
            key={d.city}
            className="flex items-center gap-3 p-3 rounded-2xl"
            style={{
              background: "white",
              border: "1px solid rgba(69,39,160,0.1)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #4527A0, #5E35B1)",
                fontSize: "1.1rem",
              }}
            >
              🏪
            </div>
            <div className="flex-1">
              <p
                className="font-bold text-gray-800 text-sm"
                style={{ fontFamily: HINDI_FONT }}
              >
                {d.hindi}
              </p>
              <p className="text-xs text-gray-400">
                {d.city} • {d.dealers} dealers
              </p>
            </div>
            <span
              className="text-xs font-bold px-2 py-1 rounded-full"
              style={{
                background:
                  d.status === "Active"
                    ? "rgba(27,94,32,0.1)"
                    : "rgba(245,127,23,0.1)",
                color: d.status === "Active" ? "#1B5E20" : "#E65100",
              }}
            >
              {d.status === "Active" ? "सक्रिय" : "पेंडिंग"}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        type="button"
        className="rounded-2xl p-4 text-white font-bold text-center active:scale-95 transition-transform"
        style={{
          background: "linear-gradient(135deg, #4527A0, #5E35B1)",
          fontFamily: HINDI_FONT,
          boxShadow: "0 4px 16px rgba(69,39,160,0.3)",
        }}
      >
        🤝 डीलर बनें • Become a Dealer
      </button>
    </div>
  );
}

// ─── 19. Local Marketing App ──────────────────────────────────────────────────
function LocalMarketingApp() {
  const campaigns = [
    {
      title: "Diwali Sale",
      hindi: "दीवाली सेल",
      status: "चल रही है",
      statusEng: "Active",
      discount: "30%",
      icon: "🪔",
      color: "#E65100",
    },
    {
      title: "Summer Discount",
      hindi: "गर्मियों की छूट",
      status: "आ रही है",
      statusEng: "Upcoming",
      discount: "20%",
      icon: "☀️",
      color: "#F57F17",
    },
    {
      title: "Student Offer",
      hindi: "छात्र ऑफर",
      status: "चल रही है",
      statusEng: "Active",
      discount: "15%",
      icon: "📚",
      color: "#00695C",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between mb-1">
        <p
          className="font-bold text-teal-900"
          style={{ fontFamily: HINDI_FONT }}
        >
          मार्केटिंग अभियान • Campaigns
        </p>
        <button
          type="button"
          className="text-xs font-bold text-teal-600 px-3 py-1 rounded-full"
          style={{ background: "rgba(0,105,92,0.1)" }}
        >
          + नया
        </button>
      </div>

      {campaigns.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="p-4 text-white"
            style={{
              background: `linear-gradient(135deg, ${c.color}, ${c.color}aa)`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                <div>
                  <p className="font-bold" style={{ fontFamily: HINDI_FONT }}>
                    {c.hindi}
                  </p>
                  <p className="text-xs text-white/80">{c.title}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black">{c.discount}</p>
                <p className="text-xs text-white/70">छूट / Off</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-3 bg-white">
            <span
              className="text-xs font-bold px-2 py-1 rounded-full"
              style={{
                background:
                  c.statusEng === "Active"
                    ? "rgba(27,94,32,0.1)"
                    : "rgba(245,127,23,0.1)",
                color: c.statusEng === "Active" ? "#1B5E20" : "#E65100",
                fontFamily: HINDI_FONT,
              }}
            >
              {c.status}
            </span>
            <button
              type="button"
              className="text-xs font-bold text-blue-600 flex items-center gap-1"
            >
              📤 शेयर करें
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 20. Sales & Service App ──────────────────────────────────────────────────
function SalesServiceApp() {
  const bars = [45, 62, 38, 71, 55, 80, 68];
  const days = ["सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि", "रवि"];
  const serviceRequests = [
    {
      id: "SR001",
      issue: "Screen Replacement",
      hindi: "स्क्रीन बदलाव",
      status: "Pending",
      color: "#E65100",
    },
    {
      id: "SR002",
      issue: "Battery Issue",
      hindi: "बैटरी समस्या",
      status: "In Progress",
      color: "#1565C0",
    },
    {
      id: "SR003",
      issue: "Software Update",
      hindi: "सॉफ्टवेयर अपडेट",
      status: "Done",
      color: "#1B5E20",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Dashboard cards */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "आज की बिक्री", val: "47", icon: "📦", color: "#E65100" },
          { label: "Revenue", val: "₹4.2L", icon: "💰", color: "#1565C0" },
          { label: "Customers", val: "156", icon: "👥", color: "#1B5E20" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl p-3 text-center"
            style={{
              background: `${s.color}15`,
              border: `1px solid ${s.color}30`,
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
            <p className="text-lg font-black mt-1" style={{ color: s.color }}>
              {s.val}
            </p>
            <p
              className="text-xs text-gray-500 leading-tight"
              style={{ fontFamily: HINDI_FONT }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "rgba(230,81,0,0.07)",
          border: "1px solid rgba(230,81,0,0.15)",
        }}
      >
        <p
          className="text-xs font-bold text-orange-900 mb-3"
          style={{ fontFamily: HINDI_FONT }}
        >
          📊 साप्ताहिक बिक्री • Weekly Sales
        </p>
        <div
          className="flex items-end justify-between gap-1"
          style={{ height: "80px" }}
        >
          {bars.map((h, i) => (
            <div
              key={days[i]}
              className="flex flex-col items-center gap-1 flex-1"
            >
              <div
                className="rounded-t-md w-full"
                style={{
                  height: `${h}%`,
                  background:
                    i === 5
                      ? "linear-gradient(180deg, #E65100, #EF6C00)"
                      : "rgba(230,81,0,0.3)",
                  minHeight: "4px",
                }}
              />
              <span
                className="text-xs text-gray-400"
                style={{ fontFamily: HINDI_FONT, fontSize: "9px" }}
              >
                {days[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Service requests */}
      <div>
        <p
          className="text-xs font-bold text-gray-500 mb-2"
          style={{ fontFamily: HINDI_FONT }}
        >
          सेवा अनुरोध • Service Requests
        </p>
        {serviceRequests.map((r) => (
          <div
            key={r.id}
            className="flex items-center gap-3 p-3 rounded-xl mb-2"
            style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <span className="text-xs font-mono font-bold text-gray-400">
              {r.id}
            </span>
            <div className="flex-1">
              <p
                className="text-xs font-bold text-gray-800"
                style={{ fontFamily: HINDI_FONT }}
              >
                {r.hindi}
              </p>
              <p className="text-xs text-gray-400">{r.issue}</p>
            </div>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: `${r.color}15`, color: r.color }}
            >
              {r.status === "Done"
                ? "✅ पूर्ण"
                : r.status === "Pending"
                  ? "⏳ पेंडिंग"
                  : "🔄 जारी"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 21. Funding App ──────────────────────────────────────────────────────────
function FundingApp() {
  const raised = 18;
  const goal = 50;
  const pct = Math.round((raised / goal) * 100);
  const investors = [
    { initials: "RS", name: "Ramesh Shah", amount: "₹5L", hindi: "रमेश शाह" },
    { initials: "PJ", name: "Priya Joshi", amount: "₹3L", hindi: "प्रिया जोशी" },
    { initials: "MG", name: "Mahesh Gupta", amount: "₹4L", hindi: "महेश गुप्ता" },
    {
      initials: "SK",
      name: "Sunita Kothari",
      amount: "₹6L",
      hindi: "सुनीता कोठारी",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Funding progress */}
      <div
        className="rounded-2xl p-5 text-white"
        style={{
          background: "linear-gradient(135deg, #1B5E20, #2E7D32, #43A047)",
          boxShadow: "0 8px 24px rgba(27,94,32,0.4)",
        }}
      >
        <p
          className="text-xs text-white/70 mb-1"
          style={{ fontFamily: HINDI_FONT }}
        >
          फंडिंग लक्ष्य • Funding Goal
        </p>
        <p className="text-3xl font-black">₹50 लाख</p>
        <div className="mt-4">
          <div className="flex justify-between text-xs text-white/70 mb-1.5">
            <span style={{ fontFamily: HINDI_FONT }}>जुटाए: ₹{raised} लाख</span>
            <span>{pct}% पूर्ण</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #FFB800, #FF6B2B)" }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Investors */}
      <div>
        <p
          className="text-xs font-bold text-gray-500 mb-2"
          style={{ fontFamily: HINDI_FONT }}
        >
          निवेशक • Investors
        </p>
        {investors.map((inv) => (
          <div
            key={inv.name}
            className="flex items-center gap-3 p-3 rounded-xl mb-2"
            style={{
              background: "white",
              border: "1px solid rgba(27,94,32,0.12)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
              style={{
                background: "linear-gradient(135deg, #1B5E20, #2E7D32)",
              }}
            >
              {inv.initials}
            </div>
            <div className="flex-1">
              <p
                className="text-sm font-bold text-gray-800"
                style={{ fontFamily: HINDI_FONT }}
              >
                {inv.hindi}
              </p>
              <p className="text-xs text-gray-400">{inv.name}</p>
            </div>
            <span className="font-bold text-green-700 text-sm">
              {inv.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Invest CTA */}
      <button
        type="button"
        className="rounded-2xl p-4 text-white font-bold text-center active:scale-95 transition-transform"
        style={{
          background: "linear-gradient(135deg, #1B5E20, #2E7D32)",
          fontFamily: HINDI_FONT,
          boxShadow: "0 4px 16px rgba(27,94,32,0.3)",
        }}
      >
        📈 निवेश करें • Invest Now
      </button>
    </div>
  );
}

// ─── 22. Community App ────────────────────────────────────────────────────────
function CommunityApp() {
  const posts = [
    {
      avatar: "🎆",
      title: "दीपावली उत्सव",
      titleEng: "Diwali Festival",
      body: "इस वर्ष दीपावली का उत्सव बड़े धूमधाम से मनाया गया। हमारे समुदाय के सभी सदस्यों ने भाग लिया।",
      likes: 142,
      time: "2 घंटे पहले",
    },
    {
      avatar: "🏆",
      title: "मारवाड़ी उपलब्धि",
      titleEng: "Community Achievement",
      body: "हमारे समुदाय के बच्चे राष्ट्रीय स्तर पर प्रथम आए! गर्व है हमें।",
      likes: 89,
      time: "5 घंटे पहले",
    },
    {
      avatar: "💬",
      title: "मारवाड़ी कहावत",
      titleEng: "Marwadi Proverb",
      body: '"जो हुआ सो हुआ, आगे की सोच" — जो बीत गया उसकी चिंता छोड़ो, आगे बढ़ो।',
      likes: 217,
      time: "कल",
    },
  ];
  const [likes, setLikes] = useState<Record<number, boolean>>({});

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <p
          className="font-bold text-pink-900"
          style={{ fontFamily: HINDI_FONT }}
        >
          समुदाय • Community
        </p>
        <span
          className="text-xs font-bold text-pink-600 px-3 py-1 rounded-full"
          style={{ background: "rgba(136,14,79,0.1)" }}
        >
          🏘️ Marwad
        </span>
      </div>
      {posts.map((post, i) => (
        <div
          key={post.title}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "white",
            border: "1px solid rgba(136,14,79,0.12)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div className="px-4 pt-4 pb-3">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #880E4F, #AD1457)",
                  fontSize: "1.4rem",
                }}
              >
                {post.avatar}
              </div>
              <div>
                <p
                  className="font-bold text-gray-800 text-sm"
                  style={{ fontFamily: HINDI_FONT }}
                >
                  {post.title}
                </p>
                <p className="text-xs text-gray-400">{post.titleEng}</p>
              </div>
              <span
                className="ml-auto text-xs text-gray-400"
                style={{ fontFamily: HINDI_FONT }}
              >
                {post.time}
              </span>
            </div>
            <p
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: HINDI_FONT }}
            >
              {post.body}
            </p>
          </div>
          <div
            className="flex items-center gap-4 px-4 py-3"
            style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
          >
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
              style={{ color: likes[i] ? "#AD1457" : "#888" }}
              onClick={() => setLikes((prev) => ({ ...prev, [i]: !prev[i] }))}
            >
              {likes[i] ? "❤️" : "🤍"} {post.likes + (likes[i] ? 1 : 0)} पसंद
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500"
            >
              📤 शेयर
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 23. Grand Launch App ─────────────────────────────────────────────────────
function GrandLaunchApp() {
  const [registered, setRegistered] = useState(false);

  // Countdown: fixed to a future date
  const targetDate = new Date("2026-04-15T10:00:00");
  const now = new Date();
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const offers = [
    {
      icon: "🎁",
      label: "Early Bird Discount",
      hindi: "अर्ली बर्ड छूट",
      val: "25% Off",
    },
    {
      icon: "🆓",
      label: "Free Accessories",
      hindi: "मुफ्त एक्सेसरीज़",
      val: "Worth ₹499",
    },
    {
      icon: "🤝",
      label: "Exchange Offer",
      hindi: "एक्सचेंज ऑफर",
      val: "Extra ₹1000",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Hero banner */}
      <div
        className="rounded-2xl p-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #F57F17, #F9A825, #FFB800)",
          boxShadow: "0 8px 24px rgba(245,127,23,0.5)",
        }}
      >
        <p style={{ fontSize: "2.5rem" }}>🎉</p>
        <p
          className="text-xl font-black mt-2"
          style={{ fontFamily: HINDI_FONT }}
        >
          भव्य लॉन्च
        </p>
        <p className="text-sm font-bold text-white/90">
          Marwadi Mobile Grand Launch
        </p>
        <p className="text-xs text-white/70 mt-1">🏛️ Jaipur • 15 April 2026</p>
      </div>

      {/* Countdown */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "rgba(245,127,23,0.08)",
          border: "1px solid rgba(245,127,23,0.25)",
        }}
      >
        <p
          className="text-xs font-bold text-center text-orange-800 mb-3"
          style={{ fontFamily: HINDI_FONT }}
        >
          ⏳ गिनती • Countdown
        </p>
        <div className="flex justify-around">
          {[
            { val: days, label: "दिन", eng: "Days" },
            { val: hours, label: "घंटे", eng: "Hours" },
            { val: minutes, label: "मिनट", eng: "Min" },
          ].map((c) => (
            <div key={c.eng} className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto"
                style={{
                  background: "linear-gradient(135deg, #F57F17, #F9A825)",
                }}
              >
                <p className="text-white font-black text-xl">
                  {String(c.val).padStart(2, "0")}
                </p>
              </div>
              <p
                className="text-xs text-orange-700 font-semibold mt-1"
                style={{ fontFamily: HINDI_FONT }}
              >
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Special offers */}
      <div>
        <p
          className="text-xs font-bold text-gray-500 mb-2"
          style={{ fontFamily: HINDI_FONT }}
        >
          🌟 विशेष ऑफर • Special Offers
        </p>
        {offers.map((o) => (
          <div
            key={o.label}
            className="flex items-center gap-3 p-3 rounded-xl mb-2"
            style={{
              background: "rgba(245,127,23,0.07)",
              border: "1px solid rgba(245,127,23,0.15)",
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>{o.icon}</span>
            <div className="flex-1">
              <p
                className="text-sm font-bold text-orange-900"
                style={{ fontFamily: HINDI_FONT }}
              >
                {o.hindi}
              </p>
              <p className="text-xs text-gray-400">{o.label}</p>
            </div>
            <span className="text-xs font-bold text-orange-600">{o.val}</span>
          </div>
        ))}
      </div>

      {/* Register button */}
      <AnimatePresence mode="wait">
        {registered ? (
          <motion.div
            key="done"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-2xl p-4 text-white text-center font-bold"
            style={{ background: "linear-gradient(135deg, #1B5E20, #2E7D32)" }}
          >
            <p style={{ fontFamily: HINDI_FONT }}>✅ पंजीकृत हो गए!</p>
            <p className="text-sm font-normal text-white/80">
              Successfully Registered!
            </p>
          </motion.div>
        ) : (
          <button
            type="button"
            className="rounded-2xl p-4 text-white font-bold text-center active:scale-95 transition-transform"
            style={{
              background: "linear-gradient(135deg, #F57F17, #F9A825)",
              fontFamily: HINDI_FONT,
              boxShadow: "0 4px 16px rgba(245,127,23,0.4)",
            }}
            onClick={() => setRegistered(true)}
          >
            🎟️ रजिस्टर करें • Register
          </button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── 24. Smart Store App ──────────────────────────────────────────────────────
function SmartStoreApp() {
  const products = [
    {
      name: "Phone Case",
      hindi: "फोन कवर",
      price: 299,
      icon: "📱",
      color: "#212121",
    },
    {
      name: "Earbuds",
      hindi: "ईयरबड्स",
      price: 999,
      icon: "🎧",
      color: "#424242",
    },
    {
      name: "Power Bank",
      hindi: "पावर बैंक",
      price: 1499,
      icon: "🔋",
      color: "#333",
    },
    { name: "Charger", hindi: "चार्जर", price: 449, icon: "⚡", color: "#555" },
  ];
  const [cart, setCart] = useState<Record<string, boolean>>({});

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <p
          className="font-bold text-gray-900"
          style={{ fontFamily: HINDI_FONT }}
        >
          एक्सेसरीज़ • Accessories
        </p>
        <div className="relative">
          <span className="text-xl">🛒</span>
          {Object.values(cart).filter(Boolean).length > 0 && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white font-bold flex items-center justify-center"
              style={{ background: "#FF6B2B", fontSize: "9px" }}
            >
              {Object.values(cart).filter(Boolean).length}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {products.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              background: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className="h-24 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${p.color}, ${p.color}99)`,
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>{p.icon}</span>
            </div>
            <div className="p-3">
              <p
                className="text-xs font-bold text-gray-800"
                style={{ fontFamily: HINDI_FONT }}
              >
                {p.hindi}
              </p>
              <p className="text-xs text-gray-400">{p.name}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="font-bold text-gray-900">₹{p.price}</p>
                <button
                  type="button"
                  className="text-xs font-bold px-2 py-1 rounded-lg transition-all active:scale-90"
                  style={{
                    background: cart[p.name]
                      ? "rgba(27,94,32,0.12)"
                      : "linear-gradient(135deg, #212121, #424242)",
                    color: cart[p.name] ? "#1B5E20" : "white",
                    fontFamily: HINDI_FONT,
                  }}
                  onClick={() =>
                    setCart((prev) => ({ ...prev, [p.name]: !prev[p.name] }))
                  }
                >
                  {cart[p.name] ? "✅ कार्ट में" : "+ कार्ट"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {Object.values(cart).filter(Boolean).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 text-white font-bold text-center"
          style={{ background: "linear-gradient(135deg, #212121, #424242)" }}
        >
          <p style={{ fontFamily: HINDI_FONT }}>
            🛒 {Object.values(cart).filter(Boolean).length} आइटम कार्ट में
          </p>
          <p className="text-sm font-normal text-white/80">
            ₹
            {products
              .filter((p) => cart[p.name])
              .reduce((s, p) => s + p.price, 0)}{" "}
            • Checkout
          </p>
        </motion.div>
      )}
    </div>
  );
}

// ─── 25. Arrtai AI App ────────────────────────────────────────────────────────
function ArrtaiAIApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "नमस्ते! मैं अरताई हूँ — भारत की अपनी AI। आप क्या जानना चाहते हैं?",
    },
  ]);
  const suggestions = [
    "दीवाली कब है?",
    "चाय की रेसिपी बताओ",
    "राजस्थान के बारे में",
    "गीता का श्लोक",
  ];
  const aiReplies: Record<string, string> = {
    "दीवाली कब है?":
      "इस वर्ष दीवाली 20 अक्टूबर 2025 को है। यह कार्तिक अमावस्या को मनाई जाती है। 🪔",
    "चाय की रेसिपी बताओ":
      "मारवाड़ी चाय: 1 कप पानी उबालें, 1 चम्मच चाय पत्ती, अदरक, इलाइची डालें। 5 मिनट उबालें, दूध और शक्कर मिलाएं। गर्म परोसें! ☕",
    "राजस्थान के बारे में":
      "राजस्थान — 'राजाओं की भूमि'। यहाँ हवा महल, जल महल, थार रेगिस्तान और रंगीन संस्कृति है। जयपुर इसकी राजधानी है। 🏰",
    "गीता का श्लोक":
      '"कर्म करो, फल की चिंता मत करो" — भगवद गीता अध्याय 2, श्लोक 47। यही जीवन का सार है। 🙏',
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const newMessages = [...messages, { from: "user", text }];
    const reply =
      aiReplies[text] ||
      "यह एक बहुत अच्छा सवाल है! मैं जल्द ही इसका जवाब दूंगा। भारत की AI हमेशा सीख रही है। 🇮🇳";
    newMessages.push({ from: "ai", text: reply });
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div
        className="px-4 pt-3 pb-2 text-center border-b border-blue-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,35,126,0.05), rgba(40,53,147,0.08))",
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
            style={{ background: "linear-gradient(135deg, #1A237E, #283593)" }}
          >
            🤖
          </div>
          <p
            className="font-black text-blue-900 text-base"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            अरताई AI
          </p>
        </div>
        <p
          className="text-xs text-blue-600 font-semibold"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🇮🇳 भारत की अपनी आर्टिफिशियल इंटेलिजेंस
        </p>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2 no-scrollbar">
        {messages.map((m, i) => (
          <div
            key={`msg-${m.from}-${i}`}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[80%] px-3 py-2 rounded-2xl text-sm"
              style={{
                background:
                  m.from === "user"
                    ? "linear-gradient(135deg, #1A237E, #283593)"
                    : "rgba(26,35,126,0.08)",
                color: m.from === "user" ? "white" : "#111",
                fontFamily: HINDI_FONT_LOCAL,
                borderRadius:
                  m.from === "user"
                    ? "18px 18px 4px 18px"
                    : "18px 18px 18px 4px",
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      {/* Suggestions */}
      <div className="px-3 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => sendMessage(s)}
            className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border active:scale-95 transition-transform"
            style={{
              borderColor: "rgba(26,35,126,0.3)",
              color: "#1A237E",
              background: "rgba(26,35,126,0.07)",
              fontFamily: HINDI_FONT_LOCAL,
            }}
          >
            {s}
          </button>
        ))}
      </div>
      {/* Input */}
      <div className="px-3 pb-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="अपना सवाल पूछें..."
          className="flex-1 rounded-full px-4 py-2 text-sm outline-none"
          style={{
            background: "rgba(26,35,126,0.07)",
            border: "1px solid rgba(26,35,126,0.2)",
            fontFamily: HINDI_FONT_LOCAL,
          }}
        />
        <button
          type="button"
          onClick={() => sendMessage(input)}
          className="w-10 h-10 rounded-full flex items-center justify-center active:scale-90 transition-transform"
          style={{ background: "linear-gradient(135deg, #1A237E, #283593)" }}
        >
          <span className="text-white text-sm">→</span>
        </button>
      </div>
    </div>
  );
}

// ─── 26. Aarogya Setu App ─────────────────────────────────────────────────────
function AarogyaSetuApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const hospitals = [
    {
      name: "SMS Hospital",
      hindi: "एसएमएस हॉस्पिटल",
      dist: "1.2 km",
      type: "Government",
    },
    {
      name: "Fortis Jaipur",
      hindi: "फोर्टिस जयपुर",
      dist: "3.5 km",
      type: "Private",
    },
    {
      name: "Santokba Hospital",
      hindi: "संतोकबा हॉस्पिटल",
      dist: "4.1 km",
      type: "Private",
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Health Status */}
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #006064, #00838F)",
          boxShadow: "0 8px 24px rgba(0,96,100,0.4)",
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
            🛡️
          </div>
          <div>
            <p
              className="font-black text-lg"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              स्वास्थ्य स्थिति
            </p>
            <p className="text-xs text-white/80">Health Status</p>
          </div>
          <span
            className="ml-auto px-3 py-1 rounded-full bg-green-400/30 text-xs font-bold text-green-200"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            ✅ सुरक्षित
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {[
            { icon: "💉", label: "टीका लगा", val: "2/2" },
            { icon: "🏥", label: "नज़दीकी", val: "1.2 km" },
            { icon: "❤️", label: "BP", val: "120/80" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/15 rounded-xl p-2"
            >
              <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
              <p className="text-xs font-bold mt-1">{s.val}</p>
              <p
                className="text-xs text-white/70"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Vaccine Card */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "rgba(0,96,100,0.07)",
          border: "1px solid rgba(0,96,100,0.2)",
        }}
      >
        <p
          className="font-bold text-teal-900 text-sm mb-3"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          💉 वैक्सीन कार्ड • Vaccine Card
        </p>
        {[
          { name: "Covaxin", date: "15 मार्च 2021", dose: "Dose 1" },
          { name: "Covaxin", date: "12 अप्रैल 2021", dose: "Dose 2" },
        ].map((v) => (
          <div
            key={`${v.name}-${v.dose}`}
            className="flex items-center justify-between py-2 border-b border-teal-100 last:border-0"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>
              <div>
                <p className="text-xs font-bold text-teal-900">
                  {v.name} — {v.dose}
                </p>
                <p
                  className="text-xs text-gray-400"
                  style={{ fontFamily: HINDI_FONT_LOCAL }}
                >
                  {v.date}
                </p>
              </div>
            </div>
            <span
              className="text-xs font-bold px-2 py-1 rounded-full"
              style={{ background: "rgba(27,94,32,0.1)", color: "#1B5E20" }}
            >
              Verified
            </span>
          </div>
        ))}
      </div>
      {/* Nearby Hospitals */}
      <div>
        <p
          className="text-xs font-bold text-gray-500 mb-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🏥 नज़दीकी अस्पताल • Nearby Hospitals
        </p>
        {hospitals.map((h) => (
          <div
            key={h.name}
            className="flex items-center gap-3 p-3 rounded-xl mb-2"
            style={{
              background: "white",
              border: "1px solid rgba(0,96,100,0.1)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <span className="text-2xl">🏥</span>
            <div className="flex-1">
              <p
                className="text-sm font-bold text-gray-800"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {h.hindi}
              </p>
              <p className="text-xs text-gray-400">
                {h.name} • {h.type}
              </p>
            </div>
            <span className="text-xs font-bold text-teal-600">{h.dist}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 27. DigiLocker App ───────────────────────────────────────────────────────
function DigiLockerApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [selected, setSelected] = useState<string | null>(null);
  const docs = [
    {
      id: "aadhaar",
      icon: "🪪",
      name: "Aadhaar Card",
      hindi: "आधार कार्ड",
      num: "XXXX XXXX 4521",
      issuer: "UIDAI",
      color: "#1565C0",
    },
    {
      id: "dl",
      icon: "🚗",
      name: "Driving License",
      hindi: "ड्राइविंग लाइसेंस",
      num: "RJ14-2023-000456",
      issuer: "Transport Dept",
      color: "#1B5E20",
    },
    {
      id: "pan",
      icon: "💳",
      name: "PAN Card",
      hindi: "पैन कार्ड",
      num: "ABCDE1234F",
      issuer: "Income Tax Dept",
      color: "#E65100",
    },
    {
      id: "marksheet",
      icon: "📜",
      name: "10th Marksheet",
      hindi: "10वीं मार्कशीट",
      num: "RBSE-2018-7890",
      issuer: "RBSE Rajasthan",
      color: "#880E4F",
    },
  ];
  const doc = docs.find((d) => d.id === selected);
  if (doc) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <button
          type="button"
          className="text-blue-600 font-bold text-sm text-left"
          onClick={() => setSelected(null)}
        >
          ← वापस / Back
        </button>
        <div
          className="rounded-2xl p-5 text-white"
          style={{
            background: `linear-gradient(135deg, ${doc.color}, ${doc.color}cc)`,
            boxShadow: `0 8px 24px ${doc.color}44`,
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontSize: "2.5rem" }}>{doc.icon}</span>
            <div>
              <p
                className="font-black text-lg"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {doc.hindi}
              </p>
              <p className="text-xs text-white/70">{doc.name}</p>
            </div>
            <span className="ml-auto text-lg">🇮🇳</span>
          </div>
          <div className="bg-white/20 rounded-xl p-3">
            <p
              className="text-xs text-white/70"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              दस्तावेज़ संख्या
            </p>
            <p className="font-mono font-bold text-lg mt-1">{doc.num}</p>
            <p className="text-xs text-white/70 mt-2">{doc.issuer}</p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-green-300">✅</span>
            <p
              className="text-xs text-white/80"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              डिजिटल रूप से सत्यापित • Digitally Verified
            </p>
          </div>
        </div>
        <button
          type="button"
          className="rounded-2xl p-3 font-bold text-white text-sm text-center active:scale-95 transition-transform"
          style={{
            background: "linear-gradient(135deg, #1565C0, #1976D2)",
            fontFamily: HINDI_FONT_LOCAL,
          }}
        >
          📤 शेयर करें • Share Document
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 p-4">
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #1565C0, #1976D2)",
          boxShadow: "0 8px 24px rgba(21,101,192,0.4)",
        }}
      >
        <div className="flex items-center gap-3">
          <span style={{ fontSize: "2rem" }}>🔐</span>
          <div>
            <p className="font-black" style={{ fontFamily: HINDI_FONT_LOCAL }}>
              डिजीलॉकर
            </p>
            <p className="text-xs text-white/70">India's Document Wallet</p>
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          {[
            { icon: "📁", label: "दस्तावेज़", val: "4" },
            { icon: "✅", label: "सत्यापित", val: "4" },
            { icon: "🔒", label: "सुरक्षित", val: "100%" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex-1 bg-white/15 rounded-xl p-2 text-center"
            >
              <span style={{ fontSize: "1rem" }}>{s.icon}</span>
              <p className="font-bold text-sm">{s.val}</p>
              <p
                className="text-xs text-white/70"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p
        className="text-xs font-bold text-gray-500"
        style={{ fontFamily: HINDI_FONT_LOCAL }}
      >
        मेरे दस्तावेज़ • My Documents
      </p>
      <div className="flex flex-col gap-3">
        {docs.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setSelected(d.id)}
            className="flex items-center gap-3 p-4 rounded-2xl text-left w-full active:scale-95 transition-transform"
            style={{
              background: "white",
              border: "1px solid rgba(21,101,192,0.12)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${d.color}15` }}
            >
              {d.icon}
            </div>
            <div className="flex-1">
              <p
                className="font-bold text-gray-800 text-sm"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {d.hindi}
              </p>
              <p className="text-xs text-gray-400">{d.name}</p>
            </div>
            <span
              className="text-xs font-bold px-2 py-1 rounded-full"
              style={{ background: "rgba(27,94,32,0.1)", color: "#1B5E20" }}
            >
              ✅ Verified
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── 28. Rail Connect App ─────────────────────────────────────────────────────
function RailConnectApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [pnr, setPnr] = useState("");
  const [checked, setChecked] = useState(false);
  const trains = [
    {
      name: "Rajdhani Express",
      hindi: "राजधानी एक्सप्रेस",
      num: "12957",
      from: "जयपुर",
      to: "दिल्ली",
      dep: "06:05",
      arr: "10:55",
      fare: "₹595",
      avail: "16 Seats",
    },
    {
      name: "Shatabdi Express",
      hindi: "शताब्दी एक्सप्रेस",
      num: "12016",
      from: "जयपुर",
      to: "दिल्ली",
      dep: "14:35",
      arr: "19:15",
      fare: "₹440",
      avail: "4 Seats",
    },
    {
      name: "Pink City Express",
      hindi: "पिंक सिटी एक्सप्रेस",
      num: "12450",
      from: "जयपुर",
      to: "दिल्ली",
      dep: "22:50",
      arr: "05:35",
      fare: "₹285",
      avail: "32 Seats",
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #B71C1C, #C62828)",
          boxShadow: "0 8px 24px rgba(183,28,28,0.4)",
        }}
      >
        <p
          className="font-bold text-sm mb-3"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🚂 ट्रेन खोजें • Search Train
        </p>
        <div className="flex gap-2">
          <div className="flex-1 bg-white/20 rounded-xl p-2 text-center">
            <p className="text-xs text-white/70">से / From</p>
            <p
              className="font-bold text-sm"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              जयपुर
            </p>
          </div>
          <div className="w-8 flex items-center justify-center">
            <span className="text-xl">⇄</span>
          </div>
          <div className="flex-1 bg-white/20 rounded-xl p-2 text-center">
            <p className="text-xs text-white/70">तक / To</p>
            <p
              className="font-bold text-sm"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              दिल्ली
            </p>
          </div>
        </div>
        <p
          className="text-xs text-white/70 text-center mt-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          📅 आज • Today
        </p>
      </div>
      {/* PNR Status */}
      <div
        className="rounded-2xl p-3"
        style={{
          background: "rgba(183,28,28,0.07)",
          border: "1px solid rgba(183,28,28,0.2)",
        }}
      >
        <p
          className="text-xs font-bold text-red-900 mb-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🔍 PNR स्टेटस
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="PNR नंबर दर्ज करें"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            className="flex-1 rounded-xl px-3 py-2 text-sm outline-none"
            style={{
              background: "white",
              border: "1px solid rgba(183,28,28,0.2)",
            }}
          />
          <button
            type="button"
            onClick={() => pnr.length > 0 && setChecked(true)}
            className="px-3 py-2 rounded-xl text-white text-xs font-bold active:scale-95 transition-transform"
            style={{
              background: "linear-gradient(135deg, #B71C1C, #C62828)",
              fontFamily: HINDI_FONT_LOCAL,
            }}
          >
            जांचें
          </button>
        </div>
        {checked && (
          <p
            className="text-xs text-green-700 font-bold mt-2 text-center"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            ✅ कन्फर्म • Confirmed | Coach: B4 | Berth: 32
          </p>
        )}
      </div>
      {/* Train List */}
      <p
        className="text-xs font-bold text-gray-500"
        style={{ fontFamily: HINDI_FONT_LOCAL }}
      >
        उपलब्ध ट्रेनें • Available Trains
      </p>
      {trains.map((t) => (
        <div
          key={t.num}
          className="rounded-2xl p-4"
          style={{
            background: "white",
            border: "1px solid rgba(183,28,28,0.1)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <p
              className="font-bold text-gray-800 text-sm"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              {t.hindi}
            </p>
            <span className="text-xs text-gray-400">#{t.num}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="font-black text-gray-800">{t.dep}</p>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {t.from}
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center px-2">
              <div className="w-full h-0.5 bg-gray-200 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                  🚂
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-black text-gray-800">{t.arr}</p>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {t.to}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="font-bold text-red-700">{t.fare}</span>
            <span className="text-xs text-green-600 font-semibold">
              {t.avail}
            </span>
            <button
              type="button"
              className="text-xs font-bold px-3 py-1.5 rounded-xl text-white active:scale-95 transition-transform"
              style={{
                background: "linear-gradient(135deg, #B71C1C, #C62828)",
                fontFamily: HINDI_FONT_LOCAL,
              }}
            >
              बुक करें
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 29. Koo App ──────────────────────────────────────────────────────────────
function KooApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [koosLikes, setKoosLikes] = useState<Record<number, boolean>>({});
  const [activeTab, setActiveTab] = useState("ट्रेंडिंग");
  const posts = [
    {
      id: 1,
      user: "रामदेव जी",
      handle: "@ramdev",
      avatar: "👳",
      time: "2 मिनट",
      text: "जय श्री राम! आज का दिन बेहद शुभ है। सब को प्रणाम! 🙏 #भारत #राजस्थान",
      likes: 342,
      koos: 128,
    },
    {
      id: 2,
      user: "सुनीता सिंह",
      handle: "@sunita_singh",
      avatar: "👩",
      time: "15 मिनट",
      text: "मेक इन इंडिया को समर्थन दें! भारतीय उत्पाद खरीदें, भारत को मजबूत बनाएं। 🇮🇳 #स्वदेशी #MakeInIndia",
      likes: 891,
      koos: 445,
    },
    {
      id: 3,
      user: "किसान भाई",
      handle: "@kisan_bhai",
      avatar: "🧑‍🌾",
      time: "1 घंटा",
      text: "आज मंडी में गेहूं के दाम अच्छे मिले। जय किसान! खेती ही हमारी असली पूंजी है। 🌾 #किसान #जयहिंद",
      likes: 567,
      koos: 203,
    },
    {
      id: 4,
      user: "जयपुर टेक",
      handle: "@jpr_tech",
      avatar: "💻",
      time: "3 घंटे",
      text: "राजस्थान में IT सेक्टर तेज़ी से बढ़ रहा है। जयपुर बनेगा भारत का टेक हब! 🚀 #TechIndia #Jaipur",
      likes: 1204,
      koos: 678,
    },
  ];
  return (
    <div className="flex flex-col h-full">
      <div
        className="px-4 py-3 border-b border-yellow-200"
        style={{ background: "rgba(249,168,37,0.08)" }}
      >
        <div className="flex items-center justify-between">
          <p
            className="font-black text-yellow-900 text-base"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            🐦 कू • Koo
          </p>
          <span
            className="text-xs font-bold px-2 py-1 rounded-full"
            style={{
              background: "rgba(249,168,37,0.2)",
              color: "#F57F17",
              fontFamily: HINDI_FONT_LOCAL,
            }}
          >
            🇮🇳 भारतीय
          </span>
        </div>
      </div>
      <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar border-b border-gray-100">
        {["ट्रेंडिंग", "खेल", "राजनीति", "मनोरंजन", "टेक"].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActiveTab(c)}
            className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{
              background:
                activeTab === c
                  ? "linear-gradient(135deg, #F9A825, #FFB800)"
                  : "rgba(249,168,37,0.1)",
              color: activeTab === c ? "white" : "#F57F17",
              fontFamily: HINDI_FONT_LOCAL,
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {posts.map((post, idx) => (
          <div key={post.id} className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0"
                style={{ fontSize: "1.4rem" }}
              >
                {post.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p
                    className="font-bold text-sm text-gray-800"
                    style={{ fontFamily: HINDI_FONT_LOCAL }}
                  >
                    {post.user}
                  </p>
                  <p className="text-xs text-gray-400">{post.handle}</p>
                  <p
                    className="text-xs text-gray-300 ml-auto"
                    style={{ fontFamily: HINDI_FONT_LOCAL }}
                  >
                    • {post.time}
                  </p>
                </div>
                <p
                  className="text-sm text-gray-700 leading-relaxed"
                  style={{ fontFamily: HINDI_FONT_LOCAL }}
                >
                  {post.text}
                </p>
                <div className="flex gap-4 mt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setKoosLikes((prev) => ({ ...prev, [idx]: !prev[idx] }))
                    }
                    className="flex items-center gap-1 text-xs text-gray-500 active:scale-95 transition-transform"
                  >
                    {koosLikes[idx] ? "❤️" : "🤍"}{" "}
                    <span style={{ fontFamily: HINDI_FONT_LOCAL }}>
                      {post.likes + (koosLikes[idx] ? 1 : 0)}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-xs text-gray-500"
                  >
                    🐦{" "}
                    <span style={{ fontFamily: HINDI_FONT_LOCAL }}>
                      {post.koos}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-xs text-gray-500"
                  >
                    📤
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4 pt-2 border-t border-gray-100">
        <button
          type="button"
          className="w-full rounded-2xl p-3 text-white font-bold text-sm active:scale-95 transition-transform"
          style={{
            background: "linear-gradient(135deg, #F9A825, #FFB800)",
            fontFamily: HINDI_FONT_LOCAL,
          }}
        >
          🐦 नई पोस्ट करें • Post Koo
        </button>
      </div>
    </div>
  );
}

// ─── 30. Vyapar App ───────────────────────────────────────────────────────────
function VyaparApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const ledger = [
    {
      name: "राम किराना स्टोर",
      type: "पाना है",
      amt: "₹4,500",
      date: "आज",
      color: "#1B5E20",
    },
    {
      name: "शर्मा होलसेल",
      type: "देना है",
      amt: "₹12,000",
      date: "कल",
      color: "#C62828",
    },
    {
      name: "गुप्ता ट्रेडर्स",
      type: "पाना है",
      amt: "₹7,200",
      date: "3 दिन पहले",
      color: "#1B5E20",
    },
    {
      name: "अंबानी सप्लायर",
      type: "देना है",
      amt: "₹3,800",
      date: "1 हफ्ते पहले",
      color: "#C62828",
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #1B5E20, #2E7D32)",
          boxShadow: "0 8px 24px rgba(27,94,32,0.4)",
        }}
      >
        <p
          className="text-xs text-white/70 mb-3"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          व्यापार सारांश • Business Summary
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              icon: "📥",
              label: "पाना है (To Receive)",
              val: "₹11,700",
              color: "rgba(255,255,255,0.2)",
            },
            {
              icon: "📤",
              label: "देना है (To Pay)",
              val: "₹15,800",
              color: "rgba(255,255,255,0.15)",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ background: s.color }}
            >
              <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
              <p className="font-black text-xl mt-1">{s.val}</p>
              <p
                className="text-xs text-white/70"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* GST Invoice */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "rgba(27,94,32,0.07)",
          border: "1px solid rgba(27,94,32,0.2)",
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className="font-bold text-green-900 text-sm"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            🧾 GST बिल • Last Invoice
          </p>
          <button
            type="button"
            className="text-xs font-bold text-green-600 px-2 py-1 rounded-full"
            style={{
              background: "rgba(27,94,32,0.1)",
              fontFamily: HINDI_FONT_LOCAL,
            }}
          >
            + नया बिल
          </button>
        </div>
        <div
          className="bg-white rounded-xl p-3"
          style={{ border: "1px solid rgba(27,94,32,0.15)" }}
        >
          <div className="flex justify-between mb-2">
            <p className="text-xs font-bold text-gray-700">
              Invoice #INV-2026-001
            </p>
            <p className="text-xs text-gray-400">01 मार्च 2026</p>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-100">
            <p
              className="text-xs text-gray-600"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              सामान (Goods)
            </p>
            <p className="text-xs font-bold">₹5,000</p>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-100">
            <p className="text-xs text-gray-600">GST 18%</p>
            <p className="text-xs font-bold">₹900</p>
          </div>
          <div className="flex justify-between py-1">
            <p
              className="text-xs font-bold text-green-800"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              कुल (Total)
            </p>
            <p className="text-xs font-bold text-green-800">₹5,900</p>
          </div>
        </div>
      </div>
      {/* Khata */}
      <p
        className="text-xs font-bold text-gray-500"
        style={{ fontFamily: HINDI_FONT_LOCAL }}
      >
        📒 खाता बही • Ledger
      </p>
      {ledger.map((l) => (
        <div
          key={`${l.name}-${l.type}`}
          className="flex items-center gap-3 p-3 rounded-xl mb-2"
          style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm"
            style={{ background: l.color }}
          >
            {l.type === "पाना है" ? "↓" : "↑"}
          </div>
          <div className="flex-1">
            <p
              className="text-sm font-bold text-gray-800"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              {l.name}
            </p>
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              {l.date}
            </p>
          </div>
          <div className="text-right">
            <p className="font-bold text-sm" style={{ color: l.color }}>
              {l.amt}
            </p>
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              {l.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 31. Jio Bharat App ───────────────────────────────────────────────────────
function JioBharatApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [jioTab, setJioTab] = useState("सब");
  const content = [
    {
      title: "बाहुबली 2",
      type: "Bollywood",
      emoji: "🎬",
      lang: "हिंदी",
      rating: "9.1",
    },
    {
      title: "RRR",
      type: "South Indian",
      emoji: "🎥",
      lang: "हिंदी",
      rating: "8.8",
    },
    {
      title: "केसरी",
      type: "Historical",
      emoji: "⚔️",
      lang: "हिंदी",
      rating: "7.9",
    },
    {
      title: "भजन माला",
      type: "Devotional",
      emoji: "🙏",
      lang: "भजन",
      rating: "★★★★★",
    },
    {
      title: "राजस्थानी गीत",
      type: "Regional",
      emoji: "🎵",
      lang: "मारवाड़ी",
      rating: "★★★★",
    },
    {
      title: "IPL Live",
      type: "Sports",
      emoji: "🏏",
      lang: "Live",
      rating: "LIVE",
    },
  ];
  return (
    <div className="flex flex-col h-full">
      <div
        className="px-4 pt-3 pb-2 text-white"
        style={{ background: "linear-gradient(135deg, #4A148C, #6A1B9A)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span style={{ fontSize: "1.5rem" }}>📺</span>
          <p
            className="font-black text-base"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            जियो भारत
          </p>
          <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">
            🇮🇳 India
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {["सब", "बॉलीवुड", "भजन", "क्रिकेट", "क्षेत्रीय"].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setJioTab(t)}
              className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
              style={{
                background:
                  jioTab === t
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.2)",
                color: jioTab === t ? "#4A148C" : "white",
                fontFamily: HINDI_FONT_LOCAL,
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      {/* Featured Banner */}
      <div
        className="mx-4 mt-3 rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #B71C1C, #C62828, #E53935)",
        }}
      >
        <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full font-bold">
          🔴 LIVE
        </span>
        <p
          className="font-black text-lg mt-1"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          भारत vs ऑस्ट्रेलिया
        </p>
        <p className="text-xs text-white/80">T20 International • Live Now 🏏</p>
      </div>
      <div className="px-4 mt-3 grid grid-cols-2 gap-3 overflow-y-auto no-scrollbar pb-4">
        {content.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-transform"
            style={{
              background: "white",
              border: "1px solid rgba(74,20,140,0.1)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <div
              className="h-20 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(74,20,140,0.15), rgba(106,27,154,0.1))",
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>{c.emoji}</span>
            </div>
            <div className="p-2">
              <p
                className="text-xs font-bold text-gray-800 leading-tight"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {c.title}
              </p>
              <p className="text-xs text-gray-400">{c.type}</p>
              <div className="flex items-center justify-between mt-1">
                <span
                  className="text-xs text-purple-600 font-semibold"
                  style={{ fontFamily: HINDI_FONT_LOCAL }}
                >
                  {c.lang}
                </span>
                <span className="text-xs font-bold text-yellow-600">
                  {c.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 32. Kisan App ────────────────────────────────────────────────────────────
function FarmerConnectApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const mandiPrices = [
    {
      crop: "गेहूं",
      eng: "Wheat",
      icon: "🌾",
      price: "₹2,250/क्विंटल",
      change: "+₹50",
      up: true,
    },
    {
      crop: "सरसों",
      eng: "Mustard",
      icon: "🌻",
      price: "₹5,400/क्विंटल",
      change: "+₹120",
      up: true,
    },
    {
      crop: "चना",
      eng: "Gram",
      icon: "🫘",
      price: "₹4,800/क्विंटल",
      change: "-₹80",
      up: false,
    },
    {
      crop: "बाजरा",
      eng: "Millet",
      icon: "🌽",
      price: "₹2,100/क्विंटल",
      change: "+₹30",
      up: true,
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #33691E, #558B2F)",
          boxShadow: "0 8px 24px rgba(51,105,30,0.4)",
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span style={{ fontSize: "2rem" }}>🌾</span>
          <div>
            <p
              className="font-black text-base"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              किसान ऐप
            </p>
            <p className="text-xs text-white/70">Farmer Connect • जयपुर मंडी</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: "🌡️", label: "तापमान", val: "32°C" },
            { icon: "💨", label: "हवा", val: "18 km/h" },
            { icon: "🌧️", label: "बारिश", val: "12%" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/15 rounded-xl p-2"
            >
              <span>{s.icon}</span>
              <p className="font-bold text-sm mt-1">{s.val}</p>
              <p
                className="text-xs text-white/70"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p
        className="text-xs font-bold text-gray-500"
        style={{ fontFamily: HINDI_FONT_LOCAL }}
      >
        📊 आज के मंडी भाव • Today's Mandi Rates
      </p>
      {mandiPrices.map((m) => (
        <div
          key={m.crop}
          className="flex items-center gap-3 p-3 rounded-2xl"
          style={{
            background: "white",
            border: "1px solid rgba(51,105,30,0.12)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <span style={{ fontSize: "2rem" }}>{m.icon}</span>
          <div className="flex-1">
            <p
              className="font-bold text-gray-800 text-sm"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              {m.crop}
            </p>
            <p className="text-xs text-gray-400">{m.eng}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-green-800 text-sm">{m.price}</p>
            <p
              className="text-xs font-bold"
              style={{ color: m.up ? "#1B5E20" : "#C62828" }}
            >
              {m.change}
            </p>
          </div>
        </div>
      ))}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "rgba(51,105,30,0.08)",
          border: "1px solid rgba(51,105,30,0.2)",
        }}
      >
        <p
          className="font-bold text-green-900 text-sm mb-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          💡 फसल सलाह • Crop Advisory
        </p>
        <p
          className="text-xs text-gray-700 leading-relaxed"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          इस सप्ताह सरसों की बुवाई के लिए अच्छा समय है। मिट्टी में नमी पर्याप्त है। DAP खाद
          50 kg/बीघा डालें। अगले 7 दिन में बारिश की संभावना नहीं।
        </p>
      </div>
    </div>
  );
}

// ─── 33. Rashifal App ─────────────────────────────────────────────────────────
function MarwadiRashifalApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [rashiSelected, setRashiSelected] = useState<number | null>(null);
  const rashis = [
    {
      id: 0,
      symbol: "♈",
      name: "मेष",
      eng: "Aries",
      today:
        "आज का दिन शुभ है। कार्य में सफलता मिलेगी। परिवार के साथ समय बिताएं। आर्थिक स्थिति मजबूत रहेगी।",
      lucky: "लाल",
      num: "9",
    },
    {
      id: 1,
      symbol: "♉",
      name: "वृष",
      eng: "Taurus",
      today: "व्यापार में लाभ होगा। स्वास्थ्य का ध्यान रखें। प्रेम जीवन में मधुरता आएगी।",
      lucky: "हरा",
      num: "6",
    },
    {
      id: 2,
      symbol: "♊",
      name: "मिथुन",
      eng: "Gemini",
      today: "नई यात्रा का संयोग बनेगा। मित्रों से मुलाकात होगी। पैसों में सावधानी बरतें।",
      lucky: "पीला",
      num: "5",
    },
    {
      id: 3,
      symbol: "♋",
      name: "कर्क",
      eng: "Cancer",
      today: "भावनात्मक दिन रहेगा। माँ का आशीर्वाद लें। धार्मिक कार्य में मन लगेगा।",
      lucky: "सफेद",
      num: "2",
    },
    {
      id: 4,
      symbol: "♌",
      name: "सिंह",
      eng: "Leo",
      today: "आत्मविश्वास बढ़ेगा। नेतृत्व के अवसर मिलेंगे। सरकारी काम बनेंगे।",
      lucky: "सुनहरा",
      num: "1",
    },
    {
      id: 5,
      symbol: "♍",
      name: "कन्या",
      eng: "Virgo",
      today: "बुद्धि और विवेक का उपयोग करें। स्वास्थ्य सुधरेगा। नौकरी में तरक्की संभव।",
      lucky: "भूरा",
      num: "3",
    },
    {
      id: 6,
      symbol: "♎",
      name: "तुला",
      eng: "Libra",
      today: "रिश्तों में मधुरता रहेगी। कला और सौंदर्य में रुचि बढ़ेगी। साझेदारी में लाभ।",
      lucky: "नीला",
      num: "7",
    },
    {
      id: 7,
      symbol: "♏",
      name: "वृश्चिक",
      eng: "Scorpio",
      today: "रहस्यमय जानकारी मिलेगी। निवेश में लाभ। शत्रु परास्त होंगे।",
      lucky: "लाल",
      num: "8",
    },
    {
      id: 8,
      symbol: "♐",
      name: "धनु",
      eng: "Sagittarius",
      today: "उच्च शिक्षा और यात्रा के योग हैं। गुरु का आशीर्वाद मिलेगा। धर्म-कर्म में लगाव।",
      lucky: "पीला",
      num: "3",
    },
    {
      id: 9,
      symbol: "♑",
      name: "मकर",
      eng: "Capricorn",
      today: "कड़ी मेहनत रंग लाएगी। व्यापार में उन्नति। परिजनों से सहयोग मिलेगा।",
      lucky: "काला",
      num: "8",
    },
    {
      id: 10,
      symbol: "♒",
      name: "कुम्भ",
      eng: "Aquarius",
      today: "समाजसेवा में मन लगेगा। नई मित्रता होगी। आर्थिक चिंता दूर होगी।",
      lucky: "नीला",
      num: "4",
    },
    {
      id: 11,
      symbol: "♓",
      name: "मीन",
      eng: "Pisces",
      today: "आध्यात्मिक प्रगति होगी। सपनों में संकेत मिलेंगे। प्रेम और कला में आनंद।",
      lucky: "हरा",
      num: "7",
    },
  ];
  const r = rashiSelected !== null ? rashis[rashiSelected] : null;
  if (r) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <button
          type="button"
          className="text-pink-600 font-bold text-sm text-left"
          onClick={() => setRashiSelected(null)}
        >
          ← सभी राशियाँ / All Signs
        </button>
        <div
          className="rounded-2xl p-5 text-white text-center"
          style={{
            background: "linear-gradient(135deg, #880E4F, #AD1457, #C2185B)",
            boxShadow: "0 8px 24px rgba(136,14,79,0.4)",
          }}
        >
          <p style={{ fontSize: "3.5rem" }}>{r.symbol}</p>
          <p
            className="font-black text-2xl mt-2"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            {r.name}
          </p>
          <p className="text-sm text-white/80">{r.eng}</p>
        </div>
        <div
          className="rounded-2xl p-4"
          style={{
            background: "rgba(136,14,79,0.07)",
            border: "1px solid rgba(136,14,79,0.2)",
          }}
        >
          <p
            className="font-bold text-pink-900 text-sm mb-2"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            ✨ आज का राशिफल
          </p>
          <p
            className="text-sm text-gray-700 leading-relaxed"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            {r.today}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "🍀", label: "शुभ रंग", val: r.lucky },
            { icon: "🔢", label: "शुभ अंक", val: r.num },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-3 text-center"
              style={{
                background: "rgba(136,14,79,0.08)",
                border: "1px solid rgba(136,14,79,0.15)",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
              <p
                className="font-black text-lg text-pink-800 mt-1"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {s.val}
              </p>
              <p
                className="text-xs text-gray-500"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3 p-4">
      <div
        className="rounded-2xl p-3 text-white text-center"
        style={{ background: "linear-gradient(135deg, #880E4F, #AD1457)" }}
      >
        <p className="font-black" style={{ fontFamily: HINDI_FONT_LOCAL }}>
          ⭐ मारवाड़ी राशिफल
        </p>
        <p className="text-xs text-white/70">Daily Horoscope • आज का राशिफल</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {rashis.map((rashi) => (
          <button
            key={rashi.id}
            type="button"
            onClick={() => setRashiSelected(rashi.id)}
            className="rounded-2xl p-3 text-center active:scale-95 transition-transform"
            style={{
              background: "white",
              border: "1px solid rgba(136,14,79,0.12)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ fontSize: "1.8rem" }}>{rashi.symbol}</p>
            <p
              className="font-bold text-gray-800 text-xs mt-1"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              {rashi.name}
            </p>
            <p className="text-xs text-gray-400">{rashi.eng}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── 34. ArrtaiBusiness App ───────────────────────────────────────────────────
function ArrtaiBusinessApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const weekSales = [
    { day: "सोम", val: 42 },
    { day: "मंगल", val: 65 },
    { day: "बुध", val: 38 },
    { day: "गुरु", val: 80 },
    { day: "शुक्र", val: 55 },
    { day: "शनि", val: 90 },
    { day: "रवि", val: 73 },
  ];
  const maxVal = Math.max(...weekSales.map((d) => d.val));
  const orders = [
    {
      id: "#AR-1042",
      name: "रमेश टेक्सटाइल्स",
      amount: "₹42,500",
      status: "पूर्ण",
      color: "#2E7D32",
    },
    {
      id: "#AR-1041",
      name: "Sharma Emporium",
      amount: "₹18,200",
      status: "प्रक्रिया में",
      color: "#E65100",
    },
    {
      id: "#AR-1040",
      name: "जैन ट्रेडर्स",
      amount: "₹9,750",
      status: "लंबित",
      color: "#B71C1C",
    },
    {
      id: "#AR-1039",
      name: "Mehta & Sons",
      amount: "₹31,000",
      status: "पूर्ण",
      color: "#2E7D32",
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Revenue cards */}
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #1A237E, #0D47A1, #1565C0)",
          boxShadow: "0 8px 24px rgba(26,35,126,0.4)",
        }}
      >
        <p
          className="text-white/70 text-xs"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          अरताई बिज़नेस • इस माह
        </p>
        <p className="text-3xl font-black mt-1">₹ 18.4L</p>
        <p className="text-white/60 text-xs mt-1">Revenue • राजस्व</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: "📦", label: "ऑर्डर", val: "342", sub: "Orders" },
          { icon: "👥", label: "टीम", val: "12", sub: "Members" },
        ].map((s) => (
          <div
            key={s.sub}
            className="rounded-2xl p-3 text-center"
            style={{
              background: "rgba(26,35,126,0.07)",
              border: "1px solid rgba(26,35,126,0.15)",
            }}
          >
            <span style={{ fontSize: "1.6rem" }}>{s.icon}</span>
            <p className="text-xl font-black text-blue-900 mt-1">{s.val}</p>
            <p
              className="text-xs text-gray-500"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
      {/* Weekly bar chart */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "white",
          border: "1px solid rgba(26,35,126,0.1)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <p
          className="text-xs font-bold text-blue-900 mb-3"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          📊 साप्ताहिक बिक्री • Weekly Sales
        </p>
        <div className="flex items-end gap-1 h-20">
          {weekSales.map((d) => (
            <div
              key={d.day}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <motion.div
                className="w-full rounded-t-md"
                style={{
                  background: "linear-gradient(180deg, #1565C0, #0D47A1)",
                  minHeight: "4px",
                }}
                initial={{ height: 0 }}
                animate={{ height: `${(d.val / maxVal) * 72}px` }}
                transition={{ duration: 0.6, delay: 0.05 }}
              />
              <p
                className="text-gray-500"
                style={{ fontSize: "9px", fontFamily: HINDI_FONT_LOCAL }}
              >
                {d.day}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Recent orders */}
      <div>
        <p
          className="text-xs font-bold text-blue-900 mb-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🧾 हाल के ऑर्डर • Recent Orders
        </p>
        {orders.map((o) => (
          <div
            key={o.id}
            className="flex items-center justify-between p-3 rounded-xl mb-2"
            style={{
              background: "white",
              border: "1px solid rgba(26,35,126,0.08)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <div>
              <p
                className="text-xs font-bold text-gray-800"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {o.name}
              </p>
              <p className="text-xs text-gray-400">{o.id}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-blue-900">{o.amount}</p>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{
                  background: `${o.color}15`,
                  color: o.color,
                  fontFamily: HINDI_FONT_LOCAL,
                }}
              >
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Quick actions */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { icon: "➕", label: "नया ऑर्डर" },
          { icon: "📈", label: "रिपोर्ट" },
          { icon: "👥", label: "टीम" },
          { icon: "📊", label: "एनालिटिक्स" },
        ].map((a) => (
          <button
            key={a.label}
            type="button"
            onClick={() => setActiveAction(a.label)}
            className="flex flex-col items-center gap-1 p-2 rounded-xl active:scale-95 transition-all"
            style={{
              background:
                activeAction === a.label
                  ? "rgba(26,35,126,0.15)"
                  : "rgba(26,35,126,0.07)",
              border: `1px solid ${activeAction === a.label ? "rgba(26,35,126,0.4)" : "rgba(26,35,126,0.15)"}`,
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>{a.icon}</span>
            <p
              className="text-blue-900 font-semibold"
              style={{ fontSize: "9px", fontFamily: HINDI_FONT_LOCAL }}
            >
              {a.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── 35. Facebook App ─────────────────────────────────────────────────────────
function FacebookApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const stories = [
    { emoji: "🙏", name: "मंदिर" },
    { emoji: "🏏", name: "क्रिकेट" },
    { emoji: "🎉", name: "उत्सव" },
    { emoji: "🌾", name: "खेत" },
    { emoji: "🛕", name: "मेला" },
  ];
  const posts = [
    {
      id: 1,
      avatar: "👨‍🦱",
      name: "राम शर्मा",
      time: "2 घंटे पहले",
      content: "आज जयपुर में बहुत अच्छा मौसम है! गुलाबी शहर की शान 🏰 #जयपुर #राजस्थान",
      likes: 142,
      comments: 18,
    },
    {
      id: 2,
      avatar: "👩‍🦰",
      name: "सुनीता देवी",
      time: "4 घंटे पहले",
      content:
        "घर पर बनाई दाल-बाटी-चूरमा 😍🍽️ सबसे स्वादिष्ट राजस्थानी खाना! रेसिपी शेयर करूं?",
      likes: 89,
      comments: 34,
    },
    {
      id: 3,
      avatar: "🧑‍🌾",
      name: "महेश किसान",
      time: "कल",
      content:
        "इस साल फसल बहुत अच्छी हुई। किसान भाइयों को बधाई 🌾🚜 जय किसान जय भारत!",
      likes: 215,
      comments: 42,
    },
  ];
  const toggleLike = (id: number) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  return (
    <div className="flex flex-col gap-0">
      {/* Profile bar */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{
          background: "white",
          borderBottom: "1px solid rgba(24,119,242,0.1)",
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
          style={{ background: "rgba(24,119,242,0.1)" }}
        >
          👤
        </div>
        <div>
          <p
            className="text-sm font-bold text-gray-800"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            राम शर्मा
          </p>
          <p className="text-xs text-blue-600">342 मित्र • Friends</p>
        </div>
        <div className="ml-auto">
          <div
            className="px-3 py-1.5 rounded-full text-white text-xs font-bold"
            style={{ background: "#1877F2" }}
          >
            📝 पोस्ट
          </div>
        </div>
      </div>
      {/* Stories */}
      <div
        className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar"
        style={{
          background: "white",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
            style={{
              background: "linear-gradient(135deg, #1877F2, #42A5F5)",
              border: "3px solid #1877F2",
            }}
          >
            ➕
          </div>
          <p
            className="text-xs text-gray-500"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            मेरी स्टोरी
          </p>
        </div>
        {stories.map((s) => (
          <div
            key={s.name}
            className="flex flex-col items-center gap-1 flex-shrink-0"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
              style={{
                border: "3px solid #1877F2",
                background: "rgba(24,119,242,0.1)",
              }}
            >
              {s.emoji}
            </div>
            <p
              className="text-xs text-gray-500"
              style={{ fontFamily: HINDI_FONT_LOCAL, fontSize: "10px" }}
            >
              {s.name}
            </p>
          </div>
        ))}
      </div>
      {/* Posts */}
      <div className="flex flex-col gap-2 p-3">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "white",
              boxShadow: "0 2px 8px rgba(24,119,242,0.08)",
              border: "1px solid rgba(24,119,242,0.08)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: post.id * 0.1 }}
          >
            <div className="flex items-center gap-2 p-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
                style={{ background: "rgba(24,119,242,0.1)" }}
              >
                {post.avatar}
              </div>
              <div>
                <p
                  className="text-xs font-bold text-gray-800"
                  style={{ fontFamily: HINDI_FONT_LOCAL }}
                >
                  {post.name}
                </p>
                <p
                  className="text-xs text-gray-400"
                  style={{ fontFamily: HINDI_FONT_LOCAL }}
                >
                  {post.time}
                </p>
              </div>
              <span className="ml-auto text-gray-300">···</span>
            </div>
            <p
              className="px-3 pb-3 text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              {post.content}
            </p>
            <div
              className="flex items-center px-3 py-1 border-t"
              style={{ borderColor: "rgba(24,119,242,0.08)" }}
            >
              <p
                className="text-xs text-gray-400 flex-1"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {likedPosts.has(post.id) ? post.likes + 1 : post.likes} 👍 ·{" "}
                {post.comments} टिप्पणियाँ
              </p>
            </div>
            <div
              className="flex border-t"
              style={{ borderColor: "rgba(24,119,242,0.08)" }}
            >
              {[
                {
                  icon: likedPosts.has(post.id) ? "👍" : "👍",
                  label: "पसंद",
                  action: () => toggleLike(post.id),
                  active: likedPosts.has(post.id),
                },
                {
                  icon: "💬",
                  label: "टिप्पणी",
                  action: () => {},
                  active: false,
                },
                { icon: "↗️", label: "शेयर", action: () => {}, active: false },
              ].map((btn) => (
                <button
                  key={btn.label}
                  type="button"
                  onClick={btn.action}
                  className="flex-1 flex items-center justify-center gap-1 py-2 active:scale-95 transition-transform"
                  style={{
                    color: btn.active ? "#1877F2" : "#65676B",
                    fontFamily: HINDI_FONT_LOCAL,
                  }}
                >
                  <span style={{ fontSize: "0.9rem" }}>{btn.icon}</span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: btn.active ? "bold" : "normal",
                    }}
                  >
                    {btn.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── 36. Instagram App ───────────────────────────────────────────────────────
function InstagramApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [activeTab, setActiveTab] = useState("home");
  const stories = [
    { emoji: "🏏", name: "Rahul", ring: "#E1306C" },
    { emoji: "🍛", name: "Priya Di", ring: "#833AB4" },
    { emoji: "🛕", name: "श्याम", ring: "#F77737" },
    { emoji: "🎵", name: "Amit", ring: "#FCAF45" },
    { emoji: "🌸", name: "Sita", ring: "#E1306C" },
  ];
  const exploreGrid = [
    { emoji: "🎬", id: "movies" },
    { emoji: "🏏", id: "cricket" },
    { emoji: "🍛", id: "food" },
    { emoji: "🎵", id: "music" },
    { emoji: "🛕", id: "temple" },
    { emoji: "🎨", id: "art" },
    { emoji: "🌸", id: "flowers" },
    { emoji: "🐄", id: "cattle" },
    { emoji: "🎪", id: "festival" },
  ];
  return (
    <div className="flex flex-col h-full" style={{ background: "#FAFAFA" }}>
      {/* Stories */}
      <div
        className="flex gap-3 px-3 py-3 overflow-x-auto no-scrollbar"
        style={{ background: "white", borderBottom: "1px solid #DBDBDB" }}
      >
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl border-2 border-dashed border-blue-400">
            ➕
          </div>
          <p style={{ fontSize: "10px", color: "#262626" }}>आपकी</p>
        </div>
        {stories.map((s) => (
          <div
            key={s.name}
            className="flex flex-col items-center gap-1 flex-shrink-0"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl p-0.5"
              style={{
                background: `linear-gradient(135deg, ${s.ring}, #833AB4, #F77737)`,
              }}
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl">
                {s.emoji}
              </div>
            </div>
            <p style={{ fontSize: "10px", color: "#262626" }}>{s.name}</p>
          </div>
        ))}
      </div>
      {/* Reels post card */}
      <div
        className="mx-3 mt-3 rounded-2xl overflow-hidden"
        style={{
          background: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          border: "1px solid #DBDBDB",
        }}
      >
        <div className="flex items-center gap-2 p-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-base p-0.5"
            style={{
              background: "linear-gradient(135deg, #E1306C, #833AB4, #F77737)",
            }}
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              🎬
            </div>
          </div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              fontFamily: HINDI_FONT_LOCAL,
            }}
          >
            bollywood_reels
          </p>
          <span className="ml-auto text-gray-400">···</span>
        </div>
        <div
          className="w-full flex items-center justify-center"
          style={{
            height: "140px",
            background: "linear-gradient(135deg, #E1306C22, #833AB422)",
            fontSize: "4rem",
          }}
        >
          🎬
        </div>
        <div className="p-3">
          <div className="flex gap-4 mb-2">
            {["❤️", "💬", "📤"].map((icon) => (
              <span
                key={icon}
                style={{ fontSize: "1.3rem", cursor: "pointer" }}
              >
                {icon}
              </span>
            ))}
            <span className="ml-auto" style={{ fontSize: "1.3rem" }}>
              🔖
            </span>
          </div>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>2,341 likes</p>
          <p
            className="text-gray-600"
            style={{ fontSize: "12px", fontFamily: HINDI_FONT_LOCAL }}
          >
            <span className="font-bold text-gray-800">bollywood_reels</span> आज
            का बेस्ट बॉलीवुड क्लिप 🎬✨ #Bollywood #India
          </p>
        </div>
      </div>
      {/* Explore grid */}
      <div className="mx-3 mt-3">
        <p
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "#262626",
            fontFamily: HINDI_FONT_LOCAL,
          }}
          className="mb-2"
        >
          🔍 एक्सप्लोर • Explore
        </p>
        <div className="grid grid-cols-3 gap-1">
          {exploreGrid.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-xl flex items-center justify-center"
              style={{
                height: "64px",
                background: `hsl(${idx * 40}, 30%, 95%)`,
                fontSize: "1.8rem",
              }}
            >
              {item.emoji}
            </div>
          ))}
        </div>
      </div>
      {/* Bottom tab bar */}
      <div
        className="flex items-center px-4 py-2 mt-3"
        style={{ background: "white", borderTop: "1px solid #DBDBDB" }}
      >
        {[
          { icon: "🏠", label: "home", tab: "home" },
          { icon: "🔍", label: "search", tab: "search" },
          { icon: "➕", label: "new", tab: "new" },
          { icon: "🎬", label: "reels", tab: "reels" },
          { icon: "👤", label: "profile", tab: "profile" },
        ].map((t) => (
          <button
            key={t.tab}
            type="button"
            onClick={() => setActiveTab(t.tab)}
            className="flex-1 flex flex-col items-center py-1 active:scale-90 transition-transform"
            style={{ color: activeTab === t.tab ? "#E1306C" : "#262626" }}
          >
            <span
              style={{
                fontSize: "1.3rem",
                filter: activeTab === t.tab ? "none" : "grayscale(0.3)",
              }}
            >
              {t.icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── 37. YouTube App ─────────────────────────────────────────────────────────
function YouTubeApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set());
  const videos = [
    {
      id: 1,
      emoji: "🙏",
      title: "भजन माला - Top 10 भक्ति गीत",
      channel: "Bhajan Sagar",
      views: "2.4M",
      time: "1 दिन पहले",
      duration: "32:15",
    },
    {
      id: 2,
      emoji: "🏏",
      title: "IPL 2025 Highlights - RR vs MI",
      channel: "Cricket Central",
      views: "8.1M",
      time: "3 घंटे पहले",
      duration: "18:42",
    },
    {
      id: 3,
      emoji: "🎵",
      title: "राजस्थानी गीत - पधारो म्हारे देस",
      channel: "Rajasthani Music",
      views: "1.2M",
      time: "2 दिन पहले",
      duration: "5:28",
    },
    {
      id: 4,
      emoji: "🎬",
      title: "Bollywood Hits 2025 Jukebox",
      channel: "T-Series",
      views: "15M",
      time: "1 सप्ताह पहले",
      duration: "1:22:00",
    },
    {
      id: 5,
      emoji: "📊",
      title: "Cricket Analysis - कौन जीतेगा?",
      channel: "Sports Talk",
      views: "560K",
      time: "5 घंटे पहले",
      duration: "12:05",
    },
  ];
  const toggleLike = (id: number) => {
    setLikedVideos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  return (
    <div className="flex flex-col gap-0" style={{ background: "#F9F9F9" }}>
      {/* Search bar */}
      <div
        className="px-3 py-2"
        style={{ background: "white", borderBottom: "1px solid #E0E0E0" }}
      >
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-full"
          style={{ background: "#F2F2F2", border: "1px solid #E0E0E0" }}
        >
          <span className="text-gray-400">🔍</span>
          <input
            className="flex-1 bg-transparent text-sm outline-none text-gray-600"
            placeholder="खोजें... Search YouTube"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          />
          <span style={{ color: "#FF0000", fontSize: "1.2rem" }}>🎙️</span>
        </div>
      </div>
      {/* Video list */}
      <div className="flex flex-col gap-0">
        {videos.map((v) => (
          <div key={v.id}>
            <button
              type="button"
              className="w-full text-left active:opacity-80 transition-opacity"
              onClick={() =>
                setExpandedVideo(expandedVideo === v.id ? null : v.id)
              }
            >
              {/* Thumbnail */}
              <div
                className="w-full flex items-center justify-center relative"
                style={{
                  height: "120px",
                  background: `hsl(${v.id * 50}, 20%, 94%)`,
                  fontSize: "3.5rem",
                }}
              >
                {v.emoji}
                <div
                  className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-white text-xs font-bold"
                  style={{ background: "rgba(0,0,0,0.75)" }}
                >
                  {v.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,0,0,0.6)" }}
                  >
                    <span style={{ color: "white", fontSize: "1.2rem" }}>
                      ▶
                    </span>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="flex gap-3 p-3 bg-white">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                  style={{ background: "#FF000015" }}
                >
                  📺
                </div>
                <div className="flex-1">
                  <p
                    className="text-sm font-bold text-gray-800 leading-tight"
                    style={{ fontFamily: HINDI_FONT_LOCAL }}
                  >
                    {v.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {v.channel} • {v.views} views • {v.time}
                  </p>
                </div>
              </div>
            </button>
            {/* Expanded actions */}
            <AnimatePresence>
              {expandedVideo === v.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                  style={{
                    background: "white",
                    borderBottom: "1px solid #E0E0E0",
                  }}
                >
                  <div className="flex items-center gap-4 px-4 py-3">
                    {[
                      {
                        icon: likedVideos.has(v.id) ? "👍" : "👍",
                        label: "पसंद",
                        active: likedVideos.has(v.id),
                        action: () => toggleLike(v.id),
                      },
                      {
                        icon: "👎",
                        label: "नापसंद",
                        active: false,
                        action: () => {},
                      },
                      {
                        icon: "↗️",
                        label: "शेयर",
                        active: false,
                        action: () => {},
                      },
                      {
                        icon: "⬇️",
                        label: "सेव",
                        active: false,
                        action: () => {},
                      },
                    ].map((btn) => (
                      <button
                        key={btn.label}
                        type="button"
                        onClick={btn.action}
                        className="flex flex-col items-center gap-1 active:scale-90 transition-transform"
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center"
                          style={{
                            background: btn.active ? "#FF000020" : "#F2F2F2",
                          }}
                        >
                          <span style={{ fontSize: "1rem" }}>{btn.icon}</span>
                        </div>
                        <p
                          className="text-gray-600"
                          style={{
                            fontSize: "9px",
                            fontFamily: HINDI_FONT_LOCAL,
                          }}
                        >
                          {btn.label}
                        </p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div style={{ height: "4px", background: "#F9F9F9" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 38. BharatPe App ─────────────────────────────────────────────────────────
function BharatPeApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [amount, setAmount] = useState("");
  const [collected, setCollected] = useState(false);
  const transactions = [
    { name: "सुरेश भाई", amount: "+₹850", time: "10 मिनट पहले", type: "credit" },
    {
      name: "Ramesh Store",
      amount: "+₹1,200",
      time: "1 घंटा पहले",
      type: "credit",
    },
    { name: "मीना जी", amount: "+₹300", time: "3 घंटे पहले", type: "credit" },
    { name: "Paytm Settlement", amount: "+₹5,890", time: "कल", type: "credit" },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Balance card */}
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #00A651, #00C853, #1B5E20)",
          boxShadow: "0 8px 24px rgba(0,166,81,0.4)",
        }}
      >
        <p
          className="text-white/70 text-xs"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          BharatPe Merchant • कुल कमाई
        </p>
        <p className="text-3xl font-black mt-1">₹ 8,240</p>
        <p className="text-white/60 text-xs mt-1">Total Earnings • आज तक</p>
      </div>
      {/* QR Code mockup */}
      <div
        className="rounded-2xl p-4 flex flex-col items-center gap-3"
        style={{
          background: "white",
          border: "2px solid #00A651",
          boxShadow: "0 4px 16px rgba(0,166,81,0.15)",
        }}
      >
        <p
          className="text-sm font-bold text-green-800"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          📲 स्कैन करें • Scan to Pay
        </p>
        {/* QR grid pattern */}
        <div className="relative" style={{ width: "120px", height: "120px" }}>
          <div
            className="absolute inset-0 rounded-lg"
            style={{ background: "#00A651", padding: "8px" }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `
                  repeating-linear-gradient(0deg, transparent, transparent 6px, white 6px, white 7px),
                  repeating-linear-gradient(90deg, transparent, transparent 6px, white 6px, white 7px)
                `,
              }}
            />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ fontSize: "2.5rem" }}
          >
            🏪
          </div>
        </div>
        <p className="text-xs text-gray-500">arrtai_merchant@bharatpe</p>
      </div>
      {/* Collect money */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "rgba(0,166,81,0.06)",
          border: "1px solid rgba(0,166,81,0.2)",
        }}
      >
        <p
          className="text-sm font-bold text-green-800 mb-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          💰 पैसे कलेक्ट करें
        </p>
        <div className="flex gap-2">
          <div
            className="flex-1 flex items-center gap-1 px-3 py-2 rounded-xl"
            style={{
              background: "white",
              border: "1px solid rgba(0,166,81,0.3)",
            }}
          >
            <span className="text-green-700 font-bold">₹</span>
            <input
              className="flex-1 bg-transparent text-sm outline-none text-gray-700"
              placeholder="राशि दर्ज करें"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setCollected(false);
              }}
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              if (amount) setCollected(true);
            }}
            className="px-4 py-2 rounded-xl text-white text-sm font-bold active:scale-95 transition-transform"
            style={{ background: "#00A651" }}
          >
            {collected ? "✅ भेजा" : "कलेक्ट"}
          </button>
        </div>
      </div>
      {/* Recent transactions */}
      <div>
        <p
          className="text-xs font-bold text-green-800 mb-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          📋 हाल के लेनदेन • Recent
        </p>
        {transactions.map((tx) => (
          <div
            key={tx.name}
            className="flex items-center justify-between p-3 rounded-xl mb-2"
            style={{
              background: "white",
              border: "1px solid rgba(0,166,81,0.1)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ background: "rgba(0,166,81,0.1)" }}
              >
                👤
              </div>
              <div>
                <p
                  className="text-xs font-bold text-gray-800"
                  style={{ fontFamily: HINDI_FONT_LOCAL }}
                >
                  {tx.name}
                </p>
                <p
                  className="text-xs text-gray-400"
                  style={{ fontFamily: HINDI_FONT_LOCAL }}
                >
                  {tx.time}
                </p>
              </div>
            </div>
            <span className="text-sm font-bold text-green-700">
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 39. Jio App ─────────────────────────────────────────────────────────────
function JioApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [dataUsed] = useState(1.3);
  const dataTotalGB = 2.0;
  const dataPercent = Math.round((dataUsed / dataTotalGB) * 100);
  const services = [
    { icon: "📺", name: "JioTV", color: "#0066CC" },
    { icon: "🎬", name: "JioCinema", color: "#8B0000" },
    { icon: "🌐", name: "JioFiber", color: "#006633" },
    { icon: "🛒", name: "JioMart", color: "#FF6B00" },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Plan card */}
      <div
        className="rounded-2xl p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #0066CC, #0080FF, #003399)",
          boxShadow: "0 8px 24px rgba(0,102,204,0.4)",
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="font-black text-lg">Jio 84 Days</p>
            <p
              className="text-white/70 text-xs"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              वैधता: 84 दिन • ₹799
            </p>
          </div>
          <div className="text-right">
            <p style={{ fontSize: "2rem" }}>🌐</p>
          </div>
        </div>
        <div className="flex gap-4 text-center mt-3">
          {[
            { label: "डेटा", val: "2GB/day" },
            { label: "कॉल", val: "अनलिमिटेड" },
            { label: "SMS", val: "100/day" },
          ].map((f) => (
            <div key={f.label} className="flex-1">
              <p className="font-bold text-sm">{f.val}</p>
              <p
                className="text-white/60"
                style={{ fontSize: "10px", fontFamily: HINDI_FONT_LOCAL }}
              >
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Data usage */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "white",
          border: "1px solid rgba(0,102,204,0.15)",
          boxShadow: "0 2px 8px rgba(0,102,204,0.08)",
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className="text-sm font-bold text-blue-900"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            📶 डेटा उपयोग
          </p>
          <p className="text-xs text-gray-500">
            {dataUsed}GB / {dataTotalGB}GB
          </p>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-3 rounded-full"
            style={{ background: "linear-gradient(90deg, #0066CC, #0080FF)" }}
            initial={{ width: 0 }}
            animate={{ width: `${dataPercent}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <p className="text-xs text-blue-700 mt-1">
          {dataPercent}% उपयोग हुआ • {(dataTotalGB - dataUsed).toFixed(1)}GB शेष
        </p>
      </div>
      {/* Services grid */}
      <div>
        <p
          className="text-xs font-bold text-blue-900 mb-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🎯 जियो सेवाएं • Jio Services
        </p>
        <div className="grid grid-cols-2 gap-3">
          {services.map((s) => (
            <button
              key={s.name}
              type="button"
              className="rounded-2xl p-4 flex items-center gap-3 active:scale-95 transition-transform"
              style={{
                background: `${s.color}12`,
                border: `1px solid ${s.color}30`,
              }}
            >
              <span style={{ fontSize: "2rem" }}>{s.icon}</span>
              <div className="text-left">
                <p className="font-bold text-sm" style={{ color: s.color }}>
                  {s.name}
                </p>
                <p className="text-xs text-gray-400">Tap to open</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Recharge button */}
      <button
        type="button"
        className="w-full py-3 rounded-2xl text-white font-black text-lg active:scale-95 transition-transform"
        style={{
          background: "linear-gradient(135deg, #0066CC, #003399)",
          boxShadow: "0 4px 16px rgba(0,102,204,0.4)",
        }}
      >
        📱 रिचार्ज करें • Recharge Now
      </button>
    </div>
  );
}

// ─── 40. Call Log App ─────────────────────────────────────────────────────────
function CallLogApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [activeFilter, setActiveFilter] = useState("सभी");
  const filters = ["सभी", "मिस्ड", "आने वाली", "जाने वाली"];
  const allCalls = [
    {
      id: 1,
      name: "रमेश कुमार",
      type: "missed",
      icon: "📵",
      color: "#B71C1C",
      time: "10 मिनट पहले",
      duration: "",
    },
    {
      id: 2,
      name: "Priya Di",
      type: "incoming",
      icon: "📲",
      color: "#1B5E20",
      time: "30 मिनट पहले",
      duration: "5:32",
    },
    {
      id: 3,
      name: "सुरेश भाई",
      type: "outgoing",
      icon: "📳",
      color: "#0D47A1",
      time: "1 घंटा पहले",
      duration: "12:10",
    },
    {
      id: 4,
      name: "मम्मी",
      type: "incoming",
      icon: "📲",
      color: "#1B5E20",
      time: "2 घंटे पहले",
      duration: "8:45",
    },
    {
      id: 5,
      name: "Mahesh Uncle",
      type: "missed",
      icon: "📵",
      color: "#B71C1C",
      time: "3 घंटे पहले",
      duration: "",
    },
    {
      id: 6,
      name: "पापा जी",
      type: "outgoing",
      icon: "📳",
      color: "#0D47A1",
      time: "4 घंटे पहले",
      duration: "3:20",
    },
    {
      id: 7,
      name: "Bablu Bhai",
      type: "incoming",
      icon: "📲",
      color: "#1B5E20",
      time: "कल सुबह",
      duration: "15:02",
    },
    {
      id: 8,
      name: "सीता जी",
      type: "missed",
      icon: "📵",
      color: "#B71C1C",
      time: "कल दोपहर",
      duration: "",
    },
    {
      id: 9,
      name: "अमित शर्मा",
      type: "outgoing",
      icon: "📳",
      color: "#0D47A1",
      time: "2 दिन पहले",
      duration: "7:15",
    },
  ];
  const typeMap: Record<string, string> = {
    सभी: "all",
    मिस्ड: "missed",
    "आने वाली": "incoming",
    "जाने वाली": "outgoing",
  };
  const filtered =
    activeFilter === "सभी"
      ? allCalls
      : allCalls.filter((c) => c.type === typeMap[activeFilter]);
  return (
    <div className="flex flex-col gap-0">
      {/* Header */}
      <div
        className="px-4 py-3 text-white"
        style={{
          background: "linear-gradient(135deg, #1B5E20, #2E7D32, #388E3C)",
        }}
      >
        <p
          className="font-black text-lg"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          📞 कुल कॉल: {allCalls.length}
        </p>
        <p className="text-white/70 text-xs">Call Log • कॉल इतिहास</p>
      </div>
      {/* Filter tabs */}
      <div
        className="flex gap-1 px-3 py-2 overflow-x-auto no-scrollbar"
        style={{
          background: "white",
          borderBottom: "1px solid rgba(27,94,32,0.1)",
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className="px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0 active:scale-95 transition-all"
            style={{
              background:
                activeFilter === f ? "#1B5E20" : "rgba(27,94,32,0.08)",
              color: activeFilter === f ? "white" : "#1B5E20",
              fontFamily: HINDI_FONT_LOCAL,
            }}
          >
            {f}
          </button>
        ))}
      </div>
      {/* Call entries */}
      <div className="flex flex-col">
        {filtered.map((call) => (
          <div
            key={call.id}
            className="flex items-center gap-3 px-4 py-3"
            style={{
              background: "white",
              borderBottom: "1px solid rgba(27,94,32,0.06)",
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0"
              style={{ background: `${call.color}15`, color: call.color }}
            >
              {call.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-bold text-gray-800 truncate"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {call.name}
              </p>
              <div className="flex items-center gap-1">
                <span style={{ color: call.color, fontSize: "0.8rem" }}>
                  {call.icon}
                </span>
                <p
                  className="text-xs text-gray-400"
                  style={{ fontFamily: HINDI_FONT_LOCAL }}
                >
                  {call.time}
                  {call.duration ? ` · ${call.duration}` : ""}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="px-3 py-1.5 rounded-full text-xs font-bold active:scale-95 transition-transform"
              style={{
                background: "rgba(27,94,32,0.1)",
                color: "#1B5E20",
                fontFamily: HINDI_FONT_LOCAL,
              }}
            >
              📞 कॉल
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 41. Contacts App ─────────────────────────────────────────────────────────
function ContactsApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const contacts = [
    {
      id: 1,
      name: "अमित शर्मा",
      phone: "+91 98765 43210",
      letter: "अ",
      color: "#E53935",
      section: "अ",
    },
    {
      id: 2,
      name: "Bablu Bhai",
      phone: "+91 90012 34567",
      letter: "B",
      color: "#8E24AA",
      section: "B",
    },
    {
      id: 3,
      name: "Mahesh Uncle",
      phone: "+91 88776 65544",
      letter: "M",
      color: "#1976D2",
      section: "M",
    },
    {
      id: 4,
      name: "मम्मी",
      phone: "+91 99887 76655",
      letter: "म",
      color: "#C62828",
      section: "म",
    },
    {
      id: 5,
      name: "Priya Di",
      phone: "+91 77665 54433",
      letter: "P",
      color: "#E91E8C",
      section: "P",
    },
    {
      id: 6,
      name: "रमेश कुमार",
      phone: "+91 98654 32109",
      letter: "र",
      color: "#00897B",
      section: "र",
    },
    {
      id: 7,
      name: "राजू यादव",
      phone: "+91 87654 32198",
      letter: "र",
      color: "#388E3C",
      section: "र",
    },
    {
      id: 8,
      name: "सुनीता जी",
      phone: "+91 76543 21987",
      letter: "स",
      color: "#F57C00",
      section: "स",
    },
    {
      id: 9,
      name: "Sita Bai",
      phone: "+91 65432 19876",
      letter: "S",
      color: "#7B1FA2",
      section: "S",
    },
    {
      id: 10,
      name: "पापा जी",
      phone: "+91 91234 56789",
      letter: "प",
      color: "#1565C0",
      section: "प",
    },
  ];
  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search),
  );
  const sections = Array.from(new Set(filtered.map((c) => c.section)));
  return (
    <div className="flex flex-col gap-0">
      {/* Search */}
      <div
        className="px-4 py-3"
        style={{
          background: "white",
          borderBottom: "1px solid rgba(2,136,209,0.12)",
        }}
      >
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-full"
          style={{
            background: "rgba(2,136,209,0.08)",
            border: "1px solid rgba(2,136,209,0.2)",
          }}
        >
          <span className="text-blue-400">🔍</span>
          <input
            className="flex-1 bg-transparent text-sm outline-none text-gray-700"
            placeholder="नाम या नंबर खोजें... Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          />
        </div>
      </div>
      {/* Contact list */}
      <div className="flex flex-col">
        {sections.map((section) => (
          <div key={section}>
            <div
              className="px-4 py-1"
              style={{
                background: "rgba(2,136,209,0.06)",
                borderBottom: "1px solid rgba(2,136,209,0.08)",
              }}
            >
              <p className="text-xs font-black text-blue-700">{section}</p>
            </div>
            {filtered
              .filter((c) => c.section === section)
              .map((contact) => (
                <div key={contact.id}>
                  <button
                    type="button"
                    className="w-full flex items-center gap-3 px-4 py-3 active:opacity-80 transition-opacity"
                    style={{
                      background: "white",
                      borderBottom: "1px solid rgba(2,136,209,0.06)",
                    }}
                    onClick={() =>
                      setSelectedContact(
                        selectedContact === contact.id ? null : contact.id,
                      )
                    }
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0"
                      style={{ background: contact.color }}
                    >
                      {contact.letter}
                    </div>
                    <div className="flex-1 text-left">
                      <p
                        className="text-sm font-bold text-gray-800"
                        style={{ fontFamily: HINDI_FONT_LOCAL }}
                      >
                        {contact.name}
                      </p>
                      <p className="text-xs text-gray-400">{contact.phone}</p>
                    </div>
                    <span className="text-gray-300">
                      {selectedContact === contact.id ? "▲" : "▼"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {selectedContact === contact.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                        style={{
                          background: `${contact.color}08`,
                          borderBottom: "1px solid rgba(2,136,209,0.08)",
                        }}
                      >
                        <div className="flex gap-3 px-4 py-3">
                          {[
                            { icon: "📞", label: "कॉल" },
                            { icon: "💬", label: "संदेश" },
                            { icon: "📱", label: "WhatsApp" },
                          ].map((a) => (
                            <button
                              key={a.label}
                              type="button"
                              className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl active:scale-95 transition-transform"
                              style={{
                                background: contact.color,
                                color: "white",
                              }}
                            >
                              <span style={{ fontSize: "1.2rem" }}>
                                {a.icon}
                              </span>
                              <p
                                className="font-semibold"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: HINDI_FONT_LOCAL,
                                }}
                              >
                                {a.label}
                              </p>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 42. TaruColor App ────────────────────────────────────────────────────────
function TaruColorApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [color1, setColor1] = useState("#FF6B2B");
  const [color2, setColor2] = useState("#1A237E");

  const copyColor = (hex: string) => {
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const blendColors = (c1: string, c2: string) => {
    const r1 = Number.parseInt(c1.slice(1, 3), 16);
    const g1 = Number.parseInt(c1.slice(3, 5), 16);
    const b1 = Number.parseInt(c1.slice(5, 7), 16);
    const r2 = Number.parseInt(c2.slice(1, 3), 16);
    const g2 = Number.parseInt(c2.slice(3, 5), 16);
    const b2 = Number.parseInt(c2.slice(5, 7), 16);
    const r = Math.round((r1 + r2) / 2)
      .toString(16)
      .padStart(2, "0");
    const g = Math.round((g1 + g2) / 2)
      .toString(16)
      .padStart(2, "0");
    const b = Math.round((b1 + b2) / 2)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}`;
  };

  const traditionalColors = [
    { name: "केसरिया", eng: "Saffron", hex: "#FF6B2B" },
    { name: "हल्दी", eng: "Turmeric", hex: "#FFC107" },
    { name: "मेहंदी", eng: "Mehendi", hex: "#558B2F" },
    { name: "सिंदूर", eng: "Sindoor", hex: "#C62828" },
    { name: "नीलम", eng: "Indigo", hex: "#1A237E" },
    { name: "गुलाबी", eng: "Gulabi", hex: "#E91E8C" },
  ];
  const marwadiColors = [
    { name: "अरताई नीला", eng: "Arrtai Blue", hex: "#0D47A1" },
    { name: "राजस्थानी लाल", eng: "Rajasthani Red", hex: "#B71C1C" },
    { name: "सोनेरी", eng: "Soneri Gold", hex: "#F9A825" },
    { name: "जयपुर गुलाबी", eng: "Jaipur Pink", hex: "#AD1457" },
    { name: "उदयपुर श्याम", eng: "Udaipur Green", hex: "#1B5E20" },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Header */}
      <div
        className="rounded-2xl p-4 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #FF6B2B, #E91E8C, #9C27B0, #1A237E)",
          boxShadow: "0 8px 24px rgba(233,30,140,0.35)",
        }}
      >
        <p className="font-black text-xl">🎨 TaruColor</p>
        <p
          className="text-white/70 text-xs mt-1"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          भारतीय रंग पैलेट • Indian Color Palette Studio
        </p>
      </div>

      {/* Traditional palette */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "white",
          border: "1px solid rgba(233,30,140,0.1)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <p
          className="text-sm font-bold text-gray-800 mb-3"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🪔 भारतीय परंपरागत रंग • Indian Traditional Colors
        </p>
        <div className="grid grid-cols-3 gap-2">
          {traditionalColors.map((c) => (
            <button
              key={c.hex}
              type="button"
              onClick={() => {
                copyColor(c.hex);
                setColor1(c.hex);
              }}
              className="rounded-xl overflow-hidden active:scale-95 transition-transform"
              style={{
                boxShadow:
                  copiedColor === c.hex
                    ? `0 0 0 3px ${c.hex}`
                    : "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ background: c.hex, height: "48px" }} />
              <div className="p-1.5 bg-white text-center">
                <p
                  style={{
                    fontSize: "9px",
                    fontWeight: "bold",
                    fontFamily: HINDI_FONT_LOCAL,
                    color: "#333",
                  }}
                >
                  {c.name}
                </p>
                <p style={{ fontSize: "8px", color: "#999" }}>{c.hex}</p>
                {copiedColor === c.hex && (
                  <p
                    style={{
                      fontSize: "8px",
                      color: "#00A651",
                      fontWeight: "bold",
                    }}
                  >
                    ✓ कॉपी!
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Marwadi brand palette */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "white",
          border: "1px solid rgba(13,71,161,0.12)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <p
          className="text-sm font-bold text-gray-800 mb-3"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🏰 मारवाड़ी मॉडर्न पैलेट • Modern Marwadi Brand
        </p>
        <div className="grid grid-cols-5 gap-1.5">
          {marwadiColors.map((c) => (
            <button
              key={c.hex}
              type="button"
              onClick={() => {
                copyColor(c.hex);
                setColor2(c.hex);
              }}
              className="rounded-xl overflow-hidden active:scale-95 transition-transform"
              style={{
                boxShadow:
                  copiedColor === c.hex ? `0 0 0 3px ${c.hex}` : "none",
              }}
            >
              <div
                style={{
                  background: c.hex,
                  height: "40px",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <div className="bg-white text-center p-1">
                <p
                  style={{
                    fontSize: "7px",
                    color: "#666",
                    fontFamily: HINDI_FONT_LOCAL,
                    fontWeight: "bold",
                  }}
                >
                  {c.name}
                </p>
                {copiedColor === c.hex && (
                  <p
                    style={{
                      fontSize: "7px",
                      color: "#00A651",
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Color mixer */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: "white",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <p
          className="text-sm font-bold text-gray-800 mb-3"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🧪 रंग मिश्रण • Color Mixer
        </p>
        <div className="flex items-center gap-2">
          <div className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-16 h-16 rounded-2xl"
              style={{
                background: color1,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            />
            <p style={{ fontSize: "9px", color: "#666" }}>{color1}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span style={{ fontSize: "1.5rem" }}>➕</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-16 h-16 rounded-2xl"
              style={{
                background: color2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            />
            <p style={{ fontSize: "9px", color: "#666" }}>{color2}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span style={{ fontSize: "1.5rem" }}>🟰</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-16 h-16 rounded-2xl"
              style={{
                background: blendColors(color1, color2),
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            />
            <p style={{ fontSize: "9px", color: "#666" }}>
              {blendColors(color1, color2)}
            </p>
          </div>
        </div>
        <p
          className="text-center text-xs text-gray-400 mt-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          रंग टैप करें चुनने के लिए • Tap colors above to select
        </p>
      </div>

      {/* Arrtai brand section */}
      <div
        className="rounded-2xl p-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,71,161,0.08), rgba(233,30,140,0.06))",
          border: "1px solid rgba(13,71,161,0.15)",
        }}
      >
        <p
          className="text-sm font-bold text-blue-900 mb-2"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🏷️ Arrtai ब्रांड पैलेट
        </p>
        <div className="flex gap-2">
          {["#0D47A1", "#FF6B2B", "#1B5E20", "#F9A825", "#C62828"].map(
            (hex) => (
              <button
                key={hex}
                type="button"
                onClick={() => copyColor(hex)}
                className="flex-1 h-10 rounded-xl active:scale-90 transition-transform"
                style={{
                  background: hex,
                  boxShadow:
                    copiedColor === hex
                      ? `0 0 0 3px white, 0 0 0 5px ${hex}`
                      : "0 2px 6px rgba(0,0,0,0.2)",
                }}
              />
            ),
          )}
        </div>
        <p
          className="text-center text-xs text-blue-700 mt-2 font-semibold"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          अरताई ब्रांड कलर्स • Official Arrtai Brand Colors
        </p>
      </div>
    </div>
  );
}

// ─── 43. Play Store App ───────────────────────────────────────────────────────
function PlayStoreApp() {
  const HINDI_FONT_LOCAL = "'Noto Sans Devanagari', sans-serif";
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("भारतीय");
  const [installedApps, setInstalledApps] = useState<Set<string>>(
    new Set([
      "UPI Pay",
      "Dukaan",
      "Arrtai AI",
      "Rail Connect",
      "Jio",
      "Cricket",
    ]),
  );

  const categories = ["भारतीय", "फाइनेंस", "मनोरंजन", "सोशल", "यूटिलिटी"];

  const allApps = [
    {
      name: "UPI Pay",
      hindi: "यूपीआई पे",
      icon: "💸",
      category: "फाइनेंस",
      rating: "4.8",
      downloads: "50M+",
      size: "12 MB",
      dev: "NPCI",
    },
    {
      name: "Dukaan",
      hindi: "दुकान",
      icon: "🏪",
      category: "भारतीय",
      rating: "4.7",
      downloads: "10M+",
      size: "25 MB",
      dev: "Dukaan Inc.",
    },
    {
      name: "Arrtai AI",
      hindi: "अरताई AI",
      icon: "🤖",
      category: "भारतीय",
      rating: "4.9",
      downloads: "5M+",
      size: "18 MB",
      dev: "Arrtai India",
    },
    {
      name: "Rail Connect",
      hindi: "रेल कनेक्ट",
      icon: "🚂",
      category: "यूटिलिटी",
      rating: "4.6",
      downloads: "100M+",
      size: "30 MB",
      dev: "IRCTC",
    },
    {
      name: "Jio",
      hindi: "जिओ",
      icon: "📡",
      category: "यूटिलिटी",
      rating: "4.5",
      downloads: "500M+",
      size: "55 MB",
      dev: "Reliance Jio",
    },
    {
      name: "Cricket",
      hindi: "क्रिकेट",
      icon: "🏏",
      category: "मनोरंजन",
      rating: "4.8",
      downloads: "20M+",
      size: "22 MB",
      dev: "BCCI",
    },
    {
      name: "Aarogya Setu",
      hindi: "आरोग्य सेतु",
      icon: "🏥",
      category: "भारतीय",
      rating: "4.4",
      downloads: "200M+",
      size: "19 MB",
      dev: "NIC India",
    },
    {
      name: "DigiLocker",
      hindi: "डिजीलॉकर",
      icon: "🔐",
      category: "भारतीय",
      rating: "4.6",
      downloads: "50M+",
      size: "15 MB",
      dev: "Govt. of India",
    },
    {
      name: "Koo",
      hindi: "कू",
      icon: "🐦",
      category: "सोशल",
      rating: "4.2",
      downloads: "30M+",
      size: "28 MB",
      dev: "Bombinate Tech",
    },
    {
      name: "Vyapar",
      hindi: "व्यापार",
      icon: "📊",
      category: "फाइनेंस",
      rating: "4.7",
      downloads: "15M+",
      size: "35 MB",
      dev: "Vyapar App",
    },
    {
      name: "Jio Bharat",
      hindi: "जियो भारत",
      icon: "📺",
      category: "मनोरंजन",
      rating: "4.5",
      downloads: "80M+",
      size: "40 MB",
      dev: "Reliance Jio",
    },
    {
      name: "Kisan App",
      hindi: "किसान ऐप",
      icon: "🌾",
      category: "भारतीय",
      rating: "4.3",
      downloads: "25M+",
      size: "20 MB",
      dev: "Govt. of India",
    },
    {
      name: "BharatPe",
      hindi: "भारत पे",
      icon: "🏦",
      category: "फाइनेंस",
      rating: "4.6",
      downloads: "40M+",
      size: "32 MB",
      dev: "BharatPe",
    },
    {
      name: "Facebook",
      hindi: "फेसबुक",
      icon: "📘",
      category: "सोशल",
      rating: "4.0",
      downloads: "5B+",
      size: "68 MB",
      dev: "Meta",
    },
    {
      name: "Instagram",
      hindi: "इंस्टाग्राम",
      icon: "📸",
      category: "सोशल",
      rating: "4.1",
      downloads: "2B+",
      size: "72 MB",
      dev: "Meta",
    },
    {
      name: "YouTube",
      hindi: "यूट्यूब",
      icon: "▶️",
      category: "मनोरंजन",
      rating: "4.3",
      downloads: "10B+",
      size: "80 MB",
      dev: "Google",
    },
  ];

  const featured = allApps.slice(0, 3);
  const tabFiltered =
    activeTab === "भारतीय"
      ? allApps.filter((a) => a.category === "भारतीय")
      : allApps.filter((a) => a.category === activeTab);
  const searched = searchQuery
    ? allApps.filter(
        (a) =>
          a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.hindi.includes(searchQuery),
      )
    : null;
  const displayApps = searched ?? tabFiltered;

  const toggleInstall = (name: string) => {
    setInstalledApps((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-0" style={{ background: "#F8F9FA" }}>
      {/* Search bar */}
      <div className="px-4 pt-4 pb-3" style={{ background: "white" }}>
        <div
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
          style={{
            background: "#F1F3F4",
            border: "1px solid rgba(1,135,95,0.15)",
          }}
        >
          <span className="text-gray-400">🔍</span>
          <input
            className="flex-1 bg-transparent text-sm outline-none text-gray-700"
            placeholder="ऐप खोजें... Search apps"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-gray-400 text-sm"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Featured banner */}
      {!searchQuery && (
        <div className="px-4 pb-3" style={{ background: "white" }}>
          <p
            className="text-xs font-bold text-gray-500 mb-2"
            style={{ fontFamily: HINDI_FONT_LOCAL }}
          >
            🌟 आज के बेहतरीन ऐप • Editor's Picks
          </p>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {featured.map((app) => (
              <div
                key={app.name}
                className="flex-shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width: "140px",
                  background: "linear-gradient(135deg, #01875F, #00BFA5)",
                  boxShadow: "0 4px 16px rgba(1,135,95,0.3)",
                }}
              >
                <div
                  className="flex items-center justify-center h-20"
                  style={{ fontSize: "3rem" }}
                >
                  {app.icon}
                </div>
                <div className="p-2 bg-white/10">
                  <p
                    className="text-white text-xs font-bold truncate"
                    style={{ fontFamily: HINDI_FONT_LOCAL }}
                  >
                    {app.hindi}
                  </p>
                  <p className="text-white/70 text-xs">{app.rating} ⭐</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category tabs */}
      {!searchQuery && (
        <div
          className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar"
          style={{
            background: "white",
            borderBottom: "1px solid rgba(1,135,95,0.1)",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold active:scale-95 transition-all"
              style={{
                background:
                  activeTab === cat
                    ? "linear-gradient(135deg, #01875F, #00BFA5)"
                    : "rgba(1,135,95,0.08)",
                color: activeTab === cat ? "white" : "#01875F",
                fontFamily: HINDI_FONT_LOCAL,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* App list */}
      <div className="flex flex-col gap-0">
        {searchQuery && (
          <div className="px-4 pt-3 pb-1">
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: HINDI_FONT_LOCAL }}
            >
              {displayApps.length} परिणाम • results
            </p>
          </div>
        )}
        {displayApps.map((app, idx) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.03 }}
            className="flex items-center gap-3 px-4 py-3"
            style={{
              background: "white",
              borderBottom: "1px solid rgba(1,135,95,0.06)",
            }}
          >
            {/* App icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #01875F20, #00BFA520)",
                fontSize: "1.8rem",
              }}
            >
              {app.icon}
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-bold text-gray-800 truncate"
                style={{ fontFamily: HINDI_FONT_LOCAL }}
              >
                {app.hindi}
              </p>
              <p className="text-xs text-gray-400 truncate">{app.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-yellow-500 font-bold">
                  {app.rating} ⭐
                </span>
                <span className="text-xs text-gray-400">{app.downloads}</span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(1,135,95,0.1)",
                    color: "#01875F",
                    fontFamily: HINDI_FONT_LOCAL,
                  }}
                >
                  {app.category}
                </span>
              </div>
            </div>
            {/* Install button */}
            <button
              type="button"
              onClick={() => toggleInstall(app.name)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold active:scale-95 transition-all flex-shrink-0"
              style={{
                background: installedApps.has(app.name)
                  ? "rgba(1,135,95,0.1)"
                  : "linear-gradient(135deg, #01875F, #00BFA5)",
                color: installedApps.has(app.name) ? "#01875F" : "white",
                fontFamily: HINDI_FONT_LOCAL,
                minWidth: "64px",
              }}
            >
              {installedApps.has(app.name) ? "✅ इंस्टॉल" : "इंस्टॉल"}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-4 text-center">
        <p
          className="text-xs text-gray-400"
          style={{ fontFamily: HINDI_FONT_LOCAL }}
        >
          🇮🇳 मारवाड़ी UI OS प्ले स्टोर • Powered by Arrtai India
        </p>
      </div>
    </div>
  );
}

// ─── Coming Soon fallback ──────────────────────────────────────────────────────
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
          style={{ fontFamily: HINDI_FONT }}
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

// ─── Workaround for .Name access on string keys ────────────────────────────────
// We use "v.Name" in SabziMandi/Chai as a shorthand — fix to use .name below
// (Already corrected inline above — this note is for clarity)

interface AppViewProps {
  app: App;
  onBack: () => void;
}

const APP_CONTENT_MAP: Record<string, () => ReactElement> = {
  "1": () => <UpiPayApp />,
  "2": () => <DukaanApp />,
  "3": () => <SabziMandiApp />,
  "4": () => <MandirApp />,
  "5": () => <CricketApp />,
  "6": () => <SamacharApp />,
  "7": () => <PanchangApp />,
  "8": () => <PhoneApp />,
  "9": () => <MessagesApp />,
  "10": () => <CameraApp />,
  "11": () => <WeatherApp />,
  "12": () => <SettingsApp />,
  "13": () => <MapsApp />,
  "14": () => <MusicApp />,
  "15": () => <RickshawApp />,
  "16": () => <ChaiApp />,
  "17": () => <PrototypeApp />,
  "18": () => <DealerNetworkApp />,
  "19": () => <LocalMarketingApp />,
  "20": () => <SalesServiceApp />,
  "21": () => <FundingApp />,
  "22": () => <CommunityApp />,
  "23": () => <GrandLaunchApp />,
  "24": () => <SmartStoreApp />,
  "25": () => <ArrtaiAIApp />,
  "26": () => <AarogyaSetuApp />,
  "27": () => <DigiLockerApp />,
  "28": () => <RailConnectApp />,
  "29": () => <KooApp />,
  "30": () => <VyaparApp />,
  "31": () => <JioBharatApp />,
  "32": () => <FarmerConnectApp />,
  "33": () => <MarwadiRashifalApp />,
  "34": () => <ArrtaiBusinessApp />,
  "35": () => <FacebookApp />,
  "36": () => <InstagramApp />,
  "37": () => <YouTubeApp />,
  "38": () => <BharatPeApp />,
  "39": () => <JioApp />,
  "40": () => <CallLogApp />,
  "41": () => <ContactsApp />,
  "42": () => <TaruColorApp />,
  "43": () => <PlayStoreApp />,
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
                style={{ fontSize: "11px", fontFamily: HINDI_FONT }}
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

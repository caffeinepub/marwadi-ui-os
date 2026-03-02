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

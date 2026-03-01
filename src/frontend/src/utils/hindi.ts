/**
 * Hindi numeral conversion and date/time formatting utilities
 */

const HINDI_DIGITS: Record<string, string> = {
  "0": "०",
  "1": "१",
  "2": "२",
  "3": "३",
  "4": "४",
  "5": "५",
  "6": "६",
  "7": "७",
  "8": "८",
  "9": "९",
};

export function toHindiNumerals(str: string): string {
  return str.replace(/[0-9]/g, (d) => HINDI_DIGITS[d]);
}

const HINDI_DAYS: Record<string, string> = {
  Sunday: "रविवार",
  Monday: "सोमवार",
  Tuesday: "मंगलवार",
  Wednesday: "बुधवार",
  Thursday: "गुरुवार",
  Friday: "शुक्रवार",
  Saturday: "शनिवार",
};

const HINDI_MONTHS: Record<string, string> = {
  January: "जनवरी",
  February: "फरवरी",
  March: "मार्च",
  April: "अप्रैल",
  May: "मई",
  June: "जून",
  July: "जुलाई",
  August: "अगस्त",
  September: "सितंबर",
  October: "अक्टूबर",
  November: "नवंबर",
  December: "दिसंबर",
};

export function getHindiDate(date: Date): string {
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const dateNum = date.getDate().toString();
  const year = date.getFullYear().toString();

  const hindiDay = HINDI_DAYS[day] || day;
  const hindiMonth = HINDI_MONTHS[month] || month;
  const hindiDate = toHindiNumerals(dateNum);
  const hindiYear = toHindiNumerals(year);

  return `${hindiDay}, ${hindiDate} ${hindiMonth} ${hindiYear}`;
}

export function getEnglishDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getHindiTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const timeStr = `${hours}:${minutes.toString().padStart(2, "0")}`;
  const period = ampm === "AM" ? "पूर्वाह्न" : "अपराह्न";
  return `${toHindiNumerals(timeStr)} ${period}`;
}

export function getEnglishTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

export function getShortTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

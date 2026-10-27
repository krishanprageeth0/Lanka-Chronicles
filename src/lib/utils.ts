import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatHistoricalYear(year: number, lang: 'en' | 'si' = 'en'): string {
  if (year < 0) {
    const abs = Math.abs(year);
    return lang === 'si' ? `ක්‍රි.පූ. ${abs}` : `${abs} BCE`;
  }
  return lang === 'si' ? `ක්‍රි.ව. ${year}` : `${year} CE`;
}

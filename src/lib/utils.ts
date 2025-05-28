import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use GitHub raw content URL
  return `https://raw.githubusercontent.com/abdurrahmanninja/coach-abdualrhman-33/main/src/assets/${cleanPath}`;
}

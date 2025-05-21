import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If the path starts with 'src/assets', convert it to use the public directory
  if (cleanPath.startsWith('src/assets')) {
    const assetPath = cleanPath.replace('src/assets/', '');
    // Determine the asset type and return the appropriate path
    if (assetPath.endsWith('.mp4')) {
      return `/coach-abdualrhman-33/assets/media/${assetPath}`;
    }
    if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(assetPath)) {
      return `/coach-abdualrhman-33/assets/images/${assetPath}`;
    }
    return `/coach-abdualrhman-33/assets/${assetPath}`;
  }
  
  // For other paths, just add the base URL
  return `/coach-abdualrhman-33/${cleanPath}`;
}

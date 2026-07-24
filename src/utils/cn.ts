import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines conditional classes and resolves conflicting Tailwind utilities.
 *
 * Example:
 * cn(
 *   'px-4 text-sm',
 *   isLarge && 'px-6 text-lg',
 *   className,
 * );
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
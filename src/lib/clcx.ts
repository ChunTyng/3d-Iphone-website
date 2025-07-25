import { twMerge } from 'tailwind-merge';
import clsx, { type ClassValue } from 'clsx';

export function clcx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

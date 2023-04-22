import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// util function to cleanup tailwind classes and add custom classes
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

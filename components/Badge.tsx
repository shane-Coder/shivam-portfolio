import type { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200">
      {children}
    </span>
  );
}

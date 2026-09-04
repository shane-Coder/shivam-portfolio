import type { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-white px-3 py-1 text-sm text-zinc-700 shadow-sm dark:bg-zinc-800 dark:text-zinc-200">
      {children}
    </span>
  );
}

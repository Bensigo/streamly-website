'use client';

// Theme system removed — single light theme only.
// This file is kept so imports don't break.

import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export const useTheme = () => ({ theme: 'light' as const, toggleTheme: () => {} });

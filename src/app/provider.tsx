'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" enableColorScheme={false}>
        <RecoilRoot>{children}</RecoilRoot>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

'use client'

import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export function useLanguage() {
  return {
    lang: 'es',
    setLang: () => {},
    t: (key: string) => key,
  }
}
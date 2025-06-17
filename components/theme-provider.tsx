"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  systemTheme: "light" | "dark"
}

const initialState: ThemeContextType = {
  theme: "system",
  setTheme: () => null,
  systemTheme: "light",
}

const ThemeContext = createContext<ThemeContextType>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "chamchi-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme | null

    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [storageKey])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light")
    }

    handleChange()
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, theme)

    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme, systemTheme, storageKey])

  const value = {
    theme,
    setTheme,
    systemTheme,
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

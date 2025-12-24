import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button.jsx'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = window.localStorage.getItem('medisure-theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
      ? 'dark'
      : 'light'
  })

  const links = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'Plans', to: '/plans' },
      { label: 'Benefits', to: '/benefits' },
      { label: 'Claims', to: '/claims' },
      { label: 'Reviews', to: '/reviews' },
    ],
    [],
  )

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')

    try {
      window.localStorage.setItem('medisure-theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/70 bg-white/70 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/60 dark:shadow-black/30">
      <nav className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-3 px-4 py-3 sm:px-6 md:grid-cols-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold tracking-tight md:col-span-3"
          aria-label="Medisure home"
        >
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-slate-900 text-white shadow-sm ring-1 ring-white/10">
            <span className="absolute inset-0 bg-gradient-to-br from-indigo-500/70 via-slate-900 to-sky-500/60" />
            <span className="relative text-sm font-bold">M</span>
          </span>
          <span className="text-slate-900 dark:text-slate-100">Medisure</span>
        </Link>

        <div className="hidden md:col-span-6 md:flex md:items-center md:justify-center">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    'rounded-full px-4 py-2 font-medium transition-colors duration-200 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-900/60 dark:hover:text-slate-100',
                    isActive
                      ? 'bg-slate-50 text-slate-900 ring-1 ring-slate-200/70 dark:bg-slate-900/60 dark:text-slate-100 dark:ring-slate-700/70'
                      : '',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-end gap-3 md:col-span-3 md:flex">
          <Button as="a" href="#contact" size="sm" className="px-5 shadow-sm shadow-indigo-500/20">
            Get Quote
          </Button>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex size-11 items-center justify-center rounded-full text-slate-700 ring-1 ring-slate-200/80 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:text-slate-200 dark:ring-slate-700/80 dark:hover:bg-slate-900/60"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M17.66 17.66l1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M6.34 17.66l-1.41 1.41" />
                <path d="M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
              </svg>
            )}
          </button>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-xl p-2 text-slate-700 ring-1 ring-slate-200/80 transition-colors duration-200 hover:bg-slate-50 md:hidden dark:text-slate-200 dark:ring-slate-700/80 dark:hover:bg-slate-900/60"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="text-lg">☰</span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-100/80 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-xl md:hidden dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-black/30">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-3 text-sm">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      'rounded-2xl px-3 py-2.5 font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900/60',
                      isActive
                        ? 'bg-slate-50 text-slate-900 ring-1 ring-slate-200/70 dark:bg-slate-900/60 dark:text-slate-100 dark:ring-slate-700/70'
                        : '',
                    ].join(' ')
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-11 items-center justify-between rounded-2xl px-3 font-semibold text-slate-700 ring-1 ring-slate-200/80 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:text-slate-200 dark:ring-slate-700/80 dark:hover:bg-slate-900/60"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <span>Theme</span>
                <span className="text-sm">{theme === 'dark' ? 'Dark' : 'Light'}</span>
              </button>

              <Button as="a" href="#contact" className="mt-1 w-full">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

import Button from '../common/Button.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-100 via-sky-100 to-white blur-3xl dark:from-indigo-500/20 dark:via-sky-500/15 dark:to-slate-950" />
        <div className="absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute -bottom-48 right-0 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl dark:bg-indigo-500/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/60 to-slate-50 dark:from-slate-950 dark:via-slate-950/60 dark:to-slate-950" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80 shadow-sm shadow-slate-900/5 dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-800/70 dark:shadow-black/30">
            <span className="size-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
            Simple, secure, mobile-first
          </p>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
            Your coverage,
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
              simplified
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Compare life & health options, understand benefits, and keep policy
            details organized—calm, clear, and fast on any device.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-5 text-sm font-semibold text-white shadow-sm shadow-indigo-500/25 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 active:translate-y-0 dark:shadow-indigo-500/15"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition group-hover:bg-white/15">
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
                  <path d="M12 3v12" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </span>
              <span>
                <span className="block text-[11px] font-medium opacity-85">Get started</span>
                <span className="block">Request quote</span>
              </span>
            </a>

            <Button as="a" href="#services" variant="secondary" size="lg">
              Explore features
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            {[{ t: 'Instant quotes', d: 'Fast estimates.' }, { t: 'Plan compare', d: 'Clear choices.' }, { t: 'Claims support', d: 'Know next steps.' }].map(
              (item) => (
                <div
                  key={item.t}
                  className="rounded-2xl border border-slate-100/80 bg-white/80 p-4 shadow-sm shadow-slate-900/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-black/30"
                >
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    {item.t}
                  </p>
                  <p className="mt-1">{item.d}</p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-[2rem] border border-slate-100/80 bg-white/70 p-7 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/30">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/60 dark:ring-white/10" />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: 'Plan\ncompare',
                  icon: (
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
                      <path d="M20 6H4" />
                      <path d="M14 6V4" />
                      <path d="M10 6V4" />
                      <rect x="4" y="6" width="16" height="14" rx="2" />
                      <path d="M7 11h10" />
                      <path d="M7 15h7" />
                    </svg>
                  ),
                },
                {
                  title: 'Policy\nwallet',
                  icon: (
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
                      <path d="M20 7H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
                      <path d="M16 7V5a2 2 0 0 0-2-2H6" />
                      <path d="M18 12h.01" />
                    </svg>
                  ),
                },
                {
                  title: 'Claims\nstatus',
                  icon: (
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
                      <path d="M9 11l2 2 4-4" />
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl bg-slate-50/80 p-5 text-center shadow-sm shadow-slate-900/5 ring-1 ring-slate-100/80 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:bg-slate-950/40 dark:ring-slate-800/80 dark:hover:bg-slate-950/60 dark:shadow-black/30"
                >
                  <div className="mx-auto grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-sm">
                    {card.icon}
                  </div>
                  <p className="mt-4 whitespace-pre-line text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'Secure by design', icon: '🛡️' },
                { label: 'Mobile first', icon: '📱' },
                { label: 'Fast support', icon: '⚡' },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20"
                >
                  <span aria-hidden="true">{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

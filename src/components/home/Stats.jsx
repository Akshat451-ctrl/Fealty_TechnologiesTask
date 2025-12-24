export default function Stats() {
  const stats = [
    {
      label: 'Plans compared',
      value: '50+ options',
      note: 'Life + health (example)',
    },
    { label: 'Fast quote flow', value: '2–3 min', note: 'Typical completion' },
    { label: 'Claim visibility', value: 'Real-time', note: 'Status updates' },
    { label: 'Customer rating', value: '4.8/5', note: 'Sample reviews' },
  ]

  return (
    <section id="stats" className="scroll-mt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            TRUSTED{' '}
            <span className="text-sky-400">HIGHLIGHTS</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
            Replace these sample stats with your real metrics and timelines.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <div className="mt-10 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <p className="text-sm font-semibold text-white">Trust built on clarity</p>
              <p className="mt-2 text-sm text-white/70">
                Add your underwriting turnaround times, approval rates, and service SLAs
                here.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/20"
              >
                <p className="text-xs font-medium text-white/70">
                  {item.label}
                </p>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-white/70">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

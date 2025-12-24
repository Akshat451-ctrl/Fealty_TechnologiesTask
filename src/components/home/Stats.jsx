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
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-white/70">Highlights</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Trust built on clarity
            </h2>
            <p className="mt-3 text-sm text-white/70 sm:text-base">
              Replace these sample stats with your real performance metrics,
              underwriting timelines, or customer satisfaction numbers.
            </p>
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

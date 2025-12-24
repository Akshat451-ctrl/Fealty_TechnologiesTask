import Button from '../common/Button.jsx'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
            PLAN{' '}
            <span className="text-indigo-600 dark:text-sky-400">OPTIONS</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Choose coverage that fits your life, with details that are easy to
            understand.
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            Whether you’re starting with basic protection or building a more
            comprehensive plan, you can compare options and understand benefits
            before you decide.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Clear benefit summaries',
                desc: 'Understand coverage at a glance.',
              },
              {
                title: 'Riders & add-ons',
                desc: 'Customize without confusion.',
              },
              {
                title: 'Premium transparency',
                desc: 'See what affects pricing.',
              },
              {
                title: 'Easy document uploads',
                desc: 'Keep everything organized.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100/80 bg-white p-4 shadow-sm shadow-slate-900/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/40 dark:shadow-black/30"
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <Button as="a" href="#process" variant="secondary">
              See claims flow
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl border border-slate-100/80 bg-white/75 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/30">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-gradient-to-br from-indigo-100 to-sky-100 blur-2xl dark:from-indigo-500/20 dark:to-sky-500/10" />
            <div className="relative">
              <div className="rounded-2xl bg-slate-50/70 p-6 ring-1 ring-slate-100/80 dark:bg-slate-950/40 dark:ring-slate-800/80">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Add plan details here
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Use this area for: eligibility notes, rider examples, policy
                  terms (summary), exclusions (high level), or a small FAQ list.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-10 rounded-xl bg-white ring-1 ring-slate-100 dark:bg-slate-900/60 dark:ring-slate-800"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 p-4 text-white shadow-sm">
                  <p className="text-xs text-white/70">Popular choice</p>
                  <p className="mt-1 text-sm font-semibold">
                    Term life + essential health
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100/80 dark:bg-slate-950/40 dark:ring-slate-800/80">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tip</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Compare deductibles & riders
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-white/60 p-4 text-sm text-slate-600 shadow-sm shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-950/20 dark:text-slate-300 dark:shadow-black/30">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Add another content section
                </p>
                <p className="mt-1">
                  Example: "Why choose us", policy FAQs, customer stories, or a
                  brief compliance note.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

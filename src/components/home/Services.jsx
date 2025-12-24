import { servicesData } from '../../data/servicesData.js'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
            INSURANCE{' '}
            <span className="text-indigo-600 dark:text-sky-400">BENEFITS</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Coverage choices that feel understandable, with support when it
            matters.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100/80 bg-white/75 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/50 dark:hover:bg-slate-900/60 dark:shadow-black/30"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 size-64 rounded-full bg-gradient-to-br from-indigo-100 to-sky-100 blur-2xl dark:from-indigo-500/20 dark:to-sky-500/10" />
              </div>

              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-sm shadow-indigo-500/25 ring-1 ring-white/10">
                  <span className="text-sm font-semibold">{service.title[0]}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="mt-5 grid flex-1 gap-2 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-3">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-slate-50/80 px-3 py-2 ring-1 ring-slate-100/80 transition-colors duration-200 group-hover:bg-white dark:bg-slate-950/40 dark:ring-slate-800/80 dark:group-hover:bg-slate-950/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Learn more{' '}
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

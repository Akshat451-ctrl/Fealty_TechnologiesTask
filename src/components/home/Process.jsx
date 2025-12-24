import { processSteps } from '../../data/processSteps.js'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-medium text-slate-600 dark:text-slate-300">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            A simple path from quote to coverage
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            Clear steps, clear status updates, and support when you need it.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="rounded-3xl border border-slate-100/80 bg-white/75 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/50 dark:hover:bg-slate-900/60 dark:shadow-black/30"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-sm font-semibold text-white shadow-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

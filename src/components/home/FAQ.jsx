import faqData from '../../data/faqData.js'

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
            FREQUENTLY ASKED{' '}
            <span className="text-indigo-600 dark:text-sky-400">QUESTIONS</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Find answers to common questions about Medisure
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="mt-10 rounded-3xl border border-slate-100/80 bg-white/70 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/30">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Add content here
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Example: eligibility notes, coverage exclusions (high level), or a
                short disclaimer.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {faqData.map((item) => (
                <details
                  key={item.id}
                  className="group rounded-3xl border border-slate-100/80 bg-white/75 p-5 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-md open:bg-white dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/30 dark:hover:bg-slate-900/60 dark:open:bg-slate-900/60"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {item.question}
                    </span>
                    <span className="grid size-10 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-100 transition-all duration-200 group-open:rotate-180 group-hover:bg-white dark:bg-slate-950/40 dark:ring-slate-800 dark:group-hover:bg-slate-950/60">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5 text-slate-600 dark:text-slate-300"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

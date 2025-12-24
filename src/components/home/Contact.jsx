import Button from '../common/Button.jsx'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
            GET IN{' '}
            <span className="text-indigo-600 dark:text-sky-400">TOUCH</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Request a quote, ask about benefits, or get help choosing coverage.
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              Use this form to request a quote, ask about plan details, or get
              help choosing coverage. (UI-only for the machine test.)
            </p>

            <div className="mt-6 rounded-3xl border border-slate-100/80 bg-white/70 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/30">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                What you’ll get
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li>• A quick quote estimate</li>
                <li>• Plan comparison help</li>
                <li>• Clear next steps for application</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="rounded-3xl border border-slate-100/80 bg-white/75 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/30">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-slate-900 dark:text-slate-100">Full name</span>
                  <input
                    type="text"
                    placeholder="e.g., Ayesha Khan"
                    className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 transition-colors duration-200 hover:border-slate-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/40"
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-slate-900 dark:text-slate-100">Work email</span>
                  <input
                    type="email"
                    placeholder="e.g., ayesha@company.com"
                    className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 transition-colors duration-200 hover:border-slate-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/40"
                  />
                </label>

                <label className="grid gap-2 text-sm sm:col-span-2">
                  <span className="font-medium text-slate-900 dark:text-slate-100">Phone (optional)</span>
                  <input
                    type="text"
                    placeholder="e.g., +92 300 1234567"
                    className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 transition-colors duration-200 hover:border-slate-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/40"
                  />
                </label>

                <label className="grid gap-2 text-sm sm:col-span-2">
                  <span className="font-medium text-slate-900 dark:text-slate-100">Message</span>
                  <textarea
                    rows={5}
                    placeholder="Tell us what coverage you’re looking for (life, health, family, budget range...)"
                    className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-colors duration-200 hover:border-slate-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/40"
                  />
                </label>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  By submitting, you agree to be contacted about this demo.
                </p>
                <Button type="button" className="sm:w-auto">
                  Request quote
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

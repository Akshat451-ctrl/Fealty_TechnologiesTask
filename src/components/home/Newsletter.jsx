import Button from '../common/Button.jsx'

export default function Newsletter() {
  return (
    <section id="newsletter" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-100/80 bg-white/75 p-8 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/30 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gradient-to-br from-indigo-100 to-sky-100 blur-2xl dark:from-indigo-500/20 dark:to-sky-500/10" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 size-80 rounded-full bg-gradient-to-br from-sky-100 to-white blur-2xl dark:from-sky-500/15 dark:to-slate-950" />

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Stay updated
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Get coverage tips in your inbox
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                Subscribe for product updates, plan insights, and helpful checklists.
                (Add your own newsletter value props here.)
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/70 p-4 ring-1 ring-slate-100/80 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:bg-slate-950/30 dark:ring-slate-800/80 dark:shadow-black/30">
                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    Email address
                  </span>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 flex-1 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 transition-colors duration-200 hover:border-slate-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/40"
                    />
                    <Button type="button" className="h-12 justify-center px-6">
                      Subscribe
                    </Button>
                  </div>
                </label>
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  No spam. Unsubscribe anytime. (Hook this up to your provider later.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

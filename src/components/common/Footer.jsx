import Button from './Button.jsx'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/60 dark:border-slate-800 dark:from-slate-950 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-100 via-sky-100 to-white blur-3xl dark:from-indigo-500/15 dark:via-sky-500/10 dark:to-slate-950" />
        <div className="absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute -bottom-48 right-0 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl dark:bg-indigo-500/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-slate-900 text-white shadow-sm ring-1 ring-white/10">
                <span className="absolute inset-0 bg-gradient-to-br from-indigo-500/70 via-slate-900 to-sky-500/60" />
                <span className="relative text-sm font-bold">M</span>
              </span>
              <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Medisure
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              A modern landing experience for life & health insurance.
              Built as a machine-test demo: clean UI, simple structure, and
              responsive layout.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Fast quotes', 'Privacy-first', 'Advisor support'].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70 backdrop-blur dark:bg-slate-950/30 dark:text-slate-200 dark:ring-slate-800/70"
                >
                  <span className="mr-2 size-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button as="a" href="#contact" variant="primary" size="sm">
                Get a quote
              </Button>
              <Button as="a" href="#services" variant="secondary" size="sm">
                Explore benefits
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-4">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Product</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#process">
                    How it works
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#stats">
                    Highlights
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Company</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#blog">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Resources</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#">
                    Terms
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100" href="#newsletter">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a
                    className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100"
                    href="mailto:support@medisure.com"
                  >
                    support@medisure.com
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:hover:text-slate-100"
                    href="tel:+916265915578"
                  >
                    +91 62659 15578
                  </a>
                </li>
                <li className="text-slate-500 dark:text-slate-400">
                  Add address here
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-100/80 bg-white/70 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/30 dark:shadow-black/30">
          <div className="h-px w-full bg-gradient-to-r from-indigo-200/60 via-sky-200/50 to-transparent dark:from-indigo-500/30 dark:via-sky-500/20" />
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
            <p>© {new Date().getFullYear()} Medisure. All rights reserved To Akshat Ghatiya.</p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a className="transition-colors duration-200 hover:text-slate-700 dark:hover:text-slate-200" href="#">
                Privacy
              </a>
              <a className="transition-colors duration-200 hover:text-slate-700 dark:hover:text-slate-200" href="#">
                Terms
              </a>
              <a className="transition-colors duration-200 hover:text-slate-700 dark:hover:text-slate-200" href="#contact">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

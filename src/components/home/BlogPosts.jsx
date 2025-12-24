import blogPostsData from '../../data/blogPostsData.js'
import Button from '../common/Button.jsx'

export default function BlogPosts() {
  return (
    <section id="blog" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
              LATEST BLOG{' '}
              <span className="text-indigo-600 dark:text-sky-400">POSTS</span>
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base text-slate-600 sm:text-lg dark:text-slate-300">
              Stay informed with quick reads on coverage, claims, and planning.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Button as="a" href="#" variant="secondary" size="sm">
              View all posts
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100/80 bg-white/75 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/30 dark:hover:bg-slate-900/60"
            >
              <div className="relative">
                <div className="aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-indigo-100 via-sky-100 to-white dark:from-indigo-500/15 dark:via-sky-500/10 dark:to-slate-950">
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : null}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80 backdrop-blur dark:bg-slate-950/50 dark:text-slate-200 dark:ring-slate-800/80">
                  <span className="size-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
                  {post.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-200 group-hover:text-slate-900 dark:text-slate-200 dark:group-hover:text-white"
                >
                  Read more
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>

                <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-white/60 p-3 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-950/20 dark:text-slate-300">
                  Add blog image/content here
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

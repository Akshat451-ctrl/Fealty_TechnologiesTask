export default function Button({
  as = 'button',
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:ring-indigo-500/40'

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-sm hover:from-indigo-500 hover:to-sky-400 active:from-indigo-700 active:to-sky-600',
    secondary:
      'bg-white/80 text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-white hover:ring-slate-300 dark:bg-slate-900/60 dark:text-slate-100 dark:ring-slate-700 dark:hover:bg-slate-900 dark:hover:ring-slate-600',
    ghost:
      'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60',
  }

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-base',
  }

  const merged = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (as === 'a' || href) {
    return (
      <a href={href} className={merged} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={merged} {...rest}>
      {children}
    </button>
  )
}

import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Fast Performance",
      description: "Optimized server-side rendering and static data generation for instant loading speeds.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
    {
      title: "Robust Security",
      description: "Protected session handling, encrypted authentication, and granular permission access.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
          />
        </svg>
      ),
    },
    {
      title: "Clean API",
      description: "Intuitive developer endpoints and composable client hooks for quick product iteration.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span>Next-gen App Platform</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400"></span>
            <span className="text-zinc-950 dark:text-zinc-200">v1.0 Live</span>
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Build modern full-stack apps with total confidence
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            A production-ready starting foundation with secure authentication, database integrations, and high performance architecture.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="w-full rounded-lg bg-zinc-900 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-98 sm:w-auto dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Get Started Free
            </Link>
            <Link
              href="/features"
              className="w-full rounded-lg border border-zinc-200 px-6 py-3 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 sm:w-auto dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Engineered for developer experience
            </h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Everything you need to deliver production web applications efficiently.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-zinc-900 p-8 text-center sm:p-12 dark:bg-zinc-900 dark:border dark:border-zinc-800">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to ship your next big idea?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-300">
            Start structuring your web application now with scalable code patterns and reliable building blocks.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/signup"
              className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all hover:bg-zinc-100 active:scale-98"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
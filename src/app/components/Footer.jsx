import Link from "next/link";

export default function Footer() {
  const navigation = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Integrations", href: "/integrations" },
      { name: "Pricing", href: "/pricing" },
      { name: "Changelog", href: "/changelog" },
      { name: "Docs", href: "/docs" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" },
    ],
    resources: [
      { name: "Community", href: "/community" },
      { name: "Help Center", href: "/help" },
      { name: "Support", href: "/support" },
      { name: "Status", href: "/status" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
    ],
  };

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-tr from-zinc-100 via-zinc-200 to-zinc-300 text-zinc-950 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-zinc-100">
                AppBrand
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Build and scale secure full-stack applications with modern authentication, 
              robust database integrations, and seamless user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Product
              </h3>
              <ul className="mt-3 space-y-2">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Company
              </h3>
              <ul className="mt-3 space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Resources
              </h3>
              <ul className="mt-3 space-y-2">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Legal
              </h3>
              <ul className="mt-3 space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <p className="text-center text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} AppBrand Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
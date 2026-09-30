import Logo from "./Logo";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
        {/* ===== Upor: Brand + Link columns ===== */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Logo size="sm" />
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social links */}
            <div className="mt-4 flex items-center">
              {socialLinks.map((social, index) => (
                <div key={social.label} className="flex items-center">
                  {index > 0 && <span className="mx-3 text-xs text-slate-400 md:hidden">•</span>}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-xs font-semibold text-slate-600 transition hover:text-pink-600 ${
                      index > 0 ? "md:ml-4" : ""
                    }`}
                  >
                    {social.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns – mobile e lukano (Figma er moto) */}
          {footerColumns.map((column) => (
            <div key={column.title} className="hidden md:block">
              <h4 className="text-xs font-bold tracking-wide text-slate-900 uppercase">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-500 transition hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== Niche: Copyright bar ===== */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row lg:mt-14 lg:pt-8">
          <p className="text-[11px] text-slate-400 lg:text-xs">
            © {year} Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-[11px] text-slate-400 hover:text-slate-600 lg:text-xs">
              Privacy
            </a>
            <a href="#terms" className="text-[11px] text-slate-400 hover:text-slate-600 lg:text-xs">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
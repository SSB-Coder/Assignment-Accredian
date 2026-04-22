import { footerLinks } from "@/data/mock";
import { Linkedin, Twitter, Github, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Top grid ────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-white text-lg">
                Accredian{" "}
                <span className="text-brand-400">Enterprise</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              India&apos;s most trusted enterprise learning platform. Partnering
              with IITs, IIMs, and global universities to upskill your teams
              at scale.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter,  href: "#", label: "Twitter"  },
                { Icon: Github,   href: "#", label: "GitHub"   },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-500 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={15} className="text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-white font-semibold mb-4">{heading}</p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Contact row ─────────────────────────────── */}
        <div className="flex flex-wrap gap-6 pb-8 border-b border-slate-800 text-sm text-slate-400">
          <a
            href="mailto:enterprise@accredian.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail size={14} />
            enterprise@accredian.com
          </a>
          <a
            href="tel:+919625811095"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone size={14} />
            +91 96258 11095
          </a>
        </div>

        {/* ── Bottom bar ──────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with Next.js 14 &amp; Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Vision', href: '#vision' },
    { label: 'How it works', href: '#how' },
    { label: 'Capabilities', href: '#features' },
    { label: 'Get early access', href: '#cta' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur border-b border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-white tracking-tight">Khwaaish</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="rounded-full bg-white text-black px-4 py-2 font-medium hover:opacity-90 transition">
              Join the waitlist
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-white px-3 py-2 text-center font-medium text-black"
              >
                Join the waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

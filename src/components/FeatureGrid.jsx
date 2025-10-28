import { ShoppingCart, Car, Plane, Building2, Wallet, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Groceries & Essentials',
    desc: 'Compare Blinkit, Zepto, JioMart and more. Choose by price, ETA, and stock — then order in one tap.',
  },
  {
    icon: Car,
    title: 'Cabs on Command',
    desc: 'See Uber, Ola, BluSmart side by side. Pick the cheapest or fastest. Auto-book with your preferred provider.',
  },
  {
    icon: Plane,
    title: 'Flights & Travel',
    desc: 'Aggregate MakeMyTrip, Cleartrip, Yatra, and airlines. Filter by timing, price, and loyalty preferences.',
  },
  {
    icon: Building2,
    title: 'Hotels & Stays',
    desc: 'Find stays across providers. Prioritize proximity, ratings, and member discounts while we handle booking.',
  },
  {
    icon: Wallet,
    title: 'Unified Wallet',
    desc: 'Pay Khwaaish once. We disburse to vendors via secure rails and share a single receipt.',
  },
  {
    icon: Shield,
    title: 'Trusted Execution',
    desc: 'No redirects. Verified partners, encrypted flows, and confirmations within the chat.',
  },
  {
    icon: BarChart3,
    title: 'Learns Your Preferences',
    desc: 'Understands brands, timings, and budgets you love — improves with every interaction.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Capabilities</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Multi-app comparisons, automatic bookings, and seamless payments — unified under one AI layer.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/30 to-amber-400/30 border border-white/20">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

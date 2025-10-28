import { MessageSquare, Compare, CheckCircle2, CreditCard } from 'lucide-react';

function Step({ icon: Icon, title, desc, index }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold">
        {index}
      </div>
      <div className="ml-2">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-white/90" />
          <h4 className="text-white font-semibold">{title}</h4>
        </div>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Ask in natural language',
      desc: '“Book me the cheapest flight to Bangalore tomorrow after 10 AM.”',
    },
    {
      icon: Compare,
      title: 'We compare across apps',
      desc: 'Pull live prices, ETAs, and availability from official APIs and aggregators.',
    },
    {
      icon: CheckCircle2,
      title: 'Best option selected',
      desc: 'Based on your preferences: brands, timings, loyalty, and budget.',
    },
    {
      icon: CreditCard,
      title: 'One-click pay & confirm',
      desc: 'Pay once via Khwaaish wallet. We disburse and send an instant confirmation.',
    },
  ];

  return (
    <section id="how" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">How it works</h2>
            <p className="mt-2 text-white/70 max-w-xl">
              From chat to execution in minutes. No app-hopping, no multiple logins — just outcomes.
            </p>
            <div className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <Step key={s.title} icon={s.icon} title={s.title} desc={s.desc} index={i + 1} />)
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/70">Sample requests the MVP understands:</div>
            <ul className="mt-4 space-y-3 text-white">
              <li className="rounded-lg bg-white/10 px-4 py-3">Order groceries under ₹2000 before 8 PM</li>
              <li className="rounded-lg bg-white/10 px-4 py-3">Book cheapest cab to airport tomorrow 5 AM</li>
              <li className="rounded-lg bg-white/10 px-4 py-3">Find a hotel near MG Road, budget ₹3k–₹5k</li>
              <li className="rounded-lg bg-white/10 px-4 py-3">Compare Indigo vs Vistara for Friday evening</li>
            </ul>
            <a
              id="cta"
              href="#"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 font-medium hover:opacity-90 transition"
            >
              Join the private beta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

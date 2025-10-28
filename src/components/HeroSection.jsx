import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section id="vision" className="relative pt-24 sm:pt-28 md:pt-32">
      <div className="relative h-[520px] sm:h-[580px] md:h-[640px] rounded-3xl overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/80" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              Operating System for Human Decisions
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Khwaaish
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              An AI that executes on your behalf — compares, books, orders, and pays across apps. One chat. One confirmation. Zero juggling.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#cta" className="inline-flex items-center rounded-full bg-white text-black px-5 py-3 font-medium hover:opacity-90 transition">
                Get early access
              </a>
              <a href="#features" className="inline-flex items-center rounded-full bg-white/10 text-white px-5 py-3 font-medium backdrop-blur border border-white/20 hover:bg-white/20 transition">
                Explore capabilities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

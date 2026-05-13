export default function Home() {
  const slides = [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
      {/* Background slideshow */}
      <div className="absolute inset-0 flex animate-slide">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-screen items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-300 mb-6">
              Kolaborasi • Architecture & Contractor
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Mewujudkan Arsitektur Mewah Dengan Tampilan Elegan
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed mb-10">
              Jasa arsitektur dan kontraktor premium untuk hunian modern,
              villa, cafe, dan proyek komersial eksklusif.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold"
              >
                Lihat Portfolio
              </a>

              <a
                href="https://wa.me/6282188357297"
                className="border border-white/30 px-8 py-4 rounded-2xl"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          30% {
            transform: translateX(0%);
          }
          35% {
            transform: translateX(-100%);
          }
          65% {
            transform: translateX(-100%);
          }
          70% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-slide {
          width: 300%;
          animation: slide 15s infinite;
        }
      `}</style>
    </main>
  );
}
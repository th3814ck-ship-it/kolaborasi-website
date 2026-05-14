export default function Home() {
  const slides = [
  "/projects/slide1.jpg",
  "/projects/slide2.jpg",
  "/projects/slide3.jpg",
  "/projects/slide4.jpg",
  "/projects/slide5.jpg",
  "/projects/slide6.jpg",
];

  return (
    <main className="relative h-screen overflow-hidden text-white bg-black">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex w-[600%] h-full animate-slide">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-300 mb-6">
              Kolaborasi • Architecture & Contractor
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Mewujudkan Arsitektur Mewah Dengan Sentuhan Modern
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed mb-10">
              Jasa arsitektur dan kontraktor premium untuk hunian modern,
              villa, cafe, dan proyek komersial eksklusif.
            </p>

            <div className="flex flex-wrap gap-4">
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
    </main>
  );
}
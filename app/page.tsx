export default function ArchitecturePortfolioWebsite() {
  const slides = [
    "/projects/slide1.jpg",
    "/projects/slide2.jpg",
    "/projects/slide3.jpg",
    "/projects/slide4.jpg",
    "/projects/slide5.jpg",
    "/projects/slide6.jpg",
  ];

  const exteriorProjects = Array.from({ length: 20 }, (_, i) => i + 1);
  const interiorProjects = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
              Kolaborasi
            </h1>

            <p className="text-sm text-neutral-400 mt-1 tracking-[0.25em] uppercase">
              Design • Visual • Architecture • Interior • Contractor
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-neutral-300 transition">
              Tentang Kami
            </a>

            <a href="#services" className="hover:text-neutral-300 transition">
              Layanan Kami
            </a>

            <a href="#pricing" className="hover:text-neutral-300 transition">
              Estimasi Harga
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="flex w-[600%] h-full animate-slide">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full h-full bg-cover bg-center flex-shrink-0"
                style={{
                  backgroundImage: `url(${slide})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex items-center h-full pt-24">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
                Mewujudkan Arsitektur Mewah Dengan Sentuhan Modern
              </h2>

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl">
                Jasa arsitektur dan kontraktor premium untuk hunian modern,
                villa eksklusif, cafe aesthetic, interior mewah, hingga proyek
                komersial premium.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
                >
                  Lihat Portfolio
                </a>

                <a
                  href="https://wa.me/6282188357297"
                  className="border border-white/30 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/projects/about.jpg"
              alt="About"
              className="rounded-[2rem] w-full h-[600px] object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-4">
              Tentang Kami
            </p>

            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Desain Elegan Dengan Konstruksi Berkualitas Tinggi
            </h3>

            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              Kolaborasi menghadirkan layanan arsitektur, interior, visualisasi
              3D, dan kontraktor premium dengan pendekatan modern luxury untuk
              menciptakan bangunan yang nyaman, elegan, dan bernilai tinggi.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-neutral-900 rounded-[2rem] p-8 border border-white/10">
                <h4 className="text-5xl font-bold mb-3">100+</h4>
                <p className="text-neutral-400">Proyek Selesai</p>
              </div>

              <div className="bg-neutral-900 rounded-[2rem] p-8 border border-white/10">
                <h4 className="text-5xl font-bold mb-3">8+</h4>
                <p className="text-neutral-400">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-4">
              Layanan Kami
            </p>

            <h3 className="text-4xl md:text-6xl font-bold">
              Solusi Lengkap Untuk Kebutuhan Bangunan Anda
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Architecture Design",
              "Interior Design",
              "3D Visualization",
              "Contractor",
              "Renovation",
              "Custom Furniture",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-[2rem] p-10 hover:-translate-y-2 transition duration-500"
              >
                <div className="text-5xl mb-6">✨</div>

                <h4 className="text-3xl font-semibold mb-4">{service}</h4>

                <p className="text-neutral-400 leading-relaxed">
                  Pengerjaan profesional dengan desain modern dan kualitas premium.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-4">
            Estimasi Harga
          </p>

          <h3 className="text-4xl md:text-6xl font-bold mb-16">
            Estimasi Biaya Layanan
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Desain Arsitektur",
                price: "Mulai 50rb/m²",
              },
              {
                title: "Interior Design",
                price: "Mulai 150rb/m²",
              },
              {
                title: "Jasa Kontraktor",
                price: "Mulai 4jt/m²",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-[2rem] p-10 border border-white/10"
              >
                <h4 className="text-3xl font-semibold mb-6">{item.title}</h4>

                <p className="text-5xl font-bold text-white">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-6 py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-4">
              Portfolio
            </p>

            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              Gallery Proyek Kolaborasi
            </h3>
          </div>

          <div className="mb-24">
            <h4 className="text-3xl font-bold mb-10">Eksterior</h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exteriorProjects.map((item) => (
                <div
                  key={item}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black hover:-translate-y-2 transition duration-500 cursor-pointer"
                >
                  <div className="overflow-hidden">
                    <img
                      src={`/projects/exterior${item}.jpg`}
                      alt="Exterior"
                      className="h-72 w-full object-cover group-hover:scale-110 transition duration-700 active:scale-150"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-bold mb-10">Interior</h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interiorProjects.map((item) => (
                <div
                  key={item}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black hover:-translate-y-2 transition duration-500 cursor-pointer"
                >
                  <div className="overflow-hidden">
                    <img
                      src={`/projects/interior${item}.jpg`}
                      alt="Interior"
                      className="h-72 w-full object-cover group-hover:scale-110 transition duration-700 active:scale-150"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-neutral-400 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Kolaborasi</h3>
            <p className="mt-3 max-w-md">
              Architecture • Interior • Visual • Contractor
            </p>
          </div>

          <div className="space-y-2">
            <p>WhatsApp: 0821-8835-7297</p>
            <p>Bandung, Jawa Barat</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

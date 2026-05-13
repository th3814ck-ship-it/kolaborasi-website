export default function ArchitecturePortfolioWebsite() {
  const heroSlides = [
    {
      title: "Luxury Residence",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Modern Cafe Interior",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Exclusive Tropical Villa",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const projects = [
    {
      title: "Private Residence Modern Luxury",
      location: "Bandung",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Luxury Cafe & Lounge",
      location: "Jakarta",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Exclusive Tropical Villa",
      location: "Bali",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const services = [
    "Jasa Desain Arsitektur",
    "Jasa Kontraktor Bangunan",
    "Renovasi Rumah & Interior",
    "Desain 3D & Rendering",
    "Manajemen Proyek",
    "Custom Furniture",
  ];

  return (
    <div className="min-h-screen min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex w-[300%] h-full animate-[slide_18s_infinite]">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className="relative w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/60" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl space-y-8">
              <p className="uppercase tracking-[0.4em] text-sm text-neutral-300">
                Kolaborasi • Architecture & Contractor
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Mewujudkan Arsitektur Mewah Dengan Sentuhan Modern
              </h1>

              <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl">
                Desain premium, konstruksi berkualitas, dan detail elegan untuk
                hunian, villa, cafe, hingga proyek komersial eksklusif.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
                >
                  Lihat Portfolio
                </a>

                <a
                  href="https://wa.me/6282188357297"
                  className="border border-white/30 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition duration-300"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          }</style>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
            alt="architecture"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div className="space-y-6">
          <p className="text-neutral-400 uppercase tracking-[0.3em] text-sm">
            Tentang Kami
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            Mengutamakan Estetika, Kualitas, dan Ketepatan Waktu
          </h2>

          <p className="text-neutral-300 leading-relaxed text-lg">
            Kami adalah tim arsitek dan kontraktor profesional yang berpengalaman
            dalam pembangunan rumah tinggal, interior komersial, hingga proyek
            custom premium dengan standar pengerjaan tinggi.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-8 border border-amber-400/10 shadow-2xl">
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-neutral-400 mt-2">Proyek Selesai</p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-8 border border-amber-400/10 shadow-2xl">
              <h3 className="text-4xl font-bold">8+</h3>
              <p className="text-neutral-400 mt-2">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-b from-black to-neutral-950 border-y border-amber-400/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-14">
            <p className="text-neutral-400 uppercase tracking-[0.3em] text-sm mb-4">
              Layanan
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Solusi Lengkap Untuk Kebutuhan Bangunan Anda
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-neutral-900 to-black border border-amber-400/10 rounded-[2rem] p-8 hover:border-amber-300/40 hover:-translate-y-2 transition duration-300 shadow-2xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 mb-6 flex items-center justify-center text-2xl">
                  ✨
                </div>

                <h3 className="text-2xl font-semibold">{service}</h3>

                <p className="text-neutral-400 mt-4 leading-relaxed">
                  Pengerjaan profesional dengan detail desain yang modern,
                  fungsional, dan berkualitas tinggi.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="text-neutral-400 uppercase tracking-[0.3em] text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-4xl font-bold leading-tight max-w-2xl">
              Portfolio Proyek Premium
            </h2>
          </div>

          <p className="text-neutral-400 max-w-xl">
            Setiap proyek dirancang dengan pendekatan luxury modern untuk menghasilkan bangunan yang estetis, nyaman, dan bernilai tinggi.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-neutral-400 mt-2">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-amber-100 to-white text-black rounded-[3rem] p-10 md:p-20 text-center shadow-[0_0_80px_rgba\(251,191,36,0.15\)]">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
            Mulai Proyek Anda
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Konsultasikan Desain dan Pembangunan Bangunan Anda Sekarang
          </h2>

          <p className="text-neutral-600 mt-6 text-lg max-w-2xl mx-auto">
            Tim kami siap membantu mulai dari konsep desain hingga proses
            pembangunan selesai dengan hasil terbaik.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="https://wa.me/6282188357297"
              className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Hubungi WhatsApp
            </a>

            <a
              href="mailto:studio@email.com"
              className="border border-black px-8 py-4 rounded-2xl font-semibold hover:bg-black hover:text-white transition"
            >
              Email Kami
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 py-10 px-6 text-neutral-400"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold">
              Kolaborasi
            </h3>
            <p className="mt-3 max-w-md">
              Jasa arsitektur dan kontraktor profesional untuk hunian dan proyek
              komersial modern.
            </p>
          </div>

          <div className="space-y-2">
            <p>WhatsApp: 0821-8835-7297</p>
            <p>Email: studio@email.com</p>
            <p>Bandung, Jawa Barat</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

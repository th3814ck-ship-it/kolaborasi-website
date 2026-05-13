export default function ArchitecturePortfolioWebsite() {
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-44">
          <div className="max-w-3xl space-y-6">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-300">
              Kolaborasi • Architecture & Contractor
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Mewujudkan Arsitektur Mewah Dengan Detail Elegan & Konstruksi
              Premium
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Kolaborasi menghadirkan layanan arsitektur dan konstruksi premium
              untuk hunian modern, villa eksklusif, cafe aesthetic, hingga
              proyek komersial dengan desain berkelas dan pengerjaan presisi
              tinggi.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Lihat Portfolio
              </a>

              <a
                href="#contact"
                className="border border-white/30 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
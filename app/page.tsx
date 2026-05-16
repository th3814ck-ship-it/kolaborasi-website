```tsx
"use client";

import { useState } from "react";

export default function Home() {

  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const slides = [
    "/projects/slide1.jpg",
    "/projects/slide2.jpg",
    "/projects/slide3.jpg",
    "/projects/slide4.jpg",
  ];

  const projects = [
    {
      name: "Villa Modern Tropis",
      location: "Bandung, Jawa Barat",
      category: "Exterior",
      images: [
        "/projects/exterior1.jpg",
        "/projects/exterior2.jpg",
        "/projects/exterior3.jpg",
      ],
    },

    {
      name: "Rumah Luxury Minimalis",
      location: "Jakarta Selatan",
      category: "Exterior",
      images: [
        "/projects/exterior4.jpg",
        "/projects/exterior5.jpg",
        "/projects/exterior6.jpg",
      ],
    },

    {
      name: "Interior Cafe Aesthetic",
      location: "Bandung",
      category: "Interior",
      images: [
        "/projects/interior1.jpg",
        "/projects/interior2.jpg",
        "/projects/interior3.jpg",
      ],
    },

    {
      name: "Luxury Bedroom Design",
      location: "Surabaya",
      category: "Interior",
      images: [
        "/projects/interior4.jpg",
        "/projects/interior5.jpg",
        "/projects/interior6.jpg",
      ],
    },
  ];

  return (

    <main className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-black">
              Kolaborasi
            </h1>

            <p className="uppercase tracking-[0.35em] text-xs text-neutral-300 mt-2">
              Design • Visual • Architecture • Interior • Contractor
            </p>

          </div>

          <nav className="hidden md:flex gap-10 uppercase tracking-[0.2em] text-sm font-medium">

            <a href="#about">Tentang Kami</a>
            <a href="#services">Layanan Kami</a>
            <a href="#pricing">Estimasi Harga</a>
            <a href="#portfolio">Portfolio</a>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">

          <img
            src={slides[0]}
            alt="Hero"
            className="w-full h-full object-cover"
          />

        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center h-full">

          <div className="max-w-7xl mx-auto px-8 w-full">

            <div className="max-w-5xl">

              <h2 className="text-6xl md:text-8xl font-black leading-[1.05] mb-10">

                Mewujudkan
                <br />
                Arsitektur Mewah
                <br />
                Dengan Sentuhan
                <br />
                Modern

              </h2>

              <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl mb-12">

                Jasa arsitektur dan kontraktor premium
                dengan pengalaman lebih dari 15 tahun
                dalam menangani proyek hunian modern,
                villa eksklusif, interior mewah,
                cafe aesthetic hingga proyek komersial.

              </p>

              <div className="flex flex-wrap gap-5">

                <a
                  href="#portfolio"
                  className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300"
                >
                  Lihat Portfolio
                </a>

                <a
                  href="https://wa.me/6282188357297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 bg-white/10 backdrop-blur-md px-10 py-5 rounded-2xl text-lg hover:bg-white hover:text-black transition duration-300"
                >
                  Konsultasi Gratis
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-8 py-32 bg-black"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <img
            src="/projects/about.jpg"
            alt="About"
            className="rounded-[2rem] w-full h-[700px] object-cover"
          />

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-5">
              Tentang Kami
            </p>

            <h3 className="text-5xl md:text-7xl font-black leading-tight mb-10">
              Desain Modern Dengan Konstruksi Premium
            </h3>

            <p className="text-xl text-neutral-300 leading-relaxed">

              Kolaborasi adalah studio arsitektur dan kontraktor premium
              dengan pengalaman lebih dari 15 tahun dalam menangani
              berbagai proyek hunian modern, villa eksklusif,
              cafe aesthetic, interior mewah, hingga proyek komersial.

            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-8 py-32 bg-neutral-950"
      >

        <div className="max-w-7xl mx-auto text-center">

          <h3 className="text-5xl md:text-7xl font-black mb-20">
            Layanan Kami
          </h3>

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

                <div className="text-5xl mb-6">
                  ✨
                </div>

                <h4 className="text-3xl font-semibold mb-4">
                  {service}
                </h4>

                <p className="text-neutral-400 leading-relaxed">
                  Pengerjaan profesional dengan desain modern luxury premium.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="px-8 py-32 bg-black"
      >

        <div className="max-w-7xl mx-auto text-center">

          <h3 className="text-5xl md:text-7xl font-black mb-20">
            Estimasi Harga
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              ["Desain Arsitektur", "Mulai 50rb/m²"],
              ["Interior Design", "Mulai 150rb/m²"],
              ["Jasa Kontraktor", "Mulai 4jt/m²"],
            ].map(([title, price], index) => (

              <div
                key={index}
                className="bg-neutral-900 rounded-[2rem] p-12 border border-white/10"
              >

                <h4 className="text-3xl font-semibold mb-8">
                  {title}
                </h4>

                <p className="text-5xl font-black">
                  {price}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="px-8 py-32 bg-neutral-950"
      >

        <div className="max-w-7xl mx-auto">

          <h3 className="text-5xl md:text-7xl font-black text-center mb-24">
            Gallery Proyek Kolaborasi
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {projects.map((project, index) => (

              <div
                key={index}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImage(0);
                }}
                className="group overflow-hidden rounded-[2rem] cursor-pointer relative"
              >

                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">

                  <h4 className="text-2xl font-bold">
                    {project.name}
                  </h4>

                  <p className="text-sm text-neutral-300 mt-2">
                    {project.location}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 px-8 py-24">

        <div className="max-w-7xl mx-auto text-center text-neutral-400">

          © 2026 Kolaborasi Architecture & Contractor.
          All Rights Reserved.

        </div>

      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (

        <div className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center p-6">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-8 text-white text-5xl"
          >
            ×
          </button>

          {/* IMAGE */}
          <div className="relative w-full max-w-6xl">

            <img
              src={selectedProject.images[currentImage]}
              alt={selectedProject.name}
              className="w-full max-h-[80vh] object-contain rounded-[2rem]"
            />

            {/* PREV */}
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0
                    ? selectedProject.images.length - 1
                    : prev - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md px-5 py-3 rounded-full text-3xl"
            >
              ←
            </button>

            {/* NEXT */}
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === selectedProject.images.length - 1
                    ? 0
                    : prev + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md px-5 py-3 rounded-full text-3xl"
            >
              →
            </button>

          </div>

          {/* INFO */}
          <div className="text-center mt-10">

            <h3 className="text-4xl font-black mb-3">
              {selectedProject.name}
            </h3>

            <p className="text-neutral-400 text-lg">
              {selectedProject.location}
            </p>

            <p className="mt-3 text-neutral-500 uppercase tracking-[0.2em] text-sm">
              {selectedProject.category}
            </p>

          </div>

        </div>

      )}

    </main>

  );
}
```

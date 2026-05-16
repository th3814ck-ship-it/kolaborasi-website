```tsx
"use client";

import { useState } from "react";

export default function Home() {

  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      name: "Villa Modern Tropis",
      client: "Bapak Andi Wijaya",
      location: "Bandung, Jawa Barat",
      category: "Exterior",
      images: [
        "/projects/exterior1.jpg",
        "/projects/exterior2.jpg",
        "/projects/exterior3.jpg",
      ],
    },

    {
      name: "Luxury Cafe Interior",
      client: "Cafe Ruang Senja",
      location: "Jakarta Selatan",
      category: "Interior",
      images: [
        "/projects/interior1.jpg",
        "/projects/interior2.jpg",
        "/projects/interior3.jpg",
      ],
    },

    {
      name: "Modern House Design",
      client: "Ibu Clara",
      location: "Surabaya",
      category: "Exterior",
      images: [
        "/projects/exterior4.jpg",
        "/projects/exterior5.jpg",
        "/projects/exterior6.jpg",
      ],
    },

    {
      name: "Luxury Bedroom",
      client: "Bapak Kevin",
      location: "Bali",
      category: "Interior",
      images: [
        "/projects/interior4.jpg",
        "/projects/interior5.jpg",
        "/projects/interior6.jpg",
      ],
    },
  ];

  return (

    <main className="bg-black text-white overflow-x-hidden min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-black">
              Kolaborasi
            </h1>

            <p className="uppercase tracking-[0.35em] text-xs text-neutral-300 mt-2">
              Design • Architecture • Interior • Contractor
            </p>

          </div>

          <nav className="hidden md:flex gap-10 uppercase tracking-[0.2em] text-sm font-medium">

            <a href="#about">Tentang</a>
            <a href="#services">Layanan</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Kontak</a>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/projects/slide1.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl px-8 text-center">

          <h2 className="text-6xl md:text-8xl font-black leading-tight mb-10">
            Mewujudkan
            <br />
            Arsitektur Modern
            <br />
            Premium
          </h2>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Studio arsitektur dan kontraktor premium
            dengan desain modern luxury dan pengerjaan profesional.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">

            <a
              href="#portfolio"
              className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition duration-300"
            >
              Lihat Portfolio
            </a>

            <a
              href="https://wa.me/6282188357297"
              target="_blank"
              className="border border-white/20 bg-white/10 backdrop-blur-md px-10 py-5 rounded-2xl hover:bg-white hover:text-black transition duration-300"
            >
              Konsultasi Gratis
            </a>

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
            className="w-full h-[700px] object-cover rounded-[2rem]"
          />

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-5">
              Tentang Kami
            </p>

            <h3 className="text-5xl md:text-7xl font-black leading-tight mb-10">
              Desain Modern Dengan Sentuhan Elegan
            </h3>

            <p className="text-xl text-neutral-300 leading-relaxed">
              Kolaborasi adalah studio arsitektur modern
              yang fokus pada desain premium,
              interior luxury, visualisasi 3D,
              dan pembangunan profesional.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Architecture",
              "Interior",
              "3D Visual",
              "Contractor",
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
                  Desain premium dengan pengerjaan profesional.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="px-8 py-32 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <h3 className="text-5xl md:text-7xl font-black text-center mb-24">
            Gallery Proyek
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {projects.map((project, index) => (

              <div
                key={index}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImage(0);
                }}
                className="relative overflow-hidden rounded-[2rem] cursor-pointer group"
              >

                {/* IMAGE */}
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* INFO */}
                <div className="absolute bottom-0 left-0 p-6 z-10">

                  <h4 className="text-2xl font-bold">
                    {project.name}
                  </h4>

                  <p className="text-sm text-neutral-300 mt-2">
                    {project.client}
                  </p>

                  <p className="text-sm text-neutral-400">
                    {project.location}
                  </p>

                </div>

                {/* ARROW */}
                <div className="absolute top-5 right-5 z-10">

                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                    →
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 py-32 bg-neutral-950"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h3 className="text-5xl md:text-7xl font-black mb-10">
            Hubungi Kami
          </h3>

          <p className="text-xl text-neutral-400 mb-12">
            Konsultasikan proyek impian Anda bersama tim Kolaborasi.
          </p>

          <a
            href="https://wa.me/6282188357297"
            target="_blank"
            className="inline-block bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition duration-300"
          >
            WhatsApp Sekarang
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-neutral-500 bg-black">
        © 2026 Kolaborasi Architecture & Contractor
      </footer>

      {/* MODAL */}
      {selectedProject && (

        <div className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center p-6">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-8 text-white text-5xl z-50"
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
                setCurrentImage(
                  currentImage === 0
                    ? selectedProject.images.length - 1
                    : currentImage - 1
                )
              }
              className="absolute left-5 top-1/2 -translate-y-1/2 z-50"
            >

              <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-3xl hover:scale-110 transition duration-300">
                ←
              </div>

            </button>

            {/* NEXT */}
            <button
              onClick={() =>
                setCurrentImage(
                  currentImage === selectedProject.images.length - 1
                    ? 0
                    : currentImage + 1
                )
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 z-50"
            >

              <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-3xl hover:scale-110 transition duration-300">
                →
              </div>

            </button>

          </div>

          {/* INFO */}
          <div className="text-center mt-10">

            <h3 className="text-4xl font-black">
              {selectedProject.name}
            </h3>

            <p className="text-xl text-neutral-300 mt-3">
              {selectedProject.client}
            </p>

            <p className="text-neutral-500 mt-2">
              {selectedProject.location}
            </p>

          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-8 overflow-x-auto max-w-full pb-2">

            {selectedProject.images.map((image: string, index: number) => (

              <img
                key={index}
                src={image}
                alt=""
                onClick={() => setCurrentImage(index)}
                className={`w-28 h-20 object-cover rounded-xl cursor-pointer border-2 transition duration-300 ${
                  currentImage === index
                    ? "border-white scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              />

            ))}

          </div>

        </div>

      )}

    </main>

  );
}
```

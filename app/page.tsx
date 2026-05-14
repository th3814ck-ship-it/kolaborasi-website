"use client";

import React, { useState } from "react";

export default function ArchitecturePortfolioWebsite() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            <h1 className="text-3xl md:text-4xl font-bold">Kolaborasi</h1>

            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-400 mt-1">
              Design • Visual • Architecture • Interior • Contractor
            </p>
          </div>

          <nav className="hidden md:flex gap-10 uppercase tracking-[0.2em] text-sm">
            <a href="#about">Tentang Kami</a>
            <a href="#services">Layanan Kami</a>
            <a href="#pricing">Estimasi Harga</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 flex animate-slide">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-screen h-screen flex-shrink-0"
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
                Mewujudkan Arsitektur Mewah Dengan Sentuhan Modern
              </h2>

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl">
                Jasa arsitektur dan kontraktor premium untuk hunian modern,
                villa eksklusif, interior mewah, cafe aesthetic, hingga proyek
                komersial premium.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold"
                >
                  Lihat Portfolio
                </a>

                <a
                  href="https://wa.me/6282188357297"
                  className="border border-white/20 px-8 py-4 rounded-2xl"
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
          <img
            src="/projects/about.jpg"
            alt="About"
            className="rounded-[2rem] h-[600px] w-full object-cover"
          />

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-4">
              Tentang Kami
            </p>

            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Desain Modern Dengan Konstruksi Berkualitas Tinggi
            </h3>

            <p className="text-lg text-neutral-300 leading-relaxed">
              Kolaborasi menghadirkan layanan arsitektur, interior,
              visualisasi 3D, dan kontraktor premium.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-bold mb-20">
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
                className="bg-black border border-white/10 rounded-[2rem] p-10"
              >
                <div className="text-5xl mb-6">✨</div>
                <h4 className="text-3xl font-semibold mb-4">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-6 py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-bold text-center mb-20">
            Gallery Proyek Kolaborasi
          </h3>

          <div className="mb-24">
            <h4 className="text-3xl font-bold mb-10">Eksterior</h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exteriorProjects.map((item) => (
                <div
                  key={item}
                  onClick={() => setSelectedImage(`/projects/exterior${item}.jpg`)}
                  className="overflow-hidden rounded-[2rem] cursor-pointer"
                >
                  <img
                    src={`/projects/exterior${item}.jpg`}
                    alt="Exterior"
                    className="h-72 w-full object-cover hover:scale-110 transition duration-700"
                  />
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
                  onClick={() => setSelectedImage(`/projects/interior${item}.jpg`)}
                  className="overflow-hidden rounded-[2rem] cursor-pointer"
                >
                  <img
                    src={`/projects/interior${item}.jpg`}
                    alt="Interior"
                    className="h-72 w-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
      )}
    </main>
  );
}

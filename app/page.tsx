"use client";

import { useState } from "react";

export default function Home() {

  const [selectedImage, setSelectedImage] = useState("");

  const projects = [
    {
      name: "Villa Modern Tropis",
      image: "/projects/exterior1.jpg",
    },

    {
      name: "Luxury Cafe Interior",
      image: "/projects/interior1.jpg",
    },

    {
      name: "Modern House Design",
      image: "/projects/exterior2.jpg",
    },

    {
      name: "Luxury Bedroom",
      image: "/projects/interior2.jpg",
    },
  ];

  return (

    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/projects/slide1.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">

            Kolaborasi
            <br />
            Architecture

          </h1>

          <p className="text-xl text-neutral-300 mb-10">

            Modern Luxury Architecture Studio

          </p>

          <a
            href="#portfolio"
            className="inline-block bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition duration-300"
          >
            Lihat Portfolio
          </a>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="px-6 py-24 bg-neutral-950"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-20">
            Gallery Proyek
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {projects.map((project, index) => (

              <div
                key={index}
                onClick={() => setSelectedImage(project.image)}
                className="relative overflow-hidden rounded-[2rem] cursor-pointer group"
              >

                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 left-0 p-6 z-10">

                  <h3 className="text-2xl font-bold">
                    {project.name}
                  </h3>

                </div>

                <div className="absolute top-5 right-5 z-10">

                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-2xl">

                    →

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MODAL */}
      {selectedImage && (

        <div
          onClick={() => setSelectedImage("")}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
        >

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />

        </div>

      )}

    </main>

  );
}
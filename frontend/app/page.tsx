import type { NextPage } from "next";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import React from "react";
import { projects } from "./components/data";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4 py-8">
        {" "}
        {/* Added padding top and bottom */}
        <h1 className="text-5xl font-bold mb-6 text-center">
          Propitious Labs
        </h1>{" "}
        {/* Centered and larger heading */}
        <p className="text-2xl mb-8 text-center leading-relaxed">
          {" "}
          {/* Improved paragraph styling */}
          Building the future of finance on StarkNet for Africa, with a focus on
          Nigeria. We develop secure, innovative, and accessible DeFi solutions.
        </p>
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {/* Increased gap */}
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-300">
          &copy; {new Date().getFullYear()} Propitious Labs
        </div>
      </footer>
    </div>
  );
};

export default Home;

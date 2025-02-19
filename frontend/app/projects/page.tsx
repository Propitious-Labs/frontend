import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard"; // Import the ProjectCard component
import { projects } from "../utils/data";

const ProjectsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto p-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;

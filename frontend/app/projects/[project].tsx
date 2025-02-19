import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import React from "react";
import { projects } from "../components/data";

const ProjectDetails = () => {
  const router = useRouter();
  const { project } = router.query; // Get the project name from the URL

  // Find the selected project based on the URL parameter
  const selectedProject = projects.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === project
  );

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{selectedProject.title}</h1>
        <p>{selectedProject.description}</p>
        {/* Add detailed project information here */}
      </main>
    </div>
  );
};

export default ProjectDetails;

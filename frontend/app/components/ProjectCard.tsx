import Image from "next/image"; // Import the Image component
import Link from "next/link";
import React from "react";

interface Project {
  title: string;
  description: string;
  image: string; // Path to the image
  link?: string; // Optional link to project details
}

const ProjectCard = ({ title, description, image, link }: Project) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md transition duration-300 hover:scale-105">
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          {" "}
          {/* Wrap image for rounded corners */}
          <Image
            src={image}
            alt={title}
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="object-cover w-full h-full" // Ensure image covers the container
          />
        </div>
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
      {link && (
        <Link
          href={link}
          className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
        >
          Learn More
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;

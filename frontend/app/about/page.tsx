import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto p-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Propitious Labs
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {" "}
          {/* Flexbox for layout */}
          <div className="md:w-1/2">
            {" "}
            {/* Left side: Text content */}
            <p className="text-lg leading-relaxed mb-6">
              Propitious Labs is a cutting-edge DeFi development studio building
              on the StarkNet blockchain, dedicated to creating secure,
              efficient, and innovative solutions for the African market, with a
              special focus on Nigeria. We believe in the transformative power
              of decentralized finance to empower individuals and drive economic
              growth across the continent.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our team of experienced developers, security experts, and
              financial analysts is committed to building robust and reliable
              smart contracts, protocols, and dApps that address the unique
              needs of the African financial landscape. We prioritize security,
              transparency, and user accessibility in all our projects.
            </p>
            <p className="text-lg leading-relaxed">
              We are passionate about fostering a thriving DeFi ecosystem in
              Africa and are actively involved in community building, education,
              and collaboration. We believe that by working together, we can
              unlock the full potential of decentralized finance and create a
              more inclusive and equitable financial future for all.
            </p>
          </div>
          <div className="md:w-1/2">
            {" "}
            {/* Right side: Image */}
            <Image
              src="/team.jpeg" // Replace with your team image or a relevant placeholder
              alt="Propitious Labs Team"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Security</h3>
            <p>
              We prioritize the security and integrity of user assets above all
              else.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>
              We are committed to pushing the boundaries of DeFi through
              cutting-edge research and development.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p>
              We strive to make DeFi accessible and user-friendly for everyone,
              regardless of their technical background.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

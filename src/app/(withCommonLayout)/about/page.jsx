import React from "react";
import ContainerPage from "@/components/container/page";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className=" ">
      <ContainerPage>
        <section >
          {/* Heading */}
          <h1 className="text-4xl font-bold  text-primary mb-6 text-center">About Us</h1>

          {/* Intro Paragraph */}
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Welcome to our platform! We provide top-quality services tailored to
            meet your needs. Our team is dedicated to ensuring the best
            experience for every client. With years of expertise and a passion
            for excellence, we aim to deliver solutions that truly make a
            difference.
          </p>

          {/* Mission Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold  text-primary mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to connect people with the services they need
              quickly and efficiently. We prioritize quality, reliability, and
              customer satisfaction in everything we do.
            </p>
          </div>

          {/* Vision Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold  text-primary mb-2">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a world where professional services are accessible to
              everyone. Our goal is to continuously innovate and provide a
              seamless experience for all our users.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Example team member */}
              
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <Image
                  src="https://i.ibb.co.com/svv4wGXC/816634-v9-bc.jpg"
                  alt="Team Member"
                  width={200}
                  height={200}
                  className="w-full h-100 object-cover rounded-md mb-3"
                />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Lead Designer</p>
              </div>
              {/* Add more team members as needed */}
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <Image
                  src="https://i.ibb.co.com/k2Mn4DgX/2628089-happy-smile-and-portrait-of-indian-woman-in-office-for-management-planning-and-data-research.jpg"
                  alt="Team Member"
                  width={200}
                  height={200}
                  className="w-full h-100 object-cover rounded-md mb-3"
                />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Lead Designer</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </section>
      </ContainerPage>
    </div>
  );
};

export default AboutPage;

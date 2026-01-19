import React from "react";
import ContainerPage from "@/components/container/page";

// Example testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "This service is amazing! They were professional, timely, and exceeded my expectations. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "I’ve never experienced such excellent support. The team is friendly and genuinely cares about their clients.",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "A reliable and trustworthy service! I’m very happy with my experience and will continue using it.",
  },
  {
    id: 4,
    name: "David Smith",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "Fantastic experience! The team handled everything efficiently and professionally. Very satisfied!",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "I appreciate how detailed and careful the service was. They made the entire process seamless.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "The best service I have ever used. Professional, fast, and very friendly staff. Highly recommended!",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "Extremely happy with the service. They were prompt, knowledgeable, and solved my issues quickly.",
  },
  {
    id: 8,
    name: "Liam Anderson",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "A top-notch experience! The team went above and beyond to make sure I was satisfied. Great job!",
  },
  {
    id: 9,
    name: "Isabella Taylor",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "I love how friendly and professional everyone was. They made the process easy and stress-free.",
  },
  {
    id: 10,
    name: "William Thomas",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "Exceptional service and amazing support. They handled everything professionally from start to finish.",
  },
  {
    id: 11,
    name: "Mia Hernandez",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "Very impressed with the quality and efficiency of the service. I would definitely use them again.",
  },
  {
    id: 12,
    name: "Noah Moore",
    role: "Customer",
    photo: "https://i.ibb.co/7R2b6Gq/team-member.jpg",
    message:
      "Highly satisfied! The team was professional, courteous, and very knowledgeable. Excellent experience.",
  },
];

const TestimonialsPage = () => {
  return (
    <ContainerPage>
      <section className="max-w-7xl mx-auto p-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-purple-600 mb-6">
          What Our Customers Say
        </h1>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Hear from our satisfied customers who trusted us for their services.
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm flex-1">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </section>
    </ContainerPage>
  );
};

export default TestimonialsPage;

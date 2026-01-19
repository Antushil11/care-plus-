import React from "react";
import ContainerPage from "@/components/container/page";
import Image from "next/image";

// Example testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Customer",
    photo: "https://i.ibb.co.com/VcWdjfcx/premium-photo-1664392134807-c9c7aca42671-q-80-w-878-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    message:
      "This service is amazing! They were professional, timely, and exceeded my expectations. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Customer",
    photo: "https://i.ibb.co.com/DfxcjPh1/11065574-a-portrait-of-a-young-indian-man.jpg",
    message:
      "I’ve never experienced such excellent support. The team is friendly and genuinely cares about their clients.",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Customer",
    photo: "https://i.ibb.co.com/bj69Xkys/images.jpg",
    message:
      "A reliable and trustworthy service! I’m very happy with my experience and will continue using it.",
  },
  {
    id: 4,
    name: "David Smith",
    role: "Customer",
    photo: "https://i.ibb.co.com/W41WrCD0/Marnus-Labuschagne.jpg",
    message:
      "Fantastic experience! The team handled everything efficiently and professionally. Very satisfied!",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Customer",
    photo: "https://i.ibb.co.com/4B7S6zw/Screenshot-2025-06-26-142658.png",
    message:
      "I appreciate how detailed and careful the service was. They made the entire process seamless.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Customer",
    photo: "https://i.ibb.co.com/SX01c2bt/young-indian-man-playing-with-boxer-dog-on-green-summer-lawn-in-public-park-outdoor-dog-training-on.jpg",
    message:
      "The best service I have ever used. Professional, fast, and very friendly staff. Highly recommended!",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    role: "Customer",
    photo: "https://i.ibb.co.com/bj69Xkys/images.jpg",
    message:
      "Extremely happy with the service. They were prompt, knowledgeable, and solved my issues quickly.",
  },
  {
    id: 8,
    name: "Liam Anderson",
    role: "Customer",
    photo: "https://i.ibb.co.com/WmqVmck/Untitled.jpg",
    message:
      "A top-notch experience! The team went above and beyond to make sure I was satisfied. Great job!",
  },
 
];

const TestimonialsPage = () => {
  return (
    <ContainerPage>
      <section className="">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          What Our Customers Say
        </h1>
        <p className="text-gray-700 mb-10 leading-relaxed text-center">
          Hear from our satisfied customers who trusted us for their services.
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col"
            >
              <div className="flex items-center mb-4">
                <Image
                  width={20}
                  height={20}
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm flex-1">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ContainerPage>
  );
};

export default TestimonialsPage;

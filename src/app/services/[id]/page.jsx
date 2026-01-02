import { getSingleProduct } from "@/actions/product";
import Image from "next/image";

const ServiceDetailPage = async ({ params }) => {
  const { id } = params;
  const service = await getSingleProduct(id);

  if (!service || Object.keys(service).length === 0) {
    return <p>Service not found.</p>;
  }

  const { name, category, description, pricePerHour, image } = service;

  const imageSrc =
    image && image !== "" ? (image.startsWith("http") ? image : `/${image}`) : "/placeholder.png";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={name || "Service Image"}
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div>
          <span className="text-sm text-blue-600 font-semibold uppercase">{category}</span>
          <h1 className="text-3xl font-bold mt-2 mb-4">{name}</h1>
          <p className="text-gray-600 mb-6">{description}</p>
          <p className="text-2xl font-bold text-green-600 mb-6">
            ৳{pricePerHour} <span className="text-sm text-gray-500">/ hour</span>
          </p>
          <button className="btn btn-primary w-full md:w-auto px-10">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage ;

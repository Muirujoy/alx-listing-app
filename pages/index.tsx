import Image from "next/image";
import Pill from "@/components/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free WiFi",
  "Pet Friendly",
  "Private Pool",
  "Mountain View",
  "Beachfront"
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[50vh] flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: "url('/your-hero-image.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Find your favorite place here!</h1>
        <p className="mt-4 text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Pills */}
      <div className="flex gap-2 overflow-x-auto py-4 px-4">
        {filters.map((filter, index) => (
          <Pill key={index} label={filter} />
        ))}
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
           import Image from &quot;next/image&quot;;

    <Image
  src={property.image}
  alt={property.name}
  width={400}
  height={208} // 52 * 4 = 208 (since Tailwind uses rem/4 spacing)
  className="w-full object-cover rounded-lg"
/>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{property.name}</h3>
              <p className="text-gray-600 text-sm">
                {property.address.city}, {property.address.country}
              </p>
              <p className="mt-2 font-bold text-lg">
                ${property.price.toLocaleString()}/night
              </p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
              {property.discount && (
                <span className="mt-2 inline-block text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                  {property.discount}% OFF
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetails() {
  const { id } = useParams();

  const property = {
    id,
    title: 'Modern Apartment',
    price: 1200,
    location: 'New York',
    description: 'A beautiful modern apartment located in the heart of New York.',
    image: 'https://via.placeholder.com/600',
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6">
      <img src={property.image} alt={property.title} className="w-full lg:w-1/2 rounded-lg" />
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-600 mt-2">{property.description}</p>
        <p className="text-lg mt-4"><strong>Location:</strong> {property.location}</p>
        <p className="text-lg mt-2"><strong>Price:</strong> ${property.price} / month</p>
        <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default PropertyDetails;

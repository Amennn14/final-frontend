import React from 'react';
import { useParams } from 'react-router-dom';

function OfferDetailPage() {
  const { id } = useParams(); // ID mta3 el offer

  const rentOffers = [
    {
      id: 1,
      title: 'Dar 1',
      price: 1200,
      location: 'Tunis',
      description: 'S+3.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
      id: 2,
      title: 'DAR 2',
      price: 900,
      location: 'tunis 2',
      description: 'S+4.',
      image: 'https://images.unsplash.com/photo-1594662261249-9e6b5d0e9d6f',
    },
    // offers lena...
  ];


  const offer = rentOffers.find((offer) => offer.id === Number(id));

  if (!offer) {
    return <div>Offer not found</div>;
  }

  return (
    <div className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">{offer.title}</h2>
        <img src={offer.image} alt={offer.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <p className="text-lg font-semibold text-gray-800 mb-4">{`$${offer.price}/month`}</p>
        <p className="text-lg text-gray-600 mb-6">{offer.location}</p>
        <p className="text-lg text-gray-800">{offer.description}</p>
      </div>
    </div>
  );
}

export default OfferDetailPage;

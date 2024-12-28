import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function WelcomePage() {
  const navigate = useNavigate();
  const fakeReviews = [
    { name: "John Doe", rating: 4, comment: "Great experience, found the perfect home!" },
    { name: "Jane Smith", rating: 5, comment: "Absolutely love the service. Highly recommended!" },
    { name: "Sarah Lee", rating: 3, comment: "Good platform, but could use more listings." },
    { name: "Mike Johnson", rating: 5, comment: "Amazing! Helped me sell my home quickly!" },
    { name: "Emily Davis", rating: 4, comment: "Very easy to use, but customer support could be better." },
    { name: "Chris Brown", rating: 2, comment: "Had some issues with the app, but overall okay." },
  ];

  // Google Maps configuration
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 40.748817, // New York City latitude
    lng: -73.985428, // New York City longitude
  };

  const markers = [
    { lat: 40.748817, lng: -73.985428 }, // Example marker (New York City)
    { lat: 34.052235, lng: -118.243683 }, // Example marker (Los Angeles)
  ];

  return (
    <div className="relative w-full overflow-auto">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')" }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Header */}
      <div className="absolute top-0 right-0 z-20 p-4 flex space-x-4">
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Register
        </button>
      </div>

      {/* Welcome Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in text-shadow-lg">
          Welcome to Your Dream Home
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-fade-in-delay text-shadow-md">
          Discover the perfect property for you and your family.
        </p>
        <button
          onClick={() => navigate('/more')}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105 animate-bounce"
        >
          Explore More
        </button>


        <div className="mt-12 text-white text-lg">
          <h2 className="font-bold mb-2 text-shadow-lg">Get home recommendations</h2>
          <p className="mb-6 text-shadow-md">Sign in for a more personalized experience.</p>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-12 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 animate-fade-in-delay">
          {/* Happy Customers */}
          <div className="bg-transparent text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">
              <span className="text-white">2000</span>
              <span className="text-[#eab308]">+</span>
            </h2>
            <p className="text-lg text-white">Happy Customers</p>
          </div>

          {/* New Users Daily */}
          <div className="bg-transparent text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">
              <span className="text-white">4000</span>
              <span className="text-[#eab308]">+</span>
            </h2>
            <p className="text-lg text-white">New Users Daily</p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-12 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 animate-fade-in-delay">
          {/* Buy a Home Card */}
          <div className="bg-transparent border-none rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:animate-shake transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/585/585474.png"
              alt="Buy a Home"
              className="mb-4 w-16 h-16 object-contain"
            />
            <h3 className="text-2xl font-semibold text-slate-400">Buy a Home</h3>
            <p className="text-lg text-slate-100">
              Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Browse Homes
            </button>
          </div>

          {/* Sell a Home Card */}
          <div className="bg-transparent border-none rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:animate-shake transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6676/6676717.png"
              alt="Sell a Home"
              className="mb-4 w-16 h-16 object-contain"
            />
            <h3 className="text-2xl font-semibold text-slate-400">Sell a Home</h3>
            <p className="text-lg text-slate-100">
              No matter what path you take to sell your home, we can help you navigate a successful sale.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              See Your Options
            </button>
          </div>

          {/* Rent a Home Card */}
          <div className="bg-transparent border-none rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:animate-shake transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6286/6286740.png"
              alt="Rent a Home"
              className="mb-4 w-16 h-16 object-contain"
            />
            <h3 className="text-2xl font-semibold text-slate-400">Rent a Home</h3>
            <p className="text-lg text-slate-100">
              We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Find Rentals
            </button>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12 w-full">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
            >
              {markers.map((marker, index) => (
                <Marker key={index} position={marker} />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto px-6 mt-16 z-10 relative">
        <h2 className="text-3xl font-bold text-center text-white mb-8">What Our customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fakeReviews.map((review, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-400">{review.name}</h3>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-2xl ${starIndex < review.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download Buttons Section */}
      <div className="container mx-auto px-6 mt-16 z-10 relative">
      <div className="flex justify-center space-x-6">
    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://www.zillowstatic.com/s3/pfs/static/app-store-badge.svg"
        alt="App Store"
        className="w-40 h-auto"
      />
    </a>
    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
      <img
        src="https://www.zillowstatic.com/s3/pfs/static/google-play-badge.svg"
        alt="Google Play"
        className="w-40 h-auto"
      />
    </a>
  </div>
      </div>
    </div>
);
}
export default WelcomePage;
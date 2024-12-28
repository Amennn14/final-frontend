import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function RentPage() {
  const [rentOffers, setRentOffers] = useState([
    {
      id: 1,
      title: "Luxury Apartment",
      price: 3000,
      location: "New York, NY",
      description: "A spacious apartment in the heart of the city with modern amenities.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      ],
    },
    {
      id: 2,
      title: "Cozy Studio",
      price: 1500,
      location: "San Francisco, CA",
      description: "A cozy studio with a beautiful view of the bay.",
      images: [
        "https://images.unsplash.com/photo-1594662261249-9e6b5d0e9d6f",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      ],
    },
  ]);

  const [newOffer, setNewOffer] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    images: [],
  });

  const [currentImage, setCurrentImage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prevOffer) => ({
      ...prevOffer,
      [name]: value,
    }));
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(",", ".");
    if (/^\d*\.?\d*$/.test(value)) {
      setNewOffer((prevOffer) => ({
        ...prevOffer,
        price: value,
      }));
    }
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    const fileUrls = Array.from(files).map((file) => URL.createObjectURL(file));
    setNewOffer((prevOffer) => ({
      ...prevOffer,
      images: [...prevOffer.images, ...fileUrls],
    }));
  };

  const handleSubmitOffer = (e) => {
    e.preventDefault();
    if (
      newOffer.title &&
      newOffer.price &&
      newOffer.location &&
      newOffer.description &&
      newOffer.images.length > 0
    ) {
      setRentOffers([...rentOffers, { ...newOffer, id: rentOffers.length + 1 }]);
      setNewOffer({
        title: "",
        price: "",
        location: "",
        description: "",
        images: [],
      });
      setCurrentImage(""); // Reset image input
    }
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-70 text-white py-4 px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold cursor-pointer">
            RealEstate
          </Link>
          <div className="space-x-6">
            <Link to="/rent" className="text-lg hover:text-yellow-400 transition">
              Rent
            </Link>
            <Link to="/buy" className="text-lg hover:text-yellow-400 transition">
              Buy
            </Link>
          </div>
        </div>
      </nav>

      {/* Available Rent Offers Section */}
      <section className="py-12 px-6 bg-white bg-opacity-90 mt-20">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Available Rent Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <Carousel responsive={responsive} infinite autoPlay className="mb-4">
                {offer.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${offer.title} ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </Carousel>
              <h3 className="text-xl font-semibold text-gray-800">{offer.title}</h3>
              <p className="text-gray-600">{offer.location}</p>
              <p className="text-gray-500">{offer.description}</p>
              <span className="text-lg font-bold text-gray-800">${offer.price}</span>
              <Link
                to={`/offer/${offer.id}`}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Post Rent Offer Section */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Post a Rent Offer
        </h2>
        <form
          onSubmit={handleSubmitOffer}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={newOffer.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="text"
                  name="price"
                  value={newOffer.price}
                  onChange={handlePriceChange}
                  className="w-full px-12 py-3 border border-gray-300 rounded-lg"
                  placeholder="Enter price (e.g., 1200.50)"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={newOffer.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={newOffer.description}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            {/* Drag and Drop Image Upload */}
            <div
              className="border-4 border-dashed border-gray-300 p-6 text-center"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <p className="text-gray-700 text-lg font-semibold">
                Drag & Drop your images here or click to select
              </p>
              <input
                type="file"
                multiple
                onChange={handleDrop}
                className="hidden"
              />
            </div>

            <div className="mt-2">
              {newOffer.images.map((img, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setNewOffer((prevOffer) => ({
                        ...prevOffer,
                        images: prevOffer.images.filter((_, i) => i !== index),
                      }))
                    }
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            >
              Post Offer
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default RentPage;

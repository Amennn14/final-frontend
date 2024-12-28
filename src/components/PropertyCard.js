import React, { useState } from "react";
import axios from "axios";

const OPENCAGE_API_KEY = "d0f6f65c9f16433d8a6ebd3032680f04"; // Replace with your OpenCage API key

function RentPage() {
  const [newOffer, setNewOffer] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    image: "",
    houseStyle: "",
    startDate: "",
    endDate: "",
  });

  const [suggestions, setSuggestions] = useState([]);

  // Function to fetch location suggestions from OpenCage API
  const fetchLocationSuggestions = async (query) => {
    if (query.length > 2) {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${OPENCAGE_API_KEY}`;
      try {
        const response = await axios.get(url);
        const results = response.data.results;
        const locations = results.map((result) => result.formatted);
        setSuggestions(locations);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleLocationChange = (e) => {
    const { value } = e.target;
    setNewOffer((prevOffer) => ({
      ...prevOffer,
      location: value,
    }));
    fetchLocationSuggestions(value);
  };

  const handleSuggestionClick = (location) => {
    setNewOffer((prevOffer) => ({
      ...prevOffer,
      location: location,
    }));
    setSuggestions([]); // Clear suggestions after selecting
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.luxuryvillasstay.com/wp-content/uploads/2023/05/luxury1.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <div className="relative z-20">
        {/* Rent Offer Form */}
        <section className="py-12 px-6 bg-gray-200">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Post a Rent Offer</h2>
          <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newOffer.location}
                  onChange={handleLocationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
                {suggestions.length > 0 && (
                  <ul className="absolute w-full bg-white border border-gray-300 mt-1 max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default RentPage;

import React from 'react';

function MorePage() {
  return (
    <div className="relative w-full bg-gray-100 py-12 px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-davidmcbee-1546168.jpg&fm=jpg')",
          opacity: 0.5,
        }}
      ></div>

      <h1 className="text-4xl font-bold text-center text-black	 mb-8 relative z-10">
        Explore More About Our Services
      </h1>

      <div className="text-center mb-12 relative z-10">
        <p className="text-lg text-black	 max-w-3xl mx-auto">
          Welcome to the extended version of our platform. Here, you can find more detailed information about our services, featured listings, and much more. Discover the perfect property for you and your family, whether you're looking to buy, sell, or rent. Our platform is designed to make the process seamless and efficient for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {/* Card 1: Trusted Sellers */}
        <div className="bg-orange-700 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all ease-in-out duration-300">
          <h4 className="text-xl font-semibold mb-4">Trusted Sellers</h4>
          <p className="text-lg text-gray-300 text-center">
          We have a network of over 500 trusted sellers, ensuring that you get the best deals on your dream property. Our sellers are vetted and verified, providing you with a safe and reliable experience.
          </p>
        </div>

        {/* Card 2: Our Services */}
        <div className="bg-teal-700 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all ease-in-out duration-300">
          <h4 className="text-xl font-semibold mb-4">Our Services</h4>
          <p className="text-lg text-gray-300 text-center">
          From buying to selling and renting, we offer a wide range of services tailored to your needs. Whether you're looking for your first home, selling your current property, or finding a rental, we've got you covered.
          </p>
        </div>

        {/* Card 3: Customer Satisfaction */}
        <div className="bg-sky-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all ease-in-out duration-300">
          <h4 className="text-xl font-semibold mb-4">Customer Satisfaction</h4>
          <p className="text-lg text-gray-300 text-center">
          With over 95% customer satisfaction, our platform is trusted by thousands of users every year. Our commitment to providing the best service ensures that your experience is nothing short of exceptional.
          </p>
        </div>
      </div>

      {/* Panels Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {/* Panel 1: How We Help */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all ease-in-out duration-300">
          <h4 className="text-xl font-semibold mb-4">How We Help</h4>
          <p className="text-lg text-gray-300 text-center">
            Our platform connects you with trusted real estate agents, helping you navigate the complex world of buying, selling, and renting properties. Whether you're a first-time buyer or an experienced investor, we have the tools to make your journey easier.
          </p>
        </div>

        {/* Panel 2: Trusted Platform */}
        <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all ease-in-out duration-300">
          <h4 className="text-xl font-semibold mb-4">Trusted Platform</h4>
          <p className="text-lg text-gray-100 text-center">
            With thousands of successful transactions, our platform is trusted by users and sellers alike. We pride ourselves on transparency, reliability, and a commitment to helping you achieve your real estate goals.
          </p>
        </div>

        {/* Panel 3: Featured Listings */}
        <div className="bg-yellow-400 text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all ease-in-out duration-300">
          <h4 className="text-xl font-semibold mb-4">Featured Listings</h4>
          <p className="text-lg text-gray-800 text-center">
            Browse our handpicked featured listings for the best properties available in your area. From cozy apartments to luxurious estates, we provide a wide range of options to fit your needs.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Amen Real Estate. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="/contact" className="text-white mx-4 hover:text-yellow-500">Contact</a>
            <a href="/privacy" className="text-white mx-4 hover:text-yellow-500">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MorePage;

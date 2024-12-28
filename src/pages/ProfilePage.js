import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const ProfilePage = () => {
  // State for the form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    country: '',
    userType: '',
    profilePicture: null,
    emailVerificationCode: '',
    email: '', // Added email field
  });

  // State for countries
  const [countries, setCountries] = useState([]);

  // State for form submission success message
  const [formSuccess, setFormSuccess] = useState(false);

  // State for the email verification process
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationError, setVerificationError] = useState('');

  // Fetch countries from the API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countryOptions = data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
        }));
        setCountries(countryOptions);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle country selection change
  const handleCountryChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      country: selectedOption ? selectedOption.label : '',
    }));
  };

  // Handle file input change (Profile Picture)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      profilePicture: file,
    }));
  };

  // Handle email verification code sending
  const handleSendVerificationCode = async () => {
    if (!formData.email) {
      setVerificationError('Please enter a valid email address.');
      return;
    }

    // Simulate sending a verification code to the email
    try {
      const response = await fetch('https://your-api-endpoint.com/send-verification-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (response.ok) {
        setVerificationSent(true);
        setVerificationError('');
      } else {
        const errorData = await response.json();
        setVerificationError(errorData.message || 'Failed to send verification code.');
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
      setVerificationError('An error occurred while sending the verification code.');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call to save profile data)
    console.log('Form Data:', formData);
    setFormSuccess(true); // Show success message after form submission
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Complete Your Profile</h1>

      {/* Success message after form submission */}
      {formSuccess && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md animate__animated animate__fadeIn">
          Profile updated successfully!
        </div>
      )}

      {/* Error message for verification */}
      {verificationError && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md animate__animated animate__fadeIn">
          {verificationError}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-lg font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-lg font-medium mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-lg font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* User Type (Buyer/Seller/Both) */}
        <div className="mb-4">
          <label htmlFor="userType" className="block text-lg font-medium mb-2">
            I am a:
          </label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Country */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-lg font-medium mb-2">
            Country
          </label>
          <Select
            options={countries}
            onChange={handleCountryChange}
            value={formData.country ? { label: formData.country, value: formData.country } : null}
            placeholder="Select a country"
            className="w-full"
            isSearchable
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Send Verification Code Button */}
        <div className="mb-4">
          <button
            type="button"
            onClick={handleSendVerificationCode}
            className={`w-full py-3 ${verificationSent ? 'bg-green-500' : 'bg-blue-500'} text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {verificationSent ? 'Verification Code Sent' : 'Send Verification Code'}
          </button>
        </div>

        {/* Profile Picture */}
        <div className="mb-4">
          <label htmlFor="profilePicture" className="block text-lg font-medium mb-2">
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            accept="image/*"
          />
          {/* Show image preview if a profile picture is selected */}
          {formData.profilePicture && (
            <div className="mt-4">
              <h3 className="text-lg font-medium">Profile Picture Preview:</h3>
              <img
                src={URL.createObjectURL(formData.profilePicture)}
                alt="Profile Preview"
                className="w-32 h-32 object-cover rounded-full mt-2"
              />
            </div>
          )}
        </div>

        {/* Email Verification Code */}
        <div className="mb-4">
          <label htmlFor="emailVerificationCode" className="block text-lg font-medium mb-2">
            Verification Code
          </label>
          <input
            type="text"
            id="emailVerificationCode"
            name="emailVerificationCode"
            value={formData.emailVerificationCode}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;

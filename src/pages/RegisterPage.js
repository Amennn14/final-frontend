import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zxcvbn from 'zxcvbn'; // Importing zxcvbn library for password strength estimation

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, feedback: '' });
  const navigate = useNavigate();

  const evaluatePasswordStrength = (password) => {
    const result = zxcvbn(password);
    setPasswordStrength({
      score: result.score,
      feedback: result.feedback.suggestions.join(', ') || 'Password is okay.',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/login');
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Register Form */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>
          
          {/* Error Message */}
          {error && (
            <div className="bg-red-500 text-white text-center py-2 mb-4 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  evaluatePasswordStrength(e.target.value); // Evaluate password strength as user types
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Strength Meter */}
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Password Strength</span>
                <span className="text-sm text-gray-600">{passwordStrength.feedback}</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <div
                  className={`h-full rounded-full ${passwordStrength.score === 0 ? 'bg-red-500' : ''} 
                    ${passwordStrength.score === 1 ? 'bg-orange-500' : ''} 
                    ${passwordStrength.score === 2 ? 'bg-yellow-500' : ''} 
                    ${passwordStrength.score === 3 ? 'bg-green-500' : ''} 
                    ${passwordStrength.score === 4 ? 'bg-blue-500' : ''}`}
                  style={{ width: `${(passwordStrength.score / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex justify-center mb-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Register
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <span
                onClick={() => navigate('/login')}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
  
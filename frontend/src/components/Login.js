// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // To show error message if login fails
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Reset any previous error message

    try {
      // Send POST request to backend API
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      
      // Store token in localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect to dashboard if login is successful
      navigate('/dashboard');
    } catch (error) {
      // Show error message if login fails
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="font-[sans-serif] max-sm:px-4">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="md:max-w-md w-full px-4 py-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4 text-gray-800">
                  Don't have an account? <Link to="/" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link>
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                  />
                </div>
              </div>

              {/* Show Error if Login fails */}
              {error && <div className="text-red-500 text-sm mt-4">{error}</div>}

              <div className="mt-12">
                <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>

              <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              {/* Social Media Buttons */}
              <div className="space-x-6 flex justify-center">
                {/* Add your social media login buttons */}
              </div>
            </form>
          </div>

          <div className="w-full h-full flex items-center bg-[#000842] rounded-xl p-8">
            <img src="https://readymadeui.com/signin-image.webp" className="w-full aspect-[12/12] object-contain" alt="login-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

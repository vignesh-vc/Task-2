// frontend/src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Proficient');
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', role);
    formData.append('profilePic', profilePic);

    try {
      await axios.post('http://localhost:5000/api/users/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Sign Up Successful');
      navigate('/login'); // Redirect to login page after successful sign up
    } catch (error) {
      console.error(error);
      alert('Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <select
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div>
            <input
              type="file"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

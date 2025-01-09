// frontend/src/components/Dropdown.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown = ({ role }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/users/${role}`);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [role]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">{role} Users</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <li key={user._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col items-center">
              <img
                src={`http://localhost:5000/${user.profilePic}`}
                alt={user.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <p className="text-lg font-semibold text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-600">{user.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Dropdown;

// frontend/src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      {user && (
        <>
          <img src={`http://localhost:5000/${user.profilePic}`} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.role}</p>
        </>
      )}
    </div>
  );
};

export default UserProfile;

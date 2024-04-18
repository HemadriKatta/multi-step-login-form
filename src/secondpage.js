import React, { useState } from 'react';
import './secondpage.css';
import { Link } from 'react-router-dom';

const ProfileCreationComponent = () => {
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState('');

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };


  


  return (
    <div className="profile-creation-container">
      <h1 className="welcome-text">Welcome! Let's create your profile</h1>
      <p className="subtext">Let others get to know you better! You can do these later</p>

      <div className="avatar-container">
        <h2 className="section-title">Add an avatar</h2>
        <div className="avatar-preview">
          {avatar ? (
            <img src={URL.createObjectURL(avatar)} alt="Avatar" className="avatar-image" />
          ) : (
            <div className="default-avatar" id="upload-icon1">
              <i className="fas fa-plus upload"></i>
            </div>
          )}
          <input type="file" onChange={handleAvatarChange} className="avatar-input" />
        </div>
        <p className="avatar-instructions">Choose image or choose one of our defaults</p>
      </div>

      <div className="location-container">
        <h2 className="section-title">Add your location</h2>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter a location"
          className="location-input"
        />
      </div>

      <Link to="/thirdPage"><button className="next-button" >Next</button></Link> 
    </div>
  );
};



export default ProfileCreationComponent;
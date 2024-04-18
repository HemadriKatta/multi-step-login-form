import React, { useState } from 'react';
import './thirdpage.css';
import { Link } from 'react-router-dom';

const DribbleSignup = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  

  

  return (
    <div className="dribble-signup-container">
      <div className="header">
        <div className="back-button">
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="logo">Dribbble</div>
      </div>

      <h1 className="title">What brings you to Dribbble?</h1>
      <p className="description">
        Select the options that best describe you. Don't worry, you can explore other options later.
      </p>

      <div className="option-container">
        <div
          className={`option ${selectedOptions.includes('designer') ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('designer')}
        >
          <h3 className="option-title">I'm a designer looking to share my work</h3>
        </div>
        <div
          className={`option ${selectedOptions.includes('hire') ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('hire')}
        >
          <h3 className="option-title">I'm looking to hire a designer</h3>
        </div>
        <div
          className={`option ${selectedOptions.includes('inspiration') ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('inspiration')}
        >
          <h3 className="option-title">I'm looking for design inspiration</h3>
        </div>
      </div>

      <div className="actions">
        <Link to= "/finalPage"><button className="submit-button">Finish</button></Link>
        <Link to= "/secondPage"><button className="return-button" >Press RETURN</button></Link>
      </div>
    </div>
  );
};

export default DribbleSignup;
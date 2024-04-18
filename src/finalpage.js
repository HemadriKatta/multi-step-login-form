import React from 'react';
import "./finalpage.css";
import { useMyObject } from './context';

function VerifyEmail() {
  const {email} =useMyObject();
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">Inspiration</li>
            <li className="nav-item">Find Work</li>
            <li className="nav-item">Learn Design</li>
            <li className="nav-item">Go Pro</li>
            <li className="nav-item">Hire Designers</li>
          </ul>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" />
          </div>
          <div className="user-actions">
            <button className="btn btn-upload">Upload</button>
            <div className="user-avatar"></div>
          </div>
        </nav>
      </header>

      <main className="content">
        <div className="verify-email-container">
          <h2 className="verify-email-title">Please verify your email...</h2>
          <div className="verify-email-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <p className="verify-email-text">
            Please verify your email address. We've sent a confirmation email to:
            <span className="email">{email}</span>
          </p>
          <p className="verify-email-note">
            Click the confirmation link in that email to begin using Dribbble.
          </p>
          <p className="verify-email-note">
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can resend the confirmation email.
          </p>
          <button className="btn btn-resend">Resend the confirmation email</button>
          <p className="verify-email-note">
            Wrong email address? <a href="signup" className="link">Change it.</a>
          </p>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">For designers</h3>
            <ul className="footer-list">
              <li className="footer-item">Go Pro!</li>
              <li className="footer-item">Explore design work</li>
              <li className="footer-item">Design blog</li>
              <li className="footer-item">Overtime podcast</li>
              <li className="footer-item">Playoffs</li>
              <li className="footer-item">Weekly Warm-Up</li>
              <li className="footer-item">Refer a Friend</li>
              <li className="footer-item">Code of conduct</li>
            </ul>
          </div>
          {/* Add more footer sections here */}
        </div>
      </footer>
    </div>
  );
}

export default VerifyEmail;
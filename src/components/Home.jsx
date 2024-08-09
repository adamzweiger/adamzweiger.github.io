import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="home">
      <h1>Adam Zweiger</h1>
      <div className="bio-container">
        <div className="profile-pic-container">
          <img src="/me.jpg" alt="Adam Zweiger" className="profile-pic" />
        </div>
        <div className="bio">
          <p>
            Hey! I'm an undergrad at MIT pursuing a degree in CS (Course 6-3).
            My background includes studying pure math and competing in math, physics, and computing olympiads during high school.
            I've also interned as a software/ML engineer in biotech and big tech.
            My current focus is on algorithms and AI systems, and I'm seeking research opportunities in these areas.
            I'm also a part of the HackMIT organizing team, hoping to support tech innovation.
            Outside of academics, I love bouldering, badminton, and tennis.
          </p> 
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-link" onClick={toggleEmail}>
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">
            {showEmail ? (
              <>
                ada<span style={{display: 'none'}}>foo</span>mz
                <span style={{display: 'none'}}>bar</span>@
                <span style={{display: 'none'}}>null</span>
                m<span style={{display: 'none'}}>foo</span>it.edu
              </>
            ) : (
              'Email'
            )}
          </span>
        </div>
        <a href="https://www.linkedin.com/in/adam-zweiger-1b2b80200/" className="contact-link">
          <FaLinkedin className="contact-icon" />
          <span className="contact-text">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { Publication, publications } from './Research';

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
          <img src="/headshot.jpg" alt="Adam Zweiger" className="profile-pic" />
        </div>
        <div className="bio">
          <p>
            I am an undergrad at MIT, where I've done research advised by Prof. Yoon Kim on data-efficient adaptation and long-context methods for language models. I've also worked at Cognition on RL for coding models.
            {/* I am a Member of Technical Staff at Thinking Machines Lab. Previously, I was an undergrad at MIT, where I did research advised by Prof. Yoon Kim on data-efficient adaptation and long-context methods for language models. I've also worked at Cognition on RL for coding models. */}
          </p>
        </div>
      </div>
      <div className="home-research research">
        <h2>Research</h2>
        <div className="publication-list">
          {publications.map((pub, index) => (
            <Publication key={index} {...pub} />
          ))}
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
        {/* Google Scholar */}
        <a href="https://scholar.google.com/citations?user=MRk2E8AAAAAJ" className="contact-link" target="_blank" rel="noopener noreferrer">
          <SiGooglescholar className="contact-icon" />
          <span className="contact-text">Scholar</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/adamzweiger" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <span className="contact-text">GitHub</span>
        </a>

        {/* Twitter (X) */}
        <a href="https://x.com/AdamZweiger" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="contact-icon" />
          <span className="contact-text">Twitter</span>
        </a>
      </div>
    </div>
  );
}

export default Home;

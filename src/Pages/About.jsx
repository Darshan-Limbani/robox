import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Robox</h1>
        <p className="subtitle">Your Ultimate Gaming Companion</p>
      </div>
      
      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Robox, we're dedicated to revolutionizing the gaming experience by providing
            a seamless platform where gamers can discover, play, and earn rewards. Our mission
            is to create an inclusive gaming ecosystem that rewards skill, dedication, and
            community participation.
          </p>
        </section>

        <section className="features-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Gaming Rewards</h3>
              <p>Earn points and rewards while playing your favorite games</p>
            </div>
            <div className="feature-card">
              <h3>Community</h3>
              <p>Connect with fellow gamers and share your achievements</p>
            </div>
            <div className="feature-card">
              <h3>Fair Play</h3>
              <p>Our platform ensures fair and secure gaming for everyone</p>
            </div>
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for all your gaming needs</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p>
            We are a passionate team of gamers, developers, and gaming enthusiasts
            working together to create the best gaming experience for our community.
            Our diverse team brings together expertise from various fields to ensure
            Robox remains at the forefront of gaming innovation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 
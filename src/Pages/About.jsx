import React from 'react';
import '../styles/About.css';
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";

const About = () => {
  return (
    <>
      <ProfileHeader
        profileImageSrc={back_arr}
        title="About Robox"
      />
      <div className="about-container">
        <div className="about-header">
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About; 
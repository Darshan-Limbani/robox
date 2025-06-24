import '../styles/Contact.css';
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";

const Contact = () => {
  
  return (
    <>
      <ProfileHeader
        profileImageSrc={back_arr}
        title="Contact Us"
      />
      <div className="contact-container">
        <div className="contact-header">
          {/*<h1>Contact Us</h1>*/}
          <p className="subtitle">We'd love to hear from you</p>
        </div>
        
        <div className="contact-content">
          Have questions, suggestions, or feedback? We’d love to hear from you! Feel free to reach out to us through the
          following methods:
          <br/>
          
          <b>Email</b>: roblox@gmail.com
          <br/>
          <br/>
          Our team is here to assist you and make your experience on our platform as enjoyable as possible.
        </div>
      </div>
    </>
  );
};

export default Contact; 
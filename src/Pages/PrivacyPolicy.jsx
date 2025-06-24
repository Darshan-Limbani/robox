import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";

const PrivacyPolicy = () => {
  return (
    <>
      <ProfileHeader
        profileImageSrc={back_arr}
        title="Privacy Policy"
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/*<div className="mb-8 text-center">*/}
        {/*  <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>*/}
        {/*</div>*/}
        
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Your privacy is important to us. This Privacy Policy outlines the types of personal information we collect
              and how we use, store, and protect it.
            </p>
          </section>
          
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information Collection</h2>
            <div className="text-gray-600 leading-relaxed">
              We may collect information such as your name, email address, and other necessary data to provide a
              seamless experience on our platform.
            </div>
          </section>
          
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information Usage</h2>
            <div className="text-gray-600 leading-relaxed">
              Your data is used to improve our services, personalize your experience, and provide relevant information.
              We do not share your data with third parties without consent.
            </div>
          </section>
          
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Protection</h2>
            <div className="text-gray-600 leading-relaxed">
              We implement security measures to protect your data. However, please note that no method of transmission
              over the internet is 100% secure.
            </div>
          </section>
          
          <section className="bg-white rounded-lg shadow-sm p-6 text-gray-600 leading-relaxed">
            By using our platform, you agree to the collection and use of information in accordance with this Privacy
            Policy.
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy; 
import '../styles/TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Terms and Conditions        </h1>
      </div>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Robox! By using our platform, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Use of Platform</h2>
          <div className="text-gray-600 leading-relaxed">
            You agree to use our platform responsibly and not to engage in any fraudulent activities. Any misuse of the platform may result in account termination.
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Content Ownership</h2>
          <div className="text-gray-600 leading-relaxed">
            All content on this platform, including quizzes and graphics, is owned by Math Quiz. Unauthorized use is strictly prohibited.          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to Terms
          </h2>
          <div className="text-gray-600 leading-relaxed">
            We may update these terms from time to time. It is your responsibility to review the terms regularly. Continued use of the platform constitutes acceptance of any changes.
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 text-gray-600 leading-relaxed">
          Thank you for being a part of Robox!
        </section>
      </div>
    </div>
  );
};

export default TermsOfService; 
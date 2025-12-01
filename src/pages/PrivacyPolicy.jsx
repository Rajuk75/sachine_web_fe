import { useTheme } from "../context/ThemeContext";

const PrivacyPolicy = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen pt-24 pb-16 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-blue-600' : 'bg-blue-300'
        }`} style={{ animationDuration: '4s' }}></div>
        <div className={`absolute top-1/3 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-purple-600' : 'bg-purple-300'
        }`} style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className={`absolute bottom-20 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-pink-600' : 'bg-pink-300'
        }`} style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
        } opacity-60 animate-pulse`}></div>
        <div className={`absolute top-1/3 right-1/3 w-3 h-3 rounded-full ${
          theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'
        } opacity-40 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full ${
          theme === 'dark' ? 'bg-pink-400' : 'bg-pink-500'
        } opacity-50 animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md bg-blue-500/10 border border-blue-400/30 animate-bounce-slow">
            <span className="text-2xl">🔒</span>
            <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
              Your Privacy Matters
            </span>
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up`}>
            Privacy Policy
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} animate-slide-up`} style={{ animationDelay: '0.1s' }}>
            Last updated: April 1, 2017
          </p>
        </div>

        {/* Content */}
        <div className={`rounded-2xl p-8 md:p-12 backdrop-blur-sm animate-fade-in-up ${
          theme === 'dark' 
            ? 'bg-gray-800/80 border border-gray-700 shadow-2xl shadow-blue-500/10' 
            : 'bg-white/90 border border-gray-200 shadow-2xl shadow-blue-200/50'
        }`} style={{ animationDelay: '0.2s' }}>
          <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                About 3.14 Digital
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                AdsHampersis a global advertising technology platform for media buying and reducing the complexity of the marketing technology ecosystem. AdsHampershelps advertisers create personalized ads for every single customer dynamically at run time. With a unique rule based engine, it allows for a much deeper and meaningful engagement with the customers.
              </p>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                We are headquartered in India, with an office in New Delhi. We provide this privacy policy so that we may inform you about how our ad optimization technology gathers and processes information.
              </p>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                AdsHampersrecognizes and values your privacy and we are committed to protecting the confidentiality of your personal information. If at any time you wish to withdraw your personal information, contact us at <a href="mailto:support@adshamper.com" className="text-blue-600 hover:text-blue-700">support@adshamper.com</a>.
              </p>
            </section>

            {/* Usage */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Usage
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                We use cookies and web beacons for select purposes. We use them to track advertising impressions, count frequency of exposure to particular ads, and map anonymized user identification numbers for RTB inventory.
              </p>
            </section>

            {/* Personal Information */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Personal Information
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                The following information about you will be considered as personal information:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Email Address</li>
                <li>Credit card information</li>
                <li>Your name</li>
                <li>Phone number</li>
                <li>Residential Address</li>
                <li>Any other information collected from you</li>
              </ul>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                We do not sell, trade, permit usage or rent your personal information to any third party unless we have been expressly authorized by you either in writing or electronically to do so.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Cookies
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Cookies are strings of text that a website transmits to a user's computer. Our website creates a temporary cookie for each visit to facilitate your experience. These cookies automatically expire as soon as you leave our website.
              </p>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                We may use third party advertising companies to serve ads on our behalf. For more information, refer to the Beeswax privacy policy and Google privacy policy.
              </p>
            </section>

            {/* Security */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Security & Storage Procedures
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                At AdsHamperswe make protection of your personal information from loss, theft or misuse our top priority. All information we have collected is stored using the same security measures that we use to protect our own proprietary corporate data. Only authorized users are able to access the data we collect and store.
              </p>
            </section>

            {/* GDPR Compliance */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                GDPR Compliance
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                At 3dot14, we take the protection of your personal data seriously. We are committed to complying with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
              </p>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Data Subject Rights
              </h3>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                You have certain rights in relation to your personal data, including:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Access your personal data</li>
                <li>Rectify any inaccuracies in your personal data</li>
                <li>Erase your personal data</li>
                <li>Object to the processing of your personal data</li>
                <li>Restrict the processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw your consent at any time</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Children's Privacy
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                This website is not intended for children and we do not knowingly solicit or collect personally identifiable information from children. We specifically request that persons under the age of 18 do not use this website or submit information to the website.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Disclaimer
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                THE INFORMATION, DOCUMENTATION, SOFTWARE, PRODUCTS, AND SERVICES CONTAINED ON THE AdsHampersWEBSITE ARE PROVIDED "AS IS" WITHOUT ANY WARRANTY OF ANY KIND. AdsHampersAND ITS SUPPLIERS DISCLAIM ALL WARRANTIES RELATING TO THE INFORMATION, DOCUMENTATION, SOFTWARE, PRODUCTS, AND SERVICES CONTAINED ON THE AdsHampersWEBSITE.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Governing Law
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                This is an Indian website and is subject to the laws of India. AdsHampersmay have to disclose personally identifiable information without your permission when required by law.
              </p>
            </section>

          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

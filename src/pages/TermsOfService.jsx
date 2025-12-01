import { useTheme } from "../context/ThemeContext";
import PATHS from "../routes/paths";

const TermsOfService = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen pt-24 pb-16 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900' 
        : 'bg-gradient-to-b from-purple-50 via-white to-blue-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className={`absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-purple-600' : 'bg-purple-300'
        }`} style={{ animationDuration: '5s' }}></div>
        <div className={`absolute top-1/2 left-10 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-blue-600' : 'bg-blue-300'
        }`} style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
        <div className={`absolute bottom-20 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-pink-600' : 'bg-pink-300'
        }`} style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className={`absolute top-1/3 left-1/3 w-2 h-2 rounded-full ${
          theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'
        } opacity-60 animate-pulse`}></div>
        <div className={`absolute top-1/2 right-1/4 w-3 h-3 rounded-full ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
        } opacity-40 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full ${
          theme === 'dark' ? 'bg-pink-400' : 'bg-pink-500'
        } opacity-50 animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md bg-purple-500/10 border border-purple-400/30 animate-bounce-slow">
            <span className="text-2xl">📜</span>
            <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
              Legal Agreement
            </span>
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent animate-slide-up`}>
            Terms of Service
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} animate-slide-up`} style={{ animationDelay: '0.1s' }}>
            Last updated: April 1, 2017
          </p>
        </div>

        {/* Content */}
        <div className={`rounded-2xl p-8 md:p-12 backdrop-blur-sm animate-fade-in-up ${
          theme === 'dark' 
            ? 'bg-gray-800/80 border border-gray-700 shadow-2xl shadow-purple-500/10' 
            : 'bg-white/90 border border-gray-200 shadow-2xl shadow-purple-200/50'
        }`} style={{ animationDelay: '0.2s' }}>
          <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Agreement to Terms
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                By accessing and using the AdsHampers website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            {/* No Unlawful Use */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                No Unlawful or Prohibited Use
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                As a condition of your use of this website, you agree that you will not use this website or the information or software contained herein for any purpose that is unlawful or prohibited by these terms and conditions.
              </p>
            </section>

            {/* User Consent */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Your Consent
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                By submitting your information, you consent to the use of that information as set out in our Privacy Policy. We welcome your views on this website and our policies. If you have questions or comments, please contact us at <a href="mailto:support@adshamper.com" className="text-blue-600 hover:text-blue-700">support@adshamper.com</a>.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Disclaimer
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                While every effort is made to ensure the accuracy of information offered on these pages, we shall have no liability for errors, omissions or inadequacies in the information contained herein. This website could include inaccuracies or out-dated information and is subject to change at any time without notice.
              </p>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Your use of this website is at your own risk. You agree to hold AdsHampersharmless from and not sue AdsHampersfor any claims based upon using this website.
              </p>
            </section>

            {/* Warranty Disclaimer */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Warranty Disclaimer
              </h2>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-yellow-50 border border-yellow-200'}`}>
                <p className={`mb-4 leading-relaxed font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  THE INFORMATION, DOCUMENTATION, SOFTWARE, PRODUCTS, AND SERVICES CONTAINED ON THE AdsHampersWEBSITE ARE PROVIDED "AS IS" WITHOUT ANY WARRANTY OF ANY KIND.
                </p>
                <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  AdsHampersAND ITS SUPPLIERS DISCLAIM ALL WARRANTIES RELATING TO THE INFORMATION, DOCUMENTATION, SOFTWARE, PRODUCTS, AND SERVICES CONTAINED ON THE AdsHampersWEBSITE, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTIES AGAINST INFRINGEMENT OF THIRD PARTY RIGHTS, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Limitation of Liability
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                AdsHampersSHALL NOT BE LIABLE FOR DAMAGES, WHETHER DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL, AS A RESULT OF THE REPRODUCTION, MODIFICATION, DISTRIBUTION OR USE OF THE INFORMATION, DOCUMENTATION, SOFTWARE, PRODUCTS AND SERVICES.
              </p>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Some states or jurisdictions do not allow the exclusion of implied warranties or limitations on how long an implied warranty may last, so the above limitations may not apply to you.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Changes to Terms
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                We reserve the right to change these Terms of Service at any time. All changes will be made here so that you will always know what terms govern your use of our website. Please visit this page regularly to review our terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Governing Law
              </h2>
              <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                This is an Indian website and is subject to the laws of India. Please note, laws related to personally identifiable information vary from country to country.
              </p>
            </section>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href={PATHS.HOME}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

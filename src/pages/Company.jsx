import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import PageTemplate from "../components/PageTemplate";

const Company = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <PageTemplate
      icon="🏢"
      badge="About Us"
      title={t.nav.company}
      subtitle="Learn more about our mission, vision, and values"
      gradientFrom="orange"
      gradientTo="pink"
    >
      <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
        <section className="mb-8">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About Adshamper
          </h2>
          <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Adshamper Pvt. Ltd. is a dynamic marketing and advertising company based in Kolkata, India. We're dedicated to transforming the digital performance marketing space with innovation, technology, and a strong focus on measurable results.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: '🎯', title: 'Our Mission', desc: 'To deliver proof in performance and power in results' },
            { icon: '👥', title: 'Our Team', desc: 'Talented professionals passionate about digital marketing' },
            { icon: '🌟', title: 'Our Values', desc: 'Innovation, integrity, and customer success' }
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-xl text-center ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="text-5xl mb-3">{item.icon}</div>
              <h4 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Company;

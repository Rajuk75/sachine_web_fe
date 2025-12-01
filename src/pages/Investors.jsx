import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import PageTemplate from "../components/PageTemplate";

const Investors = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <PageTemplate
      icon="📈"
      badge="Investor Relations"
      title={t.nav.investors}
      subtitle="Financial information and investor resources"
      gradientFrom="purple"
      gradientTo="pink"
    >
      <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
        <section className="mb-8">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Investor Information
          </h2>
          <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Welcome to our investor relations page. Here you'll find financial reports, company updates, and investment opportunities.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '📊', title: 'Financial Reports', desc: 'Quarterly and annual financial statements' },
            { icon: '📅', title: 'Events', desc: 'Upcoming investor meetings and calls' },
            { icon: '💼', title: 'Opportunities', desc: 'Investment and partnership opportunities' }
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

export default Investors;

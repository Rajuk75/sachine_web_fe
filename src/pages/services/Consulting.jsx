import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import PageTemplate from "../../components/PageTemplate";

const Consulting = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <PageTemplate
      icon="💼"
      badge="Expert Guidance"
      title={t.footer.consulting}
      subtitle="Strategic consulting to accelerate your business growth"
      gradientFrom="blue"
      gradientTo="purple"
    >
      <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
        <section className="mb-8">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Consulting Services
          </h2>
          <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Our expert consultants help you navigate complex business challenges and identify opportunities for growth.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: '🎯', title: 'Strategy', desc: 'Business strategy and digital transformation' },
            { icon: '📊', title: 'Analytics', desc: 'Data-driven insights and recommendations' },
            { icon: '🚀', title: 'Growth', desc: 'Scaling strategies and market expansion' },
            { icon: '⚡', title: 'Optimization', desc: 'Process improvement and efficiency' }
          ].map((service, idx) => (
            <div key={idx} className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="text-4xl mb-3">{service.icon}</div>
              <h4 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{service.title}</h4>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};
export default Consulting;
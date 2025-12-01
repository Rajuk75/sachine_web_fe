import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import PageTemplate from "../components/PageTemplate";

const Resources = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <PageTemplate
      icon="📚"
      badge="Knowledge Hub"
      title={t.nav.resources}
      subtitle="Explore our library of guides, tutorials, and insights"
      gradientFrom="blue"
      gradientTo="green"
    >
      <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
        <section className="mb-8">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Resource Center
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📖', title: 'Documentation', desc: 'Comprehensive guides and API references' },
              { icon: '🎓', title: 'Tutorials', desc: 'Step-by-step learning materials' },
              { icon: '📰', title: 'Blog', desc: 'Latest insights and industry trends' },
              { icon: '🎥', title: 'Webinars', desc: 'Live sessions with experts' }
            ].map((resource, idx) => (
              <div key={idx} className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h4 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{resource.title}</h4>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{resource.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Resources;

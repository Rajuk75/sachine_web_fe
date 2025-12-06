import { useLanguage } from "../context/LanguageContext";
import PageTemplate from "../components/PageTemplate";

const Technology = () => {
  const { t } = useLanguage();

  return (
    <PageTemplate
      icon="⚡"
      badge="Cutting-Edge Tech"
      title={t.nav.technology}
      subtitle="Powered by the latest technologies and innovations"
      gradientFrom="purple"
      gradientTo="blue"
    >
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Our Technology Stack
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            We leverage cutting-edge technologies including AI, Machine Learning, and Cloud Computing to deliver scalable, high-performance solutions that drive business growth.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: '🤖', title: 'AI & ML', desc: 'Advanced algorithms for intelligent automation' },
            { icon: '☁️', title: 'Cloud Native', desc: 'Scalable infrastructure on AWS, Azure, GCP' },
            { icon: '🔒', title: 'Security First', desc: 'Enterprise-grade security and compliance' },
            { icon: '📊', title: 'Big Data', desc: 'Process and analyze massive datasets' },
            { icon: '🚀', title: 'Performance', desc: 'Optimized for speed and efficiency' },
            { icon: '🔄', title: 'Real-time', desc: 'Live data processing and updates' }
          ].map((tech, idx) => (
            <div key={idx} className="p-6 rounded-xl text-center bg-gray-50">
              <div className="text-5xl mb-3">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                {tech.title}
              </h4>
              <p className="text-gray-600">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Technology;

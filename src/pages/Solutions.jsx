import { useLanguage } from "../context/LanguageContext";
import PageTemplate from "../components/PageTemplate";

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <PageTemplate
      icon="💡"
      badge="Smart Solutions"
      title={t.nav.solutions}
      subtitle="Tailored solutions for your unique business challenges"
      gradientFrom="green"
      gradientTo="blue"
    >
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Industry Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🏦', title: 'Finance & Banking', desc: 'Secure fintech solutions for modern banking' },
              { icon: '🏥', title: 'Healthcare', desc: 'Digital health platforms and telemedicine' },
              { icon: '🛒', title: 'E-commerce', desc: 'Scalable online retail solutions' },
              { icon: '🎓', title: 'Education', desc: 'E-learning and educational technology' }
            ].map((solution, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-50">
                <div className="text-4xl mb-3">{solution.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">
                  {solution.title}
                </h4>
                <p className="text-gray-600">{solution.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Solutions;

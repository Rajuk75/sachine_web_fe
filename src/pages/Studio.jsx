import { useLanguage } from "../context/LanguageContext";
import PageTemplate from "../components/PageTemplate";

const Studio = () => {
  const { t } = useLanguage();

  return (
    <PageTemplate
      icon="🎨"
      badge="Creative Studio"
      title={t.nav.studio}
      subtitle="Transform your ideas into stunning digital experiences"
      gradientFrom="blue"
      gradientTo="purple"
    >
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Welcome to Our Studio
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Our creative studio brings together talented designers, developers, and strategists to create exceptional digital experiences. We combine creativity with technology to deliver solutions that not only look great but also drive results.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'Brand Strategy', desc: 'Develop compelling brand identities that resonate with your audience' },
              { icon: '💻', title: 'Web Design', desc: 'Create beautiful, responsive websites that convert visitors into customers' },
              { icon: '📱', title: 'Mobile Apps', desc: 'Build intuitive mobile applications for iOS and Android platforms' },
              { icon: '🎬', title: 'Video Production', desc: 'Produce engaging video content that tells your brand story' }
            ].map((service, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-50">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h4>
                <p className="text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Our Process
          </h3>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements' },
              { step: '02', title: 'Design', desc: 'Creating beautiful and functional designs' },
              { step: '03', title: 'Development', desc: 'Building with cutting-edge technology' },
              { step: '04', title: 'Launch', desc: 'Deploying and optimizing for success' }
            ].map((process, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-lg bg-blue-50">
                <div className="text-3xl font-bold text-blue-600">
                  {process.step}
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-1 text-gray-900">
                    {process.title}
                  </h5>
                  <p className="text-gray-600">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Studio;

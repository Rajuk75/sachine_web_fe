import { useLanguage } from "../../context/LanguageContext";
import PageTemplate from "../../components/PageTemplate";

const Development = () => {
  const { t } = useLanguage();

  return (
    <PageTemplate icon="💻" badge="Build Better" title={t.footer.development} subtitle="Custom software development solutions" gradientFrom="green" gradientTo="blue">
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Development Services</h2>
        <p className="text-lg mb-6 text-gray-700">Full-stack development services for web, mobile, and cloud applications.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[{icon:'🌐',title:'Web Apps',desc:'Modern web applications'},{icon:'📱',title:'Mobile Apps',desc:'iOS and Android development'},{icon:'☁️',title:'Cloud',desc:'Scalable cloud solutions'}].map((s,i)=>(
            <div key={i} className="p-6 rounded-xl text-center bg-gray-50">
              <div className="text-5xl mb-3">{s.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Development;

import { useLanguage } from "../../context/LanguageContext";
import PageTemplate from "../../components/PageTemplate";

const Design = () => {
  const { t } = useLanguage();

  return (
    <PageTemplate icon="🎨" badge="Creative Design" title={t.footer.design} subtitle="Beautiful designs that convert" gradientFrom="pink" gradientTo="purple">
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Design Services</h2>
        <p className="text-lg mb-6 text-gray-700">User-centered design that creates memorable experiences.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[{icon:'🎯',title:'UI/UX',desc:'User interface and experience design'},{icon:'🖼️',title:'Branding',desc:'Brand identity and visual design'},{icon:'📐',title:'Prototyping',desc:'Interactive prototypes'}].map((s,i)=>(
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

export default Design;

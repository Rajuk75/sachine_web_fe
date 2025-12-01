import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import PageTemplate from "../../components/PageTemplate";

const Integration = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <PageTemplate icon="🔗" badge="Seamless Integration" title={t.footer.integration} subtitle="Connect your systems effortlessly" gradientFrom="purple" gradientTo="pink">
      <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
        <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Integration Services</h2>
        <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Seamlessly integrate third-party services and APIs.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[{icon:'🔌',title:'API Integration',desc:'Connect with any API'},{icon:'🔄',title:'Data Sync',desc:'Real-time data synchronization'},{icon:'⚙️',title:'Automation',desc:'Workflow automation'}].map((s,i)=>(
            <div key={i} className={`p-6 rounded-xl text-center ${theme==='dark'?'bg-gray-700/50':'bg-gray-50'}`}>
              <div className="text-5xl mb-3">{s.icon}</div>
              <h4 className={`text-xl font-bold mb-2 ${theme==='dark'?'text-white':'text-gray-900'}`}>{s.title}</h4>
              <p className={theme==='dark'?'text-gray-300':'text-gray-600'}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Integration;

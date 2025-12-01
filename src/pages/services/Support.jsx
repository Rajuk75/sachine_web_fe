import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import PageTemplate from "../../components/PageTemplate";

const Support = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <PageTemplate icon="🛟" badge="24/7 Support" title={t.footer.support} subtitle="Always here to help you succeed" gradientFrom="orange" gradientTo="blue">
      <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
        <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Support Services</h2>
        <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Round-the-clock support to keep your business running smoothly.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[{icon:'⏰',title:'24/7 Available',desc:'Always available when you need us'},{icon:'💬',title:'Live Chat',desc:'Instant support via chat'},{icon:'📞',title:'Phone Support',desc:'Direct phone assistance'}].map((s,i)=>(
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

export default Support;

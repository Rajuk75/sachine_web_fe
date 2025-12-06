import { FaBullhorn, FaChartLine, FaCogs, FaChartPie, FaLaptopCode, FaSearchDollar, FaVrCardboard } from 'react-icons/fa';

export const HOME_SERVICES = [
  {
    title: 'Discover a high-value, fraud-free user base for your app',
    desc: 'Leverage the power of intelligent advertising and target the most relevant audience for your brand with optimized creatives run post A/B testing to ensure real conversions',
    icon: <FaBullhorn className="w-10 h-10 text-orange-500" />,
  },
  {
    title: 'Acquire and Engage users at every step of your customer journey',
    desc: 'Find your highest value user, analyse post-install behaviour and reduce customer acquisitions costs further down the funnel with a focus on higher user LTVs',
    icon: <FaChartLine className="w-10 h-10 text-orange-500" />,
    hasSeparator: true
  },
  {
    title: 'Re-engage users with machine learning optimized creatives',
    desc: 'Create extensive look-alike audiences, measure user interest and estimate likelihood of actions to retarget previously active and loyal users with our predictive machine learning',
    icon: <FaCogs className="w-10 h-10 text-orange-500" />,
    hasSeparator: true
  }
];

export const ABOUT_FEATURES = [
  { text: 'Market Management', icon: <FaChartPie className="w-5 h-5 text-blue-600" />, bg: 'bg-blue-50' },
  { text: 'Freelancing Training', icon: <FaLaptopCode className="w-5 h-5 text-purple-600" />, bg: 'bg-purple-50' },
  { text: 'Business Analysis', icon: <FaSearchDollar className="w-5 h-5 text-green-600" />, bg: 'bg-green-50' },
  { text: 'Augmented Reality', icon: <FaVrCardboard className="w-5 h-5 text-orange-600" />, bg: 'bg-orange-50' }
];

export const DSP_FEATURES = [
  'AI based high-value user targeting and acquisition',
  'Global Scale',
  'CPI & CPA optimisation',
  'Creative Optimization',
  'Fraud Prevention',
  '100% Transparency with dashboard access',
  'Real-time tracking and performance reports',
  'Agile Machine Learning and DSP developments',
  'Integration with 40+ major ad exchanges',
  'Specialised campaigns for all your goals'
];

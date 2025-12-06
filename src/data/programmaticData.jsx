import { FaBullhorn, FaChartLine, FaCogs, FaRocket } from 'react-icons/fa';

export const PROGRAMMATIC_FEATURES = [
  {
    title: "Real-Time Bidding (RTB)",
    desc: "Bid on individual impressions in real-time, ensuring you only pay for the users that matter most to your campaign goals.",
    icon: <FaBullhorn className="text-blue-600 text-2xl" />,
    bg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Advanced Analytics",
    desc: "Gain deep insights into your campaign performance with granular reporting on impressions, clicks, conversions, and ROI.",
    icon: <FaChartLine className="text-purple-600 text-2xl" />,
    bg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Precise Targeting",
    desc: "Target audiences based on demographics, interests, behavior, location, and device type to maximize engagement.",
    icon: <FaCogs className="text-pink-600 text-2xl" />,
    bg: "bg-pink-100",
    iconColor: "text-pink-600"
  },
  {
    title: "Automated Optimization",
    desc: "Our AI-driven engine automatically adjusts bids and targeting parameters to optimize for your specific KPIs.",
    icon: <FaRocket className="text-indigo-600 text-2xl" />,
    bg: "bg-indigo-100",
    iconColor: "text-indigo-600"
  }
];

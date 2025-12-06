import { RiDiscussLine, RiRobot2Line, RiBarChartGroupedLine, RiMoneyDollarCircleLine } from 'react-icons/ri';

export const SOLUTIONS_DATA = [
  {
    title: "Connect",
    desc: "Instantly interface with customers using SMS, WhatsApp, and RCS for personalized, timely interactions. Leverage real-time messaging to optimize customer communication and deliver precise, data-driven responses.",
    icon: <RiDiscussLine />,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Automate",
    desc: "Streamline your marketing workflows with intelligent automation. From welcome series to abandoned cart recovery, let our smart systems handle the repetitive tasks while you focus on strategy.",
    icon: <RiRobot2Line />,
    color: "pink",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Analyze",
    desc: "Gain deep insights into your campaign performance with our advanced analytics dashboard. Track ROI, engagement rates, and customer behavior in real-time to make informed decisions.",
    icon: <RiBarChartGroupedLine />,
    color: "purple",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "Monetize",
    desc: "Unlock new revenue streams with our monetization solutions. We help you identify opportunities and implement strategies that maximize the value of your digital assets.",
    icon: <RiMoneyDollarCircleLine />,
    color: "green",
    gradient: "from-green-500 to-emerald-500"
  }
];

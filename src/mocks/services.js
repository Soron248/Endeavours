import {
  H2_SERVICES_IMG01,
  H2_SERVICES_IMG02,
  H2_SERVICES_IMG03,
  H2_SERVICES_IMG04,
  H4_SERVICES_IMG01,
  H4_SERVICES_IMG02,
  H4_SERVICES_IMG03,
  H4_SERVICES_IMG04,
  SERVICES_IMG01,
  SERVICES_IMG02,
  SERVICES_IMG03,
  SERVICES_ITEM_SHAPE,
} from "../lib/assets";

import s1 from "../assets/images/s1.jpg"
import s2 from "../assets/images/s2.jpg"
import s3 from "../assets/images/s3.jpg"
import s4 from "../assets/images/s4.jpg"

import sb1 from "../assets/images/sb1.jpg"
import sb2 from "../assets/images/sb2.jpg"
import sb3 from "../assets/images/sb3.jpg"
import sb4 from "../assets/images/sb4.jpg"

export const SERVICES_TWO_LIST = [
  {
    id: 1,
    src: H2_SERVICES_IMG01,
    srcShape: SERVICES_ITEM_SHAPE,
    icon: "flaticon-piggy-bank",
    href: "/services-details",
    title: "Finance Planning",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
  {
    id: 2,
    src: H2_SERVICES_IMG02,
    srcShape: SERVICES_ITEM_SHAPE,
    icon: "flaticon-calculator",
    href: "/services-details",
    title: "Tax File Audit",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
  {
    id: 3,
    src: H2_SERVICES_IMG03,
    srcShape: SERVICES_ITEM_SHAPE,
    icon: "flaticon-money",
    href: "/services-details",
    title: "Investment Idea",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
  {
    id: 4,
    src: H2_SERVICES_IMG04,
    srcShape: SERVICES_ITEM_SHAPE,
    icon: "flaticon-layers",
    href: "/services-details",
    title: "Risk Management",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
];

export const SERVICES_THREE_LIST = [
  {
    id: 1,
    src: H4_SERVICES_IMG01,
    icon: "flaticon-healthcare",
    href: "/services-details",
    title: "Health Insurance",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
  {
    id: 2,
    src: H4_SERVICES_IMG02,
    icon: "flaticon-protection",
    href: "/services-details",
    title: "Vehicle Insurance",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
  {
    id: 3,
    src: H4_SERVICES_IMG03,
    icon: "flaticon-ship",
    href: "/services-details",
    title: "Cargo Insurance",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
  {
    id: 4,
    src: H4_SERVICES_IMG04,
    icon: "flaticon-house",
    href: "/services-details",
    title: "Fire Insurance",
    subtitle: "Morem ipsum dolor ametey consectre adipiscing.",
  },
];

export const SERVICES_FOUR_LIST = [
  {
    id: 1,
    icon: "flaticon-business-presentation",
    href: "/services-details",
    title: "Marketing Strategy",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
  },
  {
    id: 2,
    icon: "flaticon-rocket",
    href: "/services-details",
    title: "SEO Consultancy",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
  },
  {
    id: 3,
    icon: "flaticon-mission",
    href: "/services-details",
    title: "Target Audience",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
  },
];

export const SERVICES_ONE_LIST = [
  {
    id: 1,
    icon: "flaticon-briefcase",
    href: "/services-details",
    src: s1,
    title: "Digital Marketing",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
    point: ["Tailored Strategies","Expert Team","Data-Driven Results","Full-Service Solutions"]
  },
  {
    id: 2,
    icon: "flaticon-taxes",
    href: "/services-2",
    src: s2,
    title: "Web Development",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
      point: ["User-Centric Design","Innovative Technology","Comprehensive Services","Timely Delivery"]
  },
  {
    id: 3,
    icon: "flaticon-money",
    href: "/services-3",
    src: s4,
    title: "Business Consultancy",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
      point: ["Strategic Planning","Problem-Solving","Market and Competitive Analysis","Cost-Effective Solutions"]
  },
  {
    id: 4,
    icon: "flaticon-taxes",
    href: "/services-4",
    src: s3,
    title: "Import consultancy",
    subtitle:
      "When An Unknown Printer Took Gerty Galley Types Awecr Erambled Type Specimen Book.",
      point: ["Market Research and Analysis","Trade Finance and Payment Solutions","Regulatory Compliance","Logistics and Supply"]
  },
];

export const SERVICES_DETAILS_LIST =[
  {
    id:1,
    imgsrc: sb1,
    headingOne:"Unleash the Potential of Your Brand with Skilled Digital Marketing",
    subOne: "Our digital marketing solutions at Endeavours Corporation Ltd. are made to elevate your brand to new heights. We make use of multi-channel tactics, data-driven insights, and customized campaigns to make sure your message reaches the right people at the right time. ",
    subTwo: "With a complete approach that encompasses social media, email campaigns, SEO, and content marketing, we improve your online presence and produce quantifiable outcomes.",
    headingTwo: "Digital Marketing Strategy for your business",
    subThree: "Determine who your target market is and divide them into groups to develop customized marketing plans.Create and implement multi-channel campaigns that support your company's objectives.",
    point: ["Target Audience Analysis","Campaign Management","Performance Tracking","High quality leads"],
    subFour: "To assess the success of your campaigns and make data-driven decisions, use sophisticated analytics tools.",
    faqHead:"Digital Marketing Services benifit:",
    faqName:["Enhanced Visibility","Increased Engagement","Enhanced Visibility"],
    faqPoint:["Make strategic and focused marketing efforts to reach a larger audience and raise brand awareness.","Use audience-specific data-driven marketing to create meaningful interactions and strengthen relationships with your customers.","Monitor performance using in-depth data to enable ongoing optimization and increased return on investment."]
  },
  {
    id: 2,
    imgsrc: sb2,
    headingOne: "At Endeavours Corporation Ltd., our web development solutions are designed to bring your brand's digital vision to life.",
    subOne: "We combine cutting-edge technologies, user-centric design, and scalable architecture to produce websites that are not only visually appealing but also work flawlessly. From responsive design to robust functionality, we make sure your website is optimized for user experience and conversion.",
    subTwo: "We create high-performing websites that provide measurable outcomes for your organization by taking a holistic strategy that encompasses front-end development, back-end integration, and mobile optimization.",
    headingTwo: "Web Development Strategy for your business",
    subThree: "Identify the specific needs of your business and align them with the latest web technologies. Design and develop custom websites that reflect your brand and engage your audience.",
    point: ["Custom Web Development", "Testing & Optimization", "High quality UI/UX design", "Budget friendly website"],
    subFour: "Ensure seamless functionality and user experience through rigorous testing and optimization.",
    faqHead: "Web Design Services Benefits",
    faqName: ["Scalable Solutions", "User-Centric Design", "Seamless Integration"],
    faqPoint: [
    "Develop scalable and future-proof websites that grow alongside your business needs.",
    "Craft websites with user-friendly interfaces, ensuring optimal user experiences across all devices.",
    "Ensure seamless integration between front-end and back-end systems for smooth functionality and performance."
  ]
  },
  {
    id: 3,
    imgsrc: sb3,
    headingOne: "At Endeavours Corporation Ltd., Let Accelerate Your Business Growth with Strategic Development Services",
    subOne: "Our approach blends industry knowledge, data-driven analysis, and strategic planning to deliver solutions that improve your company's operations and foster long-term expansion. Our comprehensive market analysis and customized business strategies guarantee that your company is operating at peak efficiency and profitability.",
    subTwo: "Our all-encompassing strategy, which incorporates financial planning, market positioning, and operational improvement, yields quantifiable outcomes that support the growth of your company.",
    headingTwo: "Analyze your business model and identify opportunities for growth and improvement.",
    subThree: "Develop tailored strategies that align with your business goals and market conditions. Implement these strategies to streamline operations and boost profitability.",
    point: ["Business Model Analysis", "Tailored Strategy Development", "Implementation & Growth Optimization", "Happy customers"],
    subFour: "Accelerate your growth and optimize operations with our tailored business strategies. Enhance efficiency, make informed decisions, and achieve long-term success through data-driven insights and expert guidance.",
    faqHead: "Business Consultancy Services Benefits",
    faqName: ["Strategic Growth", "Improved Efficiency", "Data-Driven Decisions"],
    faqPoint: [
    "Develop tailored strategies that drive business expansion and help you achieve long-term success.",
    "Streamline your operations and implement best practices to enhance productivity and reduce costs.",
    "Utilize comprehensive business analytics to make informed decisions that lead to measurable improvements in performance and profitability."
  ]
  },
  {
    id: 4,
    imgsrc: sb4,
    headingOne: "At Endeavours Corporation Ltd., our import consultancy services are designed to streamline your global sourcing and supply chain processes.",
    subOne: "Our method combines market research, industry knowledge, and strategic planning to deliver solutions that optimize your import processes and promote long-term growth. We guarantee the smooth and economical operation of your supply chain with comprehensive market research and customized import strategies.",
    subTwo: "Our comprehensive strategy, which boosts your company's global reach and profitability and encompasses supplier sourcing, logistical optimization, and regulatory compliance, produces quantifiable results.",
    headingTwo: "Optimize your import process and uncover new opportunities for global growth.",
    subThree: "Assess your current import operations and identify areas for cost reduction and efficiency improvement. Develop customized import strategies that align with your business needs and international market trends. Implement these strategies to ensure smooth logistics, regulatory compliance, and increased profitability.",
    point: ["Import Process Analysis", "Customized Strategy Development", "Logistics Optimization & Compliance", "Satisfied Clients"],
    subFour: "Unlock new global markets and streamline your supply chain with our expert import strategies. Enhance efficiency, ensure compliance, and drive profitability through tailored solutions.",
    faqHead: "Import Consultancy Services Benefits:",
    faqName: ["Global Market Expansion", "Supply Chain Efficiency", "Compliance & Risk Management"],
    faqPoint: [
      "Develop tailored import strategies that open new international markets and drive long-term growth.",
      "Optimize your import operations and logistics to enhance efficiency and reduce overall costs.",
      "Utilize regulatory expertise and market insights to ensure compliance and mitigate risks in global trade, leading to smooth operations and improved profitability."
    ]
  }
]
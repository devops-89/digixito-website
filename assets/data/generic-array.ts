import { COLORS } from "@/utils/enum";
import {
  ARROW_CARD_PROPS,
  COUNT_UP_CARD_PROPS,
  FAQ_CARD_DATA,
  LINK_LIST,
  SECURE_CONNECTED_CARD,
  TESTIMONIAL_CARD_PROPS,
  VALUE_CARD_PROPS,
  VALUE_LIST_PROPS,
  WORK_AT_DIGIXITO_CARD_PROPS,
  WORK_CARD_PROPS,
} from "@/utils/types";
import work1 from "@/homepage/work/work-1.png";
import work2 from "@/homepage/work/work-2.png";
import work3 from "@/homepage/work/work-3.png";
import work4 from "@/homepage/work/work-4.png";
import lock from "@/icons/lock.svg";
import connect from "@/icons/seven-star.svg";
import secure_bg from "@/homepage/secure.png";
import connect_bg from "@/homepage/connect.png";
import globe from "@/banners/Globe.png";
import fish from "@/banners/fish.png";
export const SERVICES_TAB = [
  {
    label: "AI/ML Engineering",
  },
  {
    label: "Design & Development",
  },
  {
    label: "Performance Marketing",
  },
  {
    label: "Motion & Graphics",
  },
];

export const SERVCIES_ARROW_CARD_DATA: ARROW_CARD_PROPS[] = [
  {
    title: "Specialists who speak the same language: Success",
    backgroundColor: "#2B2B2B",
    textColor: "#ffffff",
    iconBgColor: "#333",
    iconColor: "#ffffff",
    secondTitle: "Meet our experts",
  },
  {
    title: "We build foundations that outlast economies.",
    backgroundColor: COLORS.PRIMARY,
    textColor: COLORS.BLACK,
    iconBgColor: "#ffffff",
    iconColor: "#333333",
    secondTitle: "See how we work",
  },
];

export const WORK_CARD_DATA: WORK_CARD_PROPS[] = [
  {
    img: work1.src,
    number: "01",
    title: "Market Intelligence",
    description:
      "We dissect markets like scientists and decode trends like prophets. Every strategy starts with research, user psychology, competitor blind spots, and algorithm patterns. We know your audience better than they know themselves.",
  },
  {
    img: work2.src,
    number: "02",
    title: "Dedicated Specialists",
    description:
      "No multitasking. No divided attention. Your brand gets brand strategists. Your growth gets growth engineers. Each expert owns their domain completely. Specialized teams working in perfect sync",
  },
  {
    img: work3.src,
    number: "03",
    title: "Zero to hero Brands",
    description:
      "We architect brands with deep roots, strong enough to weather recessions, agile enough to capture booms. While others chase quick wins, we engineer sustainable growth DNA into every brand element",
  },
  {
    img: work4.src,
    number: "04",
    title: "A decade of powers",
    description:
      "Ten years. Hundreds of brands. Thousands of pivots. We've survived algorithm apocalypses, platform deaths, through recessions and revolutions. We've solved problems without playbooks.",
  },
];

export const TESTIMONIAL_CARD_DATA: TESTIMONIAL_CARD_PROPS[] = [
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
  {
    name: "Alan Baker",
    designation: "CEO of Redbird Company",
    description:
      "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
  },
];

export const FAQ_DATA: FAQ_CARD_DATA[] = [
  {
    question: "What's your minimum project budget?",
    answer:
      "We work from ₹50,000 monthly retainers for startups to multi-crore enterprise contracts. Every budget gets equal commitment.",
  },
  {
    question: "What's your minimum project budget?",
    answer:
      "We work from ₹50,000 monthly retainers for startups to multi-crore enterprise contracts. Every budget gets equal commitment.",
  },
  {
    question: "What's your minimum project budget?",
    answer:
      "We work from ₹50,000 monthly retainers for startups to multi-crore enterprise contracts. Every budget gets equal commitment.",
  },
  {
    question: "What's your minimum project budget?",
    answer:
      "We work from ₹50,000 monthly retainers for startups to multi-crore enterprise contracts. Every budget gets equal commitment.",
  },
];

export const SECURE_CARD_DATA: SECURE_CONNECTED_CARD[] = [
  {
    img: lock,
    backgroundImage: secure_bg.src,
    heading: "Always Secure and private",
    description:
      "Thenty is designed with security in mind. Have confidence that your members data is protected. ",
    isButton: true,
  },
  {
    img: connect,
    backgroundImage: connect_bg.src,
    heading: "Connect Thenty to other tools",
    description:
      "Our zapier intergration makes it easy to connect thenty with your other tools. ",
    isButton: false,
  },
];

export const TERMS_PAGE_LINKS = [
  {
    label: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    label: "Terms",
    url: "/terms",
  },
  {
    label: "Cookies",
    url: "/cookies",
  },
  {
    label: "Sitemap",
    url: "/sitemap",
  },
  {
    label: "Brand kit",
    url: "/brand-kit",
  },
];

export const LINK_LIST_DATA: LINK_LIST[] = [
  {
    heading: "Product",
    data: [
      {
        label: "Overview",
      },
      {
        label: "Essential features",
      },
      {
        label: "Security",
      },
      {
        label: "Trading",
      },
      {
        label: "Staking",
      },
    ],
  },
  {
    heading: "Education",
    data: [
      {
        label: "Resources",
      },
      {
        label: "Explore",
      },
    ],
  },
  {
    heading: "Company",
    data: [
      {
        label: "About",
        url: "/about-us",
      },
      {
        label: "Careers",
      },
      {
        label: "Contact",
        url: "/contact-us",
      },
      {
        label: "Newsletter",
      },
    ],
  },
];

export const VALUE_CARD_DATA: VALUE_CARD_PROPS[] = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We don't follow trends, we create them. Every solution pushes boundaries, challenges conventions, and redefines what's possible.",
  },
  {
    title: "Passion",
    description:
      "This isn't just work, it's craft. We obsess over pixels, perfect code, and celebrate breakthroughs.",
    number: "02",
  },
  {
    title: "Ownership",
    description:
      "Your project becomes our mission. We take responsibility for outcomes, not just outputs. Success or learnings, we own it.",
    number: "03",
  },
  {
    title: "Growth",
    description:
      "Stagnation is death. We evolve daily, new skills, new tech, new perspectives. Your growth fuels our growth ",
    number: "04",
  },
  {
    number: "01",
    title: "Innovation",
    description:
      "We don't follow trends, we create them. Every solution pushes boundaries, challenges conventions, and redefines what's possible.",
  },
  {
    title: "Passion",
    description:
      "This isn't just work, it's craft. We obsess over pixels, perfect code, and celebrate breakthroughs.",
    number: "02",
  },
  {
    title: "Ownership",
    description:
      "Your project becomes our mission. We take responsibility for outcomes, not just outputs. Success or learnings, we own it.",
    number: "03",
  },
  {
    title: "Growth",
    description:
      "Stagnation is death. We evolve daily, new skills, new tech, new perspectives. Your growth fuels our growth ",
    number: "04",
  },
];

export const COUNTER_CARD_DATA: COUNT_UP_CARD_PROPS[] = [
  {
    number: 99,
    suffix: "%",
    title: "Customer Satisfaction",
  },
  {
    number: 32,
    suffix: "+",
    title: "Active Clients",
  },
  {
    number: 125,
    suffix: "+",
    title: "Team Members",
  },
  {
    number: 240,
    suffix: "%",
    title: "Company Growth",
  },
];

export const WHAT_WE_VALUE_CARD_PROPS: VALUE_LIST_PROPS[] = [
  {
    img: globe,
    data: [
      {
        serial_number: "01",
        heading: "Act for the Greater Good",
        description:
          "We build technology that benefits businesses and communities alike. Every decision we make  from code to customer delivery  reflects our belief that innovation should improve lives and empower progress.",
      },
      {
        serial_number: "02",
        heading: "Balance Vision and Reality",
        description:
          "We acknowledge both the challenges and the potential of the digital era. By staying grounded in data and empathy, we design solutions that are bold yet practical  balancing creativity with technical precision.",
      },
      {
        serial_number: "03",
        heading: "Be Human-Centric",
        description:
          "Whether we’re designing user interfaces or optimizing machine learning models, we start with people. Our goal is to craft experiences that are intuitive, inclusive, and truly impactful.",
      },
    ],
  },
  {
    img: fish,
    data: [
      {
        serial_number: "04",
        heading: "Build Responsibly with AI",
        description:
          "We champion an ethical approach to AI/ML  prioritizing transparency, security, and fairness. At Digixito, innovation isn’t a race to the fastest product, but to the most responsible one.",
      },
      {
        serial_number: "05",
        heading: "Keep It Simple",
        description:
          "Complex systems deserve simple solutions. We believe clarity is strength — in our design, our communication, and our code. The simplest path that works well is the one we take.",
      },
      {
        serial_number: "06",
        heading: "Be Honest, Be Kind",
        description:
          "We work in a culture of trust, humility, and openness. Every idea is valued, and feedback is shared with empathy. We learn fast, stay grounded, and always uplift each other.",
      },
    ],
    isReverse: true,
  },
];

export const WORK_AT_DIGIXITO_CARD_DATA: WORK_AT_DIGIXITO_CARD_PROPS[] = [
  {
    serial_number: "01",
    heading: "Create with purpose.",
    description:
      "Every line of code and every pixel we design must create impact. We don’t just build for clients  we build for real problems that matter. Our focus is on outcomes that drive progress, improve experiences, and make technology genuinely useful.",
  },
  {
    serial_number: "02",
    heading: "Embrace curiosity and learning.",
    description:
      "We believe innovation thrives where curiosity lives. From exploring the latest in AI/ML to experimenting with new design tools, we constantly learn, adapt, and evolve. Every project is a classroom, and every challenge is an opportunity to grow.",
  },
  {
    serial_number: "03",
    heading: "Design for humans.",
    description:
      "At Digixito, user experience isn’t an afterthought it’s the foundation. We design interfaces and systems that are intuitive, inclusive, and deeply human. Technology should feel effortless, not complex, and we take pride in making that happen.",
  },
  {
    serial_number: "04",
    heading: "Collaborate without boundaries.",
    description:
      "We work as one team  across disciplines, ideas, and time zones. Engineers think like designers. Designers talk like strategists. Strategists build like makers. Collaboration isn’t a process here; it’s our superpower.",
  },
];

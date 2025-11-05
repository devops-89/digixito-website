import { COLORS } from "@/utils/enum";
import {
  ARROW_CARD_PROPS,
  FAQ_CARD_DATA,
  LINK_LIST,
  SECURE_CONNECTED_CARD,
  TESTIMONIAL_CARD_PROPS,
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
      },
      {
        label: "Careers",
      },
      {
        label: "Contact",
      },
      {
        label: "Newsletter",
      },
    ],
  },
];

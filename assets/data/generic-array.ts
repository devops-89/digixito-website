import { COLORS } from "@/utils/enum";
import {
  ARROW_CARD_PROPS,
  CONTACT_CARD_PROPS,
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
import location from "@/contact-us/carbon_location.svg";
import phone from "@/contact-us/sharp-phone.svg";
import email from "@/contact-us/email.svg";
import machineLearning from "@/icons/Ai-transformation/machine-learning.png";
import generativeAi from "@/icons/Ai-transformation/creative.png";
import computerVision from "@/icons/Ai-transformation/computer-vision.png";
import dataEngineering from "@/icons/Ai-transformation/data-science.png";
import creativeTransformation from "@/icons/Business-Transformation/Creative-Transformation.png";
import brandStrategy from "@/icons/Business-Transformation/brand-strategy.png";
import creativeCampaign from "@/icons/Business-Transformation/creative.png";
import press from "@/icons/Business-Transformation/Press-ads.png";
import digitalTransformation from "@/icons/Business-Transformation/digital-transformation.png";
import paidSearch from "@/icons/Business-Transformation/Paid-Search.png";
import naturalSearch from "@/icons/Business-Transformation/Natural-Search.png";
import performanceDisplay from "@/icons/Business-Transformation/Performance-Display.png";
import socialMedia from "@/icons/Business-Transformation/Social-Media-Marketing.png";
import marketplaceManagement from "@/icons/Business-Transformation/Marketplace-Management.png";
import catalogManagement from "@/icons/Business-Transformation/Catalog-Management.png";
import partnervalued from "@/icons/Business-Transformation/Partner-Value.png";
import salesBoost from "@/icons/Business-Transformation/sales-boost.png";
import inventorymanagement from "@/icons/Business-Transformation/Inventory-Management.png";
import applicationDevelopment from "@/icons/product-engineering/application_sass.png";
import webApplicationDevelopment from "@/icons/product-engineering/web_app.png";
import systemIntegration from "@/icons/product-engineering/integration.png";
import cloudInfrastructure from "@/icons/product-engineering/cloud-computing.png";
import aiDriven from "@/icons/ai-marketing-growth/ai-driven-digital-marketing.png";
import marketPlace from "@/icons/ai-marketing-growth/marketplace-management.png";
import brandStrategyPositioning from "@/icons/ai-marketing-growth/brand-strategy-positioning.png";
import performanceMarketing from "@/icons/ai-marketing-growth/performance-market.png";
import socialSearchIntelligence from "@/icons/ai-marketing-growth/social-media.png";
import aiPoweredUiUx from "@/icons/design-intelligence/ai-powered-ui-ux.png";
import conversationalAI from "@/icons/design-intelligence/conversational-interface-design.png";
import prototyping from "@/icons/design-intelligence/prototyping-user-research.png";
import experienceOptimization from "@/icons/design-intelligence/experience-optimization.png";
export const SERVICES_TAB = [
  {
    label: "AI Transformation",
  },
  {
    label: "Business Transformation",
  },
  {
    label: "Product Engineering",
  },
  {
    label: "Design Intelligence",
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
      "No distractions. No half measures. Brand strategists focus only on your brand. Growth engineers focus only on results.Clear ownership. Total accountability. Experts aligned. Outcomes accelerated.",
  },
  {
    img: work3.src,
    number: "03",
    title: "Zero to hero Brands",
    description:
      "We don’t build brands for trends. We architect them for cycles. Deep-rooted enough to endure downturns, agile enough to scale in booms. While others chase short-term wins, we embed sustainable growth DNA into every brand decision",
  },
  {
    img: work4.src,
    number: "04",
    title: "A decade of powers",
    description:
      "Ten years. Hundreds of brands. Thousands of pivots. We’ve survived algorithm apocalypses, platform deaths, recessions, and revolutions. We’ve solved problems without playbooks—and built playbooks others now follow.",
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
    question: "What makes Digixito different from other agencies?",
    answer:
      "We’re not just a digital agency — we’re a digital ecosystem. Our multidisciplinary team of strategists, designers, developers, and AI engineers work together to deliver end-to-end solutions that drive measurable growth and long-term impact.",
  },
  {
    question: "Does Digixito work with startups or only established companies?",
    answer:
      "We work with both! Whether you’re a startup building your first online presence or an enterprise optimizing digital performance, we customize our approach to match your stage, industry, and goals.",
  },
  {
    question: "Can Digixito handle complete 360° brand solutions?",
    answer:
      "Yes — from naming and identity design to digital marketing, software development, and AI integration — we deliver holistic brand transformation under one roof.",
  },
  {
    question: "How can I get started with Digixito?",
    answer:
      "Simply reach out through our Contact page or email us with your project details. Our team will schedule a free consultation to discuss your goals, understand your needs, and create a customized action plan.",
  },
];

export const SECURE_CARD_DATA: SECURE_CONNECTED_CARD[] = [
  {
    img: lock,
    backgroundImage: secure_bg.src,
    heading: "Secure. Smart. Scalable.",
    description:
      "Built to protect your data as it scales your vision. Security isn’t an add-on—it’s the foundation everything else stands on.",
    isButton: true,
    button: "Learn About Compliance",
  },
  {
    img: connect,
    backgroundImage: connect_bg.src,
    heading: "Connected by Intelligence",
    description:
      "We unify your marketing stack and AI workflows into a single, powerful growth engine. One platform. Endless possibilities.",
    isButton: false,
    button: "Discover Integrations",
    // isBut÷
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
  // {
  //   label: "Cookies",
  //   url: "/cookies",
  // },
  // {
  //   label: "Sitemap",
  //   url: "/sitemap",
  // },
  // {
  //   label: "Brand kit",
  //   url: "/brand-kit",
  // },
];

export const LINK_LIST_DATA: LINK_LIST[] = [
  {
    heading: "What we offer",
    data: [
      {
        label: "AI Transformation",
        url: "/ai-transformation",
      },
      {
        label: "Business Transformation",
        url: "/business-transformation",
      },
      {
        label: "Product Engineering",
        url: "/product-engineering",
      },
      {
        label: "AI in Marketing & Growth",
        url: "/ai-marketing-growth",
      },
      {
        label: "Design Intelligence",
        url: "/design-intelligence",
      },
    ],
  },
  {
    heading: "What we are",
    data: [
      {
        label: "About Us",
        url: "/about-us",
      },
      {
        label: "Case Studies",
        url: "/case-studies",
      },
      {
        label: "Blogs",
        url: "/blogs",
      },
    ],
  },
  {
    heading: "Career",
    data: [
      {
        label: "Life At Digixito",
        url: "/careers/life-at-digixito",
      },
      {
        label: "Contact Us",
        url: "/contact-us",
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
    number: 98,
    suffix: "%",
    title: "Customer Satisfaction",
  },
  {
    number: 100,
    suffix: "+",
    title: "Clients",
  },
  {
    number: 120,
    suffix: "+",
    title: "Team Members",
  },
  {
    number: 50,
    suffix: "%",
    title: "Company Growth",
  },
];

export const WHAT_WE_VALUE_CARD_PROPS: VALUE_LIST_PROPS[] = [
  {
    img: globe,
    objPath: "/images/career/network_globe_clean.obj",
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
    objPath: "/images/career/dolphin_network.obj",
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

export const CONTACT_CARD_DATA: CONTACT_CARD_PROPS[] = [
  {
    img: location,
    heading: "Address",
    description: "2nd Floor, D-320, Sector 63 Rd, Noida, Uttar Pradesh, India",
  },
  {
    img: phone,
    heading: "Phone Number",
    description: "+91 8800291352",
  },
  {
    img: email,
    heading: "E - mail",
    description: "Info@digixito.com",
  },
];

export const SERVICES_TAB_DATA = {
  AI_TRANSFORMATION: [
    {
      starCardData: {
        normalHeading: "We study the game before we rewrite",
        boldHeading: "the rules",
      },

      data: [
        {
          heading: "Specialists who speak the language of successful results",
          bottomTitle: "Meet our experts",
          backgroundColor: "#2B2B2B",
          textColor: "#ffffff",
          iconBgColor: "#333",
          iconColor: "#ffffff",
        },
        {
          heading: "We build foundations that outlast economies.",
          bottomTitle: "See how we work",
          backgroundColor: COLORS.PRIMARY,
          textColor: COLORS.BLACK,
          iconBgColor: "#ffffff",
          iconColor: "#333333",
        },
      ],
    },
  ],
  BUSINESS_TRANSFORMATION: [
    {
      starCardData: {
        normalHeading: "We redesign what your business can become not just",
        boldHeading: "what it is.",
      },
      data: [
        {
          heading: "Strategists who convert complexity into clarity.",
          bottomTitle: "Meet our experts",
          backgroundColor: "#2B2B2B",
          textColor: "#ffffff",
          iconBgColor: "#333",
          iconColor: "#ffffff",
        },

        {
          heading: "We build business foundations that thrive in any market.",
          bottomTitle: "See how we work",
          backgroundColor: COLORS.PRIMARY,
          textColor: COLORS.BLACK,
          iconBgColor: "#ffffff",
          iconColor: "#333333",
        },
      ],
    },
  ],
  Product_Engineering: [
    {
      starCardData: {
        normalHeading: "We build products that perform today and evolve for",
        boldHeading: "tomorrow",
      },
      data: [
        {
          heading: "Engineers who turn bold ideas into reliable systems.",
          bottomTitle: "Meet our experts",
          backgroundColor: "#2B2B2B",
          textColor: "#ffffff",
          iconBgColor: "#333",
          iconColor: "#ffffff",
        },
        {
          heading: "We build scalable architectures that grow with you.",
          bottomTitle: "See how we work",
          backgroundColor: COLORS.PRIMARY,
          textColor: COLORS.BLACK,
          iconBgColor: "#ffffff",
          iconColor: "#333333",
        },
      ],
    },
  ],
  Design_intelligence: [
    {
      starCardData: {
        normalHeading: "We design experiences that think, adapt, and",
        boldHeading: "convert",
      },
      data: [
        {
          heading: "Designers who blend creativity with behavioral science.",
          bottomTitle: "Meet our experts",
          backgroundColor: "#2B2B2B",
          textColor: "#ffffff",
          iconBgColor: "#333",
          iconColor: "#ffffff",
        },
        {
          heading: "We create design systems that stay timeless, not trendy.",
          bottomTitle: "See how we work",
          backgroundColor: COLORS.PRIMARY,
          textColor: COLORS.BLACK,
          iconBgColor: "#ffffff",
          iconColor: "#333333",
        },
      ],
    },
  ],
};

export const AI_TRANSFORMATION_DATA = [
  {
    img: machineLearning,
    title: "Machine Learning & Predictive Models",
    description: `At Digixito, we combine the power of machine learning with predictive analytics to build solutions that scale.
From real-time insights to intelligent automation, our models learn from your data to uncover patterns, forecast outcomes, and enhance performance across your operations.
We help businesses use AI responsibly — transforming complex datasets into actionable intelligence that drives measurable results.`,
    url: "/ai-transformation/machine-learning-and-predictive-models",
  },
  {
    img: generativeAi,
    title: "Generative AI",
    description: `At Digixito, we harness the potential of Generative AI to bring automation, personalization, and creativity together.
Our solutions use advanced LLMs and transformer-based architectures to deliver natural conversations, intelligent workflows, and human-like content generation — all tailored to your brand voice.
From customer engagement to document processing, we design AI systems that not only respond but also learn, adapt, and evolve with your users.`,
    url: "/ai-transformation/generative-ai",
  },
  {
    img: computerVision,
    title: "Computer Vision & OCR Systems",
    description: `At Digixito, we help businesses unlock the power of computer vision and document intelligence to transform how they process visuals and data.
From object detection and face recognition to real-time image classification and automated document extraction, our solutions combine AI precision with operational speed.
Our vision models bring structure to unstructured data — reading, identifying, and interpreting the world the way humans do, but at machine scale.`,
    url: "/ai-transformation/computer-vision-and-ocr-systems",
  },
  {
    img: dataEngineering,
    title: "Data Engineering & MLOps",
    description: `At Digixito, we empower organizations to manage data as a strategic asset.
Our Data Engineering and MLOps solutions help teams unify data sources, ensure quality, and automate model operations at scale.
We focus on building the foundation for AI success — enabling faster experimentation, cleaner data, and seamless deployment of production-ready ML models across any infrastructure.`,
    url: "/ai-transformation/data-engineering-mlops",
  },
];

export const BUSINESS_TRANSFORMATION_DATA = [
  {
    title: "Creative Transformation",
    description: `Creativity today is not just about visuals — it’s about vision.
In a world driven by digital-first interactions, brands need more than design; they need stories, systems, and experiences that make them unforgettable.
At Digixito, we help companies discover their creative identity and align it with a clear digital strategy.
Our multidisciplinary approach unites design thinking, marketing psychology, and emerging technology to deliver consistent, meaningful, and high-performing creative ecosystems`,
    url: "/business-transformation/creative-transformation",
    img: creativeTransformation,
  },
  {
    title: "Brand Strategy",
    description: `In today’s fast-evolving digital landscape, brands don’t just compete on products — they compete on meaning.
Your audience connects with purpose, values, and authenticity. That’s why our Brand Strategy services focus on building the emotional and strategic foundation that drives every visual, message, and experience.
At Digixito, we partner with you to define what your brand stands for — then translate that vision into an actionable strategy that influences design, marketing, and customer relationships.
We blend data, creativity, and psychology to ensure your brand not only looks right but feels right to the people who matter most.`,
    url: "/business-transformation/brand-strategy",
    img: brandStrategy,
  },
  {
    title: "360° Creative Campaigns",
    description: `In today’s hyperconnected world, creativity thrives on connection.
A brand’s message must move seamlessly across every channel — online and offline — while staying true to its essence.
Our 360° Creative Campaigns service unifies strategy, storytelling, and design to deliver cohesive, impactful campaigns that resonate across mediums.
We help brands speak in one powerful voice — whether it’s a digital launch, a social movement, or a product rollout.
At Digixito, we believe campaigns shouldn’t just be creative — they should be experiential, data-driven, and emotionally intelligent.`,
    url: "/business-transformation/360-creative-campaigns",
    img: creativeCampaign,
  },
  {
    title: "Press Ads & TV Commercials",
    description: `In an era of endless scrolling, timeless storytelling still wins attention.
Press ads and television commercials remain two of the most influential ways to create emotional connections and build trust — when done with purpose and creativity.
At Digixito, we blend the art of storytelling with the science of audience psychology to produce campaigns that strike the perfect balance between brand message and emotional pull.
Whether it’s a print ad that captures a thought in one frame or a TVC that moves millions in 30 seconds, we ensure every frame, word, and sound works together to make your brand unforgettable.
Our creative team crafts campaigns that don’t just sell — they shape perception, build credibility, and drive cultural relevance.`,
    url: "/business-transformation/press-ads-and-tv-commercials",
    img: press,
  },
  {
    title: "Digital Transformation",
    description: `The future belongs to brands that adapt.
  In a world where customer expectations evolve faster than ever, digital transformation is no longer optional — it’s essential.
  At Digixito, we help businesses evolve from traditional operations into data-driven, technology-powered ecosystems.
  From AI-driven automation to cloud adoption, we design systems that improve efficiency, scale faster, and enhance customer experience at every touchpoint.
  Our goal is to build future-ready organizations — where technology empowers people, decisions are data-informed, and innovation becomes part of your company’s DNA.
  We don’t just implement tools — we transform the way you think, build, and deliver.`,
    url: "/business-transformation/digital-transformation",
    img: digitalTransformation,
  },
  {
    title: "Paid Search",
    description: `Your audience is searching for solutions — every second, every day.With the right strategy, your brand can be the answer they find first.
At Digixito, our Paid Search solutions help brands dominate search results through data-backed precision and creative storytelling. We don’t just drive traffic — we attract intent-driven users who are ready to act.
Our team leverages years of PPC expertise, advanced keyword intelligence, and conversion-focused landing page design to deliver results that scale revenue, not just clicks. Whether it’s Google Ads, Bing, or YouTube, we optimize every campaign for performance, efficiency, and measurable ROI — ensuring your business is seen, remembered, and chosen.`,
    url: "/business-transformation/paid-search",
    img: paidSearch,
  },
  {
    title: "Natural Search",
    description: `Search isn’t just about algorithms — it’s about understanding people.Today’s digital world demands more than quick fixes or paid visibility. It requires long-term search strategies that build authority, trust, and brand value.
At Digixito, we specialize in Organic Search Optimization (SEO) that aligns with how your audience searches, interacts, and buys.
We combine deep keyword research, content optimization, technical SEO, and backlink strategies to ensure your website not only ranks higher but also stays relevant in every search journey.
Our approach goes beyond traffic — we build digital ecosystems that grow naturally, sustain momentum, and convert audience intent into measurable success.`,
    url: "/business-transformation/natural-search",
    img: naturalSearch,
  },
  {
    title: "Performance Display",
    description: `In a world overflowing with visuals, standing out requires more than just creative design — it demands strategy.
  That’s where Performance Display Advertising bridges the gap between art and analytics.
  At Digixito, we design, deploy, and optimize display campaigns that deliver beyond impressions.
  From banner ads to video display, our approach focuses on precision audience targeting, real-time performance analysis, and creative excellence that speaks directly to intent-driven users.
  Our team blends the science of data with the craft of storytelling — ensuring every ad not only looks good but also performs brilliantly.
  We turn visibility into engagement, engagement into action, and action into lasting brand growth.`,
    url: "/business-transformation/performance-display",
    img: performanceDisplay,
  },
  {
    title: "Social Media Marketing",
    description: `Social media isn’t just a platform — it’s your brand’s voice in motion.
  From storytelling to sales, every post, story, and campaign shapes how people perceive your business.
  At Digixito, we help brands make that voice powerful, consistent, and strategic.
  Our Social Media Marketing service blends creative content, paid strategy, and real-time analytics to create meaningful digital conversations that convert into business results.
  We focus on connection over clutter — building brands that don’t just appear on feeds but leave a lasting impression.
  Whether it’s launching a product, scaling brand presence, or creating viral moments, we make sure every pixel and caption has a purpose.`,
    url: "/business-transformation/social-media-marketing",
    img: socialMedia,
  },
  {
    title: "Marketplace Management",
    description: `Marketplaces are where discovery meets decision.
  From Amazon and Flipkart to Meesho and Nykaa, these platforms define how customers explore, evaluate, and buy — making them critical growth engines for every modern business.
  At Digixito, we help brands establish, manage, and scale their presence across multiple online marketplaces with end-to-end management solutions.
  Our approach blends platform expertise, content optimization, performance ads, and operational efficiency to increase visibility and boost conversions.
  We turn complex marketplace ecosystems into streamlined, scalable, and sales-ready operations that grow your brand’s reach and revenue consistently.`,
    url: "/business-transformation/marketplace-management",
    img: marketplaceManagement,
  },
  {
    title: "Catalog Management",
    description: `Your product catalog is more than a list — it’s your brand’s digital storefront.
  An inconsistent or poorly structured catalog can lead to missed sales opportunities, low visibility, and reduced customer trust.
  At Digixito, we help brands create and maintain high-performing, optimized catalogs that convert browsers into buyers.
  Our process ensures every product — across every platform — is properly categorized, described, and visually represented for maximum impact.
  From SKUs and attributes to imagery and SEO tagging, we bring clarity, precision, and consistency to your catalog — empowering you to sell effortlessly across e-commerce platforms and marketplaces.
  We make your digital catalog a growth engine, not a data headache.`,
    url: "/business-transformation/catalog-management",
    img: catalogManagement,
  },
  {
    title: "Inventory Management",
    description: `In today’s fast-paced e-commerce ecosystem, inventory is the backbone of every successful business.
  Poor visibility, manual tracking, and delayed updates can lead to overstocking, lost sales, and frustrated customers.
  At Digixito, we simplify the chaos.
  Our Inventory Management systems are designed to give you full control and visibility — from warehouse to checkout. We unify multi-platform operations, synchronize data across marketplaces, and automate replenishment to ensure your products are always available when customers need them.
  Whether you manage hundreds or thousands of SKUs, we make sure your inventory runs lean, accurate, and aligned with your growth goals.
  We help brands move from manual management to intelligent automation — unlocking operational excellence and higher profitability.`,
    url: "/business-transformation/inventory-management",
    img: inventorymanagement,
  },
  {
    title: "Partner Value Added Services",
    description: `In today’s connected business world, success isn’t built alone — it’s built together.
  Partnerships thrive when each side brings innovation, trust, and shared value to the table.
  At Digixito, we collaborate with technology providers, marketing agencies, and enterprise platforms to deliver end-to-end value-added services that elevate customer experience, accelerate digital transformation, and unlock new growth opportunities.
  We bridge gaps between systems, services, and solutions — ensuring our partners gain access to extended capabilities, expertise, and new revenue streams.
  Our mission is simple: to co-create smarter solutions that deliver greater value, together.`,
    url: "/business-transformation/partner-value-added-services",
    img: partnervalued,
  },
  {
    title: "Sales Boost Program",
    description: `At Digixito, we help brands unlock their highest revenue potential through intelligent marketing systems, optimized funnels, and automation-driven strategies.
Our Sales Boost Program merges analytics, creativity, and technology to create powerful growth engines that deliver consistent, measurable results.
Because growth isn’t about luck — it’s about building a system that sells.`,
    url: "/business-transformation/sales-boost-program",
    img: salesBoost,
  },
];

export const PRODUCT_ENGINEERING = [
  {
    title: "Application & SaaS Development",
    description: `At Digixito, we design and develop custom web applications and SaaS platforms that blend powerful technology with exceptional user experience.
Our solutions are built to scale, adapt, and perform — enabling startups and enterprises to innovate faster and operate smarter.
Because great software doesn’t just work — it evolves with your business.`,
    url: "/product-engineering/application-and-saas-development",
    img: applicationDevelopment,
  },
  {
    title: "Web and Mobile Platforms",
    description: `At Digixito, we craft powerful, high-performing web and mobile platforms designed to connect brands with users through meaningful, intuitive, and scalable experiences.
Whether you’re building a responsive website, enterprise web portal, or next-gen mobile app — we ensure design, technology, and performance come together perfectly.
Because in today’s world, your platform is your brand.`,
    url: "/product-engineering/web-and-mobile-platforms",
    img: webApplicationDevelopment,
  },
  {
    title: "System Integration & API Development",
    description: `At Digixito, we build powerful APIs and seamless system integrations that unify your technology ecosystem — ensuring your platforms, products, and processes work as one.
Our integration-first approach eliminates silos, improves data flow, and enhances business agility across every layer of your digital infrastructure.
Because when your systems talk to each other — your business moves faster.`,
    url: "/product-engineering/system-integration-and-api-development",
    img: systemIntegration,
  },
  {
    title: "Cloud Infrastructure",
    description: `At Digixito, we architect, deploy, and manage scalable cloud infrastructure that helps businesses accelerate performance, improve reliability, and reduce operational costs.
Our cloud solutions are built for agility — ensuring your digital ecosystem runs efficiently, securely, and seamlessly across AWS, Azure, and Google Cloud.
Because in the digital era, the cloud isn’t just infrastructure — it’s the foundation of innovation.`,
    url: "/product-engineering/cloud-infrastructure",
    img: cloudInfrastructure,
  },
];

export const AI_MARKETING_GROWTH = [
  {
    title: "AI-Driven Digital Marketing",
    description: `Marketing has evolved beyond guesswork.
Modern brands need precision — strategies that learn from data, adapt to behavior, and evolve in real time.
At Digixito, we blend data science with storytelling to create AI-powered marketing ecosystems that identify trends before they happen and connect with customers before competitors do.
From automated ad bidding to AI-personalized content, we help you build marketing systems that continuously analyze, optimize, and perform — so every click, conversion, and impression contributes to measurable business growth.
Our philosophy is simple: let intelligence lead creativity — and creativity humanize data.`,
    url: "/ai-marketing-growth/ai-driven-digital-marketing",
    img: aiDriven,
  },
  {
    title: "Marketplace Management & Sales Boost",
    description: `Online marketplaces have become the new battleground for brands — fast, competitive, and opportunity-rich.
But managing multiple platforms, optimizing catalogs, handling inventory, and scaling sales simultaneously can be overwhelming.
That’s where Digixito steps in.
We simplify your marketplace journey through data-led management, automation, and strategic sales acceleration — ensuring your products stay visible, competitive, and profitable.
Our experts handle everything — from onboarding and catalog optimization to performance ads, pricing strategies, and logistics alignment — turning your marketplace operations into a sustainable sales engine.
We don’t just list your products; we elevate your brand to outperform in every marketplace.`,
    url: "/ai-marketing-growth/market-management-and-sales-boost",
    img: marketPlace,
  },
  {
    title: "Brand Strategy & Positioning",
    description: `In a world overflowing with products and messages, your brand isn’t just what you sell — it’s what people remember, believe, and trust.
That’s why brand strategy lies at the heart of every successful business transformation.
At Digixito, we help brands discover their purpose, define their positioning, and express it across every touchpoint.
Through in-depth market analysis, audience segmentation, and value proposition mapping, we craft brand strategies that make your business stand out, stay relevant, and scale globally.
We go beyond logos and taglines — creating meaningful brand identities that build relationships and inspire loyalty.`,
    url: "/ai-marketing-growth/brand-strategy-and-positioning",
    img: brandStrategyPositioning,
  },
  {
    title: "Performance Marketing & Conversion Optimization",
    description: `Marketing today isn’t about spending more — it’s about spending smarter.
Every rupee should bring you closer to your audience and further from your competitors.
At Digixito, we design performance-first marketing ecosystems that balance creativity with analytics.
From paid campaigns and retargeting to landing page optimization and funnel automation, we focus on building high-performing journeys that attract, engage, and convert.
Our conversion optimization process goes beyond surface-level metrics.
We analyze data patterns, user behavior, and interaction touchpoints to understand why users act — and how to make them act faster.
We don’t just run ads — we engineer performance that grows with precision.`,
    url: "/ai-marketing-growth/performance-marketing-and-conversion-optimization",
    img: performanceMarketing,
  },

  {
    title: "Social & Search Intelligence (AI-Enhanced SEO/SEM)",
    description: `Visibility drives opportunity — but in a world of constant algorithm updates, guesswork doesn’t work.
That’s why we built Social & Search Intelligence — a smart, AI-powered system that turns raw data into optimized strategies for higher rankings, better engagement, and more qualified leads.
At Digixito, we go beyond traditional SEO and SEM by integrating machine learning, predictive analysis, and automation into your digital marketing mix.
We don’t just help you appear in search results — we help you dominate them through adaptive strategies that evolve with your audience and Google’s algorithms.
Our goal is simple: make your brand visible everywhere your audience searches, scrolls, or speaks.`,
    url: "/ai-marketing-growth/social-and-search-intelligence",
    img: socialSearchIntelligence,
  },
];

export const DESIGN_INTELLIGENCE_DATA = [
  {
    title: "AI-Powered UI/UX Design",
    description: `User experience has evolved — from static interfaces to intelligent ecosystems.
  In this new era, great design is not just about how something looks, but how it learns, adapts, and responds to user behavior.
  At Digixito, we leverage AI and machine learning to design interfaces that are dynamic, data-informed, and delightfully human.
  We use predictive analytics, personalization algorithms, and user journey mapping to understand what users need before they even ask for it.
  Our design philosophy fuses creativity with cognitive intelligence — ensuring your product delivers emotion, efficiency, and engagement in every interaction.
  We don’t just create experiences; we engineer intuitive ecosystems that evolve with your users.`,
    url: "/design-intelligence/ai-powered-ui-ux-design",
    img: aiPoweredUiUx,
  },

  {
    title: "Conversational Interface Design",
    description: `The way users interact with technology has changed — it’s no longer about clicks, it’s about conversations.
  Whether it’s through chat, voice, or text, modern users expect context-aware, intelligent experiences that understand their intent and respond naturally.
  At Digixito, we specialize in Conversational Interface Design that combines empathy, design strategy, and AI intelligence.
  We design systems that don’t just answer questions — they guide, assist, and build trust through seamless, natural dialogue.
  Our goal is to humanize technology — crafting interactions that feel less mechanical and more meaningful.
  From customer support bots to in-app assistants, every conversation we design enhances usability, accessibility, and engagement.`,
    url: "/design-intelligence/conversational-interface-design",
    img: conversationalAI,
  },
  {
    title: "Prototyping & User Research",
    description: `Designing successful products requires more than creativity — it demands clarity, curiosity, and connection.
  That’s why our approach starts with research and ends with experience.
  At Digixito, we help businesses discover what their users truly want, how they behave, and why they act.
  Through user interviews, data analytics, and usability testing, we translate insights into actionable design strategies.
  Once validated, we move to rapid prototyping, bringing ideas to life through high-fidelity mockups, wireframes, and interactive prototypes that visualize the user journey before development begins.
  We make sure every design decision is backed by real evidence — not assumptions.`,
    url: "/design-intelligence/prototyping-and-user-research",
    img: prototyping,
  },
  {
    title: "Experience Optimization",
    description: `User expectations change faster than ever. What worked yesterday might frustrate users today.
  That’s why Experience Optimization isn’t a one-time effort — it’s a continuous cycle of learning, testing, and improving.
  At Digixito, we help businesses create digital ecosystems that adapt to users in real time.
  Through A/B testing, heatmap analysis, conversion tracking, and AI-driven feedback systems, we identify what users love — and what stops them.
  Our approach fuses UX design, behavioral psychology, and performance analytics to enhance engagement, retention, and satisfaction across every platform.
  We refine not just interfaces — but the emotions and experiences that define them.`,
    url: "/design-intelligence/experience-optimization",
    img: experienceOptimization,
  },
];

import { HEADER_TABS_DATA } from "@/utils/enum";
import { HEADER_LIST_PROPS } from "@/utils/types";

export const HEADER_TABS = [
  {
    label: HEADER_TABS_DATA.WHAT_WE_OFFER,
  },
  {
    label: HEADER_TABS_DATA.WHAT_WE_ARE,
    // url: "/about-us",
  },
  {
    label: HEADER_TABS_DATA.CAREERS,
    url: "/careers/life-at-digixito",
  },
];

export const HEADER_LINKS = {
  what_we_offer: [
    {
      heading: "AI Transformation",
      url: "/ai-transformation",
      data: [
        {
          label: "Machine Learning & Predictive Models",
          url: "/ai-transformation/machine-learning-and-predictive-models",
          // url: "/digital-transformation/ai-ml-development",
          // subData: [
          //   {
          //     label: "Machine Learning & Predictive Models",
          //     url: "/digital-transformation/ai-transformation/machine-learning-and-predictive-models",
          //   },
          //   {
          //     label: "Generative AI (Chatbots, LLMs, Automation)",
          //     url: "/digital-transformation/ai-transformation/generative-ai",
          //   },
          //   {
          //     label: "Computer Vision & OCR Systems",
          //     url: "/digital-transformation/ai-transformation/computer-vision-and-ocr-systems",
          //   },
          //   {
          //     label: "Data Engineering & MLOps",
          //     url: "/digital-transformation/ai-transformation/data-engineering-mlops",
          //   },
          // ],
        },
        {
          label: "Generative AI (Chatbots, LLMs, Automation)",
          url: "/ai-transformation/generative-ai",
        },
        {
          label: "Computer Vision & OCR Systems",
          url: "/ai-transformation/computer-vision-and-ocr-systems",
        },
        {
          label: "Data Engineering & MLOps",
          url: "/ai-transformation/data-engineering-mlops",
        },
        // {
        //   label: "Product Engineering",
        //   url: "/digital-transformation/application-development",
        //   subData: [
        //     {
        //       label: "Application & SaaS Development",
        //       url: "/digital-transformation/product-engineering/application-and-saas-developement",
        //     },
        //     {
        //       label: "Web and Mobile Platforms",
        //       url: "/digital-transformation/web-and-mobile-platforms",
        //     },
        //     {
        //       label: "System Integration & Api Developement",
        //       url: "/digital-transformation/system-integration-and-api-development",
        //     },
        //     {
        //       label: "Cloud Infrastructure",
        //       url: "/digital-transformation/cloud-infrastructure",
        //     },
        //   ],
        // },
        // {
        //   label: "Design Intelligence",
        //   url: "/digital-transformation/web-development",
        //   subData: [
        //     {
        //       label: "AI-Powered UI/UX Design",
        //       url: "/digital-transformation/design-intelligence/ai-powered-and-ui-ux-design",
        //     },
        //     {
        //       label: "Conversational Interface Design",
        //       url: "/digital-transformation/design-intelligence/conversational-interface-design",
        //     },
        //     {
        //       label: "Prototyping & User Research",
        //       url: "/digital-transformation/design-intelligence/prototyping-and-user-research",
        //     },
        //     {
        //       label: "Experience Optimization",
        //       url: "/digital-transformation/design-intelligence/experience-optimization",
        //     },
        //   ],
        // },
      ],
    },
    {
      heading: "Business Transformation",
      url: "/business-transformation",
      data: [
        {
          label: "Creative Transformation",
          url: "/business-transformation/creative-transformation",
        },
        {
          label: "Brand Strategy",
          url: "/business-transformation/brand-strategy",
        },
        {
          label: "360° Creative Campaigns",
          url: "/business-transformation/360-creative-campaigns",
        },
        {
          label: "Press Ads & TV Commercials",
          url: "/business-transformation/press-ads-and-tv-commercials",
        },
        {
          label: "Digital Transformation",
          url: "/business-transformation/digital-transformation",
        },
        {
          label: "Paid Search",
          url: "/business-transformation/paid-search",
        },
        {
          label: "Natural (Organic) Search",
          url: "/business-transformation/natural-search",
        },
        {
          label: "Performance Display",
          url: "/business-transformation/performance-display",
        },
        {
          label: "Social Media Marketing",
          url: "/business-transformation/social-media-marketing",
        },
        {
          label: "Sales Boost Program",
          url: "/business-transformation/sales-boost-program",
        },
        {
          label: "Marketplace Management",
          url: "/business-transformation/marketplace-management",
        },

        {
          label: "Catalog Management",
          url: "/business-transformation/catalog-management",
        },
        {
          label: "Inventory Management",
          url: "/business-transformation/inventory-management",
        },
        {
          label: "Partner Value Added Services",
          url: "/business-transformation/partner-value-added-services",
        },
      ],
    },
    {
      heading: "Product Engineering",
      url: "/product-engineering",
      data: [
        {
          label: "Application & SaaS Development",
          url: "/product-engineering/application-and-saas-development",
        },
        {
          label: "Web and Mobile Platforms",
          url: "/product-engineering/web-and-mobile-platforms",
        },
        {
          label: "System Integration & API Development",
          url: "/product-engineering/system-integration-and-api-development",
        },
        {
          label: "Cloud Infrastructure",
          url: "/product-engineering/cloud-infrastructure",
        },
      ],
    },
    {
      heading: "AI in Marketing & Growth",
      url: "/ai-marketing-growth",
      data: [
        {
          label: "AI-Driven Digital Marketing",
          url: "/ai-marketing-growth/ai-driven-digital-marketing",
        },
        {
          label: "Marketplace Management & Sales Boost",
          url: "/ai-marketing-growth/market-management-and-sales-boost",
        },
        {
          label: "Brand Strategy & Positioning",
          url: "/ai-marketing-growth/brand-strategy-and-positioning",
        },
        {
          label: "Performance Marketing & Conversion Optimization",
          url: "/ai-marketing-growth/performance-marketing-and-conversion-optimization",
        },
        {
          label: "Social & Search Intelligence (AI-Enhanced SEO/SEM)",
          url: "/ai-marketing-growth/social-and-search-intelligence",
        },
      ],
    },
    {
      heading: "Design Intelligence",
      url: "/design-intelligence",
      data: [
        {
          label: "AI-Powered UI/UX Design",
          url: "/design-intelligence/ai-powered-ui-ux-design",
        },
        {
          label: "Conversational Interface Design",
          url: "/design-intelligence/conversational-interface-design",
        },
        {
          label: "Prototyping & User Research",
          url: "/design-intelligence/prototyping-and-user-research",
        },
        {
          label: "Experience Optimization",
          url: "/design-intelligence/experience-optimization",
        },
      ],
    },
  ],
  what_we_are: [
    {
      heading: "Our organization",

      data: [
        {
          label: "Who we are",
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
  ],
  CAREERS: [
    {
      heading: "Join the Future with Digixito",
      // data: [
      //   {
      //     label: "Career areas",
      //     url: "/our-team",
      //   },
      //   {
      //     label: "Life at Digixito",
      //     url: "/careers/life-at-digixito",
      //   },
      // ],
    },
  ],
};

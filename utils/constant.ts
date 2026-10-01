import gcubepic from "@/projects/old-projects/gcube/hero-gcube.png";
import hauteBabypic from "@/projects/HAUTE_BABY.png";
import mytrekspic from "@/projects/MY_TREKS.AI.png";
import namastepic from "@/projects/NAMASTE_INDIA.png";
import netrapic from "@/projects/NXTGEN_NETRA_NITI.png";
import bellaCasa from "@/projects/old-projects/bella-casa/bella-casa-logo.png";
import gcube from "@/projects/old-projects/gcube/g-cube-logo.png";
import hautebaby from "@/projects/old-projects/haute-baby/haute_baby.png";
import hp_logo from "@/projects/old-projects/hp/hp-logo.png";
import jk_logo from "@/projects/old-projects/jktyre/jk-logo.png";
import max_logo from "@/projects/old-projects/max-bupa/max-bupa-logo.png";
import microsoft from "@/projects/old-projects/microsoft/microsoft-logo.png";
import mytreks from "@/projects/old-projects/my-treks/logo-mytreks.png";
import namasteIndia from "@/projects/old-projects/namaste-india/namaste_india.png";
import netraniti from "@/projects/old-projects/netra-niti/netra_niti.png";
import ornet_logo from "@/projects/old-projects/ornet/apollo.png";
import rasdelta from "@/projects/old-projects/ras-delta/RasDelta.png";
// import { default as rspl } from "@/projects/old-projects/redchief/red-chief-logo.png";
import home_shop_logo from "@/projects/old-projects/home-shop18/home-shop-logo.webp";
import home_shop_banner from "@/projects/old-projects/home-shop18/home_shop_banner.png";
import maxBupa6 from "@/projects/old-projects/max-bupa/max-bupa-hero.png";
import furo from "@/projects/old-projects/redchief/furo_logo.png";
import raspic from "@/projects/RASDELTA.png";
import { PROJECTS_DEPARTMENT } from "./enum";
import { PROJECT_CARD_DATA_PROPS } from "./types";
import microsoftHero from "@/projects/old-projects/microsoft/hero-banner.png";
import microsoft1 from "@/projects/old-projects/microsoft/microsoft1.jpg";
import microsoft2 from "@/projects/old-projects/microsoft/microsoft2.jpg";
import jktyre1 from "@/projects/old-projects/jktyre/jktyre2.jpg";
import jktyre2 from "@/projects/old-projects/jktyre/jktyre.png";
import jktyre3 from "@/projects/old-projects/jktyre/jktyre3.png";
import jktyre4 from "@/projects/old-projects/jktyre/jktyre4.jpg";
import jktyreHeroBanner from "@/projects/old-projects/jktyre/jktyre-hero.png";
import jktyre5 from "@/projects/old-projects/jktyre/jktyre5.png";
import jktyre6 from "@/projects/old-projects/jktyre/jktyre6.png";
import jktyre7 from "@/projects/old-projects/jktyre/jktyre7.png";
import jktyre8 from "@/projects/old-projects/jktyre/jktyre8.png";
import jktyre9 from "@/projects/old-projects/jktyre/jktyre9.png";
import bellacasa from "@/projects/old-projects/bella-casa/hero-bella.png";
import bellacasa1 from "@/projects/old-projects/bella-casa/bella-casa1.jpg";
import bellacasa2 from "@/projects/old-projects/bella-casa/bella-casa2.jpg";
import bellacasa3 from "@/projects/old-projects/bella-casa/bella-casa3.jpg";
import bellacasa4 from "@/projects/old-projects/bella-casa/bella-casa4.jpg";
import bellacasa5 from "@/projects/old-projects/bella-casa/bella-casa5.jpg";
import bellacasa6 from "@/projects/old-projects/bella-casa/bella-casa6.jpg";
import bellacasa7 from "@/projects/old-projects/bella-casa/bella-casa7.jpg";
import bellacasa8 from "@/projects/old-projects/bella-casa/bella-casa8.jpg";
import bellacasa9 from "@/projects/old-projects/bella-casa/bella-casa9.jpg";
import bellacasa10 from "@/projects/old-projects/bella-casa/bella-casa10.jpg";
import furo1 from "@/projects/old-projects/rspl/rspl1.jpg";
import furo2 from "@/projects/old-projects/rspl/rspl2.jpg";
import furo3 from "@/projects/old-projects/rspl/rspl3.jpg";
import furo4 from "@/projects/old-projects/rspl/rspl4.jpg";
import furo5 from "@/projects/old-projects/rspl/rspl5.jpg";
import furo6 from "@/projects/old-projects/rspl/rspl6.jpg";
import heroMytreks from "@/projects/Hero/treksHero.png";
import mytreks1 from "@/projects/old-projects/my-treks/mytreks1.png";
import mytreks2 from "@/projects/old-projects/my-treks/mytreks2.png";
import mytreks3 from "@/projects/old-projects/my-treks/mytreks3.png";
import mytreks4 from "@/projects/old-projects/my-treks/mytreks4.png";
import mytreks5 from "@/projects/old-projects/my-treks/mytreks5.png";
import mytreks6 from "@/projects/old-projects/my-treks/mytreks6.png";
import mytreks7 from "@/projects/old-projects/my-treks/mytreks7.png";
import mytreks8 from "@/projects/old-projects/my-treks/mytreks8.png";
import hauteHero from "@/projects/Hero/hauteHero.png";
import namasteHero from "@/projects/old-projects/namaste-india/namaste-hero.png";
import netrahero from "@/projects/Hero/netraHero.png";
import bellaShoot1 from "@/projects/old-projects/bella-casa/bella-casa-shoot1.jpeg";
import bellaShoot2 from "@/projects/old-projects/bella-casa/bella-casa-shoot2.jpeg";
import bellaShoot3 from "@/projects/old-projects/bella-casa/bella-casa-shoot3.jpeg";
import bellaShoot4 from "@/projects/old-projects/bella-casa/bella-casa-shoot4.jpeg";
import bellaShoot5 from "@/projects/old-projects/bella-casa/bella-casa-shoot5.jpeg";
export const PROJECTS_TABS_DATA = [
  {
    label: PROJECTS_DEPARTMENT.ALL,
  },
  {
    label: PROJECTS_DEPARTMENT.CREATIVE,
  },
  {
    label: PROJECTS_DEPARTMENT.DEVELOPMENT,
  },
  {
    label: PROJECTS_DEPARTMENT.DIGITAL,
  },
];

export const OLD_PROJECTS_DATA: PROJECT_CARD_DATA_PROPS[] = [
  {
    slug: "max-bupa-health-insurance",
    logo: max_logo,
    projectName: "Max Bupa",
    department: PROJECTS_DEPARTMENT.DIGITAL,
    description:
      "Max Bupa Health Insurance Company is collaboration between Max India Limited and UK based healthcare services experts, Bupa. With the clear vision of reality and six decades of rich expertise in healthcare services, we have brought together the smiling faces of people, to be called as India\'s admired health insurance company. With the rising in the quality of the services of ours, we are able to provide our worthy services to 29 million customer-bases in over 190 countries. Max Bupa Health Insurance Company together brings its expertise in Family health and wellness with the aim of customer and caring for you, for life.",
    details: {
      heroImage: maxBupa6,
      title: "Max Bupa Health Insurance",
      description: [
        "To improve the conversion rate of the email campaigns, which was initially less than 0.03%, by developing a more targeted, engaging, and conversion-focused email marketing strategy. The objective was to reach the right audience with relevant messaging, improve engagement, and ultimately generate a higher number of qualified buyers and conversions.",
      ],
      strategies: {
        description: [
          "A creative and data-driven emailer campaign was developed with a strong emphasis on clear communication and compelling calls to action. A series of campaigns were designed and executed to optimize performance at different stages of the customer journey.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Audience Segmentation",
              secondary:
                "The database was segmented based on customer profiles, interests, purchase behaviour, engagement levels, and other relevant parameters.",
            },
            {
              primary: "Targeted Communication",
              secondary:
                "Different email messages were created for specific audience segments to ensure that the content was relevant to their needs and interests.",
            },
            {
              primary: "Creative & Content",
              secondary:
                "Visually appealing emailers were designed with concise messaging, strong value propositions, and clear calls to action.",
            },
            {
              primary: "Campaign Testing",
              secondary:
                "Multiple campaign variations were tested to understand which subject lines, content, offers, and creative approaches generated better engagement.",
            },
            {
              primary: "Campaign Execution",
              secondary:
                "A series of email campaigns were planned and delivered at different levels, targeting awareness, consideration, and conversion.",
            },
            {
              primary: "Performance Optimization",
              secondary:
                "Campaign performance was continuously monitored through engagement and conversion metrics. Based on the insights, targeting, messaging, and campaign execution were refined.",
            },
            {
              primary: "Database Optimization",
              secondary:
                "High-performing audience segments were prioritized while inactive or less relevant contacts were filtered to improve overall campaign effectiveness.",
            },
          ],
          endDescription:
            "This approach helped in targeting niche buyers by effectively matching demand with supply, ensuring that the right message reached the right audience at the right stage of their buying journey.",
        },
      },
      result: {
        description: [
          "The implementation of the targeted email marketing strategy resulted in a significant improvement in conversion performance.",
          "The conversion rate increased from an initial less than 0.03% to approximately 2.5%–3%, representing a substantial improvement over the previous performance.",
          "The campaign also helped improve audience targeting, engagement, and the effectiveness of communication by focusing on users who were more likely to respond to the offerings.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary: "Initial Conversion Rate: Less than 0.03%",
            },
            {
              primary: "Final Conversion Rate: 2.5%–3%",
            },
            {
              primary: "Significant increase in conversions",
            },
            {
              primary: "Improved audience targeting and segmentation",
            },
            {
              primary: "Better engagement with relevant customer groups",
            },
            {
              primary:
                "More effective matching of customer demand with available offerings",
            },
            {
              primary: "Improved overall efficiency of email campaigns",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The campaign demonstrated that a well-planned, creative, and data-driven email marketing strategy can significantly improve conversion performance. By combining audience segmentation, personalized communication, creative testing, targeted campaigns, and continuous optimization, the campaign was able to deliver substantially better results.",
          "The strategy also established a stronger foundation for future campaigns, allowing successful audience segments, messaging approaches, and campaign formats to be further optimized and scaled for continued growth.",
        ],
      },
    },
  },
  {
    slug: "home-shop18",
    logo: home_shop_logo,
    projectName: "HomeShop18",
    department: PROJECTS_DEPARTMENT.DIGITAL,
    description:
      "To strengthen HomeshoP18’s online presence and drive significant growth in search visibility, conversions, and revenue through a focused digital marketing strategy.",
    details: {
      heroImage: home_shop_banner,
      title: "HomeShop18",
      description: [
        "The primary objective was to overcome the challenge of declining revenue and a high multiplier by improving search rankings, increasing qualified traffic, and reaching a much larger audience across high-volume e-commerce and electronics-related search terms.",
        "The campaign focused on targeting highly competitive keywords with substantial search demand and converting this increased visibility into measurable business growth.",
        "The campaign focused on targeting highly competitive keywords with substantial search demand and converting this increased visibility into measurable business growth.",
      ],
      strategies: {
        description: [
          "A comprehensive Search Engine Marketing and SEO strategy was implemented to improve HomeshoP18’s visibility across highly competitive and high-volume search terms.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Keyword Research & Targeting",
              secondary:
                "Identified thousands of relevant and commercially valuable keywords related to online shopping, electronics, kitchenware, home appliances, and other product categories.",
            },
            {
              primary: "High-Volume Keyword Optimization",
              secondary:
                "Focused on keywords with a combined search volume of more than 22 million, creating significant opportunities to increase organic visibility and website traffic.",
            },
            {
              primary: "Competitive Keyword Strategy",
              secondary:
                "Targeted highly competitive search terms such as online shopping, electronic items, electronics shopping, kitchenware, and home appliances.",
            },
            {
              primary: "On-Page Optimization",
              secondary:
                "Optimized website content, landing pages, metadata, headings, and product/category pages around targeted keywords.",
            },
            {
              primary: "Content Strategy",
              secondary:
                "Developed and optimized relevant content to improve search relevance and establish stronger visibility across multiple product categories.",
            },
            {
              primary: "Technical SEO",
              secondary:
                "Improved website structure, indexing, internal linking, and other technical elements to support better search engine crawling and ranking.",
            },
            {
              primary: "Search Ranking Optimization",
              secondary:
                "Continuously monitored keyword positions and refined the strategy based on ranking performance and search trends.",
            },
            {
              primary: "Conversion Focus",
              secondary:
                "The increased search visibility was aligned with commercial intent, ensuring that traffic generated through targeted keywords had a stronger potential to convert into customers.",
            },
          ],
          endDescription:
            "The strategy successfully helped bring 72% of the targeted keywords to the first page within six months, significantly expanding HomeshoP18’s search visibility and reach.",
        },
      },
      result: {
        description: [
          "The strategy delivered a significant improvement in both search visibility and business performance.",
          "Within six months, 72% of the targeted keywords achieved first-page rankings, helping HomeshoP18 gain visibility across a search landscape with more than 22 million monthly search opportunities.",
          "This increased visibility contributed to substantial growth in conversions and revenue.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary:
                "72% of targeted keywords reached the first page within 6 months.",
            },
            {
              primary: "Targeted keywords represented 22M+ search volume.",
            },
            {
              primary:
                "All Conversions: Increased from 12,860 in Nov 2015 to 36,746 in Mar 2016.",
            },
            {
              primary: "Conversion Growth: +185.73%",
            },
            {
              primary:
                "Revenue: Increased from ₹21,715,712 in Nov 2015 to ₹57,644,934 in Mar 2016.",
            },
            {
              primary: "Revenue Growth: +165.45%",
            },
            {
              primary:
                "Expanded visibility across highly competitive e-commerce and electronics keywords.",
            },
            {
              primary:
                "Increased opportunities to attract qualified, high-intent users.",
            },
            {
              primary:
                "Improved overall digital performance and contribution to business growth.",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The Homeshop18 campaign demonstrated how a focused, data-driven SEO and digital marketing strategy can transform search visibility into measurable business results.",
          "The strategy also established a stronger foundation for future campaigns, allowing successful audience segments, messaging approaches, and campaign formats to be further optimized and scaled for continued growth.",
          "By targeting high-volume commercial keywords, optimizing the website for search engines, continuously monitoring rankings, and focusing on conversion-oriented traffic, the campaign achieved strong improvements in both organic visibility and business performance.",
          "With 72% of targeted keywords reaching the first page within six months, conversions increasing by 185.73%, and revenue growing by 165.45%, the strategy established a strong foundation for continued growth.",
          "The results highlight the impact of combining keyword intelligence, technical optimization, content strategy, search visibility, and conversion-focused execution to scale an e-commerce business.",
        ],
      },
    },
  },
  {
    slug: "microsoft",
    logo: microsoft,
    projectName: "Microsoft",
    department: PROJECTS_DEPARTMENT.DIGITAL,
    description:
      "Ultimately advertising is about selling Brands in an utmost creative way. We collaborated on a Digital advertising campaign for their products: Office 365 Standalone and Azure, crossing boundaries in Indonesia, Singapore, Malaysia, and Vietnam. We adroitly maneuvered our creatives, landing page, and user registration platform to get the bell of lead generation ringing.",
    details: {
      heroImage: microsoftHero,
      title: "Microsoft Office 365 & Azure Campaign",
      images: [microsoft1, microsoft2],
      description: [
        "To create and execute a high-impact digital advertising campaign for Microsoft, promoting its Office 365 Standalone and Microsoft Azure solutions across key Southeast Asian markets.",
        "The primary objective was to generate a strong pipeline of qualified leads and user registrations by combining creative digital communication with a seamless conversion journey.",
      ],

      strategies: {
        description: [
          "The campaign was built around the idea that advertising is not simply about selling a product, but about presenting a brand and its value proposition in the most creative and compelling way possible.",
          "A comprehensive digital advertising ecosystem was developed for Microsoft’s Office 365 Standalone and Azure offerings.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Creative Campaign Development",
              secondary:
                "Developed engaging and visually compelling advertising creatives designed to capture attention and communicate the key benefits of Microsoft’s products.",
            },
            {
              primary: "Multi-Market Execution",
              secondary:
                "Extended the campaign across Indonesia, Singapore, Malaysia, and Vietnam, adapting the communication and execution to suit different regional audiences.",
            },
            {
              primary: "Audience Targeting",
              secondary:
                "Identified and targeted relevant professional, business, and technology-focused audiences with a higher potential for product interest and conversion.",
            },
            {
              primary: "Landing Page Optimization",
              secondary:
                "Designed and optimized dedicated landing pages to ensure that the messaging remained consistent from the advertisement through to the conversion stage.",
            },
            {
              primary: "User Registration Platform",
              secondary:
                "Created a streamlined registration experience to minimize friction and make it easier for interested users to submit their information.",
            },
            {
              primary: "Conversion-Focused Journey",
              secondary:
                "Connected the advertising creatives, landing pages, and registration platform into a single conversion funnel designed specifically for lead generation.",
            },
            {
              primary: "Continuous Optimization",
              secondary:
                "Monitored campaign performance and refined creatives, targeting, landing-page communication, and registration flows to improve lead-generation efficiency.",
            },
          ],
          endDescription:
            "By carefully maneuvering the creative, landing page, targeting, and registration experience, the campaign transformed initial audience interest into measurable lead-generation opportunities.",
        },
      },
      result: {
        description: [
          "The campaign successfully expanded Microsoft’s digital advertising reach across four key Southeast Asian markets while creating a strong and consistent lead-generation funnel.",
          "The integrated approach helped turn advertising engagement into registrations and qualified leads, demonstrating the effectiveness of combining creative communication with a conversion-focused digital experience.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary:
                "Successfully executed digital campaigns for Microsoft Office 365 Standalone and Azure.",
            },
            {
              primary:
                "Expanded campaign reach across Indonesia, Singapore, Malaysia, and Vietnam.",
            },
            {
              primary:
                "Created a complete digital funnel from advertisement → landing page → user registration → lead generation.",
            },
            {
              primary:
                "Improved the ability to capture and manage interested prospects.",
            },
            {
              primary:
                "Generated a consistent flow of registrations and leads.",
            },
            {
              primary:
                "Successfully combined creative advertising with performance-driven execution.",
            },
            {
              primary:
                "Established a scalable campaign approach that could be adapted across multiple markets.",
            },
          ],
        },
      },

      conclusion: {
        description: [
          "The Microsoft campaign demonstrated the power of combining creative advertising, precise audience targeting, optimized landing pages, and a seamless registration experience to drive measurable business outcomes.",
          "What began as an opportunity to work with one of the world's leading technology brands evolved into a multi-market digital campaign spanning four countries.",
          "By pushing beyond conventional advertising boundaries and connecting creativity with performance, the campaign successfully created a continuous flow of user registrations and lead-generation opportunities for Microsoft’s Office 365 Standalone and Azure solutions.",
          "The campaign reinforced a simple principle: great creative captures attention, but a well-designed digital journey turns that attention into action.",
        ],
      },
    },
  },
  {
    slug: "jk-tyres",
    logo: jk_logo,
    projectName: "JK Tyre",
    img: jktyreHeroBanner,
    department: PROJECTS_DEPARTMENT.CREATIVE,
    description:
      "J.K wanted to rejoice the journey of unsung heroes, termed BAADSHAH, people who are rolling and rising on the roads to maintain your every day's essential supply chain. We were given a task in hand to reflect the heroic life of some of the significant achievers who have associated for long with J.K.",
    creative: {
      heroImage: jktyreHeroBanner,
      images: [
        jktyre1,
        jktyre2,
        jktyre3,
        jktyre4,
        jktyre5,
        jktyre6,
        jktyre7,
        jktyre8,
        jktyre9,
      ],
      videoUrls: [
        "https://youtu.be/F91vnolqrrg?si=kQJ5Jknd_G5l5eI3",
        "https://youtu.be/1s-6PW8PV9E?si=Bo59hKFjek08iUCf",
      ],
      details: {
        heading: "OBJECTIVES",
        description: [
          "J.K wanted to celebrate a unique and meaningful association with the people who form an essential part of India's everyday supply chain. These individuals, often unnoticed and uncelebrated, work tirelessly on the roads to ensure that essential products reach homes and businesses every day.",
          "The objective was to bring their stories to the forefront and celebrate these “BAADSHAH” — the unsung heroes who have built a long-standing association with J.K.",
          "J.K wanted to establish a strong pan-India presence for its farm-category product, SONA1, while clearly communicating the product's key features and benefits.",
          "The campaign had to be developed within a tight deadline, with the additional challenge of creating a corporate film that could generate interest and communicate the product effectively to a broad audience.",
        ],
        data: [
          {
            primary:
              "Showcase the personal and professional journeys of significant achievers associated with J.K.",
          },
          {
            primary:
              "Highlight their dedication, resilience, and contribution to the supply chain.",
          },
          {
            primary:
              "Present their stories in an authentic and emotionally engaging manner.",
          },
          {
            primary: "Celebrate their association with J.K. over the years.",
          },
          {
            primary:
              "Create films that would allow audiences to connect with their experiences and achievements.",
          },
        ],
      },
    },
  },
  {
    slug: "hp",
    logo: hp_logo,
    projectName: "HP",
    department: PROJECTS_DEPARTMENT.CREATIVE,
    description:
      "HP needed to decode a design for the digital campaigning of their product HP Page Wide Pro 577dw MFP. We sat with them on the meeting table and astonished them with our creative imprint. With our digital strategy, we manufactured a smart and productive digital campaign.",
    details: {
      heroImage: "/images/projects/hero/hphero.png",
      title: "HP",
      images: [
        "/images/projects/old-projects/hp/hp-1.jpg",
        "/images/projects/old-projects/hp/hp-2.jpg",
      ],
      description: [
        "HP has long been synonymous with innovation in printing and scanning technology. For the launch and digital promotion of the HP PageWide Pro 577dw MFP, the objective was to create a digital campaign that could effectively communicate the product’s technological capabilities while positioning it as a smart, efficient, and productivity-focused business solution.",
        "The campaign aimed to:",
        "Build awareness around the HP PageWide Pro 577dw MFP.",
        "Communicate its revolutionary product features in a simple and engaging manner.",
        "Highlight the product’s ability to improve productivity and workflow efficiency.",
        "Create a distinctive digital identity for the campaign.",
        "Generate interest among business users and decision-makers.",
        "Position the product as an innovative solution capable of redefining expectations in the printing segment.",
      ],
      strategies: {
        description: [
          "The campaign was developed around a simple thought: when the product is revolutionary, the communication needs to be equally innovative.",
          "We collaborated closely with HP to understand the product, its technology, its key differentiators, and the audience it was designed for. The challenge was to translate complex product capabilities into a creative digital communication that could immediately capture attention.",
          "The result was a smart, productive, and creatively driven digital campaign that translated HP’s technological innovation into communication that audiences could understand and engage with.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Creative Concept Development",
              secondary:
                "Created a distinctive creative direction that reflected the innovation and technological sophistication of the HP PageWide Pro 577dw MFP.",
            },
            {
              primary: "Feature Led Storytelling",
              secondary:
                "Identified the product’s strongest features and converted them into easy-to-understand and visually engaging communication.",
            },
            {
              primary: "Digital First Communication",
              secondary:
                "Built the campaign specifically for digital platforms, ensuring that the messaging could capture attention quickly and communicate the product proposition effectively.",
            },
            {
              primary: "Productivity Positioning",
              secondary:
                "Focused on the product’s ability to enhance workplace productivity, efficiency, and everyday business operations.",
            },
            {
              primary: "Visual Storytelling",
              secondary:
                "Used strong creative concepts and product-centric visuals to make the technology more relatable and memorable.",
            },
            {
              primary: "Audience Focused Messaging",
              secondary:
                "Developed communication that addressed the practical needs of businesses and professionals rather than simply listing technical specifications.",
            },
            {
              primary: "Integrated Campaign Approach",
              secondary:
                "Connected creative communication with a broader digital strategy to create consistency across campaign touchpoints.",
            },
          ],
        },
      },
      result: {
        description: [
          "The campaign successfully created a distinctive digital communication platform for the HP PageWide Pro 577dw MFP, bringing together product innovation, creative storytelling, and digital strategy.",
          "The campaign helped present the product not merely as another office printer, but as a technology-driven productivity solution designed to challenge conventional expectations around workplace printing.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary: "01",
              secondary:
                "Developed a dedicated digital campaign for the HP PageWide Pro 577dw MFP.",
            },
            {
              primary: "02",
              secondary:
                "Created a strong creative identity around the product’s innovation.",
            },
            {
              primary: "03",
              secondary:
                "Translated complex product features into accessible digital communication.",
            },
            {
              primary: "04",
              secondary:
                "Highlighted productivity and efficiency as key product benefits.",
            },
            {
              primary: "05",
              secondary:
                "Built audience interest through creative, feature-focused storytelling.",
            },
            {
              primary: "06",
              secondary:
                "Connected product innovation with a modern digital campaign strategy.",
            },
            {
              primary: "07",
              secondary:
                "Created communication capable of positioning the product as a potential market disruptor.",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The HP PageWide Pro 577dw MFP campaign was an exercise in turning technology into a story.",
          "By combining HP’s product innovation with a strong creative direction and a focused digital strategy, we created communication that went beyond simply explaining what the product could do.",
          "The campaign positioned the PageWide Pro 577dw MFP around a larger idea — smarter technology, greater productivity, and a new way of approaching workplace printing.",
          "When a product has the potential to redefine a category, the communication needs to make people stop, understand, and take notice. That was the creative challenge we set out to solve — and the campaign was built to do exactly that.",
        ],
      },
    },
  },
  {
    slug: "ornet",
    logo: ornet_logo,
    projectName: "Ornet",
    department: PROJECTS_DEPARTMENT.CREATIVE,
    description:
      "ORNET wanted to place its three products namely Terrain Bull, Industrial HD, Power Gripper in an unconditional toughness niche, which are born to perform with an unmatched durability, all across the terrains.",
    details: {
      heroImage: "/images/projects/hero/ornethero.png",
      title: "Ornet",
      images: [
        "/images/projects/old-projects/ornet/ornet1.jpg",
        "/images/projects/old-projects/ornet/ornet2.jpg",
        "/images/projects/old-projects/ornet/ornet3.jpg",
        "/images/projects/old-projects/ornet/ornet4.jpg",
        "/images/projects/old-projects/ornet/ornet5.jpg",
        "/images/projects/old-projects/ornet/ornet6.jpg",
      ],
      description: [
        "ORNET wanted to establish its three flagship products — Terrain Bull, Industrial HD, and Power Gripper — in a distinct unconditional toughness niche.",
        "The challenge was to communicate a powerful product proposition: these products are built to perform when conditions become difficult, delivering durability, grip, and reliability across demanding terrains and challenging environments.",
        "The campaign aimed to:",
        "Establish ORNET as a brand synonymous with toughness and durability.",
        "Create a strong identity for Terrain Bull, Industrial HD, and Power Gripper.",
        "Highlight the products’ ability to perform across different terrains and adverse conditions.",
        "Communicate superior grip, strength, and endurance.",
        "Differentiate ORNET from conventional products in the category.",
        "Create a memorable campaign that would resonate strongly with the target audience.",
      ],
      strategies: {
        description: [
          "The central communication idea was built around uncompromising performance in adverse conditions.",
          "Rather than simply presenting product specifications, the campaign transformed toughness into a visual and emotional proposition — showing that when the road gets difficult, ORNET products don't simply endure the challenge; they grip the road and move beyond it.",
          "The creative approach amplified ORNET’s core proposition and transformed product durability into a campaign narrative that could be experienced rather than simply explained.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Product-Specific Positioning",
              secondary:
                "Developed distinct communication for Terrain Bull, Industrial HD, and Power Gripper while maintaining a unified brand proposition.",
            },
            {
              primary: "Toughness as the Core Idea",
              secondary:
                "Made durability, strength, grip, and performance the central pillars of the campaign.",
            },
            {
              primary: "Adverse-Terrain Storytelling",
              secondary:
                "Used challenging environments and difficult road conditions to visually demonstrate the products’ intended performance proposition.",
            },
            {
              primary: "Powerful Creative Direction",
              secondary:
                "Developed bold and aggressive creative communication designed to immediately convey strength and confidence.",
            },
            {
              primary: "Visual Impact",
              secondary:
                "Used dramatic imagery, strong compositions, and product-focused storytelling to make the campaign visually distinctive.",
            },
            {
              primary: "Audience Connection",
              secondary:
                "Focused on the real-world challenges faced by users and positioned ORNET as a solution built to handle demanding conditions.",
            },
            {
              primary: "Consistent Brand Narrative",
              secondary:
                "Connected all three products through one powerful thought — unconditional toughness without compromise.",
            },
          ],
        },
      },
      result: {
        description: [
          "The campaign successfully created a strong and aggressive identity for ORNET and its three products.",
          "By placing Terrain Bull, Industrial HD, and Power Gripper within a powerful toughness-led narrative, the campaign established a clear and memorable communication territory around durability, grip, and performance.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary: "01",
              secondary:
                "Created a unified campaign for three ORNET product lines.",
            },
            {
              primary: "02",
              secondary:
                "Established unconditional toughness as the central communication proposition.",
            },
            {
              primary: "03",
              secondary:
                "Highlighted durability, grip, strength, and performance.",
            },
            {
              primary: "04",
              secondary:
                "Created an aggressive and visually powerful campaign identity.",
            },
            {
              primary: "05",
              secondary:
                "Differentiated the products through bold creative storytelling.",
            },
            {
              primary: "06",
              secondary:
                "Strengthened the association between ORNET and challenging-terrain performance.",
            },
            {
              primary: "07",
              secondary:
                "Created a lasting impression across the target audience.",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The ORNET campaign was built around one uncompromising thought: tough conditions demand tougher products.",
          "By turning durability and performance into a powerful creative narrative, the campaign gave Terrain Bull, Industrial HD, and Power Gripper a distinctive position within the toughness category.",
          "The result was an aggressive, high-impact campaign that communicated ORNET’s performance proposition with clarity and created a strong, lasting impression among its target audience.",
          "When the terrain gets tougher, ORNET gets a stronger grip.",
        ],
      },
    },
  },
  {
    slug: "bellacasa",
    logo: bellaCasa,
    projectName: "Bella Casa",
    department: PROJECTS_DEPARTMENT.CREATIVE,
    description:
      "Bellacasa Fashion and Retail Ltd. approached us during a significant brand remodeling phase, with a clear ambition to elevate its visual identity and create a stronger premium presence in the bedsheet and home-fashion category.",
    details: {
      heroImage: bellacasa,
      title: "Bella Casa",
      shootImages: [
        bellaShoot1,
        bellaShoot2,
        bellaShoot3,
        bellaShoot4,
        bellaShoot5,
      ],
      images: [
        bellacasa1,
        bellacasa2,
        // bellacasa3,
        // bellacasa4,
        // bellacasa5,
        // bellacasa6,
        // bellacasa7,
        // bellacasa8,
        // bellacasa9,
        // bellacasa10,
      ],
      description: [
        "Bellacasa Fashion and Retail Ltd. approached us during a significant brand remodeling phase, with a clear ambition to elevate its visual identity and create a stronger premium presence in the bedsheet and home-fashion category.",
        "The challenge was not simply to showcase products, but to completely redefine how Bellacasa was perceived visually and position the brand in a more premium, glamorous, sophisticated, and aspirational space.",
        "The campaign aimed to:",
        "Transform Bellacasa’s existing visual identity.",
        "Establish a more premium and glamorous brand personality.",
        "Elevate the presentation of the product catalogue.",
        "Create distinctive and aspirational product imagery.",
        "Develop a visual language capable of differentiating Bellacasa within a competitive category.",
        "Build greater desire and emotional appeal around the brand.",
        "Establish a strong foundation for future fashion-led campaigns.",
      ],
      strategies: {
        description: [
          "The transformation began with our first creative photoshoot for Bellacasa’s product catalogue.",
          "Instead of treating bedsheets as purely functional products, we approached them as elements of fashion, lifestyle, and visual expression. The objective was to change the entire visual language of the brand and introduce a more sophisticated aesthetic.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Creative Repositioning",
              secondary:
                "Shifted the brand's visual direction from conventional product presentation toward a more premium and glamorous aesthetic.",
            },
            {
              primary: "Art Direction",
              secondary:
                "Developed a distinctive visual style with carefully planned compositions, styling, lighting, set design, and photography.",
            },
            {
              primary: "Premium Product Presentation",
              secondary:
                "Presented Bellacasa products as aspirational lifestyle elements rather than everyday household products.",
            },
            {
              primary: "Fashion-Inspired Storytelling",
              secondary:
                "Introduced a more editorial and fashion-oriented approach to product communication.",
            },
            {
              primary: "Visual Experimentation",
              secondary:
                "Explored dramatic themes, sophisticated styling, and imaginative concepts to give the brand a distinctive identity.",
            },
            {
              primary: "Catalogue Transformation",
              secondary:
                "Reimagined the product catalogue with a more polished and premium visual language.",
            },
            {
              primary: "Celebrity Association",
              secondary:
                "Extended the premium positioning through a sophisticated celebrity photoshoot featuring Jacqueline Fernandez, creating an opportunity to connect Bellacasa with glamour, elegance, and contemporary fashion.",
            },
          ],
          endDescription:
            "The creative evolution eventually led to the concept of creating a “Midnight Snow White” interpretation of Bellacasa — an imaginative visual world that combined elegance, mystery, glamour, and fantasy.\nThe campaign then evolved further when Jacqueline Fernandez became part of the Bellacasa story, allowing us to create a sophisticated visual narrative around her association with the brand.",
        },
      },
      result: {
        description: [
          "The creative transformation gave Bellacasa a distinctly premium and glamorous visual identity, changing the way its products could be presented and experienced by the audience.",
          "The evolution from a conventional product catalogue to a more fashion-led visual approach created a stronger aspirational character for the brand.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary: "01",
              secondary:
                "Completely transformed Bellacasa’s product catalogue aesthetics.",
            },
            {
              primary: "02",
              secondary:
                "Established a more premium and glamorous visual direction.",
            },
            {
              primary: "03",
              secondary:
                "Introduced fashion and lifestyle storytelling into product communication.",
            },
            {
              primary: "04",
              secondary:
                "Created distinctive and imaginative campaign concepts.",
            },
            {
              primary: "05",
              secondary:
                "Elevated the perceived visual sophistication of the brand.",
            },
            {
              primary: "06",
              secondary:
                "Developed a stronger aspirational connection with the audience.",
            },
            {
              primary: "07",
              secondary:
                "Extended the brand’s creative expression through a celebrity-led photoshoot.",
            },
            {
              primary: "08",
              secondary:
                "Created a sophisticated visual campaign featuring Jacqueline Fernandez.",
            },
            {
              primary: "09",
              secondary:
                "Built a visual platform that could support Bellacasa’s evolving premium positioning.",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The Bellacasa journey was ultimately about changing perception through creativity.",
          "What began as a product catalogue assignment evolved into a complete visual transformation of the brand. By introducing premium art direction, fashion-inspired photography, imaginative storytelling, and sophisticated celebrity imagery, Bellacasa moved toward a more glamorous and aspirational visual identity.",
          "The “Midnight Snow White” concept gave the brand an element of fantasy and intrigue, while the Jacqueline Fernandez photoshoot added another layer of sophistication and star appeal.",
          "The result was a brand experience designed not merely to showcase bedsheets, but to make the audience desire the world Bellacasa created around them.",
        ],
      },
    },
  },

  {
    slug: "gcube",
    logo: gcube,
    img: gcubepic,
    projectName: "G-Cube",
    department: PROJECTS_DEPARTMENT.DIGITAL,
    description:
      "G-Cube required a strategic overhaul of its digital presence to better reflect its industry-leading e-learning solutions and create a stronger connection with global enterprises.",
    details: {
      heroImage: gcubepic,
      title: "G-Cube",
      images: [
        "/images/projects/old-projects/gcube/g-cube1.jpg",
        "/images/projects/old-projects/gcube/g-cube2.jpg",
      ],
      description: [
        "G-Cube required a strategic overhaul of its digital presence to better reflect its industry-leading e-learning solutions and create a stronger connection with global enterprises. The objective was to transform its digital platform into a modern, enterprise-focused experience that clearly communicated its expertise, capabilities, and value proposition.",
      ],
      strategies: {
        description: [
          "A comprehensive digital strategy was developed to reposition G-Cube's online presence around its enterprise e-learning expertise. The approach focused on creating a modern, intuitive, and conversion-oriented digital experience that could communicate complex learning solutions in a clear and engaging manner.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Digital Brand Positioning",
              secondary:
                "Repositioned G-Cube's digital presence to better communicate its expertise in enterprise learning, digital transformation, and innovative e-learning solutions.",
            },
            {
              primary: "User Experience",
              secondary:
                "Created a more intuitive website structure and user journey, making it easier for global enterprises to discover relevant solutions, services, and industry expertise.",
            },
            {
              primary: "Enterprise-Focused Content",
              secondary:
                "Structured and refined content to clearly communicate G-Cube's capabilities, solutions, and value proposition to enterprise decision-makers.",
            },
            {
              primary: "Modern Visual Experience",
              secondary:
                "Introduced a contemporary visual language that reflected G-Cube's position as a technology-driven e-learning organization while maintaining a professional enterprise aesthetic.",
            },
            {
              primary: "Solution-Based Navigation",
              secondary:
                "Organized the digital experience around key solutions, services, industries, and business requirements to help users quickly identify the offerings relevant to them.",
            },
            {
              primary: "Global Audience Reach",
              secondary:
                "Developed the digital experience with a global enterprise audience in mind, ensuring that the messaging and presentation could effectively communicate across international markets.",
            },
            {
              primary: "Conversion-Focused Experience",
              secondary:
                "Optimized key digital touchpoints and calls to action to encourage meaningful interactions, enquiries, and potential business opportunities.",
            },
          ],
          endDescription:
            "This approach transformed G-Cube's digital presence into a more strategic enterprise communication platform, connecting its e-learning expertise with the needs of a global business audience.",
        },
      },
      result: {
        description: [
          "The strategic digital overhaul created a stronger and more contemporary online presence for G-Cube, better reflecting the company's expertise and position within the global e-learning industry.",
          "The redesigned digital experience made the company's solutions easier to understand and navigate while creating a stronger connection between G-Cube's capabilities and enterprise requirements.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary: "01",
              secondary: "Modernized G-Cube's digital presence",
            },
            {
              primary: "02",
              secondary: "Strengthened enterprise-focused brand positioning",
            },
            {
              primary: "03",
              secondary: "Improved user experience and website navigation",
            },
            {
              primary: "04",
              secondary:
                "Created clearer communication around e-learning solutions",
            },
            {
              primary: "05",
              secondary:
                "Developed a stronger digital experience for global enterprises",
            },
            {
              primary: "06",
              secondary:
                "Improved presentation of G-Cube's expertise and capabilities",
            },
            {
              primary: "07",
              secondary:
                "Established a stronger foundation for digital lead generation",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The G-Cube project was focused on turning a digital presence into a powerful extension of the brand's enterprise expertise. By combining strategic positioning, modern design, intuitive user experience, and solution-focused communication, the digital platform was reshaped to better represent G-Cube's role in the evolving e-learning landscape.",
          "The result was a more cohesive and enterprise-oriented digital experience designed to communicate G-Cube's capabilities, engage global audiences, and create meaningful opportunities for continued digital growth.",
        ],
      },
    },
  },

  {
    slug: "rspl",
    logo: furo,
    projectName: "RSPL - Furo",
    department: PROJECTS_DEPARTMENT.CREATIVE,
    description:
      "Furo Sports, a dynamic brand by RSPL Limited, aimed to capture the attention of fashion enthusiasts, sports lovers, and travelers through high-impact digital campaigns.",
    details: {
      heroImage: "/images/projects/hero/furohero.png",
      title: "Furo Sports",
      images: [furo1, furo2, furo3, furo4, furo5, furo6],
      description: [
        "Furo Sports, a dynamic brand by RSPL Limited, wanted to build a strong and distinctive connection with a young, energetic audience comprising fashion enthusiasts, sports lovers, and modern travelers. The objective was to create high-impact creative campaigns that captured the brand's active lifestyle spirit while making its products visually aspirational and culturally relevant.",
      ],
      strategies: {
        description: [
          "A creative-first campaign approach was developed to position Furo Sports at the intersection of fashion, sport, travel, and contemporary lifestyle. The communication focused on creating visually engaging content that could capture attention quickly and establish a recognizable personality for the brand.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Lifestyle-Led Storytelling",
              secondary:
                "Built creative narratives around active lifestyles, positioning Furo Sports as a natural part of fashion, sports, travel, and everyday movement.",
            },
            {
              primary: "Audience-Centric Creativity",
              secondary:
                "Developed concepts specifically designed to resonate with fashion-conscious consumers, sports enthusiasts, and young travelers.",
            },
            {
              primary: "High-Impact Visuals",
              secondary:
                "Created bold and energetic visual communication using dynamic compositions, contemporary styling, and strong product-focused imagery.",
            },
            {
              primary: "Fashion & Sports Integration",
              secondary:
                "Blended sportswear aesthetics with modern fashion trends to give the brand a distinctive and aspirational visual identity.",
            },
            {
              primary: "Travel-Inspired Content",
              secondary:
                "Introduced travel and adventure-led themes to showcase the versatility of Furo Sports products across different lifestyles and environments.",
            },
            {
              primary: "Digital-First Creative",
              secondary:
                "Developed engaging creative formats suited to digital platforms, enabling the brand to communicate effectively in fast-moving social and online environments.",
            },
            {
              primary: "Brand Personality",
              secondary:
                "Established a youthful, energetic, confident, and contemporary tone that helped Furo Sports stand apart within the competitive sports and lifestyle category.",
            },
          ],
          endDescription:
            "This creative approach helped Furo Sports communicate beyond the product itself, turning the brand into a representation of movement, style, adventure, and an active contemporary lifestyle.",
        },
      },
      result: {
        description: [
          "The campaign created a vibrant and contemporary creative identity for Furo Sports, helping the brand connect its products with the lifestyles and aspirations of its target audience.",
          "By combining fashion, sport, travel, and energetic visual storytelling, the campaign created high-impact communication designed to attract attention and strengthen brand recall across digital platforms.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary: "01",
              secondary:
                "Created a distinctive creative identity for Furo Sports",
            },
            {
              primary: "02",
              secondary:
                "Connected the brand with fashion, sports, and travel audiences",
            },
            {
              primary: "03",
              secondary:
                "Developed high-impact and visually engaging digital creatives",
            },
            {
              primary: "04",
              secondary:
                "Strengthened the brand's youthful and energetic personality",
            },
            {
              primary: "05",
              secondary: "Integrated fashion and sports-inspired storytelling",
            },
            {
              primary: "06",
              secondary:
                "Created aspirational lifestyle-led product communication",
            },
            {
              primary: "07",
              secondary:
                "Built a stronger digital presence through engaging creative content",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The Furo Sports campaign was about transforming an activewear brand into a lifestyle statement. By bringing together fashion, sports, travel, and contemporary visual storytelling, the creative direction gave the brand a more energetic and aspirational personality.",
          "The result was a collection of high-impact digital communication designed to capture attention, create emotional relevance, and position Furo Sports as a brand that moves with the lifestyle of its audience.",
        ],
      },
    },
  },
  {
    slug: "mytreks-ai",
    logo: mytreks,
    img: mytrekspic,
    projectName: "Mytreks",
    department: PROJECTS_DEPARTMENT.DEVELOPMENT,
    description:
      "MyTreks.ai is an AI-powered career discovery and college-preparation platform that helps middle and high school students build clarity, confidence, and direction for their future. The platform combines personalized AI-powered learning roadmaps with strengths-based assessments, gamified activities, 1:1 coaching, career counseling, professional mentorship, webinars, and real-world internship opportunities. Through its MyTrekShip program, students gain practical experience by working on live projects with companies over a structured three-week period, supported by mentors and guided milestones. MyTreks.ai also enables parents to stay involved in their child’s development while providing companies with an opportunity to mentor students and offer micro-internships. Overall, the platform focuses on helping students discover their strengths, explore career possibilities, develop essential skills, and make more informed decisions about their academic and professional future.",
    details: {
      heroImage: heroMytreks,
      title: "MyTreks.ai",
      description: [
        "MyTreks.ai is an AI-powered career discovery and college-preparation platform designed to help middle and high school students build clarity, confidence, and direction for their future. The platform brings together personalized AI-powered learning roadmaps, strengths-based assessments, gamified activities, 1:1 coaching, career counseling, professional mentorship, webinars, and real-world internship opportunities to create a comprehensive career-development ecosystem for students.",
      ],
      images: [
        mytreks1,
        mytreks2,
        mytreks3,
        mytreks4,
        mytreks5,
        mytreks6,
        mytreks7,
        mytreks8,
      ],
      techStack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AI Integration",
      ],
      strategies: {
        description: [
          "The platform was structured as a comprehensive digital ecosystem connecting students, parents, mentors, counselors, and companies. The architecture focused on delivering personalized career guidance while combining AI-driven recommendations with human mentorship and practical real-world experiences.",
        ],
        details: {
          heading: "Architecture and Strategy",
          data: [
            {
              primary: "AI Powered Career Discovery",
              secondary:
                "Integrated AI-driven learning roadmaps and career exploration experiences to help students identify potential career paths based on their interests, strengths, and development goals.",
            },
            {
              primary: "Strengths Based Assessment",
              secondary:
                "Implemented assessment-driven experiences that help students understand their strengths, interests, and capabilities while using those insights to guide their career exploration.",
            },
            {
              primary: "Personalized Learning Roadmaps",
              secondary:
                "Created personalized development journeys that help students identify relevant skills, learning opportunities, and milestones aligned with their future academic and professional goals.",
            },
            {
              primary: "Gamified Student Experience",
              secondary:
                "Introduced engaging and gamified activities to make career discovery and skill development more interactive, motivating students to actively participate in their learning journey.",
            },
            {
              primary: "Mentorship and Coaching",
              secondary:
                "Connected students with 1:1 coaches, career counselors, and professional mentors to complement AI-driven guidance with personalized human support.",
            },
            {
              primary: "MyTrekShip Program",
              secondary:
                "Enabled students to gain practical experience through structured three-week micro-internships, where they work on live projects with companies while following guided milestones and receiving mentor support.",
            },
            {
              primary: "Parent Engagement",
              secondary:
                "Provided parents with visibility into their child's development and career journey, enabling them to remain actively involved in important academic and professional decisions.",
            },
            {
              primary: "Company and Mentor Ecosystem",
              secondary:
                "Created opportunities for companies and professionals to mentor students, participate in webinars, and provide real-world project and micro-internship experiences.",
            },
          ],
          endDescription:
            "The platform brings together AI-powered discovery, personalized learning, human mentorship, and real-world experience to create a connected career-development ecosystem for students.",
        },
      },
      features: {
        heading: "Key Features",
        data: [
          {
            primary: "AI Career Discovery",
            secondary:
              "AI-powered experiences help students explore career possibilities and identify directions aligned with their strengths and interests.",
          },
          {
            primary: "Career Assessments",
            secondary:
              "Strengths-based assessments provide students with insights that support more informed academic and career decisions.",
          },
          {
            primary: "Learning Roadmaps",
            secondary:
              "Personalized roadmaps guide students through relevant skills, activities, and development milestones.",
          },
          {
            primary: "Gamified Activities",
            secondary:
              "Interactive activities make career exploration and skill development more engaging for students.",
          },
          {
            primary: "1:1 Coaching",
            secondary:
              "Students can receive personalized guidance through coaching and career counseling.",
          },
          {
            primary: "Professional Mentorship",
            secondary:
              "Industry professionals provide students with practical guidance, insights, and exposure to real-world career experiences.",
          },
          {
            primary: "MyTrekShip",
            secondary:
              "A structured three-week micro-internship program where students work on live company projects with mentor support and guided milestones.",
          },
          {
            primary: "Webinars",
            secondary:
              "Students gain access to learning and career insights through webinars involving professionals and industry experts.",
          },
          {
            primary: "Parent Participation",
            secondary:
              "Parents can stay involved in their child's development and follow their progress throughout the career-discovery journey.",
          },
          {
            primary: "Company Engagement",
            secondary:
              "Companies can participate in the ecosystem by mentoring students and providing micro-internship opportunities.",
          },
        ],
      },
      result: {
        description: [
          "MyTreks.ai brings multiple aspects of career discovery and preparation together within a single platform, creating a connected experience for students, parents, mentors, counselors, and companies.",
          "The platform combines personalized AI-powered guidance with human mentorship and practical project experience, giving students opportunities to explore careers while developing relevant skills and confidence.",
        ],
        details: {
          heading: "Results",
          data: [
            {
              primary: "AI powered career discovery and personalized learning",
            },
            {
              primary: "Integrated strengths based assessment experience",
            },
            {
              primary:
                "Connected students with coaches, counselors, and professional mentors",
            },
            {
              primary:
                "Enabled structured three week real world micro internships",
            },
            {
              primary: "Created opportunities for companies to mentor students",
            },
            {
              primary: "Enabled parents to participate in student development",
            },
            {
              primary:
                "Combined career exploration with practical skill development",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "MyTreks.ai is designed to make career discovery more informed, personalized, and practical for students. By combining AI-powered recommendations with assessments, coaching, mentorship, and real-world project experiences, the platform creates a comprehensive ecosystem that supports students throughout their journey toward academic and professional clarity.",
          "Through its connected ecosystem of students, parents, mentors, counselors, and companies, MyTreks.ai bridges the gap between career exploration and real-world experience, helping students discover their strengths, develop essential skills, and make more informed decisions about their future.",
        ],
      },
    },
  },
  // {
  //   slug: "red-chief",
  //   logo: redchief,
  //   img: redchiefpic,
  //   projectName: "Red Chief",
  //   department: PROJECTS_DEPARTMENT.CREATIVE,
  //   description: "Red Chief is an Indian lifestyle and footwear brand founded in 1997, known primarily for its premium leather footwear for men. The brand focuses on combining Indian craftsmanship, durability, comfort, and contemporary styling, offering products such as formal shoes, casual shoes, sneakers, boots, loafers, sandals, and sports footwear. In addition to footwear, Red Chief has expanded into men’s clothing and accessories, including T-shirts, shirts, jeans, belts, socks, and shoe-care products. Its website provides a complete e-commerce experience with product browsing, search, filters, offers, cart and checkout, order tracking, store locator, and franchise information. Red Chief also operates 230+ stores across India, positioning itself as a broader men’s lifestyle brand rather than only a footwear company.",
  //   details: {
  //     title: "Red Chief",
  //     description: [
  //       "Red Chief is an Indian lifestyle and footwear brand founded in 1997, known primarily for its premium leather footwear for men. The brand focuses on combining Indian craftsmanship, durability, comfort, and contemporary styling, offering products such as formal shoes, casual shoes, sneakers, boots, loafers, sandals, and sports footwear. In addition to footwear, Red Chief has expanded into men’s clothing and accessories, including T-shirts, shirts, jeans, belts, socks, and shoe-care products. Its website provides a complete e-commerce experience with product browsing, search, filters, offers, cart and checkout, order tracking, store locator, and franchise information. Red Chief also operates 230+ stores across India, positioning itself as a broader men’s lifestyle brand rather than only a footwear company."
  //     ]
  //   }
  // },
  {
    slug: "hautebaby",
    logo: hautebaby,
    img: hauteBabypic,
    projectName: "Haute Baby",
    department: PROJECTS_DEPARTMENT.DEVELOPMENT,
    description:
      "Haute Baby is a premium baby clothing brand that offers stylish and comfortable clothes for babies and toddlers. The brand is known for its unique designs, high-quality fabrics, and attention to detail. Haute Baby's website provides a complete e-commerce experience with product browsing, search, filters, offers, cart and checkout, order tracking, and store locator. The brand also offers a loyalty program for its customers.",
    details: {
      heroImage: hauteHero,
      title: "Haute Baby",
      description: [
        "Haute Baby is a premium baby clothing brand offering stylish, comfortable, and thoughtfully designed clothing for babies and toddlers. The project focused on creating a complete digital commerce experience that combined the brand's premium visual identity with robust e-commerce functionality, enabling customers to discover products, explore offers, search and filter collections, complete purchases, track orders, locate physical stores, and participate in the brand's loyalty program.",
      ],
      techStack: ["Shopify", "Payment Gateway Integration"],
      strategies: {
        description: [
          "The platform was designed as a unified digital ecosystem that combines premium brand presentation with a seamless e-commerce journey. The approach focused on making Haute Baby's products visually engaging and easy to discover while providing customers with a smooth experience from product exploration through purchase and post-purchase engagement.",
        ],
        details: {
          heading: "Architecture & Strategy",
          data: [
            {
              primary: "Premium Digital Experience",
              secondary:
                "Created a refined digital experience that reflects Haute Baby's premium positioning, distinctive designs, high-quality fabrics, and attention to detail.",
            },
            {
              primary: "Product Discovery",
              secondary:
                "Developed an intuitive browsing experience that allows customers to explore collections and discover clothing designed for babies and toddlers.",
            },
            {
              primary: "Search & Filters",
              secondary:
                "Implemented search and filtering functionality to help customers quickly find products based on their specific shopping preferences.",
            },
            {
              primary: "Offers & Promotions",
              secondary:
                "Integrated promotional experiences to highlight offers and provide customers with greater visibility into available deals.",
            },
            {
              primary: "E-commerce Journey",
              secondary:
                "Built a streamlined shopping experience covering product selection, cart management, checkout, and purchase completion.",
            },
            {
              primary: "Order Management",
              secondary:
                "Enabled customers to track their orders and remain informed throughout the post-purchase journey.",
            },
            {
              primary: "Store Locator",
              secondary:
                "Connected the online and offline brand experience through a store locator that helps customers discover physical Haute Baby locations.",
            },
            {
              primary: "Loyalty Experience",
              secondary:
                "Integrated a customer loyalty program to encourage continued engagement and strengthen long-term relationships with the brand.",
            },
          ],
          endDescription:
            "The combined approach brought Haute Baby's premium brand identity, e-commerce capabilities, and customer engagement features together within one connected digital ecosystem.",
        },
      },
      features: {
        heading: "Key Features",
        data: [
          {
            primary: "Product Catalogue",
            secondary:
              "Explore Haute Baby's premium clothing collections for babies and toddlers.",
          },
          {
            primary: "Search & Filters",
            secondary:
              "Find relevant products quickly through intuitive search and filtering functionality.",
          },
          {
            primary: "Offers & Promotions",
            secondary:
              "Discover featured products, offers, and promotional campaigns.",
          },
          {
            primary: "Cart & Checkout",
            secondary:
              "Complete purchases through a streamlined shopping and checkout experience.",
          },
          {
            primary: "Order Tracking",
            secondary:
              "Track purchases and stay informed throughout the delivery journey.",
          },
          {
            primary: "Store Locator",
            secondary:
              "Find Haute Baby's physical retail locations through the digital platform.",
          },
          {
            primary: "Loyalty Program",
            secondary:
              "Engage with the brand through a dedicated customer loyalty experience.",
          },
        ],
      },
      result: {
        description: [
          "The project successfully brought Haute Baby's premium brand experience and complete e-commerce functionality together within a single digital platform. Customers can move seamlessly from discovering products and exploring offers to purchasing, tracking orders, finding stores, and engaging with the loyalty program.",
          "The unified experience creates a stronger connection between Haute Baby's digital presence, e-commerce operations, physical retail, and ongoing customer engagement.",
        ],
        details: {
          heading: "Results",
          data: [
            {
              primary: "Created a complete premium e-commerce experience",
            },
            {
              primary: "Strengthened Haute Baby's digital brand presence",
            },
            {
              primary: "Simplified product discovery and online shopping",
            },
            {
              primary: "Integrated offers, cart, and checkout functionality",
            },
            {
              primary: "Enabled post-purchase order tracking",
            },
            {
              primary:
                "Connected online and offline retail through store locator",
            },
            {
              primary: "Integrated customer loyalty and engagement",
            },
            {
              primary:
                "Unified brand experience across the complete customer journey",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The Haute Baby project successfully combines technology, e-commerce, and premium brand communication into a single digital experience. The platform goes beyond simply selling products by creating a connected journey that covers discovery, engagement, purchase, post-purchase interaction, physical store discovery, and customer loyalty.",
          "By bringing the development and digital experience together, Haute Baby has a scalable platform that reflects its premium positioning while giving customers a convenient and engaging way to interact with the brand.",
        ],
      },
    },
  },
  {
    slug: "namaste-india",
    logo: namasteIndia,
    img: namastepic,
    projectName: "Namaste India",
    department: PROJECTS_DEPARTMENT.DEVELOPMENT,
    description:
      "Namaste India is an Indian dairy and frozen-dessert brand focused on providing fresh, nutritious, and quality food products to consumers. Operated by NIF Private Limited and supported by the RSPL Group, the brand offers a wide range of dairy products including milk, curd, paneer, ghee, butter, lassi, flavoured milk, and buttermilk. Namaste India has also expanded into ice creams and frozen desserts, offering a diverse portfolio of cones, cups, bars, kulfis, tubs, family packs, and ice-cream cakes in both classic and traditional Indian flavours. The brand emphasizes quality, modern processing technology, and fresh milk to deliver products designed for everyday consumption as well as indulgent occasions.",
    details: {
      heroImage: namasteHero,
      title: "Namaste India",
      description: [
        "Namaste India is an Indian dairy and frozen-dessert brand focused on delivering fresh, nutritious, and quality food products to consumers. The digital presence was designed to showcase the brand's extensive portfolio of dairy and frozen-dessert products while communicating its focus on quality, freshness, modern processing technology, and everyday consumer experiences.",
      ],
      strategies: {
        description: [
          "The digital strategy focused on creating a strong and engaging brand presence that could bring Namaste India's diverse product portfolio to life. The experience was structured to make it easy for consumers to explore dairy products and frozen desserts while communicating the brand's values, product variety, and quality proposition.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Brand Positioning",
              secondary:
                "Presented Namaste India as a modern Indian dairy and frozen-dessert brand built around freshness, quality, nutrition, and consumer trust.",
            },
            {
              primary: "Product Portfolio",
              secondary:
                "Organized and showcased the brand's wide range of products, including milk, curd, paneer, ghee, butter, lassi, flavoured milk, and buttermilk.",
            },
            {
              primary: "Frozen Dessert Showcase",
              secondary:
                "Created engaging product communication for cones, cups, bars, kulfis, tubs, family packs, and ice-cream cakes across classic and traditional Indian flavours.",
            },
            {
              primary: "Quality Communication",
              secondary:
                "Highlighted the brand's emphasis on fresh milk, quality ingredients, and modern processing technology through clear and engaging digital storytelling.",
            },
            {
              primary: "Consumer-Centric Experience",
              secondary:
                "Structured the digital experience around everyday consumption as well as indulgent occasions, helping consumers connect products with different moments and preferences.",
            },
            {
              primary: "Visual Product Storytelling",
              secondary:
                "Used product-focused visual communication to make the extensive portfolio engaging, accessible, and easy for consumers to explore.",
            },
            {
              primary: "Category Navigation",
              secondary:
                "Created a clear digital structure that helps users explore Namaste India's dairy and frozen-dessert categories while discovering the breadth of the brand's offerings.",
            },
          ],
          endDescription:
            "The digital approach brought Namaste India's diverse product portfolio, quality proposition, and modern brand identity together to create a stronger connection with consumers.",
        },
      },
      result: {
        description: [
          "The digital experience created a comprehensive platform for presenting Namaste India's dairy and frozen-dessert portfolio while strengthening the brand's overall digital identity.",
          "By combining product discovery, visual storytelling, and quality-focused communication, the platform made the brand's diverse offerings easier to explore and created a more engaging consumer experience.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary: "Strengthened Namaste India's digital brand presence",
            },
            {
              primary: "Presented the complete dairy product portfolio",
            },
            {
              primary: "Showcased the expanded frozen-dessert range",
            },
            {
              primary:
                "Communicated the brand's focus on freshness and quality",
            },
            {
              primary: "Highlighted modern processing and product quality",
            },
            {
              primary: "Created a more engaging product discovery experience",
            },
            {
              primary:
                "Connected everyday consumption with indulgent product experiences",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The Namaste India digital experience brings together the brand's heritage in dairy with its growing frozen-dessert portfolio through a modern and engaging digital presence. The platform allows consumers to explore the breadth of the brand while understanding its focus on freshness, quality, nutrition, and innovation.",
          "By combining strong product presentation with clear brand storytelling, the digital experience creates a cohesive platform for Namaste India to connect with consumers across everyday dairy needs and moments of indulgence.",
        ],
      },
    },
  },
  {
    slug: "netra-niti",
    logo: netraniti,
    img: netrapic,
    projectName: "Netra Niti",
    department: PROJECTS_DEPARTMENT.DEVELOPMENT,
    description:
      "Netra Niti is a child-focused eye-care platform dedicated to preventing and managing childhood myopia through early detection, personalized treatment, and continuous vision monitoring. The platform provides comprehensive services including school vision screenings, eye examinations, advanced myopia-control treatments, personalized care plans, and preventive lifestyle guidance. Its 360° vision protection approach combines modern diagnostic techniques, evidence-based treatments such as atropine therapy and Ortho-K, and ongoing monitoring to help protect children’s eyesight in the long term. Netra Niti also focuses on educating parents and children about healthy vision habits, including spending time outdoors, limiting screen exposure, maintaining a safe reading distance, and getting regular eye check-ups. Overall, the platform aims to provide scientific, accessible, and child-centered eye care that supports healthier vision and brighter futures for children.",
    details: {
      heroImage: netrahero,
      title: "Netra Niti",
      description: [
        "Netra Niti is a child-focused eye-care platform dedicated to preventing and managing childhood myopia through early detection, personalized treatment, and continuous vision monitoring. The platform brings together school vision screenings, eye examinations, advanced myopia-control treatments, personalized care plans, and preventive lifestyle guidance into a comprehensive digital experience for children and their parents.",
      ],
      strategies: {
        description: [
          "The platform was structured around a child-centered vision-care journey, making it easier for parents and children to understand, access, and manage eye-care services. The experience combines screening, diagnosis, personalized treatment, education, and continuous monitoring to support long-term vision protection.",
        ],
        details: {
          heading: "Architecture & Strategy",
          data: [
            {
              primary: "Early Vision Screening",
              secondary:
                "Created a digital experience to communicate and support school-based and early vision screening programs designed to identify potential vision concerns at an early stage.",
            },
            {
              primary: "Eye Examination",
              secondary:
                "Presented eye examination services in a clear and accessible manner, helping parents understand the importance of regular vision assessments for children.",
            },
            {
              primary: "Myopia Management",
              secondary:
                "Structured information around advanced myopia-control approaches, including atropine therapy and Ortho-K, as part of the platform's comprehensive vision-care offering.",
            },
            {
              primary: "Personalized Care Plans",
              secondary:
                "Focused the experience around personalized treatment and care plans based on each child's vision requirements and ongoing development.",
            },
            {
              primary: "Continuous Monitoring",
              secondary:
                "Highlighted ongoing vision monitoring as an important part of managing childhood myopia and supporting long-term eye health.",
            },
            {
              primary: "360° Vision Protection",
              secondary:
                "Connected screening, diagnosis, treatment, monitoring, and preventive guidance into a holistic approach to childhood vision protection.",
            },
            {
              primary: "Parent & Child Education",
              secondary:
                "Provided educational guidance around healthy vision habits, including outdoor activity, responsible screen exposure, safe reading distance, and regular eye check-ups.",
            },
            {
              primary: "Child-Centered Experience",
              secondary:
                "Designed the platform's communication around making eye care more understandable, accessible, and approachable for both children and their parents.",
            },
          ],
          endDescription:
            "The platform brings early detection, personalized care, evidence-based treatment, continuous monitoring, and preventive education together to create a connected vision-care experience for children and families.",
        },
      },
      features: {
        heading: "Key Features",
        data: [
          {
            primary: "School Vision Screening",
            secondary:
              "Supports early identification of potential vision concerns through school-based screening programs.",
          },
          {
            primary: "Eye Examinations",
            secondary:
              "Provides information and access to comprehensive children's eye examinations.",
          },
          {
            primary: "Myopia Control",
            secondary:
              "Presents advanced myopia-management options including atropine therapy and Ortho-K.",
          },
          {
            primary: "Personalized Care",
            secondary:
              "Supports individualized treatment and care plans based on children's vision requirements.",
          },
          {
            primary: "Vision Monitoring",
            secondary:
              "Encourages continuous monitoring to track children's vision and support long-term eye health.",
          },
          {
            primary: "Lifestyle Guidance",
            secondary:
              "Educates families about outdoor activity, screen exposure, reading distance, and regular eye check-ups.",
          },
          {
            primary: "Parent Education",
            secondary:
              "Provides parents with accessible information to better understand childhood myopia and healthy vision practices.",
          },
          {
            primary: "360° Vision Protection",
            secondary:
              "Combines prevention, screening, treatment, monitoring, and education into one comprehensive approach.",
          },
        ],
      },
      result: {
        description: [
          "The Netra Niti platform brings multiple aspects of childhood eye care together within a single digital experience, connecting early detection, treatment, monitoring, and preventive education.",
          "The platform creates a structured journey for children and parents to understand myopia, explore available care options, adopt healthier vision habits, and remain engaged with ongoing eye-care management.",
        ],
        details: {
          heading: "Results",
          data: [
            {
              primary:
                "Created a comprehensive digital platform for childhood eye care",
            },
            {
              primary:
                "Connected early detection with personalized vision care",
            },
            {
              primary: "Presented advanced myopia-control treatment options",
            },
            {
              primary:
                "Established continuous vision monitoring as part of the care journey",
            },
            {
              primary:
                "Provided preventive lifestyle and healthy vision guidance",
            },
            {
              primary:
                "Created an accessible experience for parents and children",
            },
            {
              primary:
                "Unified education, prevention, treatment, and monitoring",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "Netra Niti is designed to make childhood eye care more accessible, informed, and proactive. By combining early screening, comprehensive examinations, personalized care, myopia-control treatments, continuous monitoring, and preventive education, the platform supports a complete approach to children's vision health.",
          "The result is a child-centered digital ecosystem that helps parents and children better understand eye health, adopt healthier vision habits, and engage with ongoing care for healthier vision and brighter futures.",
        ],
      },
    },
  },
  {
    slug: "rasdelta",
    logo: rasdelta,
    img: raspic,
    projectName: "Ras Delta",
    department: PROJECTS_DEPARTMENT.DIGITAL,
    description:
      "Rasdelta is an Indian luxury bathroom and wellness solutions company specializing in the design, manufacturing, and supply of premium bathing and relaxation products. The company offers a comprehensive range of products including bathtubs, Jacuzzi and whirlpool systems, multifunction shower enclosures, shower panels, rain showers, steam baths, sauna rooms, and other wellness equipment. Rasdelta combines modern technology, innovative designs, quality materials, and functional features to deliver a luxurious and spa-like bathing experience for customers. With a focus on comfort, aesthetics, and wellness, the company provides solutions suitable for modern residential and commercial spaces, helping transform conventional bathrooms into sophisticated relaxation and rejuvenation environments.",
    details: {
      heroImage: "/images/projects/hero/rasdeltahero.png",
      title: "Rasdelta",
      description: [
        "Rasdelta is an Indian luxury bathroom and wellness solutions company specializing in premium bathing, relaxation, and wellness products. The digital experience was designed to showcase its comprehensive product portfolio while positioning the brand around luxury, modern technology, sophisticated design, comfort, and wellness.",
      ],
      strategies: {
        description: [
          "The digital strategy focused on creating a premium brand experience that reflects Rasdelta's expertise in luxury bathrooms and wellness solutions. The platform was structured to help customers explore an extensive range of products while communicating the design, technology, quality, and lifestyle value behind each solution.",
        ],
        details: {
          heading: "The strategy focused on:",
          data: [
            {
              primary: "Luxury Brand Positioning",
              secondary:
                "Positioned Rasdelta as a premium bathroom and wellness solutions brand through sophisticated visual communication and a refined digital experience.",
            },
            {
              primary: "Product Portfolio",
              secondary:
                "Presented the company's extensive range of bathtubs, Jacuzzi and whirlpool systems, shower enclosures, shower panels, rain showers, steam baths, sauna rooms, and other wellness solutions.",
            },
            {
              primary: "Premium Product Storytelling",
              secondary:
                "Used product-focused communication to highlight the design, functionality, technology, materials, and craftsmanship behind Rasdelta's solutions.",
            },
            {
              primary: "Wellness Experience",
              secondary:
                "Positioned the products beyond conventional bathroom fixtures by communicating their role in creating spa-like environments for relaxation, rejuvenation, and personal wellness.",
            },
            {
              primary: "Design & Aesthetics",
              secondary:
                "Created a visually sophisticated experience that reflects the contemporary designs and premium aesthetic associated with Rasdelta's product portfolio.",
            },
            {
              primary: "Technology Communication",
              secondary:
                "Highlighted modern technologies and functional features integrated into Rasdelta's bathing and wellness solutions.",
            },
            {
              primary: "Residential & Commercial Applications",
              secondary:
                "Presented Rasdelta's solutions as suitable for modern residential and commercial environments, demonstrating their versatility across different spaces.",
            },
            {
              primary: "Product Discovery",
              secondary:
                "Structured the digital experience to make it easier for visitors to explore product categories, understand available solutions, and discover products suited to their requirements.",
            },
          ],
          endDescription:
            "The digital approach transformed Rasdelta's product portfolio into a premium lifestyle experience, connecting luxury bathroom solutions with modern design, technology, comfort, and wellness.",
        },
      },
      result: {
        description: [
          "The digital experience created a stronger premium presence for Rasdelta while providing a comprehensive platform for showcasing its luxury bathroom and wellness portfolio.",
          "By combining sophisticated visual communication with detailed product storytelling, the platform helps customers understand how Rasdelta's solutions can transform conventional bathrooms into refined spaces for relaxation and rejuvenation.",
        ],
        details: {
          heading: "Key Outcomes",
          data: [
            {
              primary: "Strengthened Rasdelta's premium digital presence",
            },
            {
              primary:
                "Showcased the complete luxury bathroom and wellness portfolio",
            },
            {
              primary:
                "Highlighted modern technology and innovative product features",
            },
            {
              primary:
                "Communicated the brand's focus on comfort, aesthetics, and wellness",
            },
            {
              primary: "Created an engaging product discovery experience",
            },
            {
              primary:
                "Presented residential and commercial wellness solutions",
            },
            {
              primary:
                "Positioned bathroom products as premium lifestyle and wellness experiences",
            },
          ],
        },
      },
      conclusion: {
        description: [
          "The Rasdelta digital experience brings together luxury, technology, design, and wellness to communicate a more sophisticated vision of the modern bathroom. The platform presents the brand's extensive product portfolio while highlighting the experience and lifestyle benefits behind its solutions.",
          "By positioning bathing and bathroom spaces as environments for relaxation and rejuvenation, the digital experience reinforces Rasdelta's vision of transforming conventional spaces into premium wellness destinations.",
        ],
      },
    },
  },
  // {
  //   slug: "shipsmith",
  //   logo: shipimg,
  //   img: shipimg,
  //   projectName: "Ship Smith",
  //   department: PROJECTS_DEPARTMENT.DEVELOPMENT,
  //   description: "For Shipsmith, we provided a dual approach of custom website development and creative graphic design.We built a responsive, high-performing website paired with compelling visual assets that effectively communicate their brand identity and offerings.",
  //   details: {
  //     title: "Ship Smith",
  //     description: [
  //       "For Shipsmith, we provided a dual approach of custom website development and creative graphic design.We built a responsive, high-performing website paired with compelling visual assets that effectively communicate their brand identity and offerings."
  //     ]
  //   }
  // },
  // {
  //   slug: "gabicci",
  //   logo: gabiccipic,
  //   img: gabiccipic,
  //   projectName: "Gabicci",
  //   department: PROJECTS_DEPARTMENT.DIGITAL,
  //   description: "For Gabicci, our focus was on strengthening the brand’s e-commerce presence by managing and optimizing online sales operations.This involves providing a seamless shopping experience and ensuring smooth order flow to support consistent revenue growth.",
  //   details: {
  //     title: "Gabicci",
  //     description: [
  //       "For Gabicci, our focus was on strengthening the brand’s e-commerce presence by managing and optimizing online sales operations.This involves providing a seamless shopping experience and ensuring smooth order flow to support consistent revenue growth."
  //     ]
  //   }
  // },
  // {
  //   slug: "hishmast",
  //   logo: highmastpic,
  //   img: highmastpic,
  //   projectName: "Highmast",
  //   department: PROJECTS_DEPARTMENT.DEVELOPMENT,
  //   description: "For Highmast, we provided end-to-end website development services.We focused on building a robust, responsive, and visually appealing corporate website that effectively showcases their services and expertise, ensuring an optimal user experience across all devices.",
  //   details: {
  //     title: "Highmast",
  //     description: [
  //       "For Highmast, we provided end-to-end website development services.We focused on building a robust, responsive, and visually appealing corporate website that effectively showcases their services and expertise, ensuring an optimal user experience across all devices."
  //     ]
  //   }
  // },
  // {
  //   slug: "pageone",
  //   logo: page1,
  //   img: page1,
  //   projectName: "Page 1 travel",
  //   department: PROJECTS_DEPARTMENT.DEVELOPMENT,
  //   description: "For Page 1 Travel, we built a modern, high-performance website combining responsive frontend architecture with a robust backend service.Utilizing Next.js and NestJS, we created a scalable and visually engaging platform to enhance the overall traveler experience.",
  //   details: {
  //     title: "Page 1 Travel",
  //     description: [
  //       "For Page 1 Travel, we built a modern, high-performance website combining responsive frontend architecture with a robust backend service.Utilizing Next.js and NestJS, we created a scalable and visually engaging platform to enhance the overall traveler experience."
  //     ]
  //   }
  // },
];

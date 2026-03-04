export interface BlogProps {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  shortDescription: string;
  content: string;
  keyPoints: { point: string; description: string }[];
  coverImage: string;
  tags: string[];
}

export const BLOGS_DATA: BlogProps[] = [
  {
    id: "future-of-ai-in-enterprise",
    title: "The Future of AI in Enterprise Architecture",
    author: "Digixito Engineering Team",
    date: "October 12, 2026",
    category: "AI & Innovation",
    shortDescription:
      "Exploring how integrated LLMs and RAG frameworks are fundamentally reshaping how enterprises handle their internal data.",
    content:
      "Artificial Intelligence is no longer just a separate tool; it's becoming the foundation of enterprise architecture. Organizations are moving away from monolithic knowledge bases towards dynamic, AI-driven systems that can actively process and contextualize information. Retrieval-Augmented Generation (RAG) is at the forefront of this shift, allowing companies to leverage large language models using their proprietary data securely. In this blog, we explore the implementation challenges, security considerations, and the incredible ROI of properly integrated AI systems.",
    keyPoints: [
      {
        point: "RAG Frameworks",
        description: "Securely integrating LLMs with proprietary data.",
      },
      {
        point: "Security First",
        description: "Maintaining data privacy while utilizing cloud AI.",
      },
      {
        point: "Measurable ROI",
        description: "Reducing information retrieval times by up to 80%.",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    tags: ["AI", "Enterprise", "Architecture", "RAG"],
  },
  {
    id: "headless-commerce-nextjs",
    title: "Why Headless Commerce is the Future",
    author: "Digixito Product Team",
    date: "September 28, 2026",
    category: "Product Engineering",
    shortDescription:
      "A deep dive into the benefits of decoupling your frontend using frameworks like Next.js for insane speed.",
    content:
      "The days of tightly coupled monolithic eCommerce platforms are ending. Headless commerce architecture, which separates the frontend presentation layer from the backend eCommerce logic, provides unparalleled flexibility. By utilizing modern frameworks like Next.js, brands can deliver lightning-fast, ultra-personalized shopping experiences. This approach not only boosts core web vitals and SEO but allows marketing teams to iterate on the user experience without requiring extensive backend deployments.",
    keyPoints: [
      {
        point: "Decoupled Architecture",
        description: "Separating frontend from complex backend logic.",
      },
      {
        point: "Performance",
        description: "Next.js enabling sub-second page loads.",
      },
      {
        point: "Flexibility",
        description: "Rapid UI iteration without backend constraints.",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    tags: ["eCommerce", "Next.js", "Headless", "Performance"],
  },
  {
    id: "design-intelligence-ui",
    title: "Design Intelligence: Beyond Standard UX",
    author: "Digixito Design Team",
    date: "August 15, 2026",
    category: "Design Intelligence",
    shortDescription:
      "How we are merging AI with user experience design to create interfaces that adapt to user behavior.",
    content:
      "Traditional UX design relies on static assumptions about user journeys. Design Intelligence represents the next evolution: interfaces that learn, adapt, and predict user needs in real-time. By integrating behavioral tracking with lightweight AI models, interfaces can dynamically re-prioritize actions (like floating a 'checkout' button when purchase intent is high). We examine how these adaptive interfaces are built and the ethical considerations of persuasive design.",
    keyPoints: [
      {
        point: "Adaptive UI",
        description: "Interfaces that change based on live user intent.",
      },
      {
        point: "Predictive Models",
        description: "Anticipating the user's next action.",
      },
      {
        point: "Ethical Design",
        description: "Balancing helpfulness with user autonomy.",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
    tags: ["UI/UX", "Design", "Machine Learning", "Innovation"],
  },
];

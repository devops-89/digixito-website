export interface CaseStudyProps {
  id: string;
  title: string;
  clientName: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: { metric: string; description: string }[];
  coverImage: string;
  gallery: string[];
}

export const CASE_STUDIES_DATA: CaseStudyProps[] = [
  {
    id: "ecom-platform-revamp",
    title: "Revolutionizing E-Commerce with Next.js",
    clientName: "Global Retail Co.",
    category: "Product Engineering",
    shortDescription:
      "A complete technical overhaul of a legacy e-commerce platform leading to a 45% increase in conversion rates.",
    fullDescription:
      "Global Retail Co. approached us with a monolithic architecture that was slow, hard to scale, and costing them potential sales. We completely migrated their infrastructure to a headless commerce architecture using Next.js and specialized cloud APIs.",
    challenge:
      "The client's existing website took over 6 seconds to load interactive elements, drastically affecting mobile conversions. Their database was coupled tightly with the frontend, making adding new features a multi-week endeavor.",
    solution:
      "Our team decoupled the frontend using Next.js, implementing Static Site Generation (SSG) for product catalogs and Server-Side Rendering (SSR) for personalized user carts. We integrated a robust headless CMS to give the marketing team immediate control over content without developer intervention.",
    results: [
      { metric: "45%", description: "Increase in Mobile Conversion Rate" },
      { metric: "3.2x", description: "Faster Average Page Load Time" },
      { metric: "Zero", description: "Downtime during Black Friday events" },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "ai-support-agent",
    title: "Intelligent AI Customer Support Integration",
    clientName: "FinServe Analytics",
    category: "AI Transformation",
    shortDescription:
      "Deploying a custom LLM model to handle 70% of Level 1 customer service tickets automatically.",
    fullDescription:
      "FinServe Analytics was drowning in repetitive customer support tickets regarding straightforward account inquiries. We designed and trained a custom Language Model embedded directly into their user dashboard to resolve issues instantaneously.",
    challenge:
      "Customer satisfaction metrics were dropping due to 24-hour response delays. The client needed a secure, intelligent system that could parse complex financial data while strictly adhering to compliance regulations.",
    solution:
      "We built a Retrieval-Augmented Generation (RAG) pipeline that securely referenced internal documentation without exposing user data to public AI structures. The chatbot was deployed with a fallback mechanism that seamlessly transferred complex queries to human agents with full context.",
    results: [
      { metric: "70%", description: "Reduction in L1 Support Tickets" },
      { metric: "< 2s", description: "Average AI Response Time" },
      { metric: "+22%", description: "Increase in Customer CSAT Score" },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "brand-identity-refresh",
    title: "Modernizing a Heritage Brand",
    clientName: "Brewster & Co.",
    category: "Business Transformation",
    shortDescription:
      "A complete 360-degree brand strategy and visual redesign for a 50-year-old coffee roaster.",
    fullDescription:
      "Brewster & Co. had a loyal older demographic but struggled to appeal to modern espresso enthusiasts and younger audiences. Our design intelligence team completely reinvented their brand presence from packaging to digital storefronts.",
    challenge:
      "The core challenge was modernizing the aesthetic without alienating the legacy customers who recognized the brand's long-standing credibility. The existing website was also non-responsive and lacked an online subscription model.",
    solution:
      "We introduced a clean, minimalist design language paired with bold, modern typography while retaining their historic crest icon. We then launched a fully responsive web application featuring a custom coffee subscription builder.",
    results: [
      { metric: "150%", description: "Growth in Online Subscription Sales" },
      { metric: "8M+", description: "Impressions from new Social Campaigns" },
      {
        metric: "35%",
        description: "Increase in Under-30 Customer Demographic",
      },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800",
    ],
  },
];

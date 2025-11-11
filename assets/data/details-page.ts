import { DETAILS_PAGE_PROPS } from "@/utils/types";
import ecommerce from "@/services/machine-learning/ecommerce-recommended-engine.png";
import forecasting from "@/services/machine-learning/demand-forecasting.jpg";
import fraud_detection from "@/services/machine-learning/fraud_detection.jpg";
export const DETAILS_PAGE_DETAILS: DETAILS_PAGE_PROPS[] = [
  {
    slug: "machine-learning-and-predictive-models",
    title: "AI Transformation",
    heroSection: {
      heading: "Machine Learning & Predictive Models",
      description: `At Digixito, we combine the power of machine learning with predictive analytics to build solutions that scale.
From real-time insights to intelligent automation, our models learn from your data to uncover patterns, forecast outcomes, and enhance performance across your operations.
We help businesses use AI responsibly — transforming complex datasets into actionable intelligence that drives measurable results.
`,
    },
    ourServices: {
      heading: "Machine Learning Services",
      description:
        "We offer end-to-end ML and predictive modeling solutions tailored to your business goals:",
      services_data: [
        {
          service_name: "Predictive Analytics",
          service_description:
            "Anticipate trends, customer behavior, and operational risks before they happen.",
        },
        {
          service_name: "Recommendation Systems",
          service_description:
            "Deliver personalized experiences through intelligent product or content suggestions.",
        },
        {
          service_name: "Natural Language Processing (NLP)",
          service_description:
            "Extract meaning, emotion, and intent from customer conversations.",
        },
        {
          service_name: "Computer Vision Solutions",
          service_description:
            "Enable automated image classification, quality control, and object detection.",
        },
        {
          service_name: "MLOps & Deployment",
          service_description:
            "Streamline model training, monitoring, and deployment across scalable environments.",
        },
      ],
    },
    project_data: [
      {
        project_name: "E-Commerce Recommendation Engine",
        project_description:
          "We built a dynamic recommendation system that increased conversion rates by 27% through personalized product predictions and user clustering.",
        img: ecommerce,
      },
      {
        project_name: "Demand Forecasting for Retail",
        project_description:
          "Our predictive model helped a retail client anticipate product demand with 92% accuracy, reducing stock-outs and improving sales.",
        img: forecasting,
      },
      {
        project_name: "Fraud Detection System",
        project_description:
          "A financial analytics solution using anomaly detection to identify suspicious transactions in real time.",
        img: fraud_detection,
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Strategy",
        process_description:
          "We assess data, define goals, and identify success metrics.",
      },
      {
        process_number: "02",
        process_title: "Data Preparation",
        process_description:
          "Cleaning, labeling, and structuring datasets for accurate training.",
      },
      {
        process_number: "03",
        process_title: "Model Development ",
        process_description:
          "Building algorithms tuned to your business objectives.",
      },
      {
        process_number: "04",
        process_title: "Testing & Validation",
        process_description:
          "Evaluating precision, recall, and performance benchmarks.",
      },
      {
        process_number: "05",
        process_title: "Deployment & Monitoring",
        process_description:
          "Launching live models and continuously optimizing results.",
      },
    ],
  },
  {
    slug: "generative-ai",
    title: "AI Transformation",
    heroSection: {
      heading: "Generative AI",
      description: `At Digixito, we harness the potential of Generative AI to bring automation, personalization, and creativity together.
Our solutions use advanced LLMs and transformer-based architectures to deliver natural conversations, intelligent workflows, and human-like content generation — all tailored to your brand voice.
From customer engagement to document processing, we design AI systems that not only respond but also learn, adapt, and evolve with your users.
`,
    },
    ourServices: {
      heading: "Generative AI Services",
      description:
        "We provide a full spectrum of Generative AI solutions built for business impact:",
      services_data: [
        {
          service_name: "Conversational AI & Chatbots",
          service_description:
            "Automate support and sales with multi-lingual, context-aware chat experiences.",
        },
        {
          service_name: "Custom LLM Development",
          service_description:
            "Fine-tune models like GPT, Llama, and Mistral for your domain-specific needs.",
        },
        {
          service_name: "Process Automation",
          service_description:
            "Integrate AI with CRMs, ERPs, and workflows to eliminate repetitive manual tasks.",
        },
        {
          service_name: "Content Generation & Summarization",
          service_description:
            "Automatically generate blogs, product descriptions, or reports with brand consistency.",
        },
        {
          service_name: "Voice & Multimodal AI",
          service_description:
            "Enable natural speech, image-based queries, and multi-input intelligent interactions.",
        },
      ],
    },
    project_data: [
      {
        project_name: "AI Customer Support Assistant",
        project_description:
          "A domain-trained chatbot that reduced support response times by 60% and improved customer satisfaction scores.",
        img: ecommerce,
      },
      {
        project_name: "Internal Workflow Automation Bot",
        project_description:
          "An LLM-powered automation tool that streamlined HR and operations, saving 30+ hours per week in manual processes.",
        img: ecommerce,
      },
      {
        project_name: "Generative Marketing Assistant",
        project_description:
          "A creative content generator for a digital marketing firm, producing campaign copy and blog drafts in real time.",
        img: ecommerce,
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Ideation & Scoping",
        process_description:
          "Define automation goals, tone, and interaction design.",
      },
      {
        process_number: "02",
        process_title: "Model Selection & Training",
        process_description:
          "Choose or fine-tune the right LLMs for your domain",
      },
      {
        process_number: "03",
        process_title: "Integration & Automation",
        process_description:
          "Connect APIs and data pipelines for live interactions",
      },
      {
        process_number: "04",
        process_title: "Testing & Feedback Loop",
        process_description:
          "Validate performance with human-in-the-loop iterations.",
      },
      {
        process_number: "05",
        process_title: "Deployment & Monitoring",
        process_description:
          "Continuously monitor accuracy, response quality, and user satisfaction.",
      },
    ],
  },
  {
    slug: "computer-vision-and-ocr-systems",
    title: "AI Transformation",
    heroSection: {
      heading: "Computer Vision & OCR Systems",
      description: `At Digixito, we help businesses unlock the power of computer vision and document intelligence to transform how they process visuals and data.
From object detection and face recognition to real-time image classification and automated document extraction, our solutions combine AI precision with operational speed.
Our vision models bring structure to unstructured data — reading, identifying, and interpreting the world the way humans do, but at machine scale.
`,
    },
    ourServices: {
      heading: "Computer Vision & OCR Services",
      description:
        "We deliver a complete range of vision-based AI solutions customized for business needs:",
      services_data: [
        {
          service_name: "Object Detection & Tracking",
          service_description:
            "Identify and follow items or people in images and videos with high precision.",
        },
        {
          service_name: "Optical Character Recognition (OCR)",
          service_description:
            "Extract text from scanned documents, IDs, and invoices in multiple languages.",
        },
        {
          service_name: "Image Classification",
          service_description:
            "Categorize and label large datasets for retail, security, or healthcare analytics.",
        },
        {
          service_name: "Facial Recognition Systems",
          service_description:
            "Enable secure and real-time authentication for access control and user verification.",
        },
        {
          service_name: "Visual Quality Inspection",
          service_description:
            "Automate manufacturing checks and anomaly detection using deep learning.",
        },
      ],
    },
    project_data: [
      {
        project_name: "Automated Invoice Reader",
        project_description:
          "Developed a multilingual OCR engine that reduced manual data entry time by 80% for a logistics company.",
        img: ecommerce,
      },
      {
        project_name: "Retail Image Classifier",
        project_description:
          "Built a model that identified product placement and shelf gaps in real-time, improving merchandising efficiency.",
        img: ecommerce,
      },
      {
        project_name: "Smart Security Vision System",
        project_description:
          "Created a facial recognition module for access control and visitor tracking in corporate environments.",
        img: ecommerce,
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Requirement Analysis",
        process_description: "Understand visual data goals and context.",
      },
      {
        process_number: "02",
        process_title: "Dataset Preparation",
        process_description: "Curate and label training images or documents.",
      },
      {
        process_number: "03",
        process_title: "Model Training & Optimization",
        process_description:
          "Build, fine-tune, and benchmark vision models for accuracy.",
      },
      {
        process_number: "04",
        process_title: "Integration & Testing",
        process_description:
          "Connect models with web, mobile, or on-prem systems.",
      },
      {
        process_number: "05",
        process_title: "Deployment & Continuous Improvement",
        process_description:
          "Monitor and retrain for evolving data and scenarios.",
      },
    ],
  },
  {
    slug: "data-engineering-mlops",
    title: "AI Transformation",
    heroSection: {
      heading: "Data Engineering & MLOps",
      description: `At Digixito, we empower organizations to manage data as a strategic asset.
Our Data Engineering and MLOps solutions help teams unify data sources, ensure quality, and automate model operations at scale.
We focus on building the foundation for AI success — enabling faster experimentation, cleaner data, and seamless deployment of production-ready ML models across any infrastructure.
`,
    },
    ourServices: {
      heading: "Data Engineering & MLOps Services",
      description:
        "We provide a full suite of solutions to make your data reliable and your models production-ready:",
      services_data: [
        {
          service_name: "Data Pipeline Design",
          service_description:
            "Build scalable ETL and ELT pipelines to move, clean, and transform data efficiently.",
        },
        {
          service_name: "Data Warehousing",
          service_description:
            "Develop modern storage systems using Snowflake, BigQuery, and Redshift.",
        },
        {
          service_name: "Feature Engineering",
          service_description:
            "Automate feature pipelines to accelerate model development and iteration.",
        },
        {
          service_name: "Model Deployment & Monitoring",
          service_description:
            "Manage versioning, CI/CD, and model drift detection for consistent performance.",
        },
        {
          service_name: "Infrastructure Automation",
          service_description:
            "Containerize and orchestrate ML workflows using Docker and Kubernetes.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "End-to-End MLOps Platform",
        project_description:
          "Built a fully automated ML lifecycle system for a fintech client, cutting deployment time from weeks to hours.",
      },
      {
        img: ecommerce,
        project_name: "Data Lake Modernization",
        project_description:
          "Migrated legacy data pipelines to a cloud-based lakehouse architecture, improving query speed by 45%.",
      },
      {
        img: ecommerce,
        project_name: "Continuous Model Monitoring Suite",
        project_description:
          "Developed a real-time monitoring solution to detect model drift and trigger retraining pipelines automatically.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Data Discovery & Audit",
        process_description:
          "Evaluate existing sources, quality, and integration needs.",
      },
      {
        process_number: "02",
        process_title: "Architecture Design",
        process_description: "Pipeline Development",
      },
      {
        process_number: "03",
        process_title: "Model Integration & Deployment",
        process_description:
          "Automate training, testing, and deployment cycles.",
      },
      {
        process_number: "04",
        process_title: "Monitoring & Optimization",
        process_description:
          "Track model performance and pipeline health continuously.",
      },
    ],
  },

  //  business transformation
  {
    slug: "creative-transformation",
    title: "Business Transformation",
    heroSection: {
      heading: "Creative Transformation",
      description: `Creativity today is not just about visuals — it’s about vision.
In a world driven by digital-first interactions, brands need more than design; they need stories, systems, and experiences that make them unforgettable.
At Digixito, we help companies discover their creative identity and align it with a clear digital strategy.
Our multidisciplinary approach unites design thinking, marketing psychology, and emerging technology to deliver consistent, meaningful, and high-performing creative ecosystems.
`,
    },
    ourServices: {
      heading: "Creative Transformation Services",
      description:
        "We provide end-to-end creative and brand transformation solutions designed for the digital age:",
      services_data: [
        {
          service_name: "Brand Identity & Design Systems",
          service_description:
            "We help you craft a distinctive visual language that embodies your mission, values, and story. From logos to typography, iconography to motion, every element speaks in harmony.",
        },
        {
          service_name: "UI/UX Design",
          service_description: `We design experiences that feel effortless — intuitive, beautiful, and accessible across platforms. Our designs are not just aesthetic; they’re data-informed and conversion-focused.`,
        },
        {
          service_name: "Content & Storytelling",
          service_description: `Your audience doesn’t just want information; they want emotion. We write and create stories that resonate — through web copy, brand films, visuals, and interactive content.`,
        },
        {
          service_name: "Marketing Creatives & Motion Design",
          service_description: `From static posts to high-energy product videos, our motion and graphic assets ensure your brand remains consistent, memorable, and always engaging.`,
        },
        {
          service_name: "Product Experience Revamp",
          service_description: `We analyze your existing products and interfaces, identify usability gaps, and elevate their performance through strategic redesign and better human interaction.`,
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: " Digital Rebranding for a SaaS Innovator",
        project_description: `We helped a tech startup reposition its identity with a minimalist design system, fresh tone of voice, and motion-based UI interactions. The result: a 60% increase in website dwell time and stronger investor engagement.`,
      },
      {
        img: ecommerce,
        project_name: " FinTech App Experience Overhaul",
        project_description: `By introducing modular UI components, consistent brand tone, and simplified navigation, we enhanced user retention and trust — making financial interactions seamless.`,
      },

      {
        img: ecommerce,
        project_name: "Multi-Channel Campaign for Retail Brand",
        project_description: `Our team conceptualized and designed a campaign that unified digital, social, and in-store visuals under one narrative, driving a 35% jump in engagement across all platforms.`,
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Research",
        process_description:
          "We begin by understanding your brand, audience, and competition. Every insight fuels our creative direction.",
      },
      {
        process_number: "02",
        process_title: "Concept & Ideation",
        process_description:
          "We explore possibilities through mood boards, wireframes, and storytelling experiments that align with your business objectives.",
      },
      {
        process_number: "03",
        process_title: "Design & Development",
        process_description:
          "We turn ideas into tangible interfaces, campaigns, and design systems — scalable and consistent across touchpoints.",
      },
      {
        process_number: "04",
        process_title: "Testing & Validation",
        process_description:
          "Every design is tested for usability, accessibility, and emotional resonance before launch.",
      },
      {
        process_number: "05",
        process_title: "Launch & Evolution",
        process_description:
          "Post-deployment, we analyze performance metrics and continuously optimize design systems for better engagement.",
      },
    ],
  },
  {
    slug: "brand-strategy",
    title: "Business Transformation",
    heroSection: {
      heading: "Brand Strategy",
      description: `In today’s fast-evolving digital landscape, brands don’t just compete on products — they compete on meaning.
Your audience connects with purpose, values, and authenticity. That’s why our Brand Strategy services focus on building the emotional and strategic foundation that drives every visual, message, and experience.
At Digixito, we partner with you to define what your brand stands for — then translate that vision into an actionable strategy that influences design, marketing, and customer relationships.
We blend data, creativity, and psychology to ensure your brand not only looks right but feels right to the people who matter most.`,
    },
    ourServices: {
      heading: "Brand Strategy Services",
      description:
        "We offer holistic, insight-driven brand strategy solutions that guide every creative and business decision:",
      services_data: [
        {
          service_name: "Brand Discovery & Positioning",
          service_description:
            "Uncover your brand’s true identity, values, and voice. We help you identify what sets you apart and how to communicate it with impact.",
        },
        {
          service_name: "Messaging Framework & Tone of Voice",
          service_description:
            "Define how your brand speaks — across every platform and audience segment — to stay consistent and memorable.",
        },
        {
          service_name: "Market & Competitor Research",
          service_description:
            "Deep research that reveals your brand’s unique whitespace in the market, helping you position yourself with authority and relevance.",
        },
        {
          service_name: "Brand Architecture & Structure",
          service_description:
            "Organize your offerings, sub-brands, and communication layers for clarity, scalability, and cohesion.",
        },
        {
          service_name: "Go-To-Market & Launch Strategy",
          service_description:
            "Turn strategy into execution — plan brand rollouts, campaign messaging, and audience activation with precision.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Corporate Brand Repositioning",
        project_description:
          "For a global tech consultancy, we redefined their brand architecture and storytelling framework, repositioning them as innovators in enterprise AI.",
      },
      {
        img: ecommerce,
        project_name: "Lifestyle Brand Identity Revamp",
        project_description:
          "Crafted a complete brand tone and content strategy for a fashion brand targeting Gen Z consumers — boosting social engagement by 52%.",
      },
      {
        img: ecommerce,
        project_name: "SaaS Brand Launch Playbook",
        project_description:
          "Developed the brand foundation and tone for a new B2B SaaS startup, resulting in a strong investor narrative and successful market entry.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Research",
        process_description:
          "Understand your business goals, audience insights, and competitive landscape.",
      },
      {
        process_number: "02",
        process_title: "Identity Definition",
        process_description:
          "Define your purpose, values, and differentiators.",
      },
      {
        process_number: "03",
        process_title: "Strategy Development",
        process_description:
          "Craft positioning, messaging, and tone aligned with your vision.",
      },
      {
        process_number: "04",
        process_title: "Framework Creation",
        process_description:
          "Build guidelines and toolkits for visual, verbal, and experiential consistency.",
      },
      {
        process_number: "05",
        process_title: "Implementation & Support",
        process_description:
          "Help your teams and partners adopt the new strategy across platforms.",
      },
    ],
  },
  {
    slug: "360-creative-campaigns",
    title: "Business Transformation",
    heroSection: {
      heading: "360° Creative Campaigns",
      description: `In today’s hyperconnected world, creativity thrives on connection.
A brand’s message must move seamlessly across every channel — online and offline — while staying true to its essence.
Our 360° Creative Campaigns service unifies strategy, storytelling, and design to deliver cohesive, impactful campaigns that resonate across mediums.
We help brands speak in one powerful voice — whether it’s a digital launch, a social movement, or a product rollout.
At Digixito, we believe campaigns shouldn’t just be creative — they should be experiential, data-driven, and emotionally intelligent.`,
    },
    ourServices: {
      heading: "360° Campaign Services",
      description:
        "We build integrated campaign ecosystems designed to capture attention, drive engagement, and create measurable impact:",
      services_data: [
        {
          service_name: "Integrated Brand Campaigns",
          service_description:
            "From concept to execution, we build holistic campaigns that align every channel — digital, print, video, and experiential — under a unified creative theme.",
        },
        {
          service_name: "Digital & Social Media Campaigns",
          service_description:
            "Drive buzz, engagement, and conversions through strategic social storytelling, influencer partnerships, and high-performing ad creatives.",
        },
        {
          service_name: "Content & Motion Production",
          service_description:
            "Produce cinematic product videos, short-form reels, and brand stories that connect emotionally and visually.",
        },
        {
          service_name: "Print, Outdoor & Experiential Design",
          service_description:
            "From billboards to events, we extend your brand presence into the physical world with design-led experiences that make people stop and remember.",
        },
        {
          service_name: "Campaign Strategy & Analytics",
          service_description:
            "Every creative is backed by insight. We use data to monitor performance, measure ROI, and optimize messaging in real time.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Global Product Launch Campaign",
        project_description:
          "Executed a cross-platform launch for a SaaS product — combining digital storytelling, influencer content, and immersive video. The campaign achieved over 2.5M impressions within the first week.",
      },
      {
        img: ecommerce,
        project_name: "Omnichannel Retail Campaign",
        project_description:
          "Designed a unified online and offline campaign for a retail brand — from in-store visuals to Instagram reels — resulting in a 40% increase in customer engagement.",
      },
      {
        img: ecommerce,
        project_name: "Cause-Driven Awareness Campaign",
        project_description:
          "Created a purpose-led campaign around sustainability that generated viral social traction and PR coverage across three major publications.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Goal Setting",
        process_description:
          "Define campaign objectives, audience personas, and key performance metrics.",
      },
      {
        process_number: "02",
        process_title: "Concept & Storyline Development",
        process_description:
          "Build the central creative idea and narrative structure for the campaign.",
      },
      {
        process_number: "03",
        process_title: "Content & Asset Production",
        process_description:
          "Design, film, write, and animate all campaign visuals and materials.",
      },
      {
        process_number: "04",
        process_title: "Channel Execution",
        process_description:
          "Deploy across web, social, email, print, and physical experiences with unified messaging.",
      },
      {
        process_number: "05",
        process_title: "Performance Analysis & Optimization",
        process_description:
          "Track engagement, refine strategy, and measure ROI across channels.",
      },
    ],
  },
  {
    slug: "press-ads-and-tv-commercials",
    title: "Business Transformation",
    heroSection: {
      heading: "Press Ads & TV Commercials",
      description: `In an era of endless scrolling, timeless storytelling still wins attention.
  Press ads and television commercials remain two of the most influential ways to create emotional connections and build trust — when done with purpose and creativity.
  At Digixito, we blend the art of storytelling with the science of audience psychology to produce campaigns that strike the perfect balance between brand message and emotional pull.
  Whether it’s a print ad that captures a thought in one frame or a TVC that moves millions in 30 seconds, we ensure every frame, word, and sound works together to make your brand unforgettable.
  Our creative team crafts campaigns that don’t just sell — they shape perception, build credibility, and drive cultural relevance.`,
    },
    ourServices: {
      heading: "Press & TV Commercial Services",
      description:
        "We offer concept-to-execution creative services designed for maximum reach and resonance:",
      services_data: [
        {
          service_name: "Press & Print Campaigns",
          service_description:
            "Design visually captivating and copy-driven print ads for magazines, newspapers, and outdoor placements that communicate your message instantly.",
        },
        {
          service_name: "TV Commercials & Brand Films",
          service_description:
            "From emotional storytelling to high-energy product showcases, we conceptualize and produce television commercials that inspire action and strengthen brand identity.",
        },
        {
          service_name: "Storyboarding & Scriptwriting",
          service_description:
            "Develop narratives, dialogues, and visual cues that connect deeply with your audience while staying aligned with your brand values.",
        },
        {
          service_name: "Production & Direction",
          service_description:
            "Collaborate with directors, cinematographers, and editors to bring creative visions to life with cinematic precision.",
        },
        {
          service_name: "Media Planning & Strategy",
          service_description:
            "Plan your ad placements, schedule campaigns, and optimize frequency across channels to achieve the highest ROI and visibility.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "National Television Commercial for FMCG Brand",
        project_description:
          "Conceptualized and directed a 30-second spot highlighting emotional storytelling, leading to a 2.4× rise in brand recall within three months.",
      },
      {
        img: ecommerce,
        project_name: "Print Campaign for Financial Services",
        project_description:
          "Created a minimalist visual campaign using strong typography and symbolic imagery, published across national newspapers, enhancing lead generation by 35%.",
      },
      {
        img: ecommerce,
        project_name: "Product Film for Tech Startup",
        project_description:
          "Produced a high-energy commercial showcasing a SaaS product’s impact — combining crisp scripting, motion graphics, and voiceover for maximum engagement.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Creative Discovery",
        process_description:
          "Understand the brand’s tone, audience, and campaign goals.",
      },
      {
        process_number: "02",
        process_title: "Concept Development",
        process_description:
          "Ideate storylines, messages, and visuals aligned with your communication objectives.",
      },
      {
        process_number: "03",
        process_title: "Script & Storyboard",
        process_description:
          "Draft the narrative structure, dialogue, and visual composition.",
      },
      {
        process_number: "04",
        process_title: "Production & Shoot",
        process_description:
          "Execute on-location or studio shoots with professional-grade equipment and direction.",
      },
      {
        process_number: "05",
        process_title: "Post-Production & Delivery",
        process_description:
          "Edit, color grade, sound mix, and finalize for press or broadcast distribution.",
      },
    ],
  },

  {
    slug: "digital-transformation",
    title: "Business Transformation",
    heroSection: {
      heading: "Digital Transformation",
      description: `The future belongs to brands that adapt.
  In a world where customer expectations evolve faster than ever, digital transformation is no longer optional — it’s essential.
  At Digixito, we help businesses evolve from traditional operations into data-driven, technology-powered ecosystems.
  From AI-driven automation to cloud adoption, we design systems that improve efficiency, scale faster, and enhance customer experience at every touchpoint.
  Our goal is to build future-ready organizations — where technology empowers people, decisions are data-informed, and innovation becomes part of your company’s DNA.
  We don’t just implement tools — we transform the way you think, build, and deliver.`,
    },
    ourServices: {
      heading: "Digital Transformation Services",
      description:
        "We offer a comprehensive suite of transformation services designed to help you lead in the digital era:",
      services_data: [
        {
          service_name: "Technology Strategy & Consulting",
          service_description:
            "Develop digital roadmaps aligned with business goals — ensuring your transformation is both visionary and achievable.",
        },
        {
          service_name: "Cloud Migration & Infrastructure Modernization",
          service_description:
            "Move to the cloud seamlessly with scalable, secure, and high-performance infrastructure designed for speed and resilience.",
        },
        {
          service_name: "AI, Automation & Data Intelligence",
          service_description:
            "Integrate AI, machine learning, and data analytics to automate workflows, optimize decisions, and uncover actionable insights.",
        },
        {
          service_name: "Business Process Optimization",
          service_description:
            "Redesign legacy workflows and systems to create efficiency, agility, and measurable cost reduction.",
        },
        {
          service_name: "Digital Security & Compliance",
          service_description:
            "Build trust and reliability through enterprise-grade cybersecurity, data governance, and privacy-first frameworks.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Enterprise Cloud Transformation",
        project_description:
          "Migrated a large-scale financial organization’s infrastructure to AWS, reducing operational costs by 35% and improving scalability by 60%.",
      },
      {
        img: ecommerce,
        project_name: "Automation for Manufacturing",
        project_description:
          "Implemented predictive analytics and machine learning automation to reduce downtime and enhance production efficiency.",
      },
      {
        img: ecommerce,
        project_name: "Digital Strategy for Retail Brand",
        project_description:
          "Developed an end-to-end digital roadmap integrating e-commerce, CRM, and analytics, resulting in a 45% increase in customer retention.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Assessment & Vision Alignment",
        process_description:
          "Understand your current systems, goals, and opportunities for improvement.",
      },
      {
        process_number: "02",
        process_title: "Strategy & Roadmap Design",
        process_description:
          "Define a clear path to transformation with milestones and measurable KPIs.",
      },
      {
        process_number: "03",
        process_title: "Technology Implementation",
        process_description:
          "Deploy modern tools and cloud infrastructure aligned with your business priorities.",
      },
      {
        process_number: "04",
        process_title: "Process Integration & Training",
        process_description:
          "Enable teams with systems, skills, and processes to embrace change confidently.",
      },
      {
        process_number: "05",
        process_title: "Optimization & Continuous Innovation",
        process_description:
          "Measure impact, scale success, and evolve through constant iteration.",
      },
    ],
  },
  {
    slug: "paid-search",
    title: "Business Transformation",
    heroSection: {
      heading: "Paid Search",
      description: `Your audience is searching for solutions — every second, every day.With the right strategy, your brand can be the answer they find first.
  At Digixito, our Paid Search solutions help brands dominate search results through data-backed precision and creative storytelling. We don’t just drive traffic — we attract intent-driven users who are ready to act.
  Our team leverages years of PPC expertise, advanced keyword intelligence, and conversion-focused landing page design to deliver results that scale revenue, not just clicks. Whether it’s Google Ads, Bing, or YouTube, we optimize every campaign for performance, efficiency, and measurable ROI — ensuring your business is seen, remembered, and chosen.`,
    },
    ourServices: {
      heading: "Paid Search Services",
      description:
        "We offer end-to-end PPC management designed to fuel growth and visibility across all platforms:",
      services_data: [
        {
          service_name: "Google Ads Campaign Management",
          service_description:
            "Create, manage, and optimize high-performance campaigns across Search, Display, and Shopping networks to capture the right audience at the right time.",
        },
        {
          service_name: "Bing & Multi-Platform PPC",
          service_description:
            "Expand your reach beyond Google with cost-effective campaigns across Bing and partner networks — ensuring you don’t miss potential conversions.",
        },
        {
          service_name: "Keyword Research & Targeting",
          service_description:
            "Identify high-intent, low-competition keywords that connect directly to your buyer journey and business objectives.",
        },
        {
          service_name: "Ad Copywriting & Creative Optimization",
          service_description:
            "Craft compelling ad headlines and descriptions that attract attention, build trust, and drive action — in just a few words.",
        },
        {
          service_name: "Performance Tracking & ROI Optimization",
          service_description:
            "Continuously monitor campaign metrics, analyze data, and apply smart bid adjustments to maximize your ROI.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "E-Commerce Lead Generation Campaign",
        project_description:
          "Developed and managed a Paid Search strategy for an e-commerce brand, resulting in a 65% increase in ROAS and a 40% reduction in cost per acquisition.",
      },
      {
        img: ecommerce,
        project_name: "B2B SaaS Campaign Optimization",
        project_description:
          "Rebuilt ad structures and applied data-driven targeting, improving conversion rates by 32% while cutting wasted ad spend.",
      },
      {
        img: ecommerce,
        project_name: "App Install Campaign for FinTech Startup",
        project_description:
          "Created a performance-focused app campaign that achieved 50,000+ installs within the first month at under ₹15 CPI.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Audit & Research",
        process_description:
          "Analyze current campaigns, keywords, and market performance.",
      },
      {
        process_number: "02",
        process_title: "Strategy & Planning",
        process_description:
          "Define campaign goals, target audience, and bidding approach.",
      },
      {
        process_number: "03",
        process_title: "Setup & Creative Design",
        process_description:
          "Create ad groups, design landing pages, and write high-converting ad copy.",
      },
      {
        process_number: "04",
        process_title: "Optimization & A/B Testing",
        process_description:
          "Continuously refine targeting, messaging, and bids for performance gains.",
      },
      {
        process_number: "05",
        process_title: "Reporting & Scaling",
        process_description:
          "Deliver transparent analytics, actionable insights, and expansion strategies.",
      },
    ],
  },
  {
    slug: "natural-search",
    title: "Business Transformation",
    heroSection: {
      heading: "Natural Search",
      description: `Search isn’t just about algorithms — it’s about understanding people.Today’s digital world demands more than quick fixes or paid visibility. It requires long-term search strategies that build authority, trust, and brand value.
  At Digixito, we specialize in Organic Search Optimization (SEO) that aligns with how your audience searches, interacts, and buys.
  We combine deep keyword research, content optimization, technical SEO, and backlink strategies to ensure your website not only ranks higher but also stays relevant in every search journey.
  Our approach goes beyond traffic — we build digital ecosystems that grow naturally, sustain momentum, and convert audience intent into measurable success.`,
    },
    ourServices: {
      heading: "Organic Search Services",
      description:
        "We deliver comprehensive, data-driven SEO strategies designed for long-term visibility and performance:",
      services_data: [
        {
          service_name: "Technical SEO & Site Architecture",
          service_description:
            "Audit and optimize website structure, crawlability, and performance to ensure seamless search engine indexing and faster load times.",
        },
        {
          service_name: "Keyword Research & Content Mapping",
          service_description:
            "Discover high-value, intent-based keywords and align them with user journeys to attract the right audience at the right stage.",
        },
        {
          service_name: "On-Page SEO Optimization",
          service_description:
            "Optimize titles, meta tags, internal links, and page content to enhance discoverability and click-through rates.",
        },
        {
          service_name: "Content Strategy & Blogging",
          service_description:
            "Develop and execute a content calendar that positions your brand as an authority — with informative, keyword-rich, and user-friendly content.",
        },
        {
          service_name: "Link Building & Outreach",
          service_description:
            "Earn high-quality backlinks through ethical outreach, partnerships, and PR-driven content for stronger domain authority.",
        },
        {
          service_name: "Performance Tracking & Reporting",
          service_description:
            "Measure growth through analytics, rank tracking, and performance dashboards — ensuring every optimization leads to visible results.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "SaaS Brand Organic Growth",
        project_description:
          "Built a content-led SEO strategy for a SaaS company, increasing organic traffic by 180% in four months through targeted keyword clusters and technical improvements.",
      },
      {
        img: ecommerce,
        project_name: "E-Commerce Visibility Optimization",
        project_description:
          "Implemented schema, page speed improvements, and long-tail keyword mapping — resulting in a 3× boost in product page rankings.",
      },
      {
        img: ecommerce,
        project_name: "EdTech Authority Building",
        project_description:
          "Developed SEO content frameworks and backlink partnerships, helping the brand achieve first-page rankings for 25+ competitive keywords.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Audit",
        process_description:
          "Assess website performance, technical health, and keyword landscape.",
      },
      {
        process_number: "02",
        process_title: "Strategy & Planning",
        process_description:
          "Develop a content and keyword roadmap aligned with audience intent.",
      },
      {
        process_number: "03",
        process_title: "On-Page & Technical Optimization",
        process_description:
          "Enhance performance, user experience, and SEO compliance.",
      },
      {
        process_number: "04",
        process_title: "Content Creation & Link Building",
        process_description:
          "Produce valuable, search-optimized content and build credible backlinks.",
      },
      {
        process_number: "05",
        process_title: "Monitoring & Continuous Improvement",
        process_description:
          "Track rankings, analyze data, and refine strategy for long-term results.",
      },
    ],
  },

  {
    slug: "performance-display",
    title: "Business Transformation",
    heroSection: {
      heading: "Performance Display",
      description: `In a world overflowing with visuals, standing out requires more than just creative design — it demands strategy.
  That’s where Performance Display Advertising bridges the gap between art and analytics.
  At Digixito, we design, deploy, and optimize display campaigns that deliver beyond impressions.
  From banner ads to video display, our approach focuses on precision audience targeting, real-time performance analysis, and creative excellence that speaks directly to intent-driven users.
  Our team blends the science of data with the craft of storytelling — ensuring every ad not only looks good but also performs brilliantly.
  We turn visibility into engagement, engagement into action, and action into lasting brand growth.`,
    },
    ourServices: {
      heading: "Performance Display Services",
      description:
        "We deliver end-to-end display marketing solutions built for efficiency, visibility, and performance:",
      services_data: [
        {
          service_name: "Programmatic Display Advertising",
          service_description:
            "Reach high-value audiences through data-driven programmatic bidding — across web, mobile, and connected TV — for maximum reach and ROI.",
        },
        {
          service_name: "Retargeting & Remarketing Campaigns",
          service_description:
            "Re-engage interested audiences with personalized creatives that remind, re-attract, and convert — effectively reducing cart abandonment and boosting retention.",
        },
        {
          service_name: "Dynamic & Responsive Ad Design",
          service_description:
            "Develop adaptive creatives that adjust to devices, screen sizes, and contexts for consistent performance across platforms.",
        },
        {
          service_name: "Audience Segmentation & Targeting",
          service_description:
            "Leverage behavioral, demographic, and contextual data to deliver hyper-personalized messaging that resonates.",
        },
        {
          service_name: "Performance Tracking & Optimization",
          service_description:
            "Continuously monitor performance metrics, A/B test creatives, and optimize for conversions, CTRs, and cost efficiency.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Programmatic Display for Retail Brand",
        project_description:
          "Launched a multi-channel display campaign using intent-based audience targeting, increasing CTR by 120% and boosting conversions by 38%.",
      },
      {
        img: ecommerce,
        project_name: "Retargeting for E-Commerce Store",
        project_description:
          "Created personalized ad sequences that re-engaged dropped-off users, resulting in a 45% higher return-to-cart rate within 30 days.",
      },
      {
        img: ecommerce,
        project_name: "Video Display Campaign for SaaS Product",
        project_description:
          "Produced dynamic video ads highlighting product value propositions, generating a 2.7× lift in qualified leads.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Strategy",
        process_description:
          "Identify audience segments, platforms, and key business objectives.",
      },
      {
        process_number: "02",
        process_title: "Creative Concepting & Design",
        process_description:
          "Develop ad creatives that align with brand tone and campaign goals.",
      },
      {
        process_number: "03",
        process_title: "Setup & Targeting",
        process_description:
          "Configure programmatic or manual campaigns for maximum precision and reach.",
      },
      {
        process_number: "04",
        process_title: "Optimization & Testing",
        process_description:
          "Continuously monitor engagement, refine creatives, and optimize bids for performance.",
      },
      {
        process_number: "05",
        process_title: "Reporting & Insights",
        process_description:
          "Deliver transparent reports with actionable insights and ROI-driven recommendations.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Business Transformation",
    heroSection: {
      heading: "Social Media Marketing",
      description: `Social media isn’t just a platform — it’s your brand’s voice in motion.
  From storytelling to sales, every post, story, and campaign shapes how people perceive your business.
  At Digixito, we help brands make that voice powerful, consistent, and strategic.
  Our Social Media Marketing service blends creative content, paid strategy, and real-time analytics to create meaningful digital conversations that convert into business results.
  We focus on connection over clutter — building brands that don’t just appear on feeds but leave a lasting impression.
  Whether it’s launching a product, scaling brand presence, or creating viral moments, we make sure every pixel and caption has a purpose.`,
    },
    ourServices: {
      heading: "Social Media Services",
      description:
        "We offer a complete suite of organic and paid social media solutions designed to grow your audience and revenue:",
      services_data: [
        {
          service_name: "Social Media Strategy & Roadmap",
          service_description:
            "Develop tailored platform strategies aligned with your business goals, tone, and target audience.",
        },
        {
          service_name: "Content Creation & Campaign Design",
          service_description:
            "Produce scroll-stopping visuals, reels, carousels, and stories that build engagement and reflect your brand personality.",
        },
        {
          service_name: "Community Management",
          service_description:
            "Engage authentically with your audience, respond to queries, and foster meaningful relationships that strengthen loyalty.",
        },
        {
          service_name: "Paid Social Advertising",
          service_description:
            "Run precision-targeted ad campaigns across Meta, LinkedIn, YouTube, and more to drive conversions and maximize ROI.",
        },
        {
          service_name: "Analytics, Insights & Optimization",
          service_description:
            "Monitor performance with real-time analytics, track engagement trends, and optimize continuously for improved results.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Product Launch Campaign for a D2C Brand",
        project_description:
          "Launched a 6-week social media campaign integrating reels, influencer collabs, and UGC contests — resulting in 3.2× engagement growth and a 55% sales uplift.",
      },
      {
        img: ecommerce,
        project_name: "LinkedIn Growth for a B2B SaaS Brand",
        project_description:
          "Developed a thought-leadership strategy through content storytelling, achieving 4× follower growth and a 2× increase in inbound leads.",
      },
      {
        img: ecommerce,
        project_name: "Instagram Reels Campaign for Lifestyle Brand",
        project_description:
          "Created a series of visually immersive, trend-driven reels that went viral — crossing 1M+ organic views and 8× engagement increase.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Research",
        process_description:
          "Understand your audience, brand tone, and competitive landscape.",
      },
      {
        process_number: "02",
        process_title: "Strategy Development",
        process_description:
          "Define content pillars, posting cadence, and campaign direction.",
      },
      {
        process_number: "03",
        process_title: "Content Creation & Scheduling",
        process_description:
          "Design visual assets, write engaging copy, and prepare for multi-platform deployment.",
      },
      {
        process_number: "04",
        process_title: "Execution & Engagement",
        process_description:
          "Publish, interact, and manage community conversations in real time.",
      },
      {
        process_number: "05",
        process_title: "Performance Analysis & Growth Optimization",
        process_description:
          "Track KPIs, refine messaging, and scale winning content.",
      },
    ],
  },
  {
    slug: "marketplace-management",
    title: "Business Transformation",
    heroSection: {
      heading: "Marketplace Management",
      description: `Marketplaces are where discovery meets decision.
  From Amazon and Flipkart to Meesho and Nykaa, these platforms define how customers explore, evaluate, and buy — making them critical growth engines for every modern business.
  At Digixito, we help brands establish, manage, and scale their presence across multiple online marketplaces with end-to-end management solutions.
  Our approach blends platform expertise, content optimization, performance ads, and operational efficiency to increase visibility and boost conversions.
  We turn complex marketplace ecosystems into streamlined, scalable, and sales-ready operations that grow your brand’s reach and revenue consistently.`,
    },
    ourServices: {
      heading: "Marketplace Management Services",
      description:
        "We offer comprehensive management solutions designed to optimize every stage of your marketplace journey:",
      services_data: [
        {
          service_name: "Account Setup & Store Optimization",
          service_description:
            "Launch and configure your seller accounts across multiple marketplaces — with tailored store designs, optimized listings, and category alignment.",
        },
        {
          service_name: "Product Listing & SEO Optimization",
          service_description:
            "Write high-performing product titles, descriptions, and keywords that increase visibility, click-through rate, and search ranking within marketplaces.",
        },
        {
          service_name: "Inventory & Order Management",
          service_description:
            "Integrate tools and processes to synchronize stock, automate order processing, and minimize delivery delays or cancellations.",
        },
        {
          service_name: "Advertising & Sponsored Campaigns",
          service_description:
            "Run targeted ad campaigns (Amazon Ads, Flipkart Ads, etc.) to increase visibility and drive conversions while optimizing ad spend for ROI.",
        },
        {
          service_name: "Performance Analytics & Growth Insights",
          service_description:
            "Track sales, engagement, and campaign data through detailed dashboards — making informed decisions backed by performance metrics.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Amazon Store Growth Strategy",
        project_description:
          "Optimized listings and implemented ad automation for an apparel brand — resulting in a 3× increase in daily orders and a 42% rise in organic search rankings.",
      },
      {
        img: ecommerce,
        project_name: "Multi-Platform Expansion for FMCG Brand",
        project_description:
          "Enabled seamless product integration across Amazon, Flipkart, and Meesho — increasing cross-platform revenue by 75% in four months.",
      },
      {
        img: ecommerce,
        project_name: "Marketplace SEO & PPC for Electronics Seller",
        project_description:
          "Improved product discoverability with keyword optimization and ad strategy — reducing ACOS by 35% while increasing total sales volume.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Marketplace Audit & Setup",
        process_description:
          "Assess current performance, listings, and brand presence.",
      },
      {
        process_number: "02",
        process_title: "Optimization & SEO Strategy",
        process_description:
          "Revamp titles, visuals, and keywords for better discoverability.",
      },
      {
        process_number: "03",
        process_title: "Advertising & Campaign Management",
        process_description:
          "Run and optimize sponsored ad campaigns to increase conversions.",
      },
      {
        process_number: "04",
        process_title: "Inventory & Fulfillment Alignment",
        process_description:
          "Integrate tools for real-time stock and order management.",
      },
      {
        process_number: "05",
        process_title: "Performance Review & Scaling",
        process_description:
          "Monitor KPIs, analyze trends, and implement growth strategies for continuous improvement.",
      },
    ],
  },
  {
    slug: "catalog-management",
    title: "Business Transformation",
    heroSection: {
      heading: "Catalog Management",
      description: `Your product catalog is more than a list — it’s your brand’s digital storefront.
  An inconsistent or poorly structured catalog can lead to missed sales opportunities, low visibility, and reduced customer trust.
  At Digixito, we help brands create and maintain high-performing, optimized catalogs that convert browsers into buyers.
  Our process ensures every product — across every platform — is properly categorized, described, and visually represented for maximum impact.
  From SKUs and attributes to imagery and SEO tagging, we bring clarity, precision, and consistency to your catalog — empowering you to sell effortlessly across e-commerce platforms and marketplaces.
  We make your digital catalog a growth engine, not a data headache.`,
    },
    ourServices: {
      heading: "Catalog Management Services",
      description:
        "We offer end-to-end catalog management solutions that ensure accuracy, scalability, and optimized presentation:",
      services_data: [
        {
          service_name: "Product Data Entry & Structuring",
          service_description:
            "Organize product data with clean attributes, detailed specifications, and consistent categorization across multiple platforms.",
        },
        {
          service_name: "Image Optimization & Enhancement",
          service_description:
            "Edit, resize, and optimize product images for clarity, speed, and aesthetic consistency — ensuring your catalog looks professional and engaging.",
        },
        {
          service_name: "SEO-Driven Product Descriptions",
          service_description:
            "Craft keyword-rich titles and detailed descriptions that improve discoverability and increase organic visibility within marketplace and search algorithms.",
        },
        {
          service_name: "Multi-Channel Catalog Syncing",
          service_description:
            "Ensure seamless catalog updates across marketplaces like Amazon, Flipkart, and Shopify through API-based integrations and automation tools.",
        },
        {
          service_name: "Inventory & SKU Management",
          service_description:
            "Maintain real-time synchronization between inventory and product listings to prevent stockouts, errors, or duplication.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "E-Commerce Product Catalog Overhaul",
        project_description:
          "Rebuilt and optimized a 2,000+ SKU product catalog for a lifestyle brand, improving listing accuracy and driving a 35% increase in conversion rate.",
      },
      {
        img: ecommerce,
        project_name: "Multi-Platform Catalog Integration",
        project_description:
          "Integrated product data between Shopify and Amazon, automating updates and reducing manual errors by 70%.",
      },
      {
        img: ecommerce,
        project_name: "SEO-Enhanced Product Listings for FMCG Brand",
        project_description:
          "Rewrote 1,500+ product titles and descriptions for better keyword visibility, resulting in a 3× rise in organic marketplace impressions.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Data Audit & Cleanup",
        process_description:
          "Identify inconsistencies, duplicate SKUs, and outdated product information.",
      },
      {
        process_number: "02",
        process_title: "Structuring & Optimization",
        process_description:
          "Standardize data fields, create SEO-rich content, and align images with brand guidelines.",
      },
      {
        process_number: "03",
        process_title: "Integration & Syncing",
        process_description:
          "Automate catalog updates across multiple marketplaces and e-commerce platforms.",
      },
      {
        process_number: "04",
        process_title: "Quality Check & Validation",
        process_description:
          "Verify accuracy, pricing consistency, and listing compliance with platform requirements.",
      },
      {
        process_number: "05",
        process_title: "Maintenance & Reporting",
        process_description:
          "Continuously update and monitor catalog performance, ensuring relevance and accuracy.",
      },
    ],
  },
  {
    slug: "inventory-management",
    title: "Business Transformation",
    heroSection: {
      heading: "Inventory Management",
      description: `In today’s fast-paced e-commerce ecosystem, inventory is the backbone of every successful business.
  Poor visibility, manual tracking, and delayed updates can lead to overstocking, lost sales, and frustrated customers.
  At Digixito, we simplify the chaos.
  Our Inventory Management systems are designed to give you full control and visibility — from warehouse to checkout. We unify multi-platform operations, synchronize data across marketplaces, and automate replenishment to ensure your products are always available when customers need them.
  Whether you manage hundreds or thousands of SKUs, we make sure your inventory runs lean, accurate, and aligned with your growth goals.
  We help brands move from manual management to intelligent automation — unlocking operational excellence and higher profitability.`,
    },
    ourServices: {
      heading: "Inventory Management Services",
      description:
        "We offer end-to-end inventory solutions built to optimize efficiency, visibility, and control:",
      services_data: [
        {
          service_name: "Centralized Inventory Control",
          service_description:
            "Unify all your sales channels and warehouses under one system — managing stock in real time across e-commerce sites and marketplaces.",
        },
        {
          service_name: "Automated Replenishment & Alerts",
          service_description:
            "Set intelligent restock thresholds and receive automated alerts to prevent shortages or overstock situations.",
        },
        {
          service_name: "SKU Tracking & Barcode Integration",
          service_description:
            "Use advanced SKU mapping, barcoding, and tracking systems for accurate order picking, fulfillment, and auditing.",
        },
        {
          service_name: "Multi-Warehouse & Channel Sync",
          service_description:
            "Manage multiple warehouses, vendors, and sales channels seamlessly with synchronized stock data and automated order routing.",
        },
        {
          service_name: "Analytics & Forecasting",
          service_description:
            "Gain actionable insights through inventory analytics — identify trends, predict demand, and plan smarter procurement strategies.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Multi-Channel Inventory Automation for Retail Brand",
        project_description:
          "Deployed an automated inventory system connecting Shopify, Amazon, and Flipkart — reducing manual work by 80% and improving stock accuracy to 99%.",
      },
      {
        img: ecommerce,
        project_name: "Warehouse Sync Solution for FMCG Client",
        project_description:
          "Integrated ERP with marketplace APIs to maintain real-time inventory visibility — reducing order cancellation rates by 45%.",
      },
      {
        img: ecommerce,
        project_name: "Demand Forecasting for Lifestyle Brand",
        project_description:
          "Implemented predictive analytics for restocking patterns, leading to a 30% improvement in inventory turnover ratio.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Assessment & Audit",
        process_description:
          "Evaluate current stock systems, pain points, and operational flow.",
      },
      {
        process_number: "02",
        process_title: "Planning & Strategy",
        process_description:
          "Design a centralized structure for tracking, forecasting, and fulfillment.",
      },
      {
        process_number: "03",
        process_title: "System Integration",
        process_description:
          "Connect marketplaces, CRMs, and warehouses for unified inventory visibility.",
      },
      {
        process_number: "04",
        process_title: "Automation & Alerts",
        process_description:
          "Implement auto-updates, low-stock triggers, and smart reorder logic.",
      },
      {
        process_number: "05",
        process_title: "Monitoring & Optimization",
        process_description:
          "Continuously analyze data, forecast demand, and fine-tune operations for maximum profitability.",
      },
    ],
  },
  {
    slug: "partner-value-added-services",
    title: "Business Transformation",
    heroSection: {
      heading: "Partner Value Added Services",
      description: `In today’s connected business world, success isn’t built alone — it’s built together.
  Partnerships thrive when each side brings innovation, trust, and shared value to the table.
  At Digixito, we collaborate with technology providers, marketing agencies, and enterprise platforms to deliver end-to-end value-added services that elevate customer experience, accelerate digital transformation, and unlock new growth opportunities.
  We bridge gaps between systems, services, and solutions — ensuring our partners gain access to extended capabilities, expertise, and new revenue streams.
  Our mission is simple: to co-create smarter solutions that deliver greater value, together.`,
    },
    ourServices: {
      heading: "Partner Value Added Services",
      description:
        "We offer a range of partnership-driven services designed to enhance performance, innovation, and scalability:",
      services_data: [
        {
          service_name: "Technology Integration & Enablement",
          service_description:
            "Seamlessly integrate partner tools, APIs, and platforms into our ecosystem — enabling unified digital experiences and data exchange.",
        },
        {
          service_name: "Co-Branded Marketing & Campaigns",
          service_description:
            "Collaborate on joint marketing initiatives, campaigns, and industry events that boost visibility, credibility, and engagement.",
        },
        {
          service_name: "Sales & Channel Support",
          service_description:
            "Empower partner sales teams with strategy, collateral, and digital resources to expand reach and close deals more effectively.",
        },
        {
          service_name: "Training & Knowledge Exchange",
          service_description:
            "Host workshops, webinars, and joint learning programs to upskill teams and share cross-industry insights.",
        },
        {
          service_name: "Product Development Collaboration",
          service_description:
            "Work together on innovative AI, SaaS, or automation solutions — combining resources and expertise to bring new ideas to market faster.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Technology Partnership with SaaS Provider",
        project_description:
          "Collaborated with a global SaaS partner to integrate machine learning capabilities into client workflows, resulting in 40% faster data processing and improved client outcomes.",
      },
      {
        img: ecommerce,
        project_name: "Co-Marketing Program with Digital Agency",
        project_description:
          "Launched a joint content and webinar series for SMBs, driving 3× lead generation and expanding partner visibility across markets.",
      },
      {
        img: ecommerce,
        project_name: "Cloud Infrastructure Partnership",
        project_description:
          "Partnered with a cloud provider to offer bundled hosting, security, and optimization services — reducing client infrastructure costs by 25%.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Exploration & Alignment",
        process_description:
          "Identify mutual goals, strengths, and opportunities for co-creation.",
      },
      {
        process_number: "02",
        process_title: "Integration & Setup",
        process_description:
          "Establish shared systems, workflows, and communication channels for seamless collaboration.",
      },
      {
        process_number: "03",
        process_title: "Execution & Enablement",
        process_description:
          "Deliver combined value through campaigns, integrations, or product initiatives.",
      },
      {
        process_number: "04",
        process_title: "Measurement & Optimization",
        process_description:
          "Track KPIs, gather insights, and refine strategies for continuous growth.",
      },
      {
        process_number: "05",
        process_title: "Sustain & Scale",
        process_description:
          "Evolve the partnership through innovation, training, and joint expansion initiatives.",
      },
    ],
  },
  {
    slug: "sales-boost-program",
    title: "Business Transformation",
    heroSection: {
      heading: "Sales Boost Program",
      description: `At Digixito, we help brands unlock their highest revenue potential through intelligent marketing systems, optimized funnels, and automation-driven strategies.
Our Sales Boost Program merges analytics, creativity, and technology to create powerful growth engines that deliver consistent, measurable results.
Because growth isn’t about luck — it’s about building a system that sells.`,
    },

    ourServices: {
      heading: "Our Sales Boost Services",
      description:
        "Our holistic approach integrates marketing, automation, and sales enablement to ensure end-to-end performance:",
      services_data: [
        {
          service_name: "Performance Marketing & Lead Generation",
          service_description:
            "Run data-driven campaigns across search, social, and display to attract high-quality leads with measurable ROI.",
        },
        {
          service_name: "Sales Funnel Optimization",
          service_description:
            "Audit, refine, and rebuild your funnel structure to reduce drop-offs and improve customer acquisition efficiency.",
        },
        {
          service_name: "Sales Automation & CRM Integration",
          service_description:
            "Integrate tools like HubSpot, Salesforce, or Zoho to automate lead scoring, follow-ups, and customer retention workflows.",
        },
        {
          service_name: "Email & Retargeting Campaigns",
          service_description:
            "Nurture prospects through automated sequences and retargeting flows that re-engage visitors and drive conversions.",
        },
        {
          service_name: "Predictive Analytics & Revenue Forecasting",
          service_description:
            "Leverage AI and analytics to identify sales patterns, predict demand, and improve decision-making accuracy.",
        },
      ],
    },

    project_data: [
      {
        img: ecommerce,
        project_name: "D2C Revenue Acceleration Program",
        project_description:
          "Optimized paid campaigns, landing pages, and retargeting automation — leading to a 65% uplift in total online sales.",
      },
      {
        img: ecommerce,
        project_name: "B2B SaaS Growth Strategy",
        project_description:
          "Implemented a multi-step lead funnel and CRM automation, reducing acquisition costs by 40% and doubling qualified leads.",
      },
      {
        img: ecommerce,
        project_name: "FinTech App Sales Optimization",
        project_description:
          "Developed AI-powered campaign tracking and user segmentation, increasing subscription conversions by 55%.",
      },
    ],

    development_process: [
      {
        process_number: "01",
        process_title: "Audit & Insights",
        process_description:
          "Identify gaps in performance, funnel efficiency, and revenue potential.",
      },
      {
        process_number: "02",
        process_title: "Strategy Development",
        process_description: "Define growth goals, target audiences, and KPIs.",
      },
      {
        process_number: "03",
        process_title: "Implementation & Automation",
        process_description:
          "Launch optimized campaigns and integrate intelligent workflows.",
      },
      {
        process_number: "04",
        process_title: "Testing & Optimization",
        process_description:
          "Continuously refine creatives, messaging, and audience targeting through A/B testing.",
      },
      {
        process_number: "05",
        process_title: "Scaling & Reporting",
        process_description:
          "Measure performance, scale successful campaigns, and automate for long-term growth.",
      },
    ],
  },

  //  product enginnering
  {
    slug: "application-and-saas-development",
    title: "Product Engineering",
    heroSection: {
      heading: "Application & SaaS Development",
      description: `At Digixito, we design and develop custom web applications and SaaS platforms that blend powerful technology with exceptional user experience.
Our solutions are built to scale, adapt, and perform — enabling startups and enterprises to innovate faster and operate smarter.
Because great software doesn’t just work — it evolves with your business.`,
    },
    ourServices: {
      heading: "Our Application & SaaS Development Services",
      description:
        "We offer a complete suite of product development and technology services tailored to your growth and performance needs:",
      services_data: [
        {
          service_name: "Custom Web & Mobile Application Development",
          service_description:
            "Build fast, secure, and scalable applications using modern frameworks and cloud-native technologies.",
        },
        {
          service_name: "SaaS Product Design & Development",
          service_description:
            "Develop multi-tenant SaaS platforms with integrated analytics, subscription systems, and user management — from MVP to full-scale launch.",
        },
        {
          service_name: "API Development & System Integration",
          service_description:
            "Create powerful APIs and integrate third-party systems (CRM, ERP, Payment Gateways) for seamless data flow and functionality.",
        },
        {
          service_name: "AI-Integrated Application Development",
          service_description:
            "Embed AI and machine learning models into your software for automation, personalization, and predictive capabilities.",
        },
        {
          service_name: "DevOps, Security & Maintenance",
          service_description:
            "Implement CI/CD pipelines, cloud deployments, and continuous monitoring to ensure performance, uptime, and scalability.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "SaaS CRM Platform for Enterprises",
        project_description:
          "Built a cloud-based CRM solution with predictive lead scoring and analytics dashboards — achieving 99.9% uptime and 45% faster deal closures.",
      },
      {
        img: ecommerce,
        project_name: "On-Demand Service Application",
        project_description:
          "Developed a cross-platform app with location tracking, AI-powered recommendations, and in-app payments — scaling to 50K+ users within three months.",
      },
      {
        img: ecommerce,
        project_name: "Workflow Automation SaaS",
        project_description:
          "Engineered a B2B SaaS tool that automated internal processes for SMEs, reducing manual work by 60% and increasing efficiency by 3×.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Strategy",
        process_description:
          "Understand your vision, business goals, and user requirements.",
      },
      {
        process_number: "02",
        process_title: "Design & Architecture",
        process_description:
          "Plan application structure, system design, and user experience flows.",
      },
      {
        process_number: "03",
        process_title: "Development & Integration",
        process_description:
          "Build scalable applications using modern frameworks and microservices.",
      },
      {
        process_number: "04",
        process_title: "Testing & Optimization",
        process_description:
          "Conduct automated testing and performance tuning for quality assurance.",
      },
      {
        process_number: "05",
        process_title: "Deployment & Support",
        process_description:
          "Deploy securely to cloud platforms and provide ongoing updates and maintenance.",
      },
    ],
  },

  // 2️⃣ Web and Mobile Platforms
  {
    slug: "web-and-mobile-platforms",
    title: "Product Engineering",
    heroSection: {
      heading: "Web and Mobile Platforms",
      description: `At Digixito, we craft powerful, high-performing web and mobile platforms designed to connect brands with users through meaningful, intuitive, and scalable experiences.
Whether you’re building a responsive website, enterprise web portal, or next-gen mobile app — we ensure design, technology, and performance come together perfectly.
Because in today’s world, your platform is your brand.`,
    },
    ourServices: {
      heading: "Our Web & Mobile Platform Services",
      description:
        "We offer a complete range of services designed to bring your brand closer to your users — across every device and experience:",
      services_data: [
        {
          service_name: "Custom Web Platform Development",
          service_description:
            "Develop robust and scalable websites, portals, and dashboards tailored to your business needs — from CMS to enterprise-grade systems.",
        },
        {
          service_name: "Mobile App Development (iOS & Android)",
          service_description:
            "Build feature-rich native and hybrid mobile applications with smooth interfaces, secure backends, and lightning-fast performance.",
        },
        {
          service_name: "Cross-Platform & Progressive Web Apps (PWA)",
          service_description:
            "Deliver consistent, app-like experiences across web and mobile with single-codebase PWAs and cross-platform frameworks.",
        },
        {
          service_name: "UX-Centric Design & Prototyping",
          service_description:
            "Create intuitive interfaces powered by user research, wireframing, and rapid prototyping for better engagement and retention.",
        },
        {
          service_name: "Cloud Hosting & Scalability Solutions",
          service_description:
            "Deploy and manage your platforms on AWS, GCP, or Azure with elastic scaling, 24/7 uptime, and high-level security compliance.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Enterprise Web Platform for Logistics Company",
        project_description:
          "Developed a centralized operations portal integrating tracking, analytics, and AI-driven insights — improving efficiency by 45%.",
      },
      {
        img: ecommerce,
        project_name: "Mobile App for Lifestyle Brand",
        project_description:
          "Designed and built a mobile app with community features, product catalog, and social commerce tools — achieving 100K+ downloads within six months.",
      },
      {
        img: ecommerce,
        project_name: "PWA for Educational Institute",
        project_description:
          "Built a lightweight, cross-device web app enabling real-time class scheduling and notifications — reducing platform load time by 65%.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Strategy",
        process_description:
          "Understand business goals, user needs, and technical requirements.",
      },
      {
        process_number: "02",
        process_title: "Design & Experience Architecture",
        process_description:
          "Build wireframes, prototypes, and visual systems focused on usability.",
      },
      {
        process_number: "03",
        process_title: "Development & Integration",
        process_description:
          "Code, test, and deploy secure, scalable web and mobile applications.",
      },
      {
        process_number: "04",
        process_title: "Optimization & QA",
        process_description:
          "Ensure performance, responsiveness, and security through continuous testing.",
      },
      {
        process_number: "05",
        process_title: "Deployment & Support",
        process_description:
          "Launch, monitor, and evolve platforms with regular updates and growth-driven enhancements.",
      },
    ],
  },

  // 3️⃣ System Integration & API Development
  {
    slug: "system-integration-and-api-development",
    title: "Product Engineering",
    heroSection: {
      heading: "System Integration & API Development",
      description: `At Digixito, we build powerful APIs and seamless system integrations that unify your technology ecosystem — ensuring your platforms, products, and processes work as one.
Our integration-first approach eliminates silos, improves data flow, and enhances business agility across every layer of your digital infrastructure.
Because when your systems talk to each other — your business moves faster.`,
    },
    ourServices: {
      heading: "Our Integration & API Services",
      description:
        "We deliver a full range of integration and API development services that enhance efficiency and unlock scalability:",
      services_data: [
        {
          service_name: "Custom API Design & Development",
          service_description:
            "Build secure, scalable, and high-performance RESTful or GraphQL APIs tailored to your business needs and technology stack.",
        },
        {
          service_name: "System & Platform Integration",
          service_description:
            "Integrate CRM, ERP, e-commerce, and analytics platforms for unified workflows, faster data access, and improved visibility.",
        },
        {
          service_name: "Cloud & SaaS Integration",
          service_description:
            "Connect SaaS platforms and cloud applications (like Salesforce, HubSpot, or AWS) to create synchronized business ecosystems.",
        },
        {
          service_name: "Third-Party Service Integration",
          service_description:
            "Integrate payment gateways, logistics systems, AI tools, and other third-party APIs into your existing platforms.",
        },
        {
          service_name: "API Security & Governance",
          service_description:
            "Implement authentication, encryption, and access management protocols to keep your data secure and compliant.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Enterprise API Ecosystem for FinTech Brand",
        project_description:
          "Developed a suite of APIs connecting payment processing, KYC verification, and analytics systems — improving response times by 60%.",
      },
      {
        img: ecommerce,
        project_name: "Multi-System Integration for Manufacturing Firm",
        project_description:
          "Integrated ERP, CRM, and inventory platforms, creating a single dashboard for operations — reducing data discrepancies by 75%.",
      },
      {
        img: ecommerce,
        project_name: "Logistics Tracking API Development",
        project_description:
          "Built a real-time tracking API integrated with multiple third-party vendors — enhancing delivery accuracy and customer satisfaction.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Analysis",
        process_description:
          "Understand your current architecture, data dependencies, and system limitations.",
      },
      {
        process_number: "02",
        process_title: "Architecture & Design",
        process_description:
          "Define integration workflows, API schemas, and data exchange protocols.",
      },
      {
        process_number: "03",
        process_title: "Development & Implementation",
        process_description:
          "Build, test, and deploy APIs or connectors for seamless interoperability.",
      },
      {
        process_number: "04",
        process_title: "Testing & Security Validation",
        process_description:
          "Conduct load, stress, and penetration testing to ensure reliability and protection.",
      },
      {
        process_number: "05",
        process_title: "Monitoring & Maintenance",
        process_description:
          "Provide ongoing API monitoring, versioning, and optimization for long-term stability.",
      },
    ],
  },

  // 4️⃣ Cloud Infrastructure
  {
    slug: "cloud-infrastructure",
    title: "Product Engineering",
    heroSection: {
      heading: "Cloud Infrastructure",
      description: `At Digixito, we architect, deploy, and manage scalable cloud infrastructure that helps businesses accelerate performance, improve reliability, and reduce operational costs.
Our cloud solutions are built for agility — ensuring your digital ecosystem runs efficiently, securely, and seamlessly across AWS, Azure, and Google Cloud.
Because in the digital era, the cloud isn’t just infrastructure — it’s the foundation of innovation.`,
    },
    ourServices: {
      heading: "Our Cloud Infrastructure Services",
      description:
        "We offer end-to-end cloud services that help you harness the full potential of the cloud — efficiently and securely:",
      services_data: [
        {
          service_name: "Cloud Architecture & Setup",
          service_description:
            "Design and deploy multi-layered cloud environments that are robust, scalable, and performance-optimized.",
        },
        {
          service_name: "Cloud Migration & Modernization",
          service_description:
            "Move applications, databases, and workloads from on-premise to cloud with zero downtime and zero data loss.",
        },
        {
          service_name: "DevOps & Automation Services",
          service_description:
            "Implement CI/CD pipelines, infrastructure-as-code (IaC), and containerized environments for faster deployments and reliability.",
        },
        {
          service_name: "Cloud Security & Compliance",
          service_description:
            "Ensure your infrastructure is protected with identity management, encryption, and continuous threat monitoring aligned with compliance standards.",
        },
        {
          service_name: "Monitoring & Optimization",
          service_description:
            "Gain real-time visibility into resource utilization, costs, and performance — optimizing for efficiency and scalability.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Enterprise Cloud Migration",
        project_description:
          "Migrated a multi-tier legacy ERP system to AWS, improving scalability and reducing operational costs by 40%.",
      },
      {
        img: ecommerce,
        project_name: "DevOps Transformation for SaaS Platform",
        project_description:
          "Implemented automated CI/CD pipelines and container orchestration using Kubernetes, reducing release times from days to minutes.",
      },
      {
        img: ecommerce,
        project_name: "Scalable Cloud Infrastructure for E-Commerce",
        project_description:
          "Built a high-availability architecture on Google Cloud with load balancing and caching — achieving 99.99% uptime during sales surges.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Assessment & Strategy Design",
        process_description:
          "Evaluate current infrastructure, workloads, and goals to define an optimal cloud strategy.",
      },
      {
        process_number: "02",
        process_title: "Architecture & Planning",
        process_description:
          "Design scalable cloud frameworks aligned with performance, cost, and security goals.",
      },
      {
        process_number: "03",
        process_title: "Migration & Deployment",
        process_description:
          "Move data, apps, and systems to the cloud with zero disruption.",
      },
      {
        process_number: "04",
        process_title: "Automation & Optimization",
        process_description:
          "Implement DevOps pipelines, containerization, and load balancing for continuous delivery.",
      },
      {
        process_number: "05",
        process_title: "Monitoring & Continuous Support",
        process_description:
          "Provide round-the-clock management, cost tracking, and scalability enhancements.",
      },
    ],
  },
  


  //AI in marketing and growth

  // 1️⃣ AI-Driven Digital Marketing
  {
    slug: "ai-driven-digital-marketing",
    title: "AI in Marketing Growth",
    heroSection: {
      heading: "AI-Driven Digital Marketing",
      description: `Marketing has evolved beyond guesswork.
Modern brands need precision — strategies that learn from data, adapt to behavior, and evolve in real time.
At Digixito, we blend data science with storytelling to create AI-powered marketing ecosystems that identify trends before they happen and connect with customers before competitors do.
From automated ad bidding to AI-personalized content, we help you build marketing systems that continuously analyze, optimize, and perform — so every click, conversion, and impression contributes to measurable business growth.
Our philosophy is simple: let intelligence lead creativity — and creativity humanize data.`,
    },
    ourServices: {
      heading: "AI-Driven Marketing Services",
      description:
        "We deliver end-to-end marketing automation and intelligence solutions that boost efficiency, engagement, and ROI:",
      services_data: [
        {
          service_name: "Predictive Audience Targeting",
          service_description:
            "Use AI algorithms to identify high-value segments and predict conversion behavior — ensuring your message always reaches the right people at the right time.",
        },
        {
          service_name: "Automated Campaign Optimization",
          service_description:
            "Harness machine learning to adjust bids, budgets, and creatives in real time — maximizing ROI while minimizing wasted spend.",
        },
        {
          service_name: "Content Intelligence & Personalization",
          service_description:
            "Generate data-driven, hyper-personalized ad copy and content powered by AI models that understand context and tone.",
        },
        {
          service_name: "Cross-Channel Performance Insights",
          service_description:
            "Unify campaign data across Google, Meta, LinkedIn, and programmatic networks to gain 360° visibility of performance metrics.",
        },
        {
          service_name: "Marketing Automation & Workflow Integration",
          service_description:
            "Automate repetitive marketing tasks — from lead nurturing to reporting — freeing your teams to focus on strategy and creativity.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "AI-Led Campaign Optimization for SaaS Brand",
        project_description:
          "Integrated AI-based audience targeting and automated bidding, improving ROAS by 2.8× and reducing acquisition cost by 37%.",
      },
      {
        img: ecommerce,
        project_name: "Predictive Email Automation for E-Commerce Brand",
        project_description:
          "Implemented behavioral email triggers using AI insights, increasing open rates by 52% and revenue per email by 30%.",
      },
      {
        img: ecommerce,
        project_name: "Multi-Channel AI Strategy for B2B Enterprise",
        project_description:
          "Deployed machine-learning-driven segmentation and lead scoring, achieving a 3× boost in qualified leads within two months.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Audit",
        process_description:
          "Evaluate your existing campaigns, audience data, and marketing ecosystem.",
      },
      {
        process_number: "02",
        process_title: "AI Strategy Development",
        process_description:
          "Define predictive KPIs, data sources, and automation goals aligned with your objectives.",
      },
      {
        process_number: "03",
        process_title: "Implementation & Integration",
        process_description:
          "Deploy AI tools, machine-learning models, and campaign automation.",
      },
      {
        process_number: "04",
        process_title: "Optimization & Insights",
        process_description:
          "Continuously analyze performance, refine algorithms, and enhance targeting precision.",
      },
      {
        process_number: "05",
        process_title: "Scaling & Innovation",
        process_description:
          "Expand successful strategies across new channels, audiences, and territories.",
      },
    ],
  },

  // 2️⃣ Marketplace Management & Sales Boost
  {
    slug: "market-management-and-sales-boost",
    title: "AI in Marketing Growth",
    heroSection: {
      heading: "Marketplace Management & Sales Boost",
      description: `Online marketplaces have become the new battleground for brands — fast, competitive, and opportunity-rich.
But managing multiple platforms, optimizing catalogs, handling inventory, and scaling sales simultaneously can be overwhelming.
That’s where Digixito steps in.
We simplify your marketplace journey through data-led management, automation, and strategic sales acceleration — ensuring your products stay visible, competitive, and profitable.
Our experts handle everything — from onboarding and catalog optimization to performance ads, pricing strategies, and logistics alignment — turning your marketplace operations into a sustainable sales engine.
We don’t just list your products; we elevate your brand to outperform in every marketplace.`,
    },
    ourServices: {
      heading: "Marketplace & Sales Solutions",
      description:
        "We provide complete, growth-focused management and optimization services for multi-channel e-commerce operations:",
      services_data: [
        {
          service_name: "End-to-End Marketplace Management",
          service_description:
            "Set up, organize, and optimize your seller accounts across platforms like Amazon, Flipkart, and Nykaa with unified visibility and control.",
        },
        {
          service_name: "Catalog & Listing Optimization",
          service_description:
            "Develop SEO-rich product titles, images, and descriptions that increase discoverability, click-through rates, and conversions.",
        },
        {
          service_name: "Sponsored Ads & Campaign Management",
          service_description:
            "Run and optimize data-driven ad campaigns (Amazon Ads, Flipkart Ads, etc.) using AI insights to boost visibility and ROAS.",
        },
        {
          service_name: "Inventory & Order Sync Automation",
          service_description:
            "Integrate inventory management systems to maintain real-time stock updates, reduce order errors, and improve fulfillment speed.",
        },
        {
          service_name: "Sales Boost Strategy & Revenue Optimization",
          service_description:
            "Use predictive analytics, A/B testing, and performance dashboards to identify top-performing products and maximize profit margins.",
        },
        {
          service_name: "Partner Coordination & Value Added Support",
          service_description:
            "Collaborate with logistics, advertising, and channel partners to improve efficiency, minimize costs, and sustain sales growth.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Multi-Marketplace Scaling for Fashion Brand",
        project_description:
          "Managed presence across Amazon, Flipkart, and Myntra — optimizing catalog and running performance ads, resulting in a 3.5× growth in monthly revenue.",
      },
      {
        img: ecommerce,
        project_name: "Sales Acceleration for FMCG Product Line",
        project_description:
          "Deployed keyword-optimized listings, automated pricing, and AI ad optimization — improving visibility by 70% and sales by 60%.",
      },
      {
        img: ecommerce,
        project_name: "E-Commerce Optimization for Electronics Seller",
        project_description:
          "Integrated Unicommerce and Amazon API for stock sync and implemented sponsored campaigns that reduced ACOS by 40%.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Audit & Strategy Design",
        process_description:
          "Evaluate your marketplace presence and define growth opportunities.",
      },
      {
        process_number: "02",
        process_title: "Setup & Integration",
        process_description:
          "Configure product catalogs, inventory systems, and performance dashboards.",
      },
      {
        process_number: "03",
        process_title: "Optimization & Campaign Execution",
        process_description:
          "Implement ad campaigns, pricing strategies, and keyword enhancements.",
      },
      {
        process_number: "04",
        process_title: "Performance Monitoring & Reporting",
        process_description:
          "Analyze KPIs, ROAS, and conversions using live dashboards.",
      },
      {
        process_number: "05",
        process_title: "Scaling & Automation",
        process_description:
          "Automate key workflows and expand across new marketplaces for sustained growth.",
      },
    ],
  },

  // 3️⃣ Brand Strategy & Positioning
  {
    slug: "brand-strategy-and-positioning",
    title: "AI in Marketing Growth",
    heroSection: {
      heading: "Brand Strategy & Positioning",
      description: `In a world overflowing with products and messages, your brand isn’t just what you sell — it’s what people remember, believe, and trust.
That’s why brand strategy lies at the heart of every successful business transformation.
At Digixito, we help brands discover their purpose, define their positioning, and express it across every touchpoint.
Through in-depth market analysis, audience segmentation, and value proposition mapping, we craft brand strategies that make your business stand out, stay relevant, and scale globally.
We go beyond logos and taglines — creating meaningful brand identities that build relationships and inspire loyalty.`,
    },
    ourServices: {
      heading: "Brand Strategy & Positioning Services",
      description:
        "We offer end-to-end brand strategy services that align your business vision with your audience’s emotions and expectations:",
      services_data: [
        {
          service_name: "Brand Discovery & Research",
          service_description:
            "Understand your brand’s current perception, market opportunities, and competitive landscape through deep research and insight-driven analysis.",
        },
        {
          service_name: "Brand Purpose, Vision & Mission Definition",
          service_description:
            "Shape your brand’s north star — clarifying what you stand for, where you’re going, and why your audience should care.",
        },
        {
          service_name: "Positioning & Value Proposition Design",
          service_description:
            "Define your niche, differentiate from competitors, and articulate a brand promise that delivers clarity and trust.",
        },
        {
          service_name: "Messaging Framework & Tone of Voice",
          service_description:
            "Craft compelling messaging that aligns with your personality — ensuring consistency across marketing, social, and digital communication.",
        },
        {
          service_name: "Visual & Experiential Alignment",
          service_description:
            "Translate your strategy into design systems, brand language, and digital experiences that visually express who you are.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Education Brand Reinvention",
        project_description:
          "Redefined brand purpose and visual identity for an edtech startup, positioning it as an aspirational learning ecosystem — resulting in 3× audience engagement.",
      },
      {
        img: ecommerce,
        project_name: "B2B Brand Transformation",
        project_description:
          "Developed a complete repositioning strategy for a SaaS company — aligning messaging, design, and storytelling to target enterprise clients and increase inbound leads by 45%.",
      },
      {
        img: ecommerce,
        project_name: "Lifestyle Brand Relaunch",
        project_description:
          "Crafted a narrative-led identity system and social tone for a lifestyle label — growing brand recall and community following across Instagram and e-commerce.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Research & Discovery",
        process_description:
          "Understand audience behavior, competitor landscape, and brand perception.",
      },
      {
        process_number: "02",
        process_title: "Core Definition",
        process_description:
          "Establish brand vision, values, and unique positioning pillars.",
      },
      {
        process_number: "03",
        process_title: "Messaging & Framework",
        process_description:
          "Develop communication tone, personality, and storytelling narrative.",
      },
      {
        process_number: "04",
        process_title: "Design & Experience Translation",
        process_description:
          "Bring strategy to life through brand visuals, digital presence, and user experiences.",
      },
      {
        process_number: "05",
        process_title: "Launch & Adaptation",
        process_description:
          "Deploy across platforms and continuously refine through audience feedback and analytics.",
      },
    ],
  },

  // 4️⃣ Performance Marketing & Conversion Optimization
  {
    slug: "performance-marketing-and-conversion-optimization",
    title: "AI in Marketing Growth",
    heroSection: {
      heading: "Performance Marketing & Conversion Optimization",
      description: `Marketing today isn’t about spending more — it’s about spending smarter.
Every rupee should bring you closer to your audience and further from your competitors.
At Digixito, we design performance-first marketing ecosystems that balance creativity with analytics.
From paid campaigns and retargeting to landing page optimization and funnel automation, we focus on building high-performing journeys that attract, engage, and convert.
Our conversion optimization process goes beyond surface-level metrics.
We analyze data patterns, user behavior, and interaction touchpoints to understand why users act — and how to make them act faster.
We don’t just run ads — we engineer performance that grows with precision.`,
    },
    ourServices: {
      heading: "Performance & Optimization Services",
      description:
        "We provide a complete set of ROI-driven services designed to increase traffic quality, engagement depth, and conversion outcomes:",
      services_data: [
        {
          service_name: "Search & Display Advertising",
          service_description:
            "Run intelligent, multi-channel campaigns on Google, Meta, LinkedIn, and programmatic platforms — optimized for cost efficiency and reach.",
        },
        {
          service_name: "Conversion Rate Optimization (CRO)",
          service_description:
            "Analyze user journeys, heatmaps, and form behavior to refine landing pages, CTAs, and funnel flows for higher conversion rates.",
        },
        {
          service_name: "Retargeting & Remarketing Campaigns",
          service_description:
            "Re-engage potential buyers across platforms with personalized messaging, dynamic ads, and timed automation.",
        },
        {
          service_name: "Performance Analytics & Attribution Modeling",
          service_description:
            "Track real ROI across every touchpoint with advanced analytics and cross-channel attribution tracking for better decision-making.",
        },
        {
          service_name: "A/B & Multivariate Testing",
          service_description:
            "Test headlines, creatives, and layouts to identify what truly drives engagement and scale winning versions across campaigns.",
        },
        {
          service_name: "AI-Powered Ad Optimization",
          service_description:
            "Leverage machine learning for smart bidding, audience segmentation, and automated ad personalization in real time.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Paid Search Campaign for SaaS Platform",
        project_description:
          "Implemented AI-driven keyword targeting and CRO improvements — resulting in a 3.2× ROAS and a 40% drop in customer acquisition cost.",
      },
      {
        img: ecommerce,
        project_name: "Conversion Funnel Optimization for E-Commerce Brand",
        project_description:
          "Revamped landing page flow and A/B tested visuals, leading to a 28% increase in completed purchases within six weeks.",
      },
      {
        img: ecommerce,
        project_name: "Retargeting Strategy for B2B Services Firm",
        project_description:
          "Built automated remarketing sequences across Google and LinkedIn, boosting lead re-engagement by 2.5×.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Audit & Benchmarking",
        process_description:
          "Assess your current campaigns, audience data, and funnel performance.",
      },
      {
        process_number: "02",
        process_title: "Strategy & Planning",
        process_description:
          "Define performance KPIs, budgets, and conversion goals.",
      },
      {
        process_number: "03",
        process_title: "Execution & Experimentation",
        process_description:
          "Launch targeted campaigns and test variations across creative, audience, and platform levels.",
      },
      {
        process_number: "04",
        process_title: "Analysis & Optimization",
        process_description:
          "Use real-time insights to adjust strategy, bids, and design elements.",
      },
      {
        process_number: "05",
        process_title: "Scaling & Growth",
        process_description:
          "Expand successful campaigns, automate workflows, and sustain long-term ROI.",
      },
    ],
  },

  // 5️⃣ Social & Search Intelligence
  {
    slug: "social-and-search-intelligence",
    title: "AI in Marketing Growth",
    heroSection: {
      heading: "Social & Search Intelligence (AI-Enhanced SEO/SEM)",
      description: `Visibility drives opportunity — but in a world of constant algorithm updates, guesswork doesn’t work.
That’s why we built Social & Search Intelligence — a smart, AI-powered system that turns raw data into optimized strategies for higher rankings, better engagement, and more qualified leads.
At Digixito, we go beyond traditional SEO and SEM by integrating machine learning, predictive analysis, and automation into your digital marketing mix.
We don’t just help you appear in search results — we help you dominate them through adaptive strategies that evolve with your audience and Google’s algorithms.
Our goal is simple: make your brand visible everywhere your audience searches, scrolls, or speaks.`,
    },
    ourServices: {
      heading: "AI-Enhanced SEO/SEM Services",
      description:
        "We provide a 360° approach to modern search and social visibility — powered by intelligence, optimized by insight:",
      services_data: [
        {
          service_name: "AI-Driven SEO Strategy",
          service_description:
            "Use machine learning to analyze ranking patterns, competitor content, and keyword intent for precise optimization.",
        },
        {
          service_name: "Intelligent Search Advertising (SEM)",
          service_description:
            "Run high-ROI Google Ads and Bing campaigns enhanced with smart bidding, automation, and audience prediction algorithms.",
        },
        {
          service_name: "Social Search Optimization",
          service_description:
            "Leverage AI-based trend analysis to optimize brand visibility across social platforms like YouTube, LinkedIn, and X (Twitter).",
        },
        {
          service_name: "Content Intelligence & Automation",
          service_description:
            "Generate keyword-rich, contextually optimized, and SEO-aligned content using AI tools that understand user sentiment and search behavior.",
        },
        {
          service_name: "Predictive Analytics & Performance Tracking",
          service_description:
            "Monitor keyword movements, click behavior, and ad performance using AI dashboards that adapt in real time for faster decisions.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "AI-Based SEO Overhaul for SaaS Brand",
        project_description:
          "Redefined keyword architecture using predictive AI tools — resulting in a 120% increase in organic traffic and 3× faster ranking improvements.",
      },
      {
        img: ecommerce,
        project_name: "Smart SEM Campaign for E-Commerce Retailer",
        project_description:
          "Implemented AI-driven bidding and intent-based segmentation — achieving 2.5× ROAS and a 40% drop in cost per acquisition.",
      },
      {
        img: ecommerce,
        project_name: "Social Visibility Enhancement for B2B Firm",
        project_description:
          "Used social listening and AI-led keyword mapping to boost engagement by 70% across LinkedIn and Google SERPs.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Audit & Benchmarking",
        process_description:
          "Assess visibility gaps, competitor rankings, and audience intent across search and social.",
      },
      {
        process_number: "02",
        process_title: "Strategy & AI Modeling",
        process_description:
          "Develop keyword, content, and bidding strategies powered by predictive algorithms.",
      },
      {
        process_number: "03",
        process_title: "Execution & Automation",
        process_description:
          "Launch campaigns and apply machine-learning systems for continuous optimization.",
      },
      {
        process_number: "04",
        process_title: "Performance Analysis",
        process_description:
          "Monitor metrics, rankings, and engagement through AI-based dashboards.",
      },
      {
        process_number: "05",
        process_title: "Iteration & Growth Scaling",
        process_description:
          "Refine targeting, content, and automation models to sustain visibility and lead growth.",
      },
    ],
  },

  // 1️⃣ AI-Powered UI/UX Design
  {
    slug: "ai-powered-ui-ux-design",
    title: "Design Intelligence",
    heroSection: {
      heading: "AI-Powered UI/UX Design",
      description: `User experience has evolved — from static interfaces to intelligent ecosystems.
  In this new era, great design is not just about how something looks, but how it learns, adapts, and responds to user behavior.
  At Digixito, we leverage AI and machine learning to design interfaces that are dynamic, data-informed, and delightfully human.
  We use predictive analytics, personalization algorithms, and user journey mapping to understand what users need before they even ask for it.
  Our design philosophy fuses creativity with cognitive intelligence — ensuring your product delivers emotion, efficiency, and engagement in every interaction.
  We don’t just create experiences; we engineer intuitive ecosystems that evolve with your users.`,
    },
    ourServices: {
      heading: "AI-Powered UI/UX Design Services",
      description:
        "We offer next-generation design solutions that blend creativity, usability, and intelligence:",
      services_data: [
        {
          service_name: "AI-Assisted Research & Persona Building",
          service_description:
            "Use machine learning to analyze user data, segment behavior, and create accurate personas that guide smarter design decisions.",
        },
        {
          service_name: "Predictive UX & Personalization",
          service_description:
            "Design adaptive interfaces that learn from user actions, anticipate intent, and personalize content or layouts in real time.",
        },
        {
          service_name: "AI-Driven Prototyping & Design Automation",
          service_description:
            "Accelerate design processes using AI-assisted wireframing, component suggestions, and automated visual hierarchy optimization.",
        },
        {
          service_name: "Behavioral Analytics & Journey Mapping",
          service_description:
            "Leverage AI to track micro-interactions, identify friction points, and continuously optimize user journeys for better conversions.",
        },
        {
          service_name: "Conversational & Voice Interface Design",
          service_description:
            "Create natural, human-like chat and voice interfaces powered by AI and NLP — enabling smoother, context-aware digital experiences.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "Intelligent Dashboard Design for SaaS Platform",
        project_description:
          "Implemented AI-based personalization that adjusted dashboards dynamically based on user preferences, increasing session time by 48%.",
      },
      {
        img: ecommerce,
        project_name: "Smart UX Optimization for E-Commerce App",
        project_description:
          "Used predictive heatmaps and AI behavior tracking to refine product layouts — improving conversion rates by 32%.",
      },
      {
        img: ecommerce,
        project_name: "Voice UI for a Healthcare Assistant",
        project_description:
          "Designed a conversational interface powered by natural language understanding (NLU), making appointment scheduling 60% faster for end users.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Data Gathering",
        process_description:
          "Analyze user data, pain points, and engagement metrics to define clear design goals.",
      },
      {
        process_number: "02",
        process_title: "AI-Powered Research & Insights",
        process_description:
          "Use predictive and behavioral analytics to uncover user intent and expectations.",
      },
      {
        process_number: "03",
        process_title: "Wireframing & Concept Design",
        process_description:
          "Translate insights into intelligent design flows using AI-assisted layout generation.",
      },
      {
        process_number: "04",
        process_title: "Prototyping & Testing",
        process_description:
          "Conduct real-time user testing and optimize designs through AI-based feedback tools.",
      },
      {
        process_number: "05",
        process_title: "Implementation & Continuous Learning",
        process_description:
          "Deploy designs and use AI-driven analytics for continuous iteration and evolution.",
      },
    ],
  },

  // 2️⃣ Conversational Interface Design
  {
    slug: "conversational-interface-design",
    title: "Design Intelligence",
    heroSection: {
      heading: "Conversational Interface Design",
      description: `The way users interact with technology has changed — it’s no longer about clicks, it’s about conversations.
  Whether it’s through chat, voice, or text, modern users expect context-aware, intelligent experiences that understand their intent and respond naturally.
  At Digixito, we specialize in Conversational Interface Design that combines empathy, design strategy, and AI intelligence.
  We design systems that don’t just answer questions — they guide, assist, and build trust through seamless, natural dialogue.
  Our goal is to humanize technology — crafting interactions that feel less mechanical and more meaningful.
  From customer support bots to in-app assistants, every conversation we design enhances usability, accessibility, and engagement.`,
    },
    ourServices: {
      heading: "Conversational Design Services",
      description:
        "We build end-to-end conversational ecosystems that enhance engagement, reduce friction, and deliver delightful user experiences:",
      services_data: [
        {
          service_name: "AI Chatbot Design & Development",
          service_description:
            "Design and build chatbots that understand context, sentiment, and intent — delivering personalized and accurate responses across platforms.",
        },
        {
          service_name: "Voice Interface Design (VUI)",
          service_description:
            "Create voice experiences powered by NLP and speech recognition for assistants, apps, and devices — designed for natural flow and emotion.",
        },
        {
          service_name: "Omnichannel Conversational Experience",
          service_description:
            "Enable consistent interactions across WhatsApp, websites, social media, and apps — ensuring unified brand tone and user journey continuity.",
        },
        {
          service_name: "Dialogue Flow & Personality Design",
          service_description:
            "Define brand voice, tone, and personality for conversational agents that sound distinctly you — empathetic, clear, and human.",
        },
        {
          service_name: "Analytics & Optimization",
          service_description:
            "Track conversation patterns, identify drop-off points, and optimize responses for improved user satisfaction and conversion rates.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "AI Chat Assistant for E-Commerce Brand",
        project_description:
          "Designed a multilingual chatbot integrated with product search and recommendations — leading to a 45% increase in conversion rate and 60% reduction in support queries.",
      },
      {
        img: ecommerce,
        project_name: "Voice Experience for Banking App",
        project_description:
          "Built a secure voice assistant that allowed users to check balances, make transfers, and get insights using natural language — improving user satisfaction scores by 35%.",
      },
      {
        img: ecommerce,
        project_name: "In-App Conversational Flow for SaaS Dashboard",
        project_description:
          "Created guided chat onboarding and contextual assistance, reducing setup time by 50% and boosting user retention by 40%.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Research & User Mapping",
        process_description:
          "Understand user goals, expectations, and conversational intent.",
      },
      {
        process_number: "02",
        process_title: "Dialogue Architecture",
        process_description:
          "Design flowcharts, decision trees, and tone models for contextual responses.",
      },
      {
        process_number: "03",
        process_title: "Prototyping & Simulation",
        process_description:
          "Test real-world scenarios using voice or chat prototypes for flow refinement.",
      },
      {
        process_number: "04",
        process_title: "Integration & Testing",
        process_description:
          "Deploy across platforms and continuously train the model with real interaction data.",
      },
      {
        process_number: "05",
        process_title: "Optimization & Learning",
        process_description:
          "Analyze user feedback, identify friction points, and enhance conversational accuracy over time.",
      },
    ],
  },

  // 3️⃣ Prototyping & User Research
  {
    slug: "prototyping-and-user-research",
    title: "Design Intelligence",
    heroSection: {
      heading: "Prototyping & User Research",
      description: `Designing successful products requires more than creativity — it demands clarity, curiosity, and connection.
  That’s why our approach starts with research and ends with experience.
  At Digixito, we help businesses discover what their users truly want, how they behave, and why they act.
  Through user interviews, data analytics, and usability testing, we translate insights into actionable design strategies.
  Once validated, we move to rapid prototyping, bringing ideas to life through high-fidelity mockups, wireframes, and interactive prototypes that visualize the user journey before development begins.
  We make sure every design decision is backed by real evidence — not assumptions.`,
    },
    ourServices: {
      heading: "Prototyping & Research Services",
      description:
        "We provide end-to-end services that ensure your digital product aligns with real user needs and delivers measurable results:",
      services_data: [
        {
          service_name: "User Research & Persona Development",
          service_description:
            "Conduct qualitative and quantitative research to identify user pain points, motivations, and behavioral patterns.",
        },
        {
          service_name: "Usability Testing & Journey Mapping",
          service_description:
            "Observe real users in action, analyze interactions, and identify friction points to improve experience flow.",
        },
        {
          service_name: "Wireframing & Information Architecture",
          service_description:
            "Translate research into structure with low-fidelity wireframes and user flows that define navigation and hierarchy.",
        },
        {
          service_name: "Interactive Prototyping",
          service_description:
            "Build realistic, clickable prototypes that simulate the final product — allowing early testing and faster iteration cycles.",
        },
        {
          service_name: "Data-Driven Design Validation",
          service_description:
            "Use analytics and feedback tools to evaluate prototypes, validate concepts, and refine designs before launch.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "EdTech Platform Concept Validation",
        project_description:
          "Conducted in-depth user interviews and prototyped an interactive dashboard — improving onboarding clarity and reducing drop-offs by 40%.",
      },
      {
        img: ecommerce,
        project_name: "E-Commerce App Flow Optimization",
        project_description:
          "Developed high-fidelity prototypes for a mobile shopping app, tested usability, and implemented design adjustments that increased conversion by 28%.",
      },
      {
        img: ecommerce,
        project_name: "SaaS Product Redesign Research",
        project_description:
          "Executed user testing and heuristic evaluations to identify UX gaps — resulting in a complete product revamp and higher customer retention.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Discovery & Planning",
        process_description:
          "Define project objectives, user goals, and research scope.",
      },
      {
        process_number: "02",
        process_title: "User Research & Analysis",
        process_description:
          "Conduct interviews, surveys, and usability studies to identify insights.",
      },
      {
        process_number: "03",
        process_title: "Wireframing & Ideation",
        process_description:
          "Translate findings into visual concepts and navigational frameworks.",
      },
      {
        process_number: "04",
        process_title: "Interactive Prototyping",
        process_description:
          "Create and iterate realistic prototypes for testing and stakeholder review.",
      },
      {
        process_number: "05",
        process_title: "Testing & Validation",
        process_description:
          "Gather feedback, analyze metrics, and refine designs for accuracy and efficiency.",
      },
    ],
  },

  // 4️⃣ Experience Optimization
  {
    slug: "experience-optimization",
    title: "Design Intelligence",
    heroSection: {
      heading: "Experience Optimization",
      description: `User expectations change faster than ever. What worked yesterday might frustrate users today.
  That’s why Experience Optimization isn’t a one-time effort — it’s a continuous cycle of learning, testing, and improving.
  At Digixito, we help businesses create digital ecosystems that adapt to users in real time.
  Through A/B testing, heatmap analysis, conversion tracking, and AI-driven feedback systems, we identify what users love — and what stops them.
  Our approach fuses UX design, behavioral psychology, and performance analytics to enhance engagement, retention, and satisfaction across every platform.
  We refine not just interfaces — but the emotions and experiences that define them.`,
    },
    ourServices: {
      heading: "Experience Optimization Services",
      description:
        "We provide end-to-end optimization strategies that turn user insights into design excellence and business growth:",
      services_data: [
        {
          service_name: "Conversion Rate Optimization (CRO)",
          service_description:
            "Identify drop-offs, analyze funnels, and optimize design elements to increase conversion and reduce friction.",
        },
        {
          service_name: "User Behavior Analysis",
          service_description:
            "Use heatmaps, recordings, and analytics to understand user interactions, scroll depth, and engagement across devices.",
        },
        {
          service_name: "A/B & Multivariate Testing",
          service_description:
            "Test design variations, content, and layouts to discover what performs best — ensuring every change is data-backed.",
        },
        {
          service_name: "Personalization & Predictive UX",
          service_description:
            "Implement AI-powered personalization that adapts user journeys based on behavior, preferences, and intent.",
        },
        {
          service_name: "UX Performance & Accessibility Optimization",
          service_description:
            "Enhance site speed, responsiveness, and accessibility standards to ensure inclusivity and technical excellence.",
        },
      ],
    },
    project_data: [
      {
        img: ecommerce,
        project_name: "E-Commerce Conversion Optimization",
        project_description:
          "Conducted A/B tests across checkout flows and landing pages, increasing conversion by 33% and reducing cart abandonment by 25%.",
      },
      {
        img: ecommerce,
        project_name: "SaaS Dashboard Experience Redesign",
        project_description:
          "Used heatmap and behavioral data to simplify navigation and dashboard structure — boosting task completion rates by 45%.",
      },
      {
        img: ecommerce,
        project_name: "FinTech App Usability Enhancement",
        project_description:
          "Implemented session tracking and micro-interaction optimization, resulting in higher retention and a 2× increase in daily active users.",
      },
    ],
    development_process: [
      {
        process_number: "01",
        process_title: "Audit & Benchmarking",
        process_description:
          "Evaluate the current experience, user behavior, and performance metrics.",
      },
      {
        process_number: "02",
        process_title: "Hypothesis & Planning",
        process_description:
          "Identify friction points and define testable hypotheses for improvement.",
      },
      {
        process_number: "03",
        process_title: "Design & Experimentation",
        process_description:
          "Build and test variations through prototypes, A/B tests, and targeted experiments.",
      },
      {
        process_number: "04",
        process_title: "Measurement & Analysis",
        process_description:
          "Monitor performance, collect behavioral data, and evaluate user responses.",
      },
      {
        process_number: "05",
        process_title: "Iteration & Scaling",
        process_description:
          "Implement winning versions, expand learnings, and continuously refine experience flow.",
      },
    ],
  },
];

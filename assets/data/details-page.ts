import { DETAILS_PAGE_PROPS } from "@/utils/types";
import ecommerce from "@/services/machine-learning/ecommerce-recommended-engine.png";
import forecasting from "@/services/machine-learning/demand-forecasting.jpg";
import fraud_detection from "@/services/machine-learning/fraud_detection.jpg";
export const DETAILS_PAGE_DETAILS: DETAILS_PAGE_PROPS[] = [
  {
    slug: "ai-transformation/machine-learning-and-predictive-models",
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
    slug: "ai-transformation/generative-ai",
    title: "AI Transformation",
    heroSection: {
      heading: "Generative AI (Chatbots, LLMs, Automation)",
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
    slug: "ai-transformation/computer-vision-and-ocr-systems",
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
    slug: "ai-transformation/data-engineering-mlops",
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
];

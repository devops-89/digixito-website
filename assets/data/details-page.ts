import { DETAILS_PAGE_PROPS } from "@/utils/types";

export const DETAILS_PAGE_DETAILS: DETAILS_PAGE_PROPS[] = [
  {
    slug: "ai-transformation/machine-learning-and-predictive-models",
    title: "Digital Transformation",
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
      },
      {
        project_name: "Demand Forecasting for Retail",
        project_description:
          "Our predictive model helped a retail client anticipate product demand with 92% accuracy, reducing stock-outs and improving sales.",
      },
      {
        project_name: "Fraud Detection System",
        project_description:
          "A financial analytics solution using anomaly detection to identify suspicious transactions in real time.",
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
];

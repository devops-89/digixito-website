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
  toolsUsed: string[];
  projectDuration: string;
}

export const CASE_STUDIES_DATA: CaseStudyProps[] = [
  {
    id: "healthcare-document-analysis",
    title: "Healthcare Document Analysis System",
    clientName: "Healthcare Sector",
    category: "AI Document Processing",
    shortDescription:
      "A healthcare information processing system leveraging our RAG Framework and Document Processing modules.",
    fullDescription:
      "A healthcare information processing system that leverages our RAG Framework and Document Processing modules to analyse medical documents and images. The system maintains context while processing complex medical information, enabling healthcare professionals to access and understand relevant patient data and medical literature quickly.",
    challenge:
      "Processing complex medical information and literature quickly while maintaining context.",
    solution:
      "Leveraged the RAG Framework and Document Processing modules to analyze medical documents and images efficiently.",
    results: [
      { metric: "Advanced", description: "Document Analysis" },
      { metric: "RAG", description: "Framework Integration" },
    ],
    coverImage:
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/health-care-document-analysis/healthcare-1.jpg",
    gallery: [
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/health-care-document-analysis/healthcare-2.jpg",
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/health-care-document-analysis/healthcare-3.jpg",
    ],
    toolsUsed: ["Python", "TensorFlow", "React", "Node.js"],
    projectDuration: "6 Months",
  },
  {
    id: "nanoecho-node-detection",
    title: "NanoEcho Node Detection",
    clientName: "NanoEcho",
    category: "Medical Imaging Analysis",
    shortDescription:
      "Advanced medical imaging analysis system for lymph node detection utilizing computer vision.",
    fullDescription:
      "Advanced medical imaging analysis system for lymph node detection, utilizing computer vision and data point matching algorithms. The system processes medical images to identify and analyze lymph nodes with high accuracy, supporting medical professionals in diagnosis and treatment planning.",
    challenge:
      "Identifying and analyzing lymph nodes in medical images with high accuracy for diagnosis and treatment.",
    solution:
      "Utilized computer vision and data point matching algorithms from the Environmental Vision System and Custom AI Development modules.",
    results: [
      { metric: "High", description: "Detection Accuracy" },
      { metric: "Enhanced", description: "Treatment Planning" },
    ],
    coverImage:
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/nano-echo-node-detection/nano-echo-1.jpg",
    gallery: [
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/nano-echo-node-detection/nano-echo-2.jpg",
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/nano-echo-node-detection/nano-echo-3.jpg",
    ],
    toolsUsed: ["OpenCV", "PyTorch", "C++", "React"],
    projectDuration: "8 Months",
  },
  {
    id: "stock-market-analysis",
    title: "Stock Market Analysis Platform",
    clientName: "Financial Sector",
    category: "Financial Analysis",
    shortDescription:
      "A comprehensive financial analysis tool combining real-time market data with AI-driven insights.",
    fullDescription:
      "A comprehensive financial analysis tool that combines real-time market data processing with AI-driven insights. The enhanced version includes voice interaction capabilities, allowing users to query and receive market information through natural speech.",
    challenge:
      "Analyzing complex real-time market data efficiently and making those insights accessible to users naturally.",
    solution:
      "Combined Knowledge Processing Engine and Custom AI Development, and incorporated a Voice Processing Platform for natural speech queries.",
    results: [
      { metric: "Real-time", description: "Market Data Processing" },
      { metric: "Voice", description: "Interaction Capabilities" },
    ],
    coverImage:
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/stock-market-analysis/stock-1.jpg",
    gallery: [
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/stock-market-analysis/stock-2.jpg",
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/stock-market-analysis/stock-3.jpg",
    ],
    toolsUsed: ["Next.js", "Python", "WebSockets", "NLP"],
    projectDuration: "5 Months",
  },
  {
    id: "surveillance-system-demo",
    title: "Surveillance System Demo",
    clientName: "Security Sector",
    category: "Computer Vision",
    shortDescription:
      "Real-time surveillance monitoring utilizing computer vision for object detection and tracking.",
    fullDescription:
      "Real-time surveillance monitoring system utilizing advanced computer vision capabilities for object detection, tracking, and behavior analysis. The system demonstrates practical applications of our vision processing technology in security scenarios.",
    challenge:
      "Monitoring and analyzing security scenarios in real-time with continuous object tracking and scalable behavior analysis.",
    solution:
      "Deployed Environmental Vision System and Custom AI development for advanced real-time computer vision processing and tracking.",
    results: [
      { metric: "Real-time", description: "Object Tracking" },
      { metric: "Advanced", description: "Behavior Analysis" },
    ],
    coverImage:
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/survellience/survellience-1.jpg",
    gallery: [
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/survellience/survellience-2.jpg",
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/survellience/survellience-3.jpg",
    ],
    toolsUsed: ["YOLO", "OpenCV", "AWS", "React"],
    projectDuration: "4 Months",
  },
  {
    id: "vroar-educational-ai",
    title: "VRoar Educational AI Enhancement",
    clientName: "VRoar",
    category: "EdTech AI",
    shortDescription:
      "An intelligent educational support system featuring multiple AI-powered components for student assessment and career guidance.",
    fullDescription:
      "An intelligent educational support system featuring multiple AI-powered components: Student profile analysis through writing assessment, Automated performance feedback generation, AI-driven career path planning, and Professional guidance chatbot system.",
    challenge:
      "Providing hyper-personalized educational support, writing assessments, and career path planning at massive scale.",
    solution:
      "Integrated RAG Framework, Text Generation, Custom Chatbots, and LLM Customization to build an end-to-end learning and feedback platform.",
    results: [
      { metric: "Automated", description: "Performance Feedback" },
      { metric: "AI-driven", description: "Career Path Planning" },
    ],
    coverImage:
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/educational-ai/educational-1.jpg",
    gallery: [
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/educational-ai/educational-2.jpg",
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/educational-ai/educational-3.jpg",
    ],
    toolsUsed: ["LLMs", "LangChain", "Next.js", "MongoDB"],
    projectDuration: "7 Months",
  },

  {
    id: "interior-designer-digital-twin",
    title: "Interior Designer Intelligent Digital Twin",
    clientName: "Real Estate Sector",
    category: "Interactive 3D AI",
    shortDescription:
      "An advanced interactive property visualisation system combining digital twin technology with AI-powered sales assistance.",
    fullDescription:
      "An advanced interactive property visualisation system that combines digital twin technology with AI-powered sales assistance. Users can explore properties in photorealistic 3D, customise interior elements like wall colours and furnishings, and interact with an AI assistant that provides detailed property information, answers queries, and guides the sales process. The system creates an immersive, self-guided property exploration experience that enhances the real estate sales process.",
    challenge:
      "Supplying immersive property explorations with real-time room customization and an integrated, instant sales assistant.",
    solution:
      "Combined Intelligent Digital Twin Platform, Conversational Sales AI, Environmental Vision System, and Image Generation for live spatial customization.",
    results: [
      { metric: "Immersive", description: "Photorealistic 3D Exploration" },
      { metric: "Real-time", description: "Interior Customization" },
    ],
    coverImage:
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/digital-twin/digital-twin-1.jpg",
    gallery: [
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/digital-twin/digital-twin-2.jpg",
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/digital-twin/digital-twin-3.jpg",
    ],
    toolsUsed: ["Three.js", "WebGL", "React", "AI Image Gen"],
    projectDuration: "9 Months",
  },
  {
    id: "shipgpt",
    title: "ShipGPT",
    clientName: "Maritime Operations",
    category: "Cloud SaaS Platform",
    shortDescription:
      "Cloud-based SaaS for maritime operations with AI-powered document processing and conversational interface.",
    fullDescription:
      "A cloud-based SaaS platform for maritime operations that enables shipping companies to manage multiple vessels through a secure multi-tenant architecture, with role-based access for different crew members. Features an AI-powered document processing system that uses OCR to analyze ship manuals and regulations, automatically generating mechanical and compliance dashboards. Includes ShipGPT, a natural language interface that uses RAG to provide role-specific information access. Automates regulatory compliance tracking and machinery maintenance scheduling.",
    challenge:
      "Managing massive multi-language ship manuals/regulations, answering crew queries instantly, and tracking maritime compliance across multiple vessels securely.",
    solution:
      "Built a secure multi-tenant architecture utilizing OCR document processing, RAG framework, and Custom Chatbots to deliver the ShipGPT dashboard.",
    results: [
      { metric: "Automated", description: "Compliance Tracking" },
      { metric: "Role-specific", description: "Contextual RAG Access" },
    ],
    coverImage:
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/ship-ai/ship-1.jpg",
    gallery: [
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/ship-ai/ship-2.jpg",
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/ship-ai/ship-3.jpg",
    ],
    toolsUsed: ["Next.js", "AWS", "OCR", "LLMs"],
    projectDuration: "12 Months",
  },
  {
    id: "desara-ai",
    title: "Desara.ai",
    clientName: "Fashion Industry",
    category: "AI Fashion Design",
    shortDescription:
      "AI based fashion design platform utilizing cloud native solutions to stream and render 3D dresses.",
    fullDescription:
      "AI based fashion design platform. Uses cloud native streaming solutions to render 3D dresses in high quality. Intuitive tools to experiment with garments by changing colourways, prints and lighting. Optimizes the flow from research to virtual sampling, reducing design cycles from months to hours. The AI-powered solution dynamically curates content, providing human-like insights and efficient inspiration discovery.",
    challenge:
      "Drastically reducing lengthy fashion design cycles while providing rapid, high-quality 3D sampling and inspiration discovery over the cloud.",
    solution:
      "Developed GenAI design interfaces for dynamic colors and prints, fully integrated with cloud-native high-quality 3D rendering and streaming.",
    results: [
      { metric: "Hours", description: "Design Cycle Time" },
      { metric: "Immersive", description: "3D Virtual Sampling" },
    ],
    coverImage:
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/ai-fashion/fashion-1.jpg",
    gallery: [
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/ai-fashion/fashion-2.jpg",
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/ai-fashion/fashion-3.jpg",
    ],
    toolsUsed: ["GenAI", "React", "WebGL", "Google Cloud"],
    projectDuration: "6 Months",
  },
  {
    id: "digital-greeter",
    title: "Digital Greeter",
    clientName: "STPI India",
    category: "Robotics & Vision",
    shortDescription:
      "An AI robot that detects staff and guests arriving based on computer vision processing.",
    fullDescription:
      "An AI robot deployed at STPI India that detects staff and guests coming in based on computer vision. Utilizes voice synthesis to greet particular persons individually by name and context.",
    challenge:
      "Automating the physical front-door greeting process with highly personalized live recognition for incoming staff and guests.",
    solution:
      "Integrated hardware robotics with live computer vision for facial/object recognition, passing the outputs into dynamic voice synthesis engines.",
    results: [
      { metric: "Automated", description: "Guest Detection" },
      { metric: "Personalized", description: "Voice Synthesis Greeting" },
    ],
    coverImage:
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/stpi/stpi-1.jpg",
    gallery: [
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/stpi/stpi-2.jpg",
      "https://up23onagldy9futl.public.blob.vercel-storage.com/case-study/stpi/stpi-3.jpg",
    ],
    toolsUsed: ["Hardware Integration", "OpenCV", "Python", "TTS"],
    projectDuration: "3 Months",
  },
];

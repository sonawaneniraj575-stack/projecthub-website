/*
 * ProjectHub project catalogue.
 *
 * IMPORTANT:
 * - Prices are opening-sale prices in INR.
 * - Confirm prices and deliverables before publishing.
 * - Do not advertise projects as available until they are built and tested.
 * - All eight projects are planned as full-stack applications.
 * - Keep image paths aligned with the existing .webp assets.
 */

const PROJECTS = [
  {
    id: "attendwise-attendance-tracker",
    name: "AttendWise - Smart Attendance Tracker",
    category: "Education",
    type: "Full Stack",
    description:
      "Track attendance by subject, calculate eligibility targets, and understand how upcoming classes affect your attendance percentage.",
    originalPrice: 1299,
    price: 499,
    discountLabel: "Opening Sale",
    discountPercentage: 62,
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide",
      "Recharts",
      "Node.js",
      "Express",
      "SQLite",
      "Prisma",
      "Zod",
      "Vitest"
    ],
    features: [
      "Subject-wise attendance tracking",
      "Attendance target calculator",
      "Classes needed to reach a target",
      "Visual attendance progress dashboard",
      "Attendance history and reports",
      "CSV data export"
    ],
    image: "assets/projects/attendence.webp",
    featured: false,
    included: [
      "Full-stack application source code",
      "Database schema and migrations",
      "Setup guide",
      "Sample subjects and attendance data",
      "Project walkthrough",
      "Customization guide"
    ],
    faq: [
      {
        question: "Does AttendWise need a backend?",
        answer:
          "Yes. The planned full-stack version uses a Node.js and Express backend with a local SQLite database managed through Prisma."
      },
      {
        question: "Can I set my own attendance target?",
        answer:
          "Yes. Users can configure an attendance target and calculate how future classes affect their attendance percentage."
      }
    ]
  },

  {
    id: "campusfind-lost-found",
    name: "CampusFind - Campus Lost & Found Portal",
    category: "Campus Tools",
    type: "Full Stack",
    description:
      "A campus-focused portal for reporting lost and found belongings, searching listings, managing claims, and tracking item resolution.",
    originalPrice: 1299,
    price: 499,
    discountLabel: "Opening Sale",
    discountPercentage: 62,
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide",
      "Node.js",
      "Express",
      "SQLite",
      "Prisma",
      "Zod",
      "Vitest"
    ],
    features: [
      "Lost and found item listings",
      "Category and location filters",
      "Item status tracking",
      "Claim and resolution workflow",
      "Admin moderation dashboard",
      "Local image uploads",
      "Privacy-conscious contact handling"
    ],
    image: "assets/projects/campusfind.webp",
    featured: false,
    included: [
      "Full-stack source code",
      "Database schema and migrations",
      "Installation guide",
      "Sample campus listings",
      "Project walkthrough",
      "Customization guide"
    ],
    faq: [
      {
        question: "Can a college customize the portal?",
        answer:
          "Yes. Categories, campus information, and item-reporting workflows can be customized."
      },
      {
        question: "Does it connect to a real college database?",
        answer:
          "No. The local project uses its own SQLite database. Integration with an existing college system requires separate development and authorization."
      }
    ]
  },

  {
  id: "careercompass-resume-analyzer",
  name: "CareerCompass - Resume Analyzer & Job Matcher",
  category: "Career & Productivity",
  type: "Full Stack",
  description:
    "Analyze resumes, identify skills, compare profiles against job descriptions, and discover skill gaps with a locally runnable career guidance tool.",
  originalPrice: 1299,
  price: 499,
  discountLabel: "Opening Sale",
  discountPercentage: 62,
  technologies: [
    "React 18",
    "Vite",
    "TypeScript",
    "Tailwind CSS",
    "Lucide Icons",
    "Recharts",
    "Node.js",
    "Express",
    "SQLite",
    "Prisma",
    "Zod",
    "pdf-parse",
    "Mammoth",
    "Vitest",
    "Supertest"
  ],
  features: [
    "PDF and DOCX resume text extraction",
    "Skill identification and analysis",
    "Resume improvement suggestions",
    "Job description matching",
    "Competency charts and score gauges",
    "Matched and missing skill reports",
    "Career skill recommendations"
  ],
  image: "assets/projects/carriercampus.webp",
  featured: false,
  included: [
    "Full-stack application source code",
    "Database schema and migrations",
    "Setup instructions",
    "Sample resumes and job listings",
    "Project report and viva questions",
    "User guide",
    "Customization guide"
  ],
  faq: [
    {
      question: "Does CareerCompass require a paid AI API?",
      answer:
        "No. Resume parsing, skill extraction, and job matching can use local text processing and transparent rule-based scoring without a paid AI API."
    },
    {
      question: "Does the match score guarantee a job?",
      answer:
        "No. The score estimates alignment between resume skills and job requirements. It does not guarantee recruitment outcomes."
    }
  ]
},

  {
    id: "examsphere-online-examination",
    name: "ExamSphere - Online Examination System",
    category: "Education",
    type: "Full Stack",
    description:
      "Create and manage examinations, maintain question banks, conduct timed tests, automatically evaluate objective answers, and publish results.",
    originalPrice: 1299,
    price: 499,
    discountLabel: "Opening Sale",
    discountPercentage: 62,
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide",
      "Recharts",
      "Node.js",
      "Express",
      "SQLite",
      "Prisma",
      "Zod",
      "Vitest"
    ],
    features: [
      "Exam creation and scheduling",
      "Question bank management",
      "Student accounts and exam assignments",
      "Timed examinations",
      "Answer saving and submission",
      "Automatic objective-question scoring",
      "Manual descriptive-answer grading",
      "Results dashboard and reports"
    ],
    image: "assets/projects/examsphere.webp",
    featured: false,
    included: [
      "Full-stack source code",
      "Database schema and migrations",
      "Setup instructions",
      "Sample exams and questions",
      "Project report and viva questions",
      "Project walkthrough"
    ],
    faq: [
      {
        question: "Are exam results calculated automatically?",
        answer:
          "Objective question types can be scored automatically. Descriptive answers require manual evaluation unless a documented deterministic grading rule is configured."
      },
      {
        question: "Does ExamSphere include online proctoring?",
        answer:
          "The standard project focuses on examination workflows and basic integrity controls. Full remote proctoring is not included."
      }
    ]
  },

  {
    id: "libraryflow-library-management",
    name: "LibraryFlow - Library Management System",
    category: "Management",
    type: "Full Stack",
    description:
      "Manage a library's book inventory, members, borrowing and returns, reservations, overdue records, fines, and reports.",
    originalPrice: 1299,
    price: 499,
    discountLabel: "Opening Sale",
    discountPercentage: 62,
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide",
      "Recharts",
      "Node.js",
      "Express",
      "SQLite",
      "Prisma",
      "Zod",
      "Vitest"
    ],
    features: [
      "Book and category management",
      "Member management",
      "Book issue and return workflow",
      "Borrowing history",
      "Reservations and overdue tracking",
      "Fine calculation and payment records",
      "Inventory and activity reports",
      "CSV export"
    ],
    image: "assets/projects/libraryflow.webp",
    featured: false,
    included: [
      "Full-stack source code",
      "Database schema and migrations",
      "Installation guide",
      "Sample books and member records",
      "Project report and viva questions",
      "Customization guide"
    ],
    faq: [
      {
        question: "Can I manage multiple copies of a book?",
        answer:
          "Yes. The planned system tracks physical copies and their availability separately."
      },
      {
        question: "Does it process online payments?",
        answer:
          "No. The standard project records fines and payment status without integrating a real payment gateway."
      }
    ]
  },

  {
    id: "portfolioforge-student-portfolio",
    name: "PortfolioForge - Student Portfolio Builder",
    category: "Websites",
    type: "Full Stack",
    description:
      "Build a personalized student portfolio using editable profile details, education, skills, projects, and responsive templates, with account-based portfolio management and HTML export.",
    originalPrice: 1299,
    price: 499,
    discountLabel: "Opening Sale",
    discountPercentage: 62,
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide",
      "Node.js",
      "Express",
      "SQLite",
      "Prisma",
      "Zod",
      "Vitest"
    ],
    features: [
      "User accounts and portfolio management",
      "Live portfolio preview",
      "Editable profile and education",
      "Skills and project sections",
      "Responsive portfolio themes",
      "Downloadable standalone HTML output",
      "Print-friendly portfolio"
    ],
    image: "assets/projects/portfolioforge.webp",
    featured: false,
    included: [
      "Full-stack portfolio builder source code",
      "Database schema and migrations",
      "Portfolio templates",
      "Setup and customization guide",
      "Export instructions",
      "Deployment checklist"
    ],
    faq: [
      {
        question: "Can I publish my portfolio online?",
        answer:
          "Yes. The exported standalone portfolio can be deployed to a compatible static hosting service."
      },
      {
        question: "Does PortfolioForge need an AI API?",
        answer:
          "No. The core portfolio editing, preview, account management, and export features can work without an external AI service."
      }
    ]
  },

  {
    id: "projectpilot-project-planner",
    name: "ProjectPilot - Final-Year Project Planner",
    category: "Productivity",
    type: "Full Stack",
    description:
      "Organize final-year project milestones, weekly tasks, deadlines, report chapters, resources, and viva preparation in one workspace.",
    originalPrice: 1299,
    price: 499,
    discountLabel: "Opening Sale",
    discountPercentage: 62,
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide",
      "Recharts",
      "Node.js",
      "Express",
      "SQLite",
      "Prisma",
      "Zod",
      "Vitest"
    ],
    features: [
      "Project milestone planner",
      "Weekly tasks and deadlines",
      "Report chapter checklist",
      "Viva practice question bank",
      "Progress dashboard",
      "Notes and resource management",
      "Printable project summary"
    ],
    image: "assets/projects/projectmanager.webp",
    featured: false,
    included: [
      "Full-stack application source code",
      "Database schema and migrations",
      "Installation instructions",
      "Sample project plan",
      "Viva preparation examples",
      "Customization guide"
    ],
    faq: [
      {
        question: "Is ProjectPilot designed for final-year students?",
        answer:
          "Yes. It organizes project planning, documentation, submission milestones, and presentation preparation."
      },
      {
        question: "Does it automatically write project reports?",
        answer:
          "No. The standard project helps organize report preparation rather than automatically generating academic work."
      }
    ]
  },

  {
    id: "studentspend-budget-planner",
    name: "StudentSpend - Student Budget & Expense Tracker",
    category: "Finance",
    type: "Full Stack",
    description:
      "Record daily spending, manage monthly budgets, track savings goals, and understand spending patterns through a student-friendly dashboard.",
    originalPrice: 1299,
    price: 499,
    discountLabel: "Opening Sale",
    discountPercentage: 62,
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide",
      "Recharts",
      "Node.js",
      "Express",
      "SQLite",
      "Prisma",
      "Zod",
      "Vitest"
    ],
    features: [
      "Daily expense recording",
      "Monthly budget limits",
      "Expense category summaries",
      "Spending charts",
      "Savings goal tracking",
      "Transaction history",
      "CSV expense export"
    ],
    image: "assets/projects/studentspend.webp",
    featured: false,
    included: [
      "Full-stack application source code",
      "Database schema and migrations",
      "Setup instructions",
      "Sample expense data",
      "Project report and viva questions",
      "Customization guide"
    ],
    faq: [
      {
        question: "Does StudentSpend connect to a bank?",
        answer:
          "No. The standard version uses manually entered transactions and does not connect to bank accounts."
      },
      {
        question: "Does it synchronize across devices?",
        answer:
          "The local version stores records in its own database. Remote synchronization requires additional deployment and development."
      }
    ]
  },

  {
    id: "gradepredict-student-performance",
    name: "GradePredict - Student Performance Predictor",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Predict student marks or performance categories from study hours, attendance, and previous scores using a trained machine-learning model.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn"],
    features: ["Student performance prediction", "Study-hours and attendance inputs", "Predicted marks and performance category", "Model evaluation metrics", "Local execution"],
    image: "assets/projects/gradepredict-student-performance.png",
    imageAlt: "GradePredict student performance prediction dashboard with attendance and score charts",
    seoTitle: "GradePredict Student Performance Predictor Mini Project",
    seoDescription: "Python and Streamlit mini project for predicting student performance from study hours, attendance, and previous scores.",
    seoKeywords: ["student performance prediction project", "Python machine learning mini project", "Streamlit student project"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: true,
    included: ["Source code", "Dataset and model training files", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Does GradePredict use a trained model?", answer: "Yes. The intended project trains and evaluates a regression model using an included, documented dataset." },
      { question: "Are predictions guaranteed to be accurate?", answer: "No. Predictions depend on the dataset and model and are for educational demonstration." }
    ]
  },
  {
    id: "spamshield-sms-spam-detector",
    name: "SpamShield - SMS Spam Detector",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Classify a text message as spam or not spam using a trained text-classification model.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "TF-IDF", "Naive Bayes"],
    features: ["SMS text input", "Spam or not-spam prediction", "Text preprocessing", "Model evaluation metrics", "Local execution"],
    image: "assets/projects/spamshield-sms-spam-detector.png",
    imageAlt: "SpamShield SMS spam detector interface with message classification and shield visualization",
    seoTitle: "SpamShield SMS Spam Detector Mini Project",
    seoDescription: "Python and Streamlit mini project that classifies entered SMS text as spam or not spam with a documented machine-learning pipeline.",
    seoKeywords: ["SMS spam detector project", "NLP machine learning mini project", "Python spam classifier"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: true,
    included: ["Source code", "Labeled dataset or dataset setup guide", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Does SpamShield use machine learning?", answer: "Yes. The intended implementation uses a trained text vectorizer and classifier." },
      { question: "Can it classify every message correctly?", answer: "No. Classification may be incorrect, especially for messages unlike the training data." }
    ]
  },
  {
    id: "cinematch-movie-recommendation",
    name: "CineMatch - Movie Recommendation System",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Recommend movies similar to a selected title using movie metadata and content-based similarity.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "TF-IDF", "Cosine Similarity"],
    features: ["Movie selection", "Similar-movie recommendations", "Genre and metadata matching", "Local movie dataset", "Content-based recommendation"],
    image: "assets/projects/cinematch-movie-recommendation.png",
    imageAlt: "CineMatch movie recommendation dashboard with film similarity cards",
    seoTitle: "CineMatch Movie Recommendation System Mini Project",
    seoDescription: "Python and Streamlit mini project for recommending similar movies with content-based similarity from a local dataset.",
    seoKeywords: ["movie recommendation system project", "content based recommender mini project", "Python Streamlit project"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: true,
    included: ["Source code", "Movie dataset and attribution", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Does CineMatch need a movie API?", answer: "No. The intended version uses a local dataset and works without a paid API." },
      { question: "How are movies recommended?", answer: "The system compares available movie metadata using a content-based similarity method." }
    ]
  },
  {
    id: "digitvision-handwritten-digit-recognition",
    name: "DigitVision - Handwritten Digit Recognition",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Recognize a handwritten digit from 0 to 9 drawn on a simple digital canvas using a trained classifier.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "NumPy", "Pillow", "Scikit-learn"],
    features: ["Digit drawing canvas", "Digit prediction from 0 to 9", "Image preprocessing", "Trained classification model", "Local execution"],
    image: "assets/projects/digitvision-handwritten-digit-recognition.png",
    imageAlt: "DigitVision handwritten digit recognition dashboard with drawing canvas and prediction chart",
    seoTitle: "DigitVision Handwritten Digit Recognition Mini Project",
    seoDescription: "Python and Streamlit mini project that recognizes handwritten digits from a drawing canvas using image preprocessing and classification.",
    seoKeywords: ["handwritten digit recognition project", "computer vision mini project", "Python image classification"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: true,
    included: ["Source code", "Model training/preprocessing files", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Does DigitVision use a trained model?", answer: "Yes. The intended version trains a classifier on a documented handwritten-digit dataset." },
      { question: "Will every handwriting style be recognized correctly?", answer: "No. Prediction quality depends on the dataset, image preprocessing, and handwriting style." }
    ]
  },
  {
    id: "pricewise-house-price-predictor",
    name: "PriceWise - House Price Predictor",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Estimate a property's price from available features such as area, bedrooms, and other dataset-supported attributes.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Regression"],
    features: ["Property feature inputs", "Estimated house price", "Regression model", "Model evaluation metrics", "Local execution"],
    image: "assets/projects/pricewise-house-price-predictor.png",
    imageAlt: "PriceWise house price prediction dashboard with property inputs and valuation chart",
    seoTitle: "PriceWise House Price Predictor Mini Project",
    seoDescription: "Python and Streamlit mini project for estimating house prices from dataset-supported property features with regression.",
    seoKeywords: ["house price prediction project", "regression machine learning mini project", "Python property predictor"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Dataset and attribution", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Is the estimated price a formal valuation?", answer: "No. It is an educational model estimate and not a professional property valuation." },
      { question: "Can the model use local market data?", answer: "It can be retrained with a suitable, properly documented dataset." }
    ]
  },
  {
    id: "diabetes-risk-classifier",
    name: "Diabetes Risk Classifier",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Demonstrate binary classification on a public health dataset using selected health-related measurements.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    features: ["Dataset-based classification", "Input validation", "Prediction result", "Classification metrics", "Educational demonstration"],
    image: "assets/projects/diabetes-risk-classifier.png",
    imageAlt: "Diabetes risk classification educational dashboard with health data metrics",
    seoTitle: "Diabetes Risk Classifier Machine Learning Mini Project",
    seoDescription: "Educational Python and Streamlit mini project demonstrating binary classification on a documented public health dataset.",
    seoKeywords: ["diabetes risk classifier project", "health dataset classification", "machine learning mini project"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Dataset source details", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Is this a medical diagnostic tool?", answer: "No. It is an educational demonstration and must not be used for diagnosis or treatment decisions." },
      { question: "Does it use a machine-learning model?", answer: "Yes. The intended project trains and evaluates a classifier on documented data." }
    ]
  },
  {
    id: "email-category-classifier",
    name: "Email Category Classifier",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Classify email text into dataset-supported categories such as work, personal, or promotional.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "NLP", "Naive Bayes"],
    features: ["Email text input", "Predicted category", "Text preprocessing", "Trained text classifier", "Local execution"],
    image: "assets/projects/email-category-classifier.png",
    imageAlt: "Email category classifier dashboard with text input and NLP category panels",
    seoTitle: "Email Category Classifier NLP Mini Project",
    seoDescription: "Python and Streamlit NLP mini project for classifying entered email text into categories supported by a labeled dataset.",
    seoKeywords: ["email classification project", "NLP mini project", "Python text classifier"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Labeled dataset or setup guide", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Does the classifier send or read real emails?", answer: "No. The basic project classifies text entered by the user." },
      { question: "Can categories be changed?", answer: "Yes, if a suitable labeled dataset and corresponding model are provided." }
    ]
  },
  {
    id: "rainfall-prediction",
    name: "Rainfall Prediction",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Predict a rainfall class from historical weather measurements using a trained classification model.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    features: ["Weather feature inputs", "Rain/no-rain prediction", "Historical dataset", "Classification metrics", "Local execution"],
    image: "assets/projects/rainfall-prediction.png",
    imageAlt: "Rainfall prediction dashboard with weather measurements and rain classification indicator",
    seoTitle: "Rainfall Prediction Machine Learning Mini Project",
    seoDescription: "Python and Streamlit mini project for predicting a rainfall class from historical weather measurements.",
    seoKeywords: ["rainfall prediction project", "weather machine learning mini project", "Python classification project"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Dataset and attribution", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Is this a live weather forecast?", answer: "No. It is a local educational model trained on historical data, not a live forecast service." },
      { question: "Can results be guaranteed?", answer: "No. Predictions depend on the training data and model performance." }
    ]
  },
  {
    id: "iris-flower-classifier",
    name: "Iris Flower Classifier",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Predict an iris flower species from sepal and petal measurements using a classic classification dataset.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn"],
    features: ["Four flower measurement inputs", "Three-species prediction", "Trained classifier", "Accuracy evaluation", "Local execution"],
    image: "assets/projects/iris-flower-classifier.png",
    imageAlt: "Iris flower classifier dashboard with petal measurements and species prediction visualization",
    seoTitle: "Iris Flower Classifier Python Mini Project",
    seoDescription: "Beginner-friendly Python and Streamlit mini project that predicts iris species from sepal and petal measurements.",
    seoKeywords: ["iris flower classifier project", "beginner machine learning project", "Scikit-learn mini project"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Dataset/model training files", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Which dataset does it use?", answer: "The project can use Scikit-learn's built-in Iris dataset." },
      { question: "Which species are predicted?", answer: "Setosa, Versicolor, and Virginica." }
    ]
  },
  {
    id: "clusterlab-customer-segmentation",
    name: "ClusterLab - Customer Segmentation",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Group customer records by features such as annual income and spending score using K-Means clustering.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "K-Means"],
    features: ["Customer feature inputs", "Cluster assignment", "Cluster visualization", "Feature scaling", "Local execution"],
    image: "assets/projects/clusterlab-customer-segmentation.png",
    imageAlt: "ClusterLab customer segmentation dashboard with colored K-Means data clusters",
    seoTitle: "ClusterLab Customer Segmentation K-Means Mini Project",
    seoDescription: "Python and Streamlit mini project for grouping customer records with K-Means clustering and visualizing segment patterns.",
    seoKeywords: ["customer segmentation project", "K-Means clustering mini project", "Python unsupervised learning"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Sample dataset", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Is this supervised learning?", answer: "No. K-Means is an unsupervised clustering algorithm." },
      { question: "Does cluster number indicate customer value?", answer: "No. Cluster numbers are arbitrary labels and are not rankings." }
    ]
  },
  {
    id: "used-car-price-estimator",
    name: "Used Car Price Estimator",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Estimate a used car's price from dataset-supported features such as manufacturing year, mileage, fuel, and transmission.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Regression"],
    features: ["Vehicle detail inputs", "Estimated resale price", "Categorical and numeric preprocessing", "Regression metrics", "Local execution"],
    image: "assets/projects/used-car-price-estimator.png",
    imageAlt: "Used Car Price Estimator dashboard with vehicle features and resale price chart",
    seoTitle: "Used Car Price Estimator Machine Learning Mini Project",
    seoDescription: "Python and Streamlit mini project for estimating used-car prices from documented vehicle and market-dataset features.",
    seoKeywords: ["used car price prediction project", "vehicle price estimator", "regression mini project"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Dataset and attribution", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Is this a guaranteed resale value?", answer: "No. It is an educational estimate and not a guaranteed market price." },
      { question: "Can the model be retrained?", answer: "Yes, with a suitable documented dataset and compatible training pipeline." }
    ]
  },
  {
    id: "news-text-classifier",
    name: "News Text Classifier",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Classify a news headline or article into categories supported by a labeled text dataset.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "TF-IDF", "NLP"],
    features: ["Headline/article text input", "Predicted topic category", "Text preprocessing", "Trained classifier", "Model evaluation metrics"],
    image: "assets/projects/news-text-classifier.png",
    imageAlt: "News text classifier dashboard with article topic cards and NLP classification chart",
    seoTitle: "News Text Classifier NLP Mini Project",
    seoDescription: "Python and Streamlit mini project for classifying a news headline or article into categories from a labeled text dataset.",
    seoKeywords: ["news text classifier project", "NLP classification mini project", "Python text machine learning"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Labeled dataset or setup guide", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Does it verify whether news is true?", answer: "No. It classifies topic categories and does not fact-check news." },
      { question: "Does it need a paid API?", answer: "No. The intended project runs a local trained model." }
    ]
  },
  {
    id: "reviewsense-sentiment-analyzer",
    name: "ReviewSense - Review Sentiment Analyzer",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Classify a text review as positive or negative using a trained sentiment-analysis model.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "TF-IDF", "NLP"],
    features: ["Review text input", "Positive/negative sentiment", "Text preprocessing", "Trained classifier", "Local execution"],
    image: "assets/projects/reviewsense-sentiment-analyzer.png",
    imageAlt: "ReviewSense sentiment analyzer dashboard with positive and negative review signals",
    seoTitle: "ReviewSense Sentiment Analysis Mini Project",
    seoDescription: "Python and Streamlit mini project for classifying entered reviews as positive or negative with a local NLP model.",
    seoKeywords: ["sentiment analysis project", "review classifier mini project", "Python NLP project"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Labeled dataset or setup guide", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Can the model understand every review?", answer: "No. Sarcasm, ambiguous wording, and unseen language can lead to incorrect predictions." },
      { question: "Does it require an external AI service?", answer: "No. The intended implementation uses a local model." }
    ]
  },
  {
    id: "wine-quality-classifier",
    name: "Wine Quality Classifier",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Predict a quality category from chemical measurements in a documented wine-quality dataset.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Classification"],
    features: ["Chemical measurement inputs", "Predicted quality category", "Dataset preprocessing", "Classification metrics", "Local execution"],
    image: "assets/projects/wine-quality-classifier.png",
    imageAlt: "Wine quality classifier dashboard with chemical measurements and quality category bands",
    seoTitle: "Wine Quality Classifier Machine Learning Mini Project",
    seoDescription: "Python and Streamlit mini project for predicting a quality category from chemical measurements in a documented dataset.",
    seoKeywords: ["wine quality classifier project", "classification machine learning mini project", "Python dataset project"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Dataset and attribution", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Does the model assess all aspects of wine quality?", answer: "No. It predicts labels from the available dataset features and is for educational use." },
      { question: "Can the model be evaluated?", answer: "Yes. The project should use a held-out test set and report appropriate classification metrics." }
    ]
  },
  {
    id: "fruit-image-classifier",
    name: "Fruit Image Classifier",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Predict a fruit category from an uploaded image using a trained image-classification model.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pillow", "NumPy", "Scikit-learn"],
    features: ["Image upload", "Image preprocessing", "Predicted fruit category", "Trained classifier", "Input validation"],
    image: "assets/projects/fruit-image-classifier.png",
    imageAlt: "Fruit image classifier dashboard with image upload panel and fruit category predictions",
    seoTitle: "Fruit Image Classifier Computer Vision Mini Project",
    seoDescription: "Python and Streamlit mini project for predicting fruit categories from uploaded images with local preprocessing.",
    seoKeywords: ["fruit image classification project", "computer vision mini project", "Python image classifier"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Dataset/model training files", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Does it recognize every fruit variety?", answer: "No. It can classify only the categories represented adequately in its training data." },
      { question: "Can images be processed locally?", answer: "Yes. The intended project processes uploaded images locally." }
    ]
  },
  {
    id: "salescast-sales-forecasting",
    name: "SalesCast - Sales Forecasting",
    category: "AI & Machine Learning",
    type: "Mini Project",
    description: "Forecast future sales from historical sales records using a simple, documented forecasting or regression approach.",
    originalPrice: 499,
    price: 299,
    discountLabel: "Mini Project",
    discountPercentage: 40,
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    features: ["Historical sales data", "Future sales estimate", "Sales trend visualization", "Forecast evaluation", "Local execution"],
    image: "assets/projects/salescast-sales-forecasting.png",
    imageAlt: "SalesCast sales forecasting dashboard with historical revenue bars and future trend line",
    seoTitle: "SalesCast Sales Forecasting Python Mini Project",
    seoDescription: "Python and Streamlit mini project for estimating future sales from historical records with a documented forecasting workflow.",
    seoKeywords: ["sales forecasting project", "time series mini project", "Python sales prediction"],
    geo: { region: "India", audience: "college students and aspiring developers", delivery: "local project setup" },
    featured: false,
    included: ["Source code", "Sample sales dataset", "Installation and run guide", "Project report", "Viva questions"],
    faq: [
      { question: "Does it guarantee future sales?", answer: "No. Forecasts are estimates based on historical patterns and can be affected by changing conditions." },
      { question: "Can I use my own sales data?", answer: "Yes, if the data follows the documented input format." }
    ]
  }
];

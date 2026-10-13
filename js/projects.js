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
    featured: true,
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
    featured: true,
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
    featured: true,
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
  }
];

/*
  ProjectHub project catalogue.
  Update this array when adding or editing projects.

  IMPORTANT:
  - Prices are suggested starting prices in INR.
  - Confirm prices and deliverables before publishing.
  - Do not advertise projects as available until they are built.
  - Image paths below reuse existing assets; replace them with
    matching artwork when your new project previews are ready.
*/

const PROJECTS = [
  {
    id: "attendwise-attendance-tracker",
    name: "AttendWise - Smart Attendance Tracker",
    category: "Education",
    type: "Application",
    description:
      "Track attendance by subject, calculate eligibility targets, and understand how upcoming classes affect your attendance percentage.",
    price: 999,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Chart.js"
    ],
    features: [
      "Subject-wise attendance tracking",
      "Attendance target calculator",
      "Classes needed to reach a target",
      "Visual progress charts",
      "CSV data export"
    ],
    image: "assets/projects/dashboard.svg",
    featured: true,
    included: [
      "Application source code",
      "Setup guide",
      "Sample subjects and attendance data",
      "Project walkthrough",
      "Customization guide"
    ],
    faq: [
      {
        question: "Does the tracker need a backend?",
        answer:
          "The starter version can run entirely in the browser and save data locally. Cloud synchronization and multi-user access would require additional development."
      },
      {
        question: "Can I set my own attendance target?",
        answer:
          "Yes. Users can configure an attendance target and calculate how future classes affect their percentage."
      }
    ]
  },

  {
    id: "projectpilot-final-year-planner",
    name: "ProjectPilot - Final-Year Project Planner",
    category: "Productivity",
    type: "Application",
    description:
      "Organize final-year project milestones, deadlines, report chapters, weekly tasks, and viva preparation in one workspace.",
    price: 999,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    features: [
      "Project milestone planner",
      "Weekly tasks and deadlines",
      "Report chapter checklist",
      "Viva practice question bank",
      "Progress dashboard",
      "Printable project summary"
    ],
    image: "assets/projects/study-assistant.svg",
    featured: true,
    included: [
      "Application source code",
      "Installation instructions",
      "Sample project plan",
      "Viva preparation examples",
      "Customization guide"
    ],
    faq: [
      {
        question: "Is this designed for final-year students?",
        answer:
          "Yes. The project is designed around common project planning, documentation, submission, and presentation tasks."
      },
      {
        question: "Does it automatically write project reports?",
        answer:
          "No. The initial version helps organize report preparation rather than automatically generating academic work."
      }
    ]
  },

  {
    id: "portfolioforge-student-portfolio",
    name: "PortfolioForge - Student Portfolio Builder",
    category: "Websites",
    type: "Website",
    description:
      "Create a personalized portfolio from your education, skills, projects, resume information, and contact details.",
    price: 999,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    features: [
      "Live portfolio preview",
      "Editable profile and education",
      "Skills and project sections",
      "Responsive portfolio themes",
      "Downloadable HTML output",
      "Print-friendly portfolio"
    ],
    image: "assets/projects/portfolio.svg",
    featured: true,
    included: [
      "Portfolio builder source code",
      "Portfolio template",
      "Customization guide",
      "Export instructions",
      "Deployment checklist"
    ],
    faq: [
      {
        question: "Can I publish my portfolio online?",
        answer:
          "Yes. The exported portfolio can be deployed to a compatible static hosting service."
      },
      {
        question: "Do I need an AI API key?",
        answer:
          "No. The core portfolio creation and export features can work without an external AI service."
      }
    ]
  },

  {
    id: "studentspend-budget-planner",
    name: "StudentSpend - Student Budget Planner",
    category: "Finance",
    type: "Application",
    description:
      "Manage everyday spending, monthly budgets, savings goals, and expense categories with a simple student-friendly dashboard.",
    price: 999,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Chart.js"
    ],
    features: [
      "Daily expense recording",
      "Monthly budget limits",
      "Expense category summaries",
      "Spending charts",
      "Savings goal tracking",
      "CSV expense export"
    ],
    image: "assets/projects/dashboard.svg",
    featured: false,
    included: [
      "Application source code",
      "Setup instructions",
      "Sample expense data",
      "User guide",
      "Customization guide"
    ],
    faq: [
      {
        question: "Does the application connect to a bank?",
        answer:
          "No. The starter version uses manually entered expenses and does not connect to bank accounts."
      },
      {
        question: "Will my data synchronize across devices?",
        answer:
          "The initial version stores data in the browser. Account-based synchronization would require a backend."
      }
    ]
  },

  {
    id: "campusfind-lost-found",
    name: "CampusFind - Campus Lost & Found",
    category: "Campus Tools",
    type: "Full Stack",
    description:
      "A campus-focused portal for reporting lost and found belongings, searching listings, and tracking the resolution of reported items.",
    price: 999,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    features: [
      "Lost and found item listings",
      "Category and location filters",
      "Item status tracking",
      "Claim and resolution workflow",
      "Moderator dashboard",
      "Privacy-conscious contact handling"
    ],
    image: "assets/projects/college-management.svg",
    featured: false,
    included: [
      "Full-stack source code",
      "Database schema",
      "Installation guide",
      "Sample campus listings",
      "Project walkthrough",
      "Customization guide"
    ],
    faq: [
      {
        question: "Can a college customize the portal?",
        answer:
          "Yes. Categories, campus information, and listing workflows can be adapted to agreed requirements."
      },
      {
        question: "Does it connect to a real college database?",
        answer:
          "No. The initial project uses its own database. Integration with an existing college system would require separate development and authorization."
      }
    ]
  }
];
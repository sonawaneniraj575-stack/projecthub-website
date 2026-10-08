/*
  Project catalogue data lives here. To add or edit a project, change this array only.
  - id: unique URL-safe value used by project.html?id=...
  - price: number in INR; technologies, features and faq are arrays of strings
  - image: replace the matching file in assets/projects/ when you add your own artwork
*/
const PROJECTS = [
  {
    id: "college-management-system",
    name: "College Management System",
    category: "Management",
    type: "Full Stack",
    description: "A practical platform for managing students, courses, attendance and reports from one dashboard.",
    price: 4999,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
    features: ["Admin dashboard", "Student management", "Attendance records", "Reports and authentication"],
    image: "assets/projects/college-management.svg",
    featured: true,
    included: ["Source code", "Setup guide", "Project walkthrough", "Agreed scope support"],
    faq: [{ question: "Can the modules be customized?", answer: "Yes. Discuss the required modules and changes with ProjectHub before delivery." }]
  },
  {
    id: "shopfront-ecommerce",
    name: "Shopfront E-Commerce",
    category: "E-Commerce",
    type: "Full Stack",
    description: "A clean shopping experience with product browsing, cart flow and an admin-ready structure.",
    price: 5999,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    features: ["Product catalogue", "Cart experience", "Order workflow", "Responsive UI"],
    image: "assets/projects/shopfront.svg",
    featured: true,
    included: ["Source code", "Installation notes", "Feature explanation", "Agreed scope support"],
    faq: [{ question: "Is payment processing included?", answer: "No payment gateway is enabled by default. Requirements can be discussed separately." }]
  },
  {
    id: "student-portfolio",
    name: "Student Portfolio Studio",
    category: "Websites",
    type: "Website",
    description: "A polished portfolio website for presenting skills, projects, resume information and contact details.",
    price: 2499,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Project showcase", "Responsive design", "About and contact sections", "Easy content updates"],
    image: "assets/projects/portfolio.svg",
    featured: false,
    included: ["Responsive source code", "Content setup guide", "Deployment checklist"],
    faq: [{ question: "Can I use my own content?", answer: "Yes. The page structure can be adapted to your profile and projects." }]
  },
  {
    id: "insight-dashboard",
    name: "Insight Analytics Dashboard",
    category: "Dashboards",
    type: "Full Stack",
    description: "A focused dashboard interface for presenting metrics, trends and operational summaries clearly.",
    price: 4499,
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
    features: ["Metric cards", "Charts and trends", "Responsive tables", "Dashboard navigation"],
    image: "assets/projects/dashboard.svg",
    featured: false,
    included: ["Dashboard source code", "Sample data", "Setup documentation"],
    faq: [{ question: "Can I connect a different data source?", answer: "Data integration depends on the requirement and can be scoped through WhatsApp." }]
  },
  {
    id: "smart-study-assistant",
    name: "Smart Study Assistant",
    category: "AI",
    type: "Application",
    description: "A study companion concept that organizes notes, tasks and helpful learning prompts in one place.",
    price: 3999,
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
    features: ["Notes workspace", "Task planner", "Searchable resources", "Extensible AI integration"],
    image: "assets/projects/study-assistant.svg",
    featured: false,
    included: ["Application source code", "Run instructions", "Feature overview"],
    faq: [{ question: "Is an AI API key included?", answer: "No. Third-party services and credentials must be supplied and configured separately." }]
  },
  {
    id: "custom-project-starter",
    name: "Custom Project Starter",
    category: "Custom",
    type: "Custom",
    description: "A flexible starting point for a website or software idea that needs a tailored scope.",
    price: 0,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Requirement discussion", "Scope planning", "Technology recommendation", "Custom quote"],
    image: "assets/projects/custom.svg",
    featured: false,
    included: ["Requirement discussion", "Scope estimate", "Agreed deliverables"],
    faq: [{ question: "How is the price decided?", answer: "ProjectHub reviews the requirements, features and timeline before sharing a quote." }]
  }
];

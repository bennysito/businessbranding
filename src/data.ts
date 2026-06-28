export type PageId = 'home' | 'about' | 'offerings' | 'portfolio' | 'org-chart' | 'contact';

export const navItems: Array<{ id: PageId; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'offerings', label: 'Offerings' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'org-chart', label: 'Org Chart' },
  { id: 'contact', label: 'Contact' },
];

export const services = [
  {
    title: 'Advertisement Video Editing',
    description:
      'Polished ad videos shaped for campaigns, product launches, and business promotions across digital channels.',
  },
  {
    title: 'Website Creation',
    description:
      'Modern, responsive websites designed to communicate credibility, services, and clear next steps for clients.',
  },
  {
    title: 'Input and Output System',
    description:
      'Custom systems that organize business data, streamline routine operations, and improve reporting visibility.',
  },
  {
    title: 'Photography',
    description:
      'Professional photo services for products, brand materials, company profiles, and marketing assets.',
  },
  {
    title: 'Accounting Services',
    description:
      'Reliable accounting support to help businesses maintain clearer records and stronger financial organization.',
  },
];

export const portfolioItems = [
  {
    title: 'Brand Campaign Video',
    category: 'Video Editing',
    description: 'A placeholder for an upcoming advertisement video editing project showcase.',
  },
  {
    title: 'Corporate Website Build',
    category: 'Websites',
    description: 'A placeholder for a future responsive company website case study.',
  },
  {
    title: 'Operations Tracking System',
    category: 'Systems',
    description: 'A placeholder for an upcoming input and output system implementation.',
  },
  {
    title: 'Business Photo Session',
    category: 'Photography',
    description: 'A placeholder for future brand, product, or corporate photography work.',
  },
  {
    title: 'Financial Records Setup',
    category: 'Accounting',
    description: 'A placeholder for a future accounting services and records organization project.',
  },
];

export const leadership = [
  {
    role: 'CEO',
    name: 'Chief Executive Officer',
    description:
      'Leads company strategy, client relationships, service direction, and overall business growth.',
  },
  {
    role: 'CFO',
    name: 'Chief Financial Officer',
    description:
      'Oversees financial planning, accounting standards, budgets, and responsible business operations.',
  },
];

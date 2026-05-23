import { PortfolioContent } from '../models/portfolio.models';

export const PORTFOLIO: PortfolioContent = {
  contact: {
    name: 'William Araujo Dantas',
    headline: 'Senior Software Engineer · Senior .NET Developer · Backend Engineer',
    location: 'São Paulo, Brazil',
    availability: 'Open to Remote',
    phone: '+55 11 98592-7862',
    email: 'william.adantas@gmail.com',
    linkedInUrl: 'https://www.linkedin.com/in/william-adantas',
  },
  summaryParagraphs: [
    'Senior Software Engineer with 12+ years of experience building scalable and secure enterprise applications using the .NET ecosystem, specializing in backend engineering, distributed systems, API design, and cloud-native architectures.',
    'Strong experience developing mission-critical systems for banking, healthcare, tolling, and e-commerce industries, including secure financial platforms and high-volume transactional systems handling millions of requests and sensitive financial operations.',
    'Expertise in C#, .NET Core, ASP.NET Core, REST APIs, microservices, scalable architectures, distributed messaging, and high-availability systems. Proven track record designing robust backend solutions focused on performance, reliability, maintainability, and scalability.',
    'Hands-on experience with Angular applications, including Angular 19, RxJS, TypeScript, state management, and frontend deployments using Nginx. Familiar with Vue.js and Vue 3 ecosystems.',
    'Experienced with Kubernetes, CI/CD pipelines, cloud deployments on Azure and AWS, containerized applications, RabbitMQ, IBM MQ, SQL Server, Oracle, and enterprise integration patterns.',
    'Strong technical leadership mindset with experience collaborating with distributed and remote teams, participating in architectural decisions, mentoring developers, and improving engineering processes. Currently leveraging AI-assisted development tools such as Cursor to accelerate delivery and improve code quality.',
  ],
  skillCategories: [
    {
      category: 'Programming Languages',
      items: ['C#', 'VB.NET', 'MUMPS', 'TypeScript', 'JavaScript'],
    },
    {
      category: 'Backend & APIs',
      items: [
        '.NET Core',
        '.NET 8',
        'ASP.NET Core',
        'ASP.NET MVC',
        'ASP.NET Web Forms',
        'REST APIs',
        'SOAP Web Services',
        'Microservices Architecture',
        'API-first Design',
      ],
    },
    {
      category: 'Frontend',
      items: [
        'Angular',
        'Angular 19',
        'RxJS',
        'TypeScript',
        'State Management',
        'Vue.js',
        'Vue 3',
        'HTML',
        'CSS',
        'JavaScript',
        'Nginx-hosted Angular Applications',
      ],
    },
    {
      category: 'Architecture & Design',
      items: [
        'Clean Architecture',
        'Hexagonal Architecture (Ports and Adapters)',
        'Distributed Systems',
        'Scalable Systems',
        'Secure Financial Systems',
        'Domain-Driven Design (DDD concepts)',
      ],
    },
    {
      category: 'Messaging & Integration',
      items: ['RabbitMQ', 'IBM MQ', 'Enterprise Integrations'],
    },
    {
      category: 'Cloud & Containers',
      items: ['Kubernetes', 'Azure Deployments', 'AWS Deployments', 'Containerized Applications'],
    },
    {
      category: 'Databases',
      items: ['SQL Server', 'Oracle', 'InterSystems Caché'],
    },
    {
      category: 'ORM & Data Access',
      items: ['Entity Framework', 'Entity Framework Core', 'Dapper'],
    },
    {
      category: 'DevOps & CI/CD',
      items: [
        'Jenkins',
        'Bamboo',
        'Octopus Deploy',
        'XLR',
        'Ansible',
        'CI/CD Pipelines',
        'Automated Deployments',
      ],
    },
    {
      category: 'Testing',
      items: ['Unit Testing', 'Integration Testing'],
    },
    {
      category: 'Search & Performance',
      items: ['ElasticSearch', 'Performance Optimization'],
    },
    {
      category: 'Methodologies',
      items: ['Agile', 'Scrum', 'Kanban'],
    },
    {
      category: 'Tools',
      items: ['Git', 'TFS', 'RTC', 'SVN', 'Cursor (AI-assisted software development)'],
    },
  ],
  experience: [
    {
      company: 'Banco Daycoval',
      role: 'Senior Software Engineer',
      period: 'August 2023 – Present',
      highlights: [
        'Software development using .NET 8 and Angular 19.',
        'Design and implementation of scalable and secure backend services and APIs for financial systems.',
        'Development of robust banking solutions handling sensitive financial operations and high-volume transactional workloads.',
        'Application of hexagonal architecture, clean architecture, and clean code principles.',
        'Refactoring and optimization of a vehicle debt payment API, scaling the system to handle approximately 1 million requests per day.',
        'Performance optimization, maintainability improvements, and reduction of operational bottlenecks.',
        'Frontend development using Angular, RxJS, and TypeScript.',
        'Participation in architectural decisions and technical discussions.',
        'Use of AI-assisted tools (Cursor) to accelerate development and improve code quality.',
      ],
    },
    {
      company: 'BRQ Digital Solutions',
      role: 'Senior Software Engineer',
      period: 'September 2021 – August 2023',
      highlights: [
        'Maintenance and enhancement of ETL systems using ASP.NET Web Forms and C#.',
        'Development and maintenance of CI/CD pipelines.',
        'Automation of deployment processes using Jenkins, Bamboo, Octopus Deploy, XLR, and Ansible.',
        'Support of enterprise-grade applications with high stability requirements.',
      ],
    },
    {
      company: 'Semantix Inc',
      role: 'Senior Backend Developer',
      period: 'May 2021 – September 2021',
      highlights: [
        'Backend development and maintenance of e-commerce platforms.',
        'Development of RESTful APIs.',
        'Technologies used: ASP.NET, VB.NET, C#, ElasticSearch.',
        'Focus on performance optimization and system integration.',
      ],
    },
    {
      company: 'Indra (Client: Itaú Bank)',
      role: '.NET Developer',
      period: 'April 2020 – May 2021',
      highlights: [
        'Development of scalable backend services and APIs using .NET Core.',
        'Development of a scalable credit analysis automation robot responsible for processing more than 2,000 credit proposals per day.',
        'Design and implementation of distributed and secure banking solutions focused on performance and reliability.',
        'Acted as team focal point for task reviews and communication with the Product Owner.',
        'Responsible for deployment routines and release processes.',
        'Development of web crawlers and enterprise integrations.',
        'Technologies: SQL Server, Entity Framework, Dapper.',
        'Application of hexagonal architecture and microservices architecture.',
      ],
    },
    {
      company: 'AN Global (Client: Santander Bank)',
      role: 'Software Developer (.NET)',
      period: 'April 2019 – April 2020',
      highlights: [
        'Development and maintenance of internal banking systems.',
        'Systems included ATM monitoring platforms.',
        'Development of new features and REST APIs.',
        'Technologies: C#, ASP.NET MVC, JavaScript, Entity Framework, SQL Server.',
      ],
    },
    {
      company: 'Matrix Sistemas e Serviços',
      role: 'Systems Analyst / Backend Developer',
      period: 'October 2017 – April 2019',
      highlights: [
        'Development and maintenance of healthcare systems used by more than 20,000 users.',
        'Backend development using C#, ASP.NET, and InterSystems Caché.',
        'Development of SOAP and REST integrations with external systems and laboratory equipment.',
        'Programming in MUMPS for healthcare and laboratory integrations.',
        'Performance optimization, bug fixing, and maintainability improvements that contributed to reducing production incidents.',
        'Maintenance of web systems for medical exam result reporting.',
        'Technical documentation and system analysis.',
      ],
    },
    {
      company: 'Tecsidel',
      role: 'Systems Analyst / Programmer',
      period: 'December 2015 – October 2017',
      highlights: [
        'Maintenance and enhancement of tolling systems.',
        'Technologies: C#, ASP.NET, JavaScript, SQL Server.',
        'Version control using TFS.',
        'Technical documentation.',
      ],
    },
  ],
  education: [
    {
      institution: 'FIAP',
      degree: 'Postgraduate Degree – Systems Architecture (.NET with Azure)',
      period: '2023 – 2024',
    },
    {
      institution: 'UNINOVE',
      degree: "Bachelor's Degree – Systems Analysis",
      period: '',
    },
  ],
  languages: [
    { language: 'Portuguese', level: 'Native' },
    { language: 'English', level: 'Professional Working Proficiency' },
  ],
};

import placeholder1 from './assets/images/placeholder1.jpg';
import placeholder2 from './assets/images/placeholder2.jpg';
import placeholder3 from './assets/images/placeholder3.jpg';
import reactIcon from './assets/images/react.svg';
import typescriptIcon from './assets/images/typescript.svg';
import tailwindIcon from './assets/images/tailwind.svg';
import pythonIcon from './assets/images/python.svg';
import djangoIcon from './assets/images/django.svg';
import pandasIcon from './assets/images/pandas.svg';
import awsIcon from './assets/images/aws.svg';
import postgresqlIcon from './assets/images/postgresql.svg';
import gitIcon from './assets/images/git.svg';

export const contents = [
  {
    number: 1,
    title: 'Instacart Data Analysis',
    description:
      'Analyzed 32M Instacart orders to uncover purchasing patterns and optimize recommendations. Designed SQL queries for relational modeling, integrated diverse datasets, and used itemset mining to identify frequently bought products, aiding targeted marketing and inventory management.',
    image: placeholder1,
    techStack: ['PostgreSQL', 'MongoDB', 'Python', 'Pandas'],
  },
  {
    number: 2,
    title: 'NYC Crash Data Analysis',
    description:
      'Examined 2M record NYC crash data to identify accident hotspots, trends, and contributing factors using geospatial analysis and statistical modeling. Applied clustering and association rule mining to uncover seasonal traffic patterns, common vehicle types, and accident causes, aiding data-driven road safety improvements.',
    image: placeholder2,
    techStack: ['Python', 'Folium', 'Pandas', 'PostgreSQL'],
  },
  {
    number: 3,
    title: 'JSON Schema Analysis',
    description:
      'This project explores real-world JSON data to uncover discrepancies in schema usage, identifying missing or extra fields. Using GitHub data and automated analysis, it provides insights into schema adherence and optimization, aiding the development of more practical and efficient JSON schemas.',
    image: placeholder3,
    techStack: ['Python', 'Pandas', 'REST APIs', 'FastText'],
  },
  {
    number: 4,
    title: 'Autonomous Recievables',
    description:
      'Built a full-stack web app to simplify accounts receivable management and improve financial forecasting. Designed an intuitive interface with smart filters for easy customer tracking. Integrated machine learning models to predict payment behavior, helping AR analysts make better, data-driven decisions.',
    image: placeholder1,
    techStack: ['React', 'Javascript', 'PostgreSQL', 'Python', 'Material UI', 'Flask'],
  },
];

export type Skill = {
  image: string;
  technology: string;
  technologyType: string;
};

export const skills: Skill[] = [
  { image: reactIcon, technology: 'React', technologyType: 'Frontend Framework' },
  { image: typescriptIcon, technology: 'TypeScript', technologyType: 'Coding Language' },
  { image: tailwindIcon, technology: 'TailwindCSS', technologyType: 'CSS Framework' },
  { image: pythonIcon, technology: 'Python', technologyType: 'Coding Language' },
  { image: djangoIcon, technology: 'Django', technologyType: 'Backend Framework' },
  { image: pandasIcon, technology: 'Pandas', technologyType: 'Data Analyis Library' },
  { image: awsIcon, technology: 'AWS', technologyType: 'Cloud Computing' },
  { image: postgresqlIcon, technology: 'PostgreSQL', technologyType: 'Database' },
  { image: gitIcon, technology: 'Git', technologyType: 'Version Control' },
];

export const links = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prattjena' },
  { name: 'Github', url: 'https://www.github.com/prattjena' },
];

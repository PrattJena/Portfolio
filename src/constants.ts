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
      '1Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus quam sodales conubia integer nam praesent viverra at lorem. Fringilla id vitae egestas magna etiam lacus elit sapien?',
    image: placeholder1,
    techStack: ['React', 'TypeScript', 'Framer Motion'],
  },
  {
    number: 2,
    title: 'Project 2',
    description:
      '2Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus quam sodales conubia integer nam praesent viverra at lorem. Fringilla id vitae egestas magna etiam lacus elit sapien?',
    image: placeholder2,
    techStack: ['React', 'TypeScript', 'Framer Motion'],
  },
  {
    number: 3,
    title: 'Project 3',
    description:
      '3Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus quam sodales conubia integer nam praesent viverra at lorem. Fringilla id vitae egestas magna etiam lacus elit sapien?',
    image: placeholder3,
    techStack: ['React', 'TypeScript', 'Framer Motion'],
  },
  {
    number: 4,
    title: 'Project 4',
    description:
      '4Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus quam sodales conubia integer nam praesent viverra at lorem. Fringilla id vitae egestas magna etiam lacus elit sapien?',
    image: placeholder1,
    techStack: ['React', 'TypeScript', 'Framer Motion'],
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

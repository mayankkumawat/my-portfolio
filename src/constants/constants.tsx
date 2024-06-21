import {
  FaBusinessTime,
  FaHandshakeSimple,
  FaMagnifyingGlassChart,
} from 'react-icons/fa6';
import { CgFigma } from 'react-icons/cg';
import { FaMobileAlt, FaLaptopCode } from 'react-icons/fa';

const NAVBAR_LINKS = ['About me', 'Resume', 'Works', 'Contact'];

const WORK_INFO = [
  {
    id: 1,
    title: 'Mobile App Development',
    icon: <FaMobileAlt color={'#0088ff'} size={'1.5rem'} />,
    description:
      'Crafting intuitive and high-performing mobile applications for iOS and Android, tailored to meet user needs and business goals.',
  },
  {
    id: 2,
    icon: <FaLaptopCode color={'#0088ff'} size={'1.5rem'} />,
    title: 'Web Development',
    description:
      'Building responsive and dynamic websites with cutting-edge technologies to enhance user experience and drive engagement.',
  },
  {
    id: 3,
    icon: <CgFigma color={'#0088ff'} size={'1.5rem'} />,
    title: 'UI-UX Designer (Figma)',
    description:
      'Designing user-centric interfaces and seamless experiences in Figma, focusing on usability and aesthetic appeal.',
  },
  {
    id: 4,
    icon: <FaHandshakeSimple color={'#0088ff'} size={'1.5rem'} />,
    title: 'App Consultant',
    description:
      'Providing expert guidance on app strategy, design, and development to optimize functionality and user satisfaction.',
  },
  {
    id: 5,
    icon: <FaBusinessTime color={'#0088ff'} size={'1.5rem'} />,
    title: 'Project Management',
    description:
      'Leading projects from concept to completion, ensuring timely delivery, budget adherence, and alignment with client objectives.',
  },
  {
    id: 6,
    icon: <FaMagnifyingGlassChart color={'#0088ff'} size={'1.5rem'} />,
    title: 'Research & Development',
    description:
      'Innovating and exploring new technologies to drive forward-thinking solutions and continuous improvement in software development.',
  },
];

const LINKS = {
  github: 'https://github.com/mayankkumawat',
};

export const Constants = {
  LINKS,
  WORK_INFO,
  NAVBAR_LINKS,
};

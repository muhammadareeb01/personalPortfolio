import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Blog Website',
        description: "Developed a blog platform using Next.js with MongoDB backend, demonstrating full-stack development skills.",
        tools: ['Next.js', 'MongoDB'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Monitr Landing Page',
        description: "Created a landing page using React.js with Redux state management, implementing animations and responsive design.",
        tools: ['React.js', 'Redux', 'Material UI', 'Tailwind CSS', 'AOS Animation', 'Framar Animation'],
        role: 'Frontend Developer',
        code: 'https://monitr1.web.app/',
        demo: 'https://monitr1.web.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'React Dashboard',
        description: "Designed a comprehensive dashboard using React and SCSS, leveraging various React Hooks for state management.",
        tools: ['React.js', 'SCSS', 'useRef', 'useState', 'useEffect', 'useContext'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: realEstate,
    }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
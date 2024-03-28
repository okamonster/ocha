import type { Skill } from '~/entitie/skill'

export const skillOptions = [
  {
    imageUrl: '/images/HTML.webp',
    name: 'HTML',
    categorie: ['markup'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/CSS.webp',
    name: 'CSS',
    categorie: ['markup'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/javascript.webp',
    name: 'JavaScript',
    categorie: ['language'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/typescript.webp',
    name: 'TypeScript',
    categorie: ['language'],
    genle: ['web', 'front-end', 'back-end'],
  },
  {
    imageUrl: '/images/php.webp',
    name: 'PHP',
    categorie: ['language'],
    genle: ['web', 'back-end'],
  },
  {
    imageUrl: '/images/java.webp',
    name: 'Java',
    categorie: ['language'],
    genle: [],
  },
  {
    imageUrl: '/images/python.webp',
    name: 'Python',
    categorie: ['language'],
    genle: ['web', 'back-end', 'ML'],
  },
  {
    imageUrl: '/images/matlab.webp',
    name: 'MATLAB',
    categorie: ['language'],
    genle: ['Math'],
  },
  {
    imageUrl: '/images/verilog.webp',
    name: 'Verilog',
    categorie: ['language'],
    genle: ['HDL'],
  },
  {
    imageUrl: '/images/express.webp',
    name: 'Express',
    categorie: ['framework'],
    genle: ['web', 'back-end'],
  },
  {
    imageUrl: '/images/react.webp',
    name: 'React.js',
    categorie: ['framework'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/next.webp',
    name: 'Next.js',
    categorie: ['framework'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/three.webp',
    name: 'Three.js',
    categorie: ['library'],
    genle: ['webgl', 'XR'],
  },
  {
    imageUrl: '/images/mysql.webp',
    name: 'MySQL',
    categorie: ['DataBase'],
    genle: ['RDB'],
  },
  {
    imageUrl: '/images/Apache.webp',
    name: 'Apache',
    categorie: ['Runtime'],
    genle: ['WebServer'],
  },
  {
    imageUrl: '/images/firebase.webp',
    name: 'Firebase',
    categorie: ['PlatForm'],
    genle: ['BaaS'],
  },
  {
    imageUrl: '/images/vercel.webp',
    name: 'Vercel',
    categorie: ['PlatForm'],
    genle: ['Hosting'],
  },

  {
    imageUrl: '/images/latex.webp',
    name: 'LaTeX',
    categorie: ['Software'],
    genle: [],
  },
] as const satisfies Array<Skill>

import type { Skill } from '~/entitie/skill'

export const skillOptions = [
  {
    imageUrl: '/images/html.png',
    name: 'HTML',
    categorie: ['markup'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/css.png',
    name: 'CSS',
    categorie: ['markup'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/javascript.png',
    name: 'JavaScript',
    categorie: ['language'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/typescript.png',
    name: 'TypeScript',
    categorie: ['language'],
    genle: ['web', 'front-end', 'back-end'],
  },
  {
    imageUrl: '/images/php.png',
    name: 'PHP',
    categorie: ['language'],
    genle: ['web', 'back-end'],
  },
  {
    imageUrl: '/images/java.png',
    name: 'Java',
    categorie: ['language'],
    genle: [],
  },
  {
    imageUrl: '/images/python.png',
    name: 'Python',
    categorie: ['language'],
    genle: ['web', 'back-end', 'ML'],
  },
  {
    imageUrl: '/images/matlab.png',
    name: 'MATLAB',
    categorie: ['language'],
    genle: ['Math'],
  },
  {
    imageUrl: '/images/verilog.png',
    name: 'Verilog',
    categorie: ['language'],
    genle: ['HDL'],
  },
  {
    imageUrl: '/images/express.png',
    name: 'Express',
    categorie: ['framework'],
    genle: ['web', 'back-end'],
  },
  {
    imageUrl: '/images/react.png',
    name: 'React.js',
    categorie: ['framework'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/next.png',
    name: 'Next.js',
    categorie: ['framework'],
    genle: ['web', 'front-end'],
  },
  {
    imageUrl: '/images/three.png',
    name: 'Three.js',
    categorie: ['library'],
    genle: ['webgl', 'XR'],
  },
  {
    imageUrl: '/images/mysql.png',
    name: 'MySQL',
    categorie: ['DataBase'],
    genle: ['RDB'],
  },
  {
    imageUrl: '/images/apache.png',
    name: 'Apache',
    categorie: ['Runtime'],
    genle: ['WebServer'],
  },
  {
    imageUrl: '/images/firebase.png',
    name: 'Firebase',
    categorie: ['PlatForm'],
    genle: ['BaaS'],
  },
  {
    imageUrl: '/images/vercel.png',
    name: 'Vercel',
    categorie: ['PlatForm'],
    genle: ['Hosting'],
  },

  {
    imageUrl: '/images/latex.png',
    name: 'LaTeX',
    categorie: ['Software'],
    genle: [],
  },
] as const satisfies Array<Skill>

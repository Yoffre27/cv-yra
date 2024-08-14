import { Link } from '@chakra-ui/react'

export type Company = 'atom' | 'chavinInformatica' | 'chavinAtm'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  atom: {
    name: 'AtomTec',
    longName: 'AtomTec',
    subDetail: 'Network administrator and backend and frontend programmer',
    url: 'https://www.atomtec.net/',
    position: 'Systems Engineer',
    duration: 'June 2024 - Present',
    logo: {
      light: '/worked_at_logos/work-atomtec/logoCirulo.png',
      dark: '/worked_at_logos/work-atomtec/logotipo.png',
    },
    roles: [
      <>
        Contributed to the design and development of an e-commerce platform using Next.js for AtonTec, focused on offering a fluid and fast user experience. The project included the implementation of credit card payments and advanced subscription management, optimizing the purchasing process and improving customer retention. Additionally, he worked in the same company as a WISP administrator, managing the network infrastructure to ensure a reliable and efficient service.
      </>,
      <>
        I work as Nextjs and Mysql for the development ecommerce of{' '}
        <Link
          aria-label="AtomTec"
          href="https://www.atomtec.net/"
          target="_blank"
          rel="noreferrer"
        >
          AtomTec {''}
        </Link>
        and I use winbox to manage the WISP
      </>,

    ],
  },
  chavinInformatica: {
    name: 'MDCH',
    longName: 'district municipality of chavin de huantar',
    subDetail: 'IT Intern',
    url: 'https://munichavindehuantar.gob.pe/',
    position: 'IT Intern',
    duration: 'September 2023 – December 2023',
    logo: {
      light: '/worked_at_logos/workChavinInformatica/chavin.png',
      dark: '/worked_at_logos/workChavinInformatica/chavin.png',
    },
    roles: [
      <>
       During my experience in the IT area, I was in charge of manage communication networks and information technology systems information, ensuring efficient operation and resolving technical problems.
      </>,
    ],
  },

  chavinAtm: {
    name: 'MDCH',
    longName: 'district municipality of chavin de huantar',
    subDetail: 'Technical assistant',
    url: 'https://munichavindehuantar.gob.pe/',
    position: 'Municipal Technical Assistant for the Management of Services Water and Sanitation - ATM',
    duration: 'September 2021 - October 2022',
    logo: {
      light: '/worked_at_logos/workChavinATM/chavin.png',
      dark: '/worked_at_logos/workChavinATM/chavin.png',
    },
    roles: [
      <>
       During my performance as Municipal Technical Assistant for the Management of Water and Sanitation Services, my work focused in the coordination of activities related to the water and sanitation infrastructure. I managed properly water and sanitation systems, collaborating closely with technical equipment to guarantee a safe and sustainable supply.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.atom,
  Experiences.chavinInformatica,
  Experiences.chavinAtm,
]

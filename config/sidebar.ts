import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://x.com/YoffreRamirez',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yoffre-roel-ramirez-amado-74b078318/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/26709095/yoffre-ramirez-amado',
    icon: FaStackOverflow,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@yoffreramirezamado7213',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/Yoffre27',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/yoffre_ramirezamado',
    icon: FaDev,
  },
]

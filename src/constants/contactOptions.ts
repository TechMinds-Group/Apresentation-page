import { IConfig, navbarOptions } from './navbarOptions';

interface IContactOptions {
  title: string;
  elements: IConfig[];
}

export const contactOptions: IContactOptions[] = [
  {
    title: 'Contact',
    elements: navbarOptions,
  },
  {
    title: 'Support',
    elements: [
      {
        name: 'Help Center',
        href: '#',
      },
      {
        name: 'Term of Service',
        href: '#',
      },
      {
        name: 'Legal',
        href: '#',
      },
      {
        name: 'Privacy policy',
        href: '#',
      },
    ],
  },
  {
    title: 'Social Media',
    elements: [
      {
        name: 'Facebook',
        href: '#',
      },
      {
        name: 'Instagram',
        href: '#',
      },
      {
        name: 'Whatsapp',
        href: '#',
      },
      {
        name: 'Telegram',
        href: '#',
      },
    ],
  },
];

export interface IConfig {
  name: string;
  href: string;
  active?: boolean;
}

export const navbarOptions: IConfig[] = [
  { name: 'Hello World', href: '#helloworld', active: true },
  { name: 'Benefits', href: '#benefits' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Comunity', href: '#comunity' },
  { name: 'Contact', href: '#contact' },
];

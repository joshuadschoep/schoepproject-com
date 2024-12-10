export interface Project {
  title: string;
  link?: {
    name: string;
    href: string;
  };
  description: string;
  skills?: Array<string>;
}

import { FourDiamondsIcon, FourSlicesIcon, ThreeCirclesIcon } from "assets";

export const LABEL = "My Top Skills";

export const SKILLS = [
  {
    HeaderIcon: <ThreeCirclesIcon />,
    label: "React",
    description: `With 5 years experience in starting new React projects and upgrading existing projects, I have been able to help my teams write better code, and deploy faster.

      My goal has consistently been clean, principled code that anyone will be able to read 2 months later. Working with large, public websites in multiple industries has taught me about accessibility for all users, testing early for later refactors, and the importance of SOLID principles for frontends.`,
  },
  {
    HeaderIcon: <FourDiamondsIcon />,
    label: "Go",
    description: `Go is a fast, versatile langauge that I've used professionally in web and data projects for 3 years. I've learned from the community surrounding Go, and written better code in all languages because of it.
    
    General readability and principled code are the key to this language, and as such it is my favorite backend and program language.`,
  },
  {
    HeaderIcon: <FourSlicesIcon />,
    label: "Automation",
    description: `Often the missing piece of front-end programmers is configuration, and thus I've made it a priority. Having a good linter, test suite, and CI/CD pipeline improves productivity for every developer while reducing overhead for architects. I've configured React apps with both TypeScript and ECMA, using Vite, CRA, and Webpack, on everything from CloudFront, EC2, and Heroku, to bare-metal on Spring Boot and Laravel.`,
  },
  {
    HeaderIcon: <ThreeCirclesIcon />,
    label: "Cloud Native",
    description: `Both personally and professionally, I've been working with and deploying to cloud environments for 4 years. I maintain apps under The Schoep Project, and have worked an cloud apps for multiple companies and projects.`,
  },
];

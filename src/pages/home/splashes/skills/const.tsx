import { FourDiamondsIcon, FourSlicesIcon, ThreeCirclesIcon } from 'assets';

export const LABEL = 'My Top Skills';

export const SKILLS = [
  {
    HeaderIcon: <ThreeCirclesIcon />,
    label: 'React',
    description: `With 3 years experience both in starting new React projects and upgrading existing projects, it is by far my most practiced front-end framework. I began using React as an alternative to Angular projects at LGS Laboratories, and convinced my teams there and at CACI to use React for its faster onboarding and greater support over Angular 8.
    
      Since then, I have developed in React full-time at Woodridge Software for 2 years for our clients and for internal efforts. I am skilled in beginning new React projects through CRA and Webpack, upgrading stale React projects to version 18, and moving projects from other frameworks such as Angular and VueJS.`,
  },
  {
    HeaderIcon: <FourDiamondsIcon />,
    label: 'Modern Backends',
    description: `I have experience in a multitude of back-end languages and frameworks such as Go, NodeJS, Python (Flask and Django), and Laravel. With Woodridge Software, I have been a member of teams upgrading existing PHP into Laravel on AWS, as well as moving two of our clients into Go microservices.
  
    Along with a wide array of back-end languages, I have 4 years experience in DevOps for containerized applications on Docker/Kubernetes, including full CI/CD capabilities for these apps; unit, integration, e2e, and smoke testing; static security testing (SAST); and modern cloud deployment patterns.`,
  },
  {
    HeaderIcon: <FourSlicesIcon />,
    label: 'Microservices',
    description: `As alluded to, much of my work history has been producing Docker containerized applications and handling the building, testing, and deploying of those containers. My expertise here is mainly in using writing Dockerfile and Makefile configurations to efficiently standardize build and test pipelines, using these technologies to improve my development of back-end and front-end code, and developing new Gitlab CI files and Github Action pipelines to automate testing and continuous delivery models.
    
    This website itself, and all webapps, are deployed on AWS using Github actions and a mix of back-end and front-end services like CloudFront, Fargate, DynamoDB, all using CloudFormation definitions.`,
  },
];

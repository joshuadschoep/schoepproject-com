import { FourDiamondsIcon, FourSlicesIcon, ThreeCirclesIcon } from 'assets';

export const LABEL = 'My Top Skills';

export const SKILLS = [
  {
    HeaderIcon: <ThreeCirclesIcon />,
    label: 'React',
    description: `With 4 years experience both in starting new React projects and upgrading existing projects, it is by far my most practiced front-end framework. I began using React as an alternative to Angular projects at LGS Laboratories, and convinced my teams there and at CACI to use React for its faster onboarding and greater support over Angular 8.
    
      Since then, I developed in React full-time at Woodridge Software for 3 years for our clients and for internal efforts. I am skilled in beginning new React projects through Webpack, ESBuild, and Typescript; upgrading stale React projects to recent versions; and moving projects from other frameworks such as Angular and VueJS.
      
      In personal and team projects after Woodridge, I have managed React and NextJS projects in the cloud. I have used security best practices and CI guidelines to deploy AWS CloudFront, EC2, and Lambda.`,
  },
  {
    HeaderIcon: <FourDiamondsIcon />,
    label: 'Modern Backends',
    description: `I have experience in a multitude of back-end languages and frameworks such as Go, NodeJS, Python (Flask and Django), and Laravel. With Woodridge Software, I have been a member of teams upgrading existing PHP into Laravel on AWS, as well as moving two clients into Go microservices.
  
    Along with a wide array of back-end languages, I have 4 years experience in DevOps for containerized applications on Docker/Kubernetes, including full CI/CD capabilities for these apps; unit, integration, e2e, and smoke testing; static security testing (SAST); and modern cloud deployment patterns.
    
    With Merch Alert, my most recent project, I have successfully set up a team of engineers to run both Go and NodeJS serverless on AWS.`,
  },
  {
    HeaderIcon: <FourSlicesIcon />,
    label: 'Cloud Native',
    description: `Becoming a senior engineer with Woodridge required me to provide cloud architecture and system guidance to clients and internal engineers. I would contribute to CloudFormation development, and provided security and IAM recommendations to architects and clients alike.
    
    My personal web footprint has greatly helped over the years, with a lot of my education coming from mistakes and successes over time in personal projects.
    
    Merch Alert and all my personal sites are built using cloud-native IaC technologies. I've used a mix of CloudFormation and Serverless Application Model, and have trained fellow project leads on Merch Alert on how to use these technologies to improve their tech stacks.`,
  },
];

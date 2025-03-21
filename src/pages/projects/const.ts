export const PROJECTS = [
  {
    group: "RCG Global Services",
    projects: [
      {
        title: "Automatic Loan & Account Applications",
        link: {
          name: "www.fnb-online.com",
          href: "https://www.fnb-online.com/",
        },
        description:
          "A large bank hired RCG to revamp their online loan and account applications. We worked to design, develop, and secure their application webapp running on Temenos products Journey Manager (Groovy) and OpenUX (React, JavaScript). As part of the front-end team, I helped them to allow their customers to apply for as many products as they like, at the same time, with instant fraud security, qualification checks, and integration with Plaid and Alloy.",
        skills: ["React", "Temenos OpenUX", "Temenos Journey Manager"],
      },
      {
        title: "Insurance Agency Payments Upgrade",
        link: {
          name: "www.frontdoorhome.com",
          href: "https://www.frontdoorhome.com/",
        },
        description:
          "A thriving home and appliance insurance/repair company hired RCG for help on their payments systems. They hired my team to revamp and modernize their payments portal, both internal and external. We created React interfaces to handle creation and storage credit cards, bank accounts, and PayPal accounts, along with secure backend integrations via Stripe, JPMorgan's Paymentus platform, and PayPal's API.",
        skills: [
          "Go (language)",
          "React",
          "Docker",
          "Kubernetes",
          "Microservices",
          "AWS",
          "MongoDB",
          "Stripe",
        ],
      },
      {
        title: "Time-Entry & Invoicing App",
        description:
          "RCG Software, as we grew and expanded, wanted to upgrade our timekeeping and invoicing software to accomodate the needs of both the business and engineering sides of the company. We moved from a PHP site with some JS functionality, into a modern Laravel 10, React 18 site on AWS. I led the front-end team for this, and helped iron out our React architecture that we would continue to use throughout my time at RCG.",
        skills: [
          "React",
          "Laravel",
          "Docker",
          "AWS CloudFormation",
          "AWS S3 & CloudFront",
          "AWS VPCs, Networking, and Subnets",
        ],
      },
    ],
  },
  {
    group: "Personal Projects",
    projects: [
      {
        title: "Snowfall Charts",
        link: {
          name: "snowfall.schoep.org",
          href: "https://snowfall.schoep.org",
        },
        description:
          "A web scraper and application to display snowfall averages and totals across Colorado -- built for my friends who love skiing ever more than I do.",
        skills: [
          "Angular",
          "Python, BeautifulSoup",
          "AWS S3 & CloudFront",
          "AWS Lambda",
          "AWS S3 & CloudFront",
        ],
      },
      {
        title: "Resume Website",
        link: {
          name: "www.schoep.org",
          href: "/",
        },
        description:
          "This website began as an experiment for me, to learn how to host websites and web applications throughout the years. As I've learned more skills in web development, I have tried to implement those skills here. This website is built in React using SSG methods and hosted via AWS, with many small applications and projects shown below.",
        skills: ["React", "SSG", "AWS", "Web Hosting"],
      },
      {
        title: "ICM Calculator",
        link: {
          name: "icm.schoep.org",
          href: "https://icm.schoep.org",
        },
        description:
          "A payout calculator initally for my poker club; the equation regressed from our existing payout chart; now used by my friends when hosting their own tournaments and some gaming tournaments like Smash Ultimate and SSBB.",
        skills: ["React", "Python", "Serverless", "AWS"],
      },
    ],
  },
  {
    group: "SpotSurfer",
    projects: [
      {
        title: "Colorado Outdoor Parking Marketplace",
        link: {
          name: "spotsurfer.com",
          href: "https://spotsurfer.com",
        },
        description:
          "SpotSurfer had a plan to modernize resort and personal parking in mountainous Colorado. As part of that vision, we worked to create both a user platform and a provider platform, in React and Django. MVP was released in 3 months and has been a huge success.",
        skills: ["React", "UX and UI Design", "Django", "PostgreSQL"],
      },
    ],
  },
  {
    group: "CACI International",
    projects: [
      {
        title: "Cell Phone Test Environment",
        description:
          "CACI's intern project for my team, which would turn into a fully funded project upon my hiring, was to mitigate the frequency of hardware tests they had to perform to test their cellular towers. Our solution was to prepare configurable mocks of cell phones using C++, have that application host a webapp to configure tests, and have all that connect via ethernet to the tower.",
        skills: ["C++", "Angular", "Docker", "5G, LTE, 3G Networks"],
      },
      {
        title: "VR Mission Control Prototype",
        description:
          "CACI tasked a group of researchers and programmers, including me, to create a prototype for a command and control system using the Oculus Rift and HTC Vive. This prototype would lay a 3D view of the mission area from drone footage in front of the user, and display live data of many types from operatives. We wrote a whitepaper on the ability to transform this tech into AR, and in February of 2019 this became a fully funded project.",
        skills: [
          "C++",
          "Unreal Engine 4",
          "Hardware Interaction",
          "Hardware/Network Interaction",
        ],
      },
    ],
  },
];

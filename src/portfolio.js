/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "karthikeyan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "loganathan karthikeyan portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "loganathan karthikeyan portfolio",
  logo_name: "loganathankarthikeyan",
  nickname: "hard worker",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1zs9aku8_OX-aJPJe8cagF19swwu20Qy3/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/karthiikkeyan",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/karthiikkeyan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/karthikeyan-loganathan-488bbb211/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:karthikeyan00200@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/karthikeyan_015",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100008300474097",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/__karthikeyan_____/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Learning Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Learning to highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Learning the Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing  applications using HTML, CSS, JAVASCRIPT, Flutter, React Native,",
        "⚡ Creating application backend in Node, Express ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Learning - Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Learning to Deploy deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Software testing",
      fileName: "TestImg",
      skills: [
        "⚡ Developed and maintained automated test scripts using Selenium WebDriver in Java for web application testing",
        "⚡ Integrated Selenium test scripts with Jenkins for continuous integration and automated test execution",
        "⚡ Created and executed automated test cases using Selenium WebDriver and TestNG",
        "⚡ Conducted regression testing and reported defects using JIRA.",
      ],
      softwareSkills: [
        {
          skillName: "selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "devicon:postman",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "jira",
          fontAwesomeClassname: "devicon:jira-wordmark",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },

    {
      title: "UI & UX",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "vscode-icons:file-type-photoshop",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/karthikeyan_216/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/karthikeyan00200",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Madras Christian College",
      subtitle: "Bachelors in computer applications",
      logo_path: "iiitk_logo.jpg",
      alt_name: "MCC",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://mcc.edu.in/",
    },
    {
      title: "University of Madras",
      subtitle: "Masters in computer applications",
      logo_path: "iu_logo.png",
      alt_name: "சென்னைப் பல்கலைக்கழகம் (madras university)",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.unom.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "SQL advanced",
      subtitle: "- hacker rank",
      logo_path: "images.png",
      certificate_link: "https://www.hackerrank.com/certificates/e9dad8cebe93",
      alt_name: "hacker rank",
      color_code: "#8C151599",
    },

    {
      title: "google data analytics",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/N7474GMCXWFX",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Advanced c++",
      subtitle: "- udemy",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ae90b943-dd91-4b7c-bbd8-7e33869e26b3/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email",
      alt_name: "udemy",
      color_code: "#1F70C199",
    },

    {
      title: "Data analysis using R",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/24f743dede5616ecd3a2644558bb5046",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Versatile and experienced Software Developer and software Testing Professional with a comphrensive background in quality assurance, software development and testing and also currently learing to expertise in web development, Machine learning, artificial intelligence and python to stay at forefront of technological advancements and enhance career growth. Seeking new oppurtunities to leverage my skill set and contribute success of an innovative organization.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software engineer",
          company: "HCL technologies",
          company_url: "https://www.hcltech.com/",
          logo_path: "hcl.png",
          duration: "Nov 2021 - Dec2022",
          location: "Chennai, Tamil nadu",
          description:
            "Contributing in development of new features and Enhancements,Writing test plans test cases and executing tests.Sucessfuy reduced software defects by implementing improved test Stratagies that which improved skills in programming languages and testing methodologies.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "C# DEVELOPER",
          company: "Shiash info tech pvt ltd",
          company_url: "https://shiash.com/",
          logo_path: "shiash_logo.jpg",
          duration: "May 2020 - Nov 2020",
          location: "Chennai,Tamil nadu",
          description:
            "Worked on developing and maintaining web applications using C#. Participated in code reviews and debugging processes. Collaborated with the software development team to implement new features and improve existing functionalities. Developed unit tests to ensure code quality and reliability. Contributed to the optimization of application performance",
          color: "#000000",
        },

        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Dec 2020- Jan 2021",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of  technology tools. Learning to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. ",
  },
  blogSection: {
    title: "Phone Number",
    subtitle: "+91 9962308334",
    link: "https://wa.me/919962308334",
  },
  addressSection: {
    title: "Address",
    subtitle: "No 30 lal bahadur shastri street sholinganallur chennai-600119",
    locality: "Chennai",
    country: "INDIA",
    region: "TAMIL NADU",
    postalCode: "600119",
    streetAddress: "lal bahadur shastri street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/JMAkieNBh76ZVeX37",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

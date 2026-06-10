export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  projectSummary: string;
  projectType: string;
  role: string;
  impact: string;
  whatILearned: string;
  image: string;
  githubLink?: string;
  githubLink2?: string;
  websiteLink?: string;
  videoLink?: string;
}

export const projectsData: Project[] = [
  {
    slug: "project-one",
    title: "Leukotheam 6.0 IT Division Website (Now Managed by a Different Division)",
    shortDescription:
      "Student Council Website of Universitas Ciputra – SPARTA Division",
    projectSummary:
      "Developed and maintained the official Student Council (SPARTA Cabinet) website to support organizational information and improve user accessibility.",
    projectType: "Work-based project (Internship) – GROUP PROJECT",
    role: "IT Division Intern (Web Development – WordPress)",
    impact:
      "Contributed to managing and enhancing the website by maintaining its functionality, updating content, and ensuring a smooth user experience despite limitations from the free version of WordPress. The project was successfully delivered through strong team coordination. The website is now maintained by a different division and is no longer under Leukotheam 6.0.",
    whatILearned:
      "Through this project, I gained practical experience in using WordPress and learned how to collaborate effectively within a structured organization. As my first committee experience in university, I developed strong communication and teamwork skills while adapting to real-world project workflows. I also learned how to work within technical limitations and still deliver a functional product through problem-solving and teamwork.",
    image: "/images/portfolio1.jpeg",
    websiteLink: "https://www.ciputra.ac.id/sc/",
  },
  {
    slug: "project-two",
    title: "Student Union Informatics Universitas Ciputra Website",
    shortDescription:
      "Student Union of the Informatics Department Website of Universitas Ciputra.",
    projectSummary:
      "Developed the official website for the Student Union Informatics, serving as a central hub for student events, activities, and organizational updates.",
    projectType: "Organization-based project – GROUP PROJECT",
    role: "Front-End Developer (Next.js)",
    impact:
      "Contributed to building responsive and user-friendly interfaces using Next.js, while collaborating with a larger team through GitHub. Supported the integration between front-end and back-end systems, helping deliver a functional and well-structured platform for the student community.",
    whatILearned:
      "This project was my first experience working in a larger team environment, where I strengthened my collaboration and communication skills. I learned how to use Next.js from scratch, implement component-based architecture, and explore animations using GSAP. Additionally, I gained experience in integrating front-end with back-end systems. Despite initial challenges, I was able to adapt quickly and successfully contribute to completing the project through continuous learning and teamwork.",
    image: "/images/portfolio2.png",
    githubLink: "https://github.com/IMT-SU-25-26/Web-Main",
    websiteLink: "https://www.simawa-imtuc.com/",
  },
  {
    slug: "project-three",
    title: "Final Project – Web Development Course - Ciputra University Surabaya",
    shortDescription:
      "This project is an Website developed with my friend as the final project for the Web Development course",
    projectSummary:
      "Developed a bakery e-commerce website as a final project for the Web Development course, designed as a production-ready platform simulating a real-world business application.",
    projectType: "Class assignment – GROUP PROJECT",
    role: "Full-Stack Developer (Laravel, Bootstrap, MySQL)",
    impact:
      "Built a functional e-commerce platform with key features including product management, payment integration using Midtrans, and delivery cost calculation using RajaOngkir API. Successfully implemented API integrations and deployed the website using Laravel Cloud, ensuring the application was accessible and fully operational. The product data displayed in the application uses dummy data generated through Laravel factories, as required by the project assessment criteria. The website has since been taken down, as it was developed primarily for academic purposes and hosting required additional costs.",
    whatILearned:
      "Through this project, I gained strong experience in full-stack web development using Laravel, Bootstrap, and MySQL. I learned how to integrate external APIs by studying and applying technical documentation independently, especially for payment and delivery services. I also developed problem-solving skills while handling deployment challenges, as hosting and API integration were not fully covered in the course. This experience improved my ability to learn new technologies independently and apply them effectively in a real-world scenario.",
    image: "/images/portfolio3.png",
    githubLink: "https://github.com/BZBBZBZZ/WEBDEV",
    videoLink: "https://youtu.be/TbbHillJfHw?si=aJm8JrRkGP2auO2E",
  },
  {
    slug: "project-four",
    title: "Final Project – Visual Programming Course - Ciputra University Surabaya",
    shortDescription:
      "This project is an Android application developed with my team as the final project for the Visual Programming course.",
    projectSummary:
      "Developed an Android application focused on learning food nutrition through interactive and gamified quizzes, designed to make the learning experience more engaging and enjoyable.",
    projectType: "Class assignment – GROUP PROJECT",
    role: "Mobile Developer (Kotlin) & API Integration",
    impact:
      "Contributed to building a functional mobile application by developing the front-end using Kotlin and integrating it with a back-end built with Prisma and Next.js. Successfully implemented API communication between front-end and back-end, and collaborated using GitHub to manage project development. Despite time constraints, delivered a working application that was ready for showcase with core features completed.",
    whatILearned:
      "Through this project, I gained hands-on experience in mobile app development and full-stack integration. I learned Kotlin and Prisma with Next.js from scratch, as well as how to connect front-end and back-end systems using APIs. I also developed teamwork and adaptability skills, especially in handling challenges related to team coordination and merging different parts of the project. This experience strengthened my ability to learn new technologies under pressure and reinforced the importance of responsibility and communication in team-based development.",
    image: "/images/portfolio4.png",
    githubLink: "https://github.com/BZBBZBZZ/ALPVP",
    githubLink2: "https://github.com/BZBBZBZZ/ALPVPBACKEND",
    videoLink: "https://youtu.be/ahUspL9DMZI",
  },
  {
  slug: "project-five",
  title: "Final Project – Mobile Application Development - Ciputra University Surabaya",
  shortDescription:
    "This project is a productivity application for iPhone, iPad, and Apple Watch developed with my team as the final project for the Mobile Application Development course.",
  projectSummary:
    "Developed a gamified RPG inspired productivity app for iPhone, iPad, and Apple Watch to help users manage daily activities, improve consistency,  stay motivated, and avoid burnout.",
  projectType: "Class assignment – GROUP PROJECT",
  role: "iOS Developer (SwiftUI) & Firebase Integration",
  impact:
    "Contributed to a gamified productivity application for iPhone, iPad, and Apple Watch using SwiftUI and Firebase. Developed the Home, Login, Register, and Profile pages, integrated Firebase Authentication and Cloud Firestore, and contributed to activity management and Daily Boss functionality. Collaborated with team members using GitHub to successfully deliver a functional application.",
  whatILearned:
    "Through this project, I gained hands on experience in developing applications within the Apple ecosystem using SwiftUI, Xcode, and Firebase. I learned how to build and structure applications using the MVVM architecture, as well as integrate Firebase Authentication and Cloud Firestore for user management and data storage. One of the main challenges was adapting from Android development to Apple's development environment, including differences in coding style, project structure, and development patterns. Through this experience, I became more familiar with Swift and Apple’s development practices while improving my problem-solving and collaboration skills through GitHub-based teamwork. By completing this project, I hope the knowledge and experience I gained have prepared me to pursue further learning opportunities through the Apple Developer Academy.",
  image: "/images/portfolio5.jpeg",
  githubLink: "https://github.com/BZBBZBZZ/ALP_MAD",
  videoLink: "https://youtu.be/BdsgGinRfe0",
  },
    {
  slug: "project-six",
  title: "Final Project - Software Engineering - Ciputra University Surabaya",
  shortDescription:
    "This project is an application for ios developed with my team as the final project for the Software Engineering course.",
  projectSummary:
    "Developed an IOS application focused on learning food nutrition through interactive and gamified quizzes, designed to make the learning experience more engaging and enjoyable.",
  projectType: "Class assignment – GROUP PROJECT",
  role: "iOS Developer (SwiftUI)",
  impact:
    "Contributed to the development of EduFood, an iOS educational application focused on nutrition learning through interactive materials and gamified quizzes. Developed the Material and Material Detail features using SwiftUI and the MVVM architecture, enabling users to explore food categories, nutritional information, and detailed food descriptions. Integrated Supabase for data retrieval and management, collaborated with a four-member team using GitHub, and participated in the complete Software Engineering lifecycle, including requirements analysis, system design, implementation, testing, and documentation.",
  whatILearned:
    "Through this project, I gained hands-on experience in iOS application development using SwiftUI, Xcode, and Supabase. I learned how to design and implement features following the MVVM architecture, apply software engineering principles such as Separation of Concerns and Single Responsibility Principle, and collaborate effectively within a development team using GitHub. One of the biggest challenges was adapting to Swift and understanding the complete software development process, including creating Software Requirements Specifications (SRS), architecture diagrams, sequence diagrams, class diagrams, coding standards, and test plans before implementation. I also improved my debugging, problem-solving, and teamwork skills while managing code integration and resolving merge conflicts. Through this experience, I developed a stronger understanding of both mobile application development and structured software engineering practices.",
  image: "/images/portfolio6.png",
  githubLink: "https://github.com/BZBBZBZZ/EduFood_Kelompok7",
  videoLink: "https://youtu.be/4yKK6NIEPuo",
  }
];

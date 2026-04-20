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
    title: "Final Project – Web Development Course",
    shortDescription:
      "This project is an Website developed with my friend as the final project for the Web Development course",
    projectSummary:
      "Developed a bakery e-commerce website as a final project for the Web Development course, designed as a production-ready platform simulating a real-world business application.",
    projectType: "Class assignment – GROUP PROJECT",
    role: "Full-Stack Developer (Laravel, Bootstrap, MySQL)",
    impact:
      "Built a functional e-commerce platform with key features including product management, payment integration using Midtrans, and delivery cost calculation using RajaOngkir API. Successfully implemented API integrations and deployed the website using Laravel Cloud, ensuring the application was accessible and fully operational.",
    whatILearned:
      "Through this project, I gained strong experience in full-stack web development using Laravel, Bootstrap, and MySQL. I learned how to integrate external APIs by studying and applying technical documentation independently, especially for payment and delivery services. I also developed problem-solving skills while handling deployment challenges, as hosting and API integration were not fully covered in the course. This experience improved my ability to learn new technologies independently and apply them effectively in a real-world scenario.",
    image: "/images/portfolio3.png",
    githubLink: "https://github.com/BZBBZBZZ/WEBDEV",
    videoLink: "https://youtu.be/TbbHillJfHw?si=aJm8JrRkGP2auO2E",
  },
  {
    slug: "project-four",
    title: "Final Project – Visual Programming Course",
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
    videoLink: "https://youtu.be/K311YZUvvXY",
  },
  // {
  //   slug: "project-five",
  //   title: "Project Five - 3D Portfolio Experience",
  //   shortDescription: "An interactive spatial web experience.",
  //   longDescription: "Pushing the boundaries of what the web can do using WebGL. The reflection taught me a lot about performance optimization and shader programming.",
  //   image: "/placeholder-5.jpg",
  //   githubLink: "https://github.com/nichoportfolio/3d-port",
  //   videoLink: "https://youtube.com/watch?v=abc",
  // }
];

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  longDescription2?: string;
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
    longDescription:
      "As part of my internship at the Department of Information and Communication within the Student Council of Universitas Ciputra, I collaborated with my team to manage and enhance the Student Council's website, ensuring optimal functionality and user experience. During this experience, I developed practical skills in using WordPress, while also strengthening my ability to communicate and collaborate effectively within an organization. As my first committee involvement since entering university, this role provided valuable exposure to real-world teamwork. Despite limitations from using the free version of WordPress, which restricted certain features, the development process ran smoothly, and our team successfully delivered the website through strong coordination and cooperation. The website has since transitioned to a different division and is no longer managed under Leukotheam 6.0.",
    image: "/images/portfolio1.jpeg",
    websiteLink: "https://www.ciputra.ac.id/sc/",
  },
  {
    slug: "project-two",
    title: "Student Union Informatics Universitas Ciputra Website",
    shortDescription:
      "Student Union of the Informatics Department Website of Universitas Ciputra.",
    longDescription:
      "Contributed to the development of the official website for the Student Union Informatics at Universitas Ciputra, a platform that serves as a central hub for student events, activities, and organizational updates. As this was the first organization I joined at university, the project became a valuable learning experience where I adapted to working within a larger team compared to my previous projects. I developed collaboration skills through the use of GitHub for team-based development and gained hands-on experience as a Front-End Developer using Next.js to build responsive and user-friendly interfaces.",
    longDescription2:
      "Throughout the project, I faced challenges as it was my first time working with Next.js, requiring me to learn the framework from the ground up. In addition, I was involved in integrating the front-end with the back-end, which expanded my technical understanding beyond my primary role. I also explored the use of GSAP for animations and applied component-based architecture in building the website. Despite these challenges, I was able to overcome them through continuous learning and teamwork, successfully contributing to the completion of a functional and well-developed platform.",
    image: "/images/portfolio2.png",
    githubLink: "https://github.com/IMT-SU-25-26/Web-Main",
    websiteLink: "https://www.simawa-imtuc.com/",
  },
  {
    slug: "project-three",
    title: "Final Project – Web Development Course",
    shortDescription:
      "This project is an Website developed with my friend as the final project for the Web Development course",
    longDescription:
      "This project is an Website developed with my friend as the final project for the Web Development course. Through this experience, I gained extensive knowledge in web development, as we were required to build a production-ready website as if it were to be commercialized. I developed a bakery e-commerce website using Laravel and Bootstrap, with MySQL as the database. In addition, I integrated external services such as Midtrans for the payment gateway and RajaOngkir for delivery services, which allowed me to better understand how to work with APIs and build a more complete web application.",
    longDescription2:
      "Throughout the project, I faced several challenges, particularly in understanding and implementing API documentation, as well as deploying the website since these topics were not fully covered in the course. I independently learned how to integrate APIs and successfully implemented them into the system. For deployment, I used Laravel Cloud, where I initially encountered some issues but eventually managed to host the website successfully. Although the website has since been taken down due to hosting costs, this project significantly enhanced my technical skills, problem-solving abilities, and adaptability in learning new technologies beyond the classroom.",
    image: "/images/portfolio3.png",
    githubLink: "https://github.com/BZBBZBZZ/WEBDEV",
    videoLink: "https://youtu.be/TbbHillJfHw?si=aJm8JrRkGP2auO2E",
  },
  {
    slug: "project-four",
    title: "Final Project – Visual Programming Course",
    shortDescription:
      "This project is an Android application developed with my team as the final project for the Visual Programming course.",
    longDescription:
      "This project is an Android application developed with my team as the final project for the Visual Programming course. Through this project, I gained valuable experience in using Kotlin for front-end development and Prisma with Next.js for the back-end. I also learned how to connect the front-end and back-end through API integration, as well as how to collaborate on a project-based application using GitHub. This experience gave me deeper insight into full-stack mobile app development and strengthened my technical understanding across both client-side and server-side implementation.",
    longDescription2:
      "Throughout the project, I encountered several challenges. As this was my first time working with Kotlin and Prisma with Next.js, I had to learn both technologies from scratch. One of the most significant challenges, however, was team collaboration. Since the team was assigned randomly, I had to adapt to different working styles, and there were difficulties in coordinating and combining each member’s contributions into a single, cohesive application. Despite these challenges and time constraints, I worked closely with one teammate to complete the core features, resulting in an application that was functional and ready for showcase, although some features were not fully completed. This experience taught me that developing applications in a team environment requires strong coordination, responsibility, and adaptability, while also improving my ability to learn new technologies under pressure.",
    image: "/images/portfolio4.png",
    githubLink: "https://github.com/BZBBZBZZ/ALPVP",
    githubLink2: "https://github.com/BZBBZBZZ/ALPVPBACKEND",
    videoLink: "https://youtube.com/shorts/QaZ0MbiMcH8",
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
